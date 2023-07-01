import { useKeyboardControls } from '@react-three/drei';
import { addEffect } from '@react-three/fiber';
import styles from './Interface.module.css';
import { useRef, useEffect } from 'react';
import useStore from '../../store';

export default function Interface() {
  const time = useRef();
  const { forward, backward, leftward, rightward, jump } = useKeyboardControls(
    (state) => state
  );
  const { phase, restart } = useStore();

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useStore.getState();
      let elapsedTime = 0;

      if (state.phase === 'playing') {
        elapsedTime = Date.now() - state.startTime;
      } else if (state.phase === 'end') {
        elapsedTime = state.endTime - state.startTime;
      }
      elapsedTime /= 1000;
      elapsedTime = elapsedTime.toFixed(2);
      if (time.current) time.current.textContent = elapsedTime;
    });

    return () => unsubscribeEffect();
  }, []);

  return (
    <div className={styles.interface}>
      <section ref={time} className={styles.time}>
        0.00
      </section>
      {phase === 'end' && (
        <section className={styles.restart} onClick={restart}>
          Restart
        </section>
      )}
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
