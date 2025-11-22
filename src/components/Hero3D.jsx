import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
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
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
