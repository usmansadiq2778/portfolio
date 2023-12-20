/* eslint-disable no-unused-vars */
import { Html, useProgress } from '@react-three/drei';
import React from 'react';

const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html
            as='div'
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginTop: '50px',
            }}
        >
            <span className='canvas-loader'> </span>
            <p
                style={{
                    fontSize: 14,
                    color: '#F1F1F1',
                    fontWeight: 100,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
};

export default Loader;
