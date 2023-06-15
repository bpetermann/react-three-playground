import { Float, Text } from '@react-three/drei';
import { useControls } from 'leva';

export default function TextFloat() {
  const { postion, color, visible } = useControls('Text', {
    postion: {
      value: { x: 1, y: 4 },
      step: 0.01,
      joystick: 'invertY',
    },
    color: '#ffffff',
    visible: true,
  });

  return (
    <Float>
      <Text
        font='./fonts/bangers-v20-latin-regular.woff'
        fontSize={1}
        rotation-x={-Math.PI * 2}
        position={[postion.x, postion.y, -1]}
        color={color}
        visible={visible}
      >
        Hello World
      </Text>
    </Float>
  );
}
