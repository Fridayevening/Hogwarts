import { useEffect } from 'react';
import * as THREE from 'three';

const Scene = () => {
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    const scene = new THREE.Scene();
  };

  return <div>Scene</div>;
};

export default Scene;
