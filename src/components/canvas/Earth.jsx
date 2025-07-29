import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { shouldUseMobileFallback } from "../../utils/mobileDetect";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
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

  // Mobile fallback - show animated gradient sphere
  if (useFallback) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div 
          className="w-[200px] h-[200px] rounded-full shadow-lg mobile-fallback-rotate"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #4facfe 0%, #00f2fe 50%, #1e3c72 100%)',
            boxShadow: '0 0 50px rgba(79, 172, 254, 0.5)',
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-transparent via-white/10 to-transparent mobile-fallback-float" />
        </div>
      </div>
    );
  }

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={isMobile ? [1, 1] : [1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: isMobile ? "low-power" : "high-performance",
        antialias: !isMobile
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
