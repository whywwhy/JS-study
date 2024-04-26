import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function App() {
  // 두 번째 박스에 사용할 재질 배열
  const material = [
    new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80') }),
    new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80') }),
    new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1615111784767-4d7c527f32a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80') }),
    new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80') }),
    new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1596854273338-cbf078ec7071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80') }),
    new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80') })
  ];

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }} // 카메라의 위치와 시야각 조절
      >
        <OrbitControls autoRotate={true} />
        {/* 첫 번째 박스 */}
        <mesh position={[0, 0, 0]}>
          <ambientLight intensity={1} />
          <directionalLight position={[-1, 0, 1]} intensity={0.5} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={0xa3b18a} />
        </mesh>
        {/* 두 번째 박스 */}
        <mesh position={[2, 0, 0]}>
          <ambientLight intensity={1} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial attachArray="material" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
