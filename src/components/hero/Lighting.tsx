export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <spotLight position={[5, 8, 5]} intensity={80} color="#3b82f6" />
      <pointLight position={[-4, 0, 3]} intensity={25} color="#60a5fa" />
      <pointLight position={[3, -1, 2]} intensity={20} color="#ffffff" />
    </>
  );
}
