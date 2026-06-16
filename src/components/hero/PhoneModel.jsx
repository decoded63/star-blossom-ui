import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function PhoneModel() {
  const ref = useRef();

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.6) * 0.2;
    ref.current.rotation.x = Math.cos(clock.elapsedTime * 0.5) * 0.03;
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={ref}>
      {/* Body */}
      <mesh castShadow>
        <boxGeometry args={[2, 4, 0.15]} />
        <meshStandardMaterial metalness={1} roughness={0.15} color="#111" />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0, 0.085]}>
        <planeGeometry args={[1.85, 3.8]} />
        <meshStandardMaterial
          emissive="#2563eb"
          emissiveIntensity={0.5}
          color="#050816"
        />
      </mesh>
    </group>
  );
}
