import { useGLTF, Html } from '@react-three/drei';
import styles from '../styles.module.css';

export default function Model({ showScreen, setShowScreem }) {
  const model = useGLTF('./blender/laptop/laptop-new.glb');

  const toggleScreen = (e) => {
    e.stopPropagation();
    if (e.object.material.name === 'screen') {
      setShowScreem((prev) => !prev);
    }
  };

  return (
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
  );
}
