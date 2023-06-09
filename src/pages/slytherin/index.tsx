import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);

  const renderer = new THREE.WebGLRenderer();

  const init = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current?.appendChild(renderer.domElement);
  };

  useEffect(() => {
    init();
  }, []);

  return <div ref={ref} />;
};

export default Page;
