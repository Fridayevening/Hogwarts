import * as THREE from 'three';
import { useEffect } from 'react';

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
