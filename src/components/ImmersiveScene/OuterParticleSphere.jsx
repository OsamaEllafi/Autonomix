import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const COUNT = 10000;
const RADIUS = 1;

function sphereSurface(count, r = 1) {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.acos(2 * Math.random() - 1);
    const phi = 2 * Math.PI * Math.random();
    pos[i * 3] = r * Math.sin(theta) * Math.cos(phi);
    pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    pos[i * 3 + 2] = r * Math.cos(theta);
  }
  return pos;
}

/**
 * Outer particle sphere visible when camera is outside.
 * Scale/fade can be driven by scroll; for now always rendered.
 */
export function OuterParticleSphere() {
  const ref = useRef();
  const positions = useMemo(() => sphereSurface(COUNT, RADIUS), []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.12;
    ref.current.rotation.y = t * 0.18;
    ref.current.scale.setScalar(2.2 + Math.sin(t * 0.5) * 0.06);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default OuterParticleSphere;
