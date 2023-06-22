import { PresentationControls } from '@react-three/drei';
import Chessboard from './Chessboard';

export default function CenterPiece({ piece, blackMaterial }) {
  return (
    <PresentationControls
      rotation={[0.13, 0.1, 0]}
      polar={[-0.2, 0.8]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 2, tension: 400 }}
    >
      <mesh
        geometry={piece.geometry}
        scale={0.3}
        material={piece.material ?? blackMaterial}
        position-y={-1}
      />
      <Chessboard />
    </PresentationControls>
  );
}
