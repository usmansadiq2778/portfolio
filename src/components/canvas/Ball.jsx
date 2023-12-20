/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from '@react-three/drei';

import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
import CanvasLoder from '../Loader';
import { geometry } from 'maath';

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);
    useEffect(() => {
        // Dispose of resources when the component unmounts
        return () => {
            // Dispose of any Three.js resources here
            decal.dispose();
        };
    }, []);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color={'#fff8eb'}
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    map={decal}
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    flatShading
                    // scale={1}
                />
            </mesh>
        </Float>
    );
};
const BallCanvas = ({ icon }) => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoder />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
