'use client';
import { KeyboardControls } from '@react-three/drei';
import { Scene, Interface } from './Components';
import { Canvas } from '@react-three/fiber';
import styles from './styles.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
          { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
          { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
          { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
          { name: 'jump', keys: ['Space'] },
        ]}
      >
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [2.5, 4, 6],
          }}
        >
          <Scene />
        </Canvas>
        <Interface />
      </KeyboardControls>
    </div>
  );
}
