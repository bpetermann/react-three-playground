import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { PresentationControls } from '@react-three/drei';
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
      <PresentationControls
        global
        rotation={[0.3, 0.1, 0]}
        polar={[-2, 1]}
        azimuth={[-1.8, 1.5]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
      >
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <MirrorMesh positions={[0, -1, 0]} />
        <MirrorMesh positions={[10, 9, 0]} rotateY={0.5} />
        <MirrorMesh positions={[0, 9, -10]} rotateX={2} rotateY={2} />
        <TextFloat />
      </PresentationControls>
    </>
  );
}
