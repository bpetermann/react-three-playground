import { useGLTF, useTexture, shaderMaterial } from '@react-three/drei';
import portalFragmentShader from '../shaders/fragment.glsl';
import portalVertexShader from '../shaders/vertex.glsl';
import { useFrame } from '@react-three/fiber';
import { MeshBasicMaterial } from 'three';
import { useRef } from 'react';

export default function Portal() {
  const model = useGLTF('./blender/scene.glb');
  const texture = useTexture('./blender/baking.jpg');
  const modelRef = useRef();

  const material = useRef(new MeshBasicMaterial({ map: texture }));
  const poleLightMaterial = useRef(new MeshBasicMaterial({ color: '#ffffe5' }));
  const PortalMaterial = shaderMaterial(
    {
      uDegree: 0.5,
      uRedContent: 0.5,
      uBlueContent: 1.0,
    },
    portalVertexShader,
    portalFragmentShader
  );
  const portalLightMaterial = useRef(new PortalMaterial());

  useFrame((_, delta) => {
    portalLightMaterial.current.uniforms.uDegree.value += delta;
  });

  if (model && model.scene) {
    model.scene.traverse((child) => {
      child.material = material.current;
    });

    const findAndSetMaterial = (name, material) => {
      const object = model.scene.children.find((child) => child.name === name);
      if (object) object.material = material.current;
    };

    findAndSetMaterial('portalLight', portalLightMaterial);
    findAndSetMaterial('portLightA', poleLightMaterial);
    findAndSetMaterial('portLightB', poleLightMaterial);
  }

  return (
    <group ref={modelRef}>
      {model && model.scene && <primitive object={model.scene} />}
      <meshBasicMaterial map={texture} map-flipY={false} />
    </group>
  );
}
