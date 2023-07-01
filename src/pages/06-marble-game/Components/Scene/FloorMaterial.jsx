import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';

export default function FloorMaterial() {
  const [map, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    './textures/floor/map.jpg',
    './textures/floor/normalMap.jpg',
    './textures/floor/roughnessMap.jpg',
    './textures/floor/aoMap.jpg',
  ]);

  return (
    <meshStandardMaterial
      map={map}
      normalMap={normalMap}
      roughnessMap={roughnessMap}
      aoMap={aoMap}
    />
  );
}
