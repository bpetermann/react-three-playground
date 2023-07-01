import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import FloorMaterial from '../FloorMaterial';
import { useRef, useState } from 'react';
import * as THREE from 'three';

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const BlockSpinner = ({ position = [0, 0, 0] }) => {
  const obstacleMaterial = new THREE.MeshStandardMaterial({
    color: 'orangered',
  });

  const obstacle = useRef();
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() > 0.5 ? -1 : 1)
  );

  useFrame((state) => {
    if (obstacle.current) {
      const time = state.clock.getElapsedTime();

      const rotation = new THREE.Quaternion();
      rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
      obstacle.current.setNextKinematicRotation(rotation);
    }
  });

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      >
        <FloorMaterial />
      </mesh>
      <RigidBody
        ref={obstacle}
        type='kinematicPosition'
        position={[0, 0.3, 0]}
        restitution={0.2}
        fricton={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          position={[0, -0.1, 0]}
          scale={[3.5, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
};

const BlockLimbo = ({ position = [0, 0, 0] }) => {
  const obstacleMaterial = new THREE.MeshStandardMaterial({
    color: 'orangered',
  });

  const obstacle = useRef();
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (obstacle.current) {
      const time = state.clock.getElapsedTime();

      const y = Math.sin(time + timeOffset) + 1.15;
      obstacle.current.setNextKinematicTranslation({
        x: position[0],
        y: position[1] + y,
        z: position[2],
      });
    }
  });

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      >
        <FloorMaterial />
      </mesh>
      <RigidBody
        ref={obstacle}
        type='kinematicPosition'
        position={[0, 0.3, 0]}
        restitution={0.2}
        fricton={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3.5, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
};

const BlockAxe = ({ position = [0, 0, 0] }) => {
  const obstacleMaterial = new THREE.MeshStandardMaterial({
    color: 'orangered',
  });

  const obstacle = useRef();
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

  useFrame((state) => {
    if (obstacle.current) {
      const time = state.clock.getElapsedTime();

      const x = Math.sin(time + timeOffset) * 1.25;
      obstacle.current.setNextKinematicTranslation({
        x: position[0] + x,
        y: position[1] + 0.75,
        z: position[2],
      });
    }
  });

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      >
        <FloorMaterial />
      </mesh>
      <RigidBody
        ref={obstacle}
        type='kinematicPosition'
        position={[0, 0.3, 0]}
        restitution={0.2}
        fricton={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[1.5, 1.5, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
};

export { BlockSpinner, BlockLimbo, BlockAxe };
