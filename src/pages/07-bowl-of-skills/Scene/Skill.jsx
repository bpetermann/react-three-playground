import { RigidBody, CuboidCollider } from '@react-three/rapier';
import { useGLTF } from '@react-three/drei';

export default function Skill({ path, offset, site }) {
  const model = useGLTF(`./blender/skills/${path}.glb`);

  return (
    <RigidBody colliders={false} position={[0, 3 + offset, -1.25]}>
      <CuboidCollider args={[0.2, 0.2, 0.1]} />
      <primitive
        object={model.scene}
        rotation-x={Math.PI / 2}
        rotation-z={0.5}
        scale={0.4}
        onClick={() => {
          window.open(site);
        }}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default';
        }}
      />
    </RigidBody>
  );
}
