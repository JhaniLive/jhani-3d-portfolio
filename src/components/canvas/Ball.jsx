import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { shouldUseMobileFallback } from "../../utils/mobileDetect";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    // Check if we should use mobile fallback
    setUseFallback(shouldUseMobileFallback());

    // Check if mobile
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Mobile fallback - show static image
  if (useFallback) {
    return (
      <div className="w-28 h-28 flex justify-center items-center bg-tertiary rounded-full p-2 shadow-lg tech-icon-fallback mobile-fallback-float">
        <img 
          src={icon} 
          alt="technology" 
          className="w-16 h-16 object-contain filter brightness-110"
        />
      </div>
    );
  }

  return (
    <Canvas
      frameloop='demand'
      dpr={isMobile ? [1, 1] : [1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: isMobile ? "low-power" : "high-performance",
        antialias: !isMobile
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
