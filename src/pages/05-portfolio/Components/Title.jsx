import { Text } from '@react-three/drei';

export default function Title() {
  return (
    <>
      <Text
        font='./fonts/bangers-v20-latin-regular.woff'
        fontSize={0.5}
        position={[2, 0.75, 0.25]}
        rotation-y={-1.25}
        maxWidth={2}
        textAlign='center'
      >
        Benjamin Petermann
      </Text>
      <Text
        font='./fonts/bangers-v20-latin-regular.woff'
        fontSize={0.2}
        position={[2, 0.0, 0.2]}
        rotation-y={-1.25}
        maxWidth={2}
      >
        - Click Screen -
      </Text>
    </>
  );
}
