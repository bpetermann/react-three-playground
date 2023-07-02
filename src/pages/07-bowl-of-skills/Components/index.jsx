import { Physics, RigidBody } from '@react-three/rapier';
import { OrbitControls, Text } from '@react-three/drei';
// import { Perf } from 'r3f-perf';
import * as THREE from 'three';

export default function Experience() {
  return (
    <>
      {/* <Perf position='top-left' /> */}

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Physics debug gravity={[0, -1.6, 0]}>
        <RigidBody colliders='ball' position={[0, 2, -1.25]}>
          <mesh castShadow scale={0.2}>
            <sphereGeometry />
            <meshStandardMaterial color='orange' />
          </mesh>
        </RigidBody>

        <RigidBody
          type='fixed'
          colliders='trimesh'
          restitution={0.2}
          friction={0}
        >
          <mesh receiveShadow position-z={-1.25}>
            <sphereGeometry
              args={[0.8, 32, 16, 0, Math.PI * 2, 1.5, Math.PI / 2]}
            />
            <meshNormalMaterial color='grey' side={THREE.DoubleSide} />
          </mesh>
        </RigidBody>
      </Physics>
      <Text
        fontSize={0.5}
        position={[2, 0.75, 0.25]}
        rotation-y={-1.25}
        maxWidth={2}
        textAlign='center'
      >
        <meshBasicMaterial color='grey' />
        Hello, World
      </Text>
    </>
  );
}
