import {
  useMatcapTexture,
  // OrbitControls,
  useGLTF,
  Text,
  shaderMaterial,
} from '@react-three/drei';
import portalFragmentShader from '../shaders/fragment.glsl';
import portalVertexShader from '../shaders/vertex.glsl';
import { useFrame, extend } from '@react-three/fiber';
import { useState, useRef } from 'react';

export default function Scene() {
  const [matcaptexture] = useMatcapTexture('27222B_677491_484F6A_5D657A', 256);
  const { nodes } = useGLTF('./blender/chess/king.glb');
  const { nodes: pawnNodes } = useGLTF('./blender/chess/pawn.glb');
  const [material, setmaterial] = useState();
  const chessBoardMaterial = useRef();
  const pawns = useRef([]);

  const ChessBoardMaterial = shaderMaterial(
    {
      uTime: 0.5,
    },
    portalVertexShader,
    portalFragmentShader
  );

  extend({ ChessBoardMaterial });

  useFrame((_, delta) => {
    chessBoardMaterial.current.uTime += delta;
    for (const pawn of pawns.current) {
      pawn.rotation.x += delta * 0.2;
      pawn.rotation.z += delta * 0.2;
      pawn.position.y -= delta * 0.8;

      if (pawn.position.y < -20) {
        pawn.position.y = +20;
      }
    }
  });

  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <meshMatcapMaterial ref={setmaterial} matcap={matcaptexture} />

      <mesh
        geometry={nodes.king.geometry}
        scale={0.3}
        material={material}
        position-y={-1}
      />
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={2}>
        <planeGeometry />
        <chessBoardMaterial ref={chessBoardMaterial} />
      </mesh>
      <Text fontSize={1} scale={0.4} position={[0, 1, 0]}>
        Hello World
      </Text>

      {[...Array(25)].map((_, i) => (
        <mesh
          ref={(e) => {
            pawns.current[i] = e;
          }}
          key={i}
          geometry={pawnNodes.Cube.geometry}
          position={[
            Math.random() * 25,
            (Math.random() - 0.5) * 10 * i,
            Math.random() - 3 - 3 * 10,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          material={material}
        />
      ))}
    </>
  );
}
