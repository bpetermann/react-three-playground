import { Sparkles, Center } from '@react-three/drei';
import Portal from './Portal';

export default function Model() {
  return (
    <Center>
      <Portal />
      <Sparkles
        size={6}
        scale={[4, 2, 4]}
        position-y={1}
        speed={0.2}
        count={40}
      />
    </Center>
  );
}
