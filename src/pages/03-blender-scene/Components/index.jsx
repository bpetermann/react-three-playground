import { OrbitControls } from '@react-three/drei';
import Model from './Model';

export default function Scene() {
  return (
    <>
      <OrbitControls makeDefault />
      <Model />
    </>
  );
}
