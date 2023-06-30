import { subscribeWithSelector } from 'zustand/middleware';
import { create } from 'zustand';

const useStore = create(
  subscribeWithSelector((set) => {
    return {
      obstacles: 10,
      obstaclesUpdate: 0,
      startTime: 0,
      endTime: 0,
      phase: 'ready',

      start: () =>
        set((state) =>
          state.phase === 'ready'
            ? { phase: 'playing', startTime: Date.now() }
            : {}
        ),

      restart: () =>
        set((state) =>
          ['playing', 'end'].includes(state.phase) ? { phase: 'ready' } : {}
        ),

      end: () =>
        set((state) =>
          state.phase === 'playing'
            ? {
                phase: 'end',
                endTime: Date.now(),
                obstaclesUpdate: Math.random(),
              }
            : {}
        ),
    };
  })
);

export default useStore;
