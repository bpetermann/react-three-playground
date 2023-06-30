import { Physics } from '@react-three/rapier';
import { Level } from './Level.jsx';
import useStore from '../../store';
import Player from './Player.jsx';
import Lights from './Lights.jsx';

export default function Scene() {
  const obstacles = useStore((state) => state.obstacles);
  const obstaclesUpdate = useStore((state) => state.obstaclesUpdate);
console.log(obstaclesUpdate)
  return (
    <>
      <Physics>
        <Lights />
        <Level obstacles={obstacles} update={obstaclesUpdate} />
        <Player />
      </Physics>
    </>
  );
}
