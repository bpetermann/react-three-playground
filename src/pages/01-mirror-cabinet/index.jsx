'use client';
import { Canvas } from '@react-three/fiber';
import styles from './styles.module.css';
import { Leva } from 'leva';
import Scene from './Components';

export default function Home() {
  return (
    <div className={styles.canvas}>
      <Leva collapsed />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 22],
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
