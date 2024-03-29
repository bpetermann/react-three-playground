'use client';
import { Canvas } from '@react-three/fiber';
import styles from './styles.module.css';
import Scene from './Scene';

export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
