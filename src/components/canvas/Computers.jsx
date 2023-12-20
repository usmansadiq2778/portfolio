/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

import CanvasLoder from '../Loader';
import React, { useState, useEffect, Suspense, useRef } from 'react';

const Computers = ({ isMobile }) => {
    const computer = useGLTF('./desktop_pc/scene.gltf');
    useEffect(() => {
        // Dispose of resources when the component unmounts
        return () => {
            // Dispose of any Three.js resources here
            computer.dispose();
            // Additional cleanup if needed
        };
    }, []);

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};
const ComputersCanvas = () => {
    const [isMobile, setisMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setisMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setisMobile(event.matches);
        };
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            // gl={renderer}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoder />}>
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
