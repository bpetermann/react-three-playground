import { Text, ContactShadows, Float, OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { Suspense } from 'react';
import Skill from './Skill';
import Bowl from './Bowl';

const skills = ['html', 'css', 'js', 'ts', 'react', 'svelte', 'node', 'next'];

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Physics gravity={[0, -1.6, 0]}>
        {skills.map((name, i) => (
          <Suspense fallback={null} key={name + i}>
            <Skill offset={i * 3} path={name} />
          </Suspense>
        ))}

        <Float rotationIntensity={0.4}>
          <Suspense fallback={null}>
            <Bowl />
          </Suspense>
        </Float>
      </Physics>
      <Text
        font='./fonts/bangers-v20-latin-regular.woff'
        fontSize={0.5}
        position={[2, 0.75, 0.25]}
        rotation-y={-1.25}
        maxWidth={2}
        textAlign='center'
      >
        Tech I&apos;m passionate about
      </Text>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
