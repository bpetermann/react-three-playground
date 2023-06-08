import { MeshReflectorMaterial } from '@react-three/drei';

export default function MirrorMesh({ positions, rotateX, rotateY }) {
  return (
    <mesh
      position={positions}
      rotation-x={rotateX}
      rotation-y={rotateY}
      scale={20}
    >
      <planeGeometry />
      <MeshReflectorMaterial
        resolution={1024}
        blur={[1000, 1000]}
        mixBlur={1}
        mirror={1}
        color='greenyellow'
      />
    </mesh>
  );
}
