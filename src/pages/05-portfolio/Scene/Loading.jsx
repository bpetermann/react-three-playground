import { Html } from '@react-three/drei';
import styles from '../styles.module.css';

export default function Loading() {
  return (
    <Html>
      <img
        className={styles.spinner}
        src='/images/icons/spinner.gif'
        alt='Loading...'
      />
    </Html>
  );
}
