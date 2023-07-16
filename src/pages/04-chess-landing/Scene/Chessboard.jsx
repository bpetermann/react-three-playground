import { shaderMaterial } from '@react-three/drei';
import portalFragmentShader from '../shaders/fragment.glsl';
import portalVertexShader from '../shaders/vertex.glsl';
import { extend, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Chessboard() {
  const chessBoardMaterial = useRef();

  useFrame((_, delta) => {
    chessBoardMaterial.current.uTime += delta;
  });

  const ChessBoardMaterial = shaderMaterial(
    {
      uTime: 0.5,
    },
    portalVertexShader,
    portalFragmentShader
  );

  extend({ ChessBoardMaterial });

  return (
    <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={2}>
      <planeGeometry />
      <chessBoardMaterial ref={chessBoardMaterial} />
    </mesh>
  );
}
