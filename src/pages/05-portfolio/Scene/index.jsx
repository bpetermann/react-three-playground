import {
  Environment,
  PresentationControls,
  Float,
  ContactShadows,
} from '@react-three/drei';
import { useState, Suspense } from 'react';
import Loading from './Loading';
import Model from './Model';
import Title from './Title';

export default function Scene() {
  const [showScreen, setShowScreem] = useState(false);

  return (
    <>
      <Environment files='./hdr/potsdamer_platz_1k.hdr' />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, !showScreen ? 3 : 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={showScreen ? 65 : 0}
            color={showScreen ? '#1095c1' : undefined}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <Suspense fallback={<Loading />}>
            <Model showScreen={showScreen} setShowScreem={setShowScreem} />
          </Suspense>
          <Title />
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
