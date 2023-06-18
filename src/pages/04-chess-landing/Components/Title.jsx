import { Text } from '@react-three/drei';

export default function Title() {
  return (
    <group>
      <Text
        font='./fonts/bangers-v20-latin-regular.woff'
        fontSize={1}
        scale={0.4}
        position={[0, 1.25, 0]}
      >
        Chess Page
      </Text>
      <Text
        font='./fonts/bangers-v20-latin-regular.woff'
        fontSize={0.2}
        scale={0.4}
        position={[0, 0.95, 0]}
      >
        - Click to Highlight -
      </Text>
    </group>
  );
}
