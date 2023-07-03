import { Float, Text } from '@react-three/drei';
import { useControls } from 'leva';

export default function TextFloat() {
  const { postion, color, glow, visible } = useControls('Text', {
    postion: {
      value: { x: 1, y: 4 },
      step: 0.01,
      joystick: 'invertY',
    },
    color: '#ffffff',
    glow: false,
    visible: true,
  });

  return (
    <Float>
      <Text
        font='./fonts/bangers-v20-latin-regular.woff'
        fontSize={1}
        rotation-x={-Math.PI * 2}
        position={[postion.x, postion.y, -1]}
        visible={visible}
      >
        Hello World
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          toneMapped={!glow ?? false}
        />
      </Text>
    </Float>
  );
}
