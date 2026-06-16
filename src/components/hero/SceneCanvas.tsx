import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import PhoneModel from "./PhoneModel";
import ParticleSystem from "./ParticleSystem";
import Lighting from "./Lighting";
import PostFX from "./PostFX";
import CameraRig from "./CameraRig";

export default function SceneCanvas() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 7], fov: 45 }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#050816"]} />
        <CameraRig />
        <Lighting />
        <PhoneModel />
        <ParticleSystem />
        <Environment preset="city" />
        <PostFX />
      </Suspense>
    </Canvas>
  );
}
