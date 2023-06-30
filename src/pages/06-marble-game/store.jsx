import { create } from 'zustand';

const useStore = create((set) => {
  return {
    obstacles: 3,

    phase: 'ready',

    start: () => set({ phase: 'playing' }),
    restart: () => set({ phase: 'ready' }),
    end: () => set({ phase: 'ended' }),

    
  };
});

export default useStore;
