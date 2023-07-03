import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { OrbitControls } from '@react-three/drei';
import MirrorMesh from './MirrorMesh';
import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import TextFloat from './Text';

export default function Scene() {
  const { performance } = useControls({
    performance: false,
  });

  return (
    <>
      <EffectComposer>
        <Bloom mipmapBlur />
      </EffectComposer>
      {performance && <Perf position='top-left' />}
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <MirrorMesh positions={[0, -1, 0]} />
      <MirrorMesh positions={[10, 9, 0]} rotateY={0.5} />
      <MirrorMesh positions={[0, 9, -10]} rotateX={2} rotateY={2} />
      <TextFloat />
    </>
  );
}
