import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export default function Bowl() {
  const model = useGLTF(`./blender/skills/bowl.glb`);

  return (
    <RigidBody type='fixed' colliders='trimesh' restitution={0.2} friction={0}>
      <primitive
        object={model.scene}
        receiveShadow
        position-z={-1.25}
        position-y={-0.4}
        scale={1.2}
      />
    </RigidBody>
  );
}
