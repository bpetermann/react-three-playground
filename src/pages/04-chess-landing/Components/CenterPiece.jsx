export default function CenterPiece({ piece, blackMaterial }) {
  return (
    <mesh
      geometry={piece.geometry}
      scale={0.3}
      material={piece.material ?? blackMaterial}
      position-y={-1}
    />
  );
}
