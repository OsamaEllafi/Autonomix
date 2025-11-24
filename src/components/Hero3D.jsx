import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { easing } from 'maath';

const AnimatedSphere = () => {
    const meshRef = useRef();
    const scrollRef = useRef(0);
    const targetScrollRef = useRef(0);

    useEffect(() => {
        scrollRef.current = window.scrollY;
        targetScrollRef.current = window.scrollY;
    }, []);

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();

        if (meshRef.current) {
            // 1. Idle Rotation
            meshRef.current.rotation.x = time * 0.2;
            meshRef.current.rotation.y = time * 0.3;

            // 2. Scroll Logic with Delayed Follow
            const currentScroll = window.scrollY;
            const scrollDelta = currentScroll - scrollRef.current;
            scrollRef.current = currentScroll;

            // Update target scroll position
            targetScrollRef.current = currentScroll;

            // Calculate Stretch based on velocity
            const velocity = Math.abs(scrollDelta);
            const stretchFactor = 0.02;
            const maxStretch = 1.5;

            const stretch = Math.min(velocity * stretchFactor, maxStretch);

            // Target scales: Stretch Y, Squeeze X/Z
            const targetScaleX = 2.5 - stretch * 0.4;
            const targetScaleY = 2.5 + stretch;
            const targetScaleZ = 2.5 - stretch * 0.4;

            // Smoothly damp scale with delayed response
            easing.damp3(meshRef.current.scale, [targetScaleX, targetScaleY, targetScaleZ], 0.4, delta);

            // 3. Delayed Position Follow (Lag Effect)
            // Calculate target position based on scroll with offset
            let targetY = 0;

            if (velocity > 0.5) {
                // While scrolling: lag behind with offset based on scroll direction
                const scrollDirection = scrollDelta > 0 ? -1 : 1; // down = -1, up = 1
                targetY = scrollDirection * 0.3; // Small offset to create lag effect
            }

            // Smoothly damp position - slower return to center for smooth effect
            easing.damp3(meshRef.current.position, [0, targetY, 0], 0.3, delta);
        }
    });

    return (
        <Sphere args={[1, 100, 200]} scale={2.5} ref={meshRef}>
            <MeshDistortMaterial
                color="#220033"
                attach="material"
                distort={0.5}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
                emissive="#bc13fe"
                emissiveIntensity={0.2}
                transparent={false}
                opacity={1}
            />
        </Sphere>
    );
};

const Hero3D = () => {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bc13fe" />
                <AnimatedSphere />
                {/* Disabled OrbitControls zoom to prevent interfering with scroll */}
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
