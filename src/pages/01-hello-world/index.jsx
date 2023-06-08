'use client';
import { Float, Text, OrbitControls } from '@react-three/drei';
import MirrorMesh from './MirrorMesh';
import { Canvas } from '@react-three/fiber';
import styles from './page1.module.css';

export default function About() {
  return (
    <div className={styles.main}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 22],
        }}
      >
        <OrbitControls />
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <MirrorMesh positions={[0, -1, 0]} rotateX={-Math.PI * 0.5} />
        <MirrorMesh
          positions={[10, 9, 0]}
          rotateX={-Math.PI * 0.5}
          rotateY={-Math.PI * 0.5}
        />
        <MirrorMesh
          positions={[0, 9, -10]}
          rotateX={-Math.PI * 2}
          rotateY={-Math.PI * 2}
        />
        <Float>
          <Text
            font='./fonts/bangers-v20-latin-regular.woff'
            fontSize={1}
            rotation-x={-Math.PI * 2}
            position={[1, 4, -1]}
          >
            Hello World
          </Text>
        </Float>
      </Canvas>
    </div>
  );
}
