import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import type { Group, Object3D } from "three";
import iphoneAsset from "../../assets/iphone17promax.glb.asset.json";

export default function PhoneModel() {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(iphoneAsset.url);

  // Clone scene so we can modify it without affecting cached original
  const model = useRef<Object3D>(scene.clone());

  useEffect(() => {
    if (!model.current) return;
    model.current.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.6) * 0.2;
    groupRef.current.rotation.x = Math.cos(clock.elapsedTime * 0.5) * 0.03;
    groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={groupRef} scale={15} position={[0, -0.5, 0]} rotation={[0, Math.PI, 0]}>
      <primitive object={model.current} />
    </group>
  );
}
