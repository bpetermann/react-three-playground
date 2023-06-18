import {
  useMatcapTexture,
  // OrbitControls,
  useGLTF,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState, useRef } from 'react';
import CenterPiece from './CenterPiece';
import BoardMesh from './BoardMesh';
import Title from './Title';

export default function Scene() {
  const [blackMatcap] = useMatcapTexture('27222B_677491_484F6A_5D657A', 256);
  const [whiteMatcap] = useMatcapTexture('C7C0AC_2E181B_543B30_6B6270', 256);
  const { nodes: king } = useGLTF('./blender/chess/king.glb');
  const { nodes: pawn } = useGLTF('./blender/chess/pawn.glb');
  const [blackMaterial, setBlackMaterial] = useState();
  const [whiteMaterial, setWhiteMaterial] = useState();

  const pieces = useRef([]);

  const chessPieces = [
    {
      geometry: king.king.geometry,
      material: whiteMaterial,
      scale: 0.3,
    },
    {
      geometry: king.king.geometry,
      material: blackMaterial,
      scale: 0.3,
    },
    {
      geometry: pawn.Cube.geometry,
      material: blackMaterial,
      scale: 0.2,
    },
    {
      geometry: pawn.Cube.geometry,
      material: whiteMaterial,
      scale: 0.2,
    },
    {
      geometry: king.king.geometry,
      material: whiteMaterial,
      scale: 0.3,
    },
    {
      geometry: king.king.geometry,
      material: blackMaterial,
      scale: 0.3,
    },
    {
      geometry: pawn.Cube.geometry,
      material: blackMaterial,
      scale: 0.2,
    },
    {
      geometry: pawn.Cube.geometry,
      material: whiteMaterial,
      scale: 0.2,
    },
    {
      geometry: king.king.geometry,
      material: whiteMaterial,
      scale: 0.3,
    },
    {
      geometry: king.king.geometry,
      material: blackMaterial,
      scale: 0.3,
    },
    {
      geometry: pawn.Cube.geometry,
      material: blackMaterial,
      scale: 0.2,
    },
    {
      geometry: pawn.Cube.geometry,
      material: whiteMaterial,
      scale: 0.2,
    },
  ];

  const [centerPiece, setCenterPiece] = useState(chessPieces[1]);

  useFrame((_, delta) => {
    for (const piece of pieces.current) {
      piece.rotation.x += delta * 0.2;
      piece.rotation.z += delta * 0.2;
      piece.position.y -= delta * 0.8;

      if (piece.position.y < -20) {
        piece.position.y = +20;
      }
    }
  });

  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <meshMatcapMaterial ref={setBlackMaterial} matcap={blackMatcap} />
      <meshMatcapMaterial ref={setWhiteMaterial} matcap={whiteMatcap} />
      <CenterPiece piece={centerPiece} blackMaterial={blackMaterial} />
      <BoardMesh />
      <Title />
      {chessPieces.map((item, i) => (
        <mesh
          ref={(e) => {
            pieces.current[i] = e;
          }}
          key={i}
          onClick={() => setCenterPiece(item)}
          geometry={item.geometry}
          position={[
            Math.random() * 25,
            (Math.random() - 0.5) * 10 * i,
            Math.random() - 3 - 3 * 10,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          material={item.material}
        />
      ))}
    </>
  );
}
