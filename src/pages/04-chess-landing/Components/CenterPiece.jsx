export default function CenterPiece({ piece, blackMaterial }) {
  return (
    <mesh
      geometry={piece.geometry}
      scale={piece.scale}
      material={piece.material ?? blackMaterial}
      position-y={-1}
    />
  );
}
