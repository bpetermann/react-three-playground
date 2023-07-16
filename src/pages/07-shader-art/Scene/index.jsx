import { shaderMaterial } from '@react-three/drei';
import fragment from '../shaders/fragment.glsl';
import vertex from '../shaders/vertex.glsl';
import { extend, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Scene() {
  const shader = useRef();

  useFrame((_, delta) => {
    shader.current.uTime += delta ;
  });

  const Shader = shaderMaterial(
    {
      uTime: 0.5,
    },
    vertex,
    fragment
  );

  extend({ Shader });

  return (
    <mesh scale={2}>
      <planeGeometry />
      <shader ref={shader} />
    </mesh>
  );
}
