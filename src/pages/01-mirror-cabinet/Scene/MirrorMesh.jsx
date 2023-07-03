import { MeshReflectorMaterial } from '@react-three/drei';
import { useControls } from 'leva';

export default function MirrorMesh({ positions, rotateX = 0.5, rotateY = 0 }) {
  const { color } = useControls('Plane', {
    color: '#f700ff',
  });

  return (
    <mesh
      position={positions}
      rotation-x={-Math.PI * rotateX}
      rotation-y={-Math.PI * rotateY}
      scale={20}
    >
      <planeGeometry />
      <MeshReflectorMaterial
        resolution={1024}
        blur={[1000, 1000]}
        mixBlur={1}
        mirror={1}
        color={color}
      />
    </mesh>
  );
}
