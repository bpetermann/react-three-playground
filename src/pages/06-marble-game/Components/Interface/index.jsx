import { useKeyboardControls } from '@react-three/drei';
import styles from './Interface.module.css';

export default function Interface() {
  const { forward, backward, leftward, rightward, jump } = useKeyboardControls(
    (state) => state
  );

  return (
    <div className={styles.interface}>
      <section className={styles.time}>0.00</section>
      <section className={styles.restart}>Restart</section>
      <section className={styles.controls}>
        <div className={styles.raw}>
          <div className={`${styles.key} ${forward && styles.active}`}></div>
        </div>
        <div className={styles.raw}>
          <div className={`${styles.key} ${leftward && styles.active}`}></div>
          <div className={`${styles.key} ${backward && styles.active}`}></div>
          <div className={`${styles.key} ${rightward && styles.active}`}></div>
        </div>
        <div className={styles.raw}>
          <div
            className={`${styles.key} ${jump && styles.active} ${styles.large}`}
          ></div>
        </div>
      </section>
    </div>
  );
}
