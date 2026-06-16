import {
  Bloom,
  ChromaticAberration,
  Vignette,
  EffectComposer,
} from "@react-three/postprocessing";

export default function PostFX() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom intensity={1.4} luminanceThreshold={0.25} mipmapBlur />
      <ChromaticAberration offset={[0.0008, 0.0008]} />
      <Vignette darkness={0.8} eskil={false} offset={0.2} />
    </EffectComposer>
  );
}
