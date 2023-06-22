import {
  Environment,
  useGLTF,
  PresentationControls,
  Float,
  ContactShadows,
  Html,
  Text,
} from '@react-three/drei';
import styles from '../styles.module.css';

export default function Experience() {
  const { scene } = useGLTF('./models/model.gltf');

  return (
    <>
      <Environment files='./hdr/potsdamer_platz_1k.hdr' />
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
          <primitive object={scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass={styles.html}
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src='https://svelte-portfolio-git-main-bpetermann.vercel.app/' />
            </Html>
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
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
