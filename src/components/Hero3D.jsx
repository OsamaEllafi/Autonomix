import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const MOBILE_BREAKPOINT = 768;
const MIN_SCALE = 0.5;

// Generate positions on sphere surface (uniform distribution)
function sphereSurfacePoints(count, radius = 1) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.acos(2 * Math.random() - 1);
    const phi = 2 * Math.PI * Math.random();
    positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(theta);
  }
  return positions;
}

// Sparse points in a larger volume for ambient floating particles
function ambientPoints(count, radius = 2.2) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.acos(2 * Math.random() - 1);
    const phi = 2 * Math.PI * Math.random();
    const r = radius * (0.6 + 0.4 * Math.random());
    positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = r * Math.cos(theta);
  }
  return positions;
}

const ParticleSphere = () => {
  const ref = useRef();
  const count = 12000;
  const positions = useMemo(() => sphereSurfacePoints(count, 1), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const width = state.size?.width ?? MOBILE_BREAKPOINT;
    const scaleFactor = Math.max(MIN_SCALE, Math.min(1, width / MOBILE_BREAKPOINT));
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.2;
    const baseScale = 2.4 + Math.sin(t * 0.5) * 0.08;
    ref.current.scale.setScalar(baseScale * scaleFactor);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const AmbientParticles = () => {
  const ref = useRef();
  const count = 2000;
  const positions = useMemo(() => ambientPoints(count, 2.2), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    const width = state.size?.width ?? MOBILE_BREAKPOINT;
    const scaleFactor = Math.max(MIN_SCALE, Math.min(1, width / MOBILE_BREAKPOINT));
    ref.current.rotation.x = t * 0.06;
    ref.current.rotation.y = t * 0.08;
    ref.current.scale.setScalar(scaleFactor);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const CameraController = () => {
  const { camera } = useThree();
  const target = useRef({
    z: 7,
    xRot: 0,
    yRot: 0,
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll('[data-3d-section]');

    // Camera keyframes per section:
    // 0: Hero       -> outside sphere (current look)
    // 1: Why Autonomix (features) -> move smoothly fully inside
    // 2: How We Work (process)    -> exit back out on a different side
    // 3: Our Services             -> enter inside again from another angle
    // 4: Client Stories           -> exit once more for a final view
    const configs = [
      { z: 7, xRot: 0, yRot: 0 },            // Hero - fully outside
      { z: 0.6, xRot: -0.12, yRot: 0.3 },    // Features - clearly inside
      { z: 3.5, xRot: 0.06, yRot: 0.9 },     // Process - back outside, rotated
      { z: 0.6, xRot: -0.18, yRot: 1.5 },    // Services - inside again, different side
      { z: 3.5, xRot: 0.12, yRot: 2.1 },     // Testimonials - outside, further rotation
    ];

    const triggers = [];

    sections.forEach((section, index) => {
      const cfg = configs[Math.min(index, configs.length - 1)];

      const tween = gsap.to(target.current, {
        z: cfg.z,
        xRot: cfg.xRot,
        yRot: cfg.yRot,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });

      if (tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  useFrame((state, delta) => {
    const { z, xRot, yRot } = target.current;
    const damp = 4 * delta;

    camera.position.z += (z - camera.position.z) * damp;
    camera.rotation.x += (xRot - camera.rotation.x) * damp;
    camera.rotation.y += (yRot - camera.rotation.y) * damp;
  });

  return null;
};

const Hero3D = () => {
  return (
    <div className="w-full h-full" style={{ background: '#000000' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: false, antialias: true }}
        onCreated={({ scene }) => {
          scene.background = new THREE.Color(0x000000);
        }}
      >
        <CameraController />
        <ParticleSphere />
        <AmbientParticles />
      </Canvas>
    </div>
  );
};

export default Hero3D;
