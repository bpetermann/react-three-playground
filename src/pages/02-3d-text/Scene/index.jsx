import {
  useMatcapTexture,
  Center,
  Text3D,
  OrbitControls,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState, useRef } from 'react';

export default function Scene() {
  const [matcaptexture] = useMatcapTexture('27222B_677491_484F6A_5D657A', 256);
  const [torusgeometry, setTorusGeometry] = useState();
  const [material, setmaterial] = useState();
  const donuts = useRef([]);

  useFrame((_, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <OrbitControls makeDefault />
      <torusGeometry ref={setTorusGeometry} args={[1, 0.6, 16, 32]} />
      <meshMatcapMaterial ref={setmaterial} matcap={matcaptexture} />
      <Center>
        <Text3D
          font='./fonts/helvetiker/helvetiker_regular.typeface.json'
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          material={material}
        >
          Hello World
        </Text3D>
      </Center>
      {[...Array(100)].map((_, i) => (
        <mesh
          ref={(e) => {
            donuts.current[i] = e;
          }}
          key={i}
          geometry={torusgeometry}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[i, i, 0]}
          material={material}
        />
      ))}
    </>
  );
}
