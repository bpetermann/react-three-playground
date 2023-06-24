import {
  Environment,
  useGLTF,
  PresentationControls,
  Float,
  ContactShadows,
  Html,
  Text,
  OrbitControls,
} from '@react-three/drei';
import styles from '../styles.module.css';
import { useState } from 'react';

export default function Experience() {
  const model = useGLTF('./blender/laptop/laptop-new.glb');
  const [showScreen, setShowScreem] = useState(false);

  const toggleScreen = (e) => {
    e.stopPropagation();
    if (e.object.material.name === 'screen') {
      setShowScreem((prev) => !prev);
    }
  };

  return (
    <>
      <Environment files='./hdr/potsdamer_platz_1k.hdr' />
      {!showScreen && <OrbitControls />}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 2, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={'#1095c1'}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive
            object={model.scene}
            position-y={-0.8}
            scale={0.1}
            onClick={toggleScreen}
          >
            {showScreen && (
              <Html
                transform
                wrapperClass={styles.html}
                distanceFactor={10.45}
                position={[-0.26, 9.07, -13.37]}
                rotation-x={-0.256}
              >
                <iframe src={`${window.location.origin}/05-portfolio-screen`} />
              </Html>
            )}
          </primitive>
          <Text
            font='./fonts/bangers-v20-latin-regular.woff'
            fontSize={0.5}
            position={[2, 0.75, 0.25]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign='center'
          >
            Benjamin Petermann
          </Text>
          <Text
            font='./fonts/bangers-v20-latin-regular.woff'
            fontSize={0.2}
            position={[2, 0.0, 0.2]}
            rotation-y={-1.25}
            maxWidth={2}
          >
            - Click Screen -
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
