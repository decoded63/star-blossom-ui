import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

export default function CameraRig() {
  const { camera } = useThree();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      camera.position,
      { z: 12, y: 1 },
      { z: 7, y: 0, duration: 1.4, ease: "power4.out" }
    );

    tl.to(camera.rotation, { y: 0.08, duration: 3, ease: "sine.inOut" });

    return () => {
      tl.kill();
    };
  }, [camera]);

  return null;
}
