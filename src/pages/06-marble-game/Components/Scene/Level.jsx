import { BlockSpinner, BlockAxe, BlockLimbo } from './Obstacles';
import { RigidBody, CuboidCollider } from '@react-three/rapier';
import { Float, Text } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

export function BlockStart({ position = [0, 0, 0] }) {
  const floorMaterial = new THREE.MeshStandardMaterial({ color: 'limegreen' });

  return (
    <group position={position}>
      <Float>
        <Text
          font='./fonts/bebas-neue-v9-latin-regular.woff'
          scale={0.4}
          maxWidth={0.25}
          lineHeight={0.75}
          textAlign='right'
          position={[0.75, 0.65, 0]}
          rotation-y={-0.25}
        >
          Marble Race
          <meshBasicMaterial toneMapped={false} />
        </Text>
      </Float>
      <mesh
        geometry={boxGeometry}
        material={floorMaterial}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </group>
  );
}

export function BlockEnd({ position = [0, 0, 0] }) {
  const floorMaterial = new THREE.MeshStandardMaterial({ color: 'limegreen' });

  return (
    <group position={position}>
      <Text
        font='/bebas-neue-v9-latin-regular.woff'
        scale={1}
        position={[0, 2.25, -2]}
      >
        FINISH
        <meshBasicMaterial toneMapped={false} />
      </Text>
      <mesh
        geometry={boxGeometry}
        material={floorMaterial}
        position={[0, 0, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </group>
  );
}

function Bounds({ length = 1 }) {
  const wallMaterial = new THREE.MeshStandardMaterial({ color: 'slategrey' });

  return (
    <RigidBody type='fixed' restitution={0.2} friction={0}>
      <mesh
        position={[2.15, 0.75, -(length * 2) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[0.3, 1.5, 4 * length]}
        castShadow
      />
      <mesh
        position={[-2.15, 0.75, -(length * 2) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[0.3, 1.5, 4 * length]}
        receiveShadow
      />
      <mesh
        position={[0, 0.75, -(length * 4) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[4, 1.5, 0.3]}
        receiveShadow
      />
      <CuboidCollider
        args={[2, 0.1, 2 * length]}
        position={[0, -0.1, -(length * 2) + 2]}
        restitution={0.2}
        friction={1}
      />
    </RigidBody>
  );
}

export function Level({
  obstacles = 5,
  types = [BlockSpinner, BlockAxe, BlockLimbo],
  update = 0,
}) {
  const blocks = useMemo(() => {
    const blocks = [];

    for (let i = 0; i < obstacles; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      blocks.push(type);
    }

    return blocks;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [obstacles, types, update]);

  return (
    <>
      <BlockStart position={[0, 0, 0]} />

      {blocks.map((Block, i) => (
        <Block position={[0, 0, -(i + 1) * 4]} key={i} />
      ))}

      <BlockEnd position={[0, 0, -(obstacles + 1) * 4]} />
      <Bounds length={obstacles + 2} />
    </>
  );
}
