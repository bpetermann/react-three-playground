import { extend, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Text } from '@react-three/drei';
import { ShaderMaterial } from 'three';

import vertex from '../shaders/vertex.glsl';
import frag01 from '../shaders/fragments/01.glsl';
import frag02 from '../shaders/fragments/02.glsl';
import frag03 from '../shaders/fragments/03.glsl';

const fragments = [frag01, frag02, frag03];

export default function Scene() {
  const [count, setCount] = useState(0);
  const shader = useRef();

  useFrame((_, delta) => {
    shader.current.uniforms.uTime.value += delta;
  });

  const createShaderMaterial = () => {
    return new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: vertex,
      fragmentShader: fragments[count],
    });
  };

  extend({ ShaderMaterial });

  return (
    <>
      {!count && (
        <Text
          font='./fonts/bangers-v20-latin-regular.woff'
          fontSize={0.18}
          position-y={1.5}
          maxWidth={2}
        >
          - click to switch -
        </Text>
      )}

      <mesh
        scale={2}
        onClick={() => {
          setCount((prev) => (prev + 1) % fragments.length);
        }}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default';
        }}
      >
        <planeGeometry />
        <shaderMaterial
          ref={shader}
          attach='material'
          args={[createShaderMaterial()]}
        />
      </mesh>
    </>
  );
}
