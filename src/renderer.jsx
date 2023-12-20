import * as THREE from 'three';

let rendererInstance;

const getRendererInstance = () => {
    if (!rendererInstance) {
        rendererInstance = new THREE.WebGLRenderer();
        // Add event listeners for context loss and restoration here if needed
    }
    return rendererInstance;
};

export default getRendererInstance;
