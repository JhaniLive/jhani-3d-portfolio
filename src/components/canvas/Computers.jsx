import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { shouldUseMobileFallback } from "../../utils/mobileDetect";

const Computers = ({ isMobile }) => {
 
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    // Check if we should use mobile fallback
    setUseFallback(shouldUseMobileFallback());

    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Mobile fallback - show a static image instead
  if (useFallback) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div 
          className="w-[280px] h-[350px] rounded-lg flex items-center justify-center shadow-lg mobile-fallback-float"
          style={{
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          <div className="text-center text-white">
            <div className="text-6xl mb-4 mobile-fallback-rotate" style={{ display: 'inline-block' }}>💻</div>
            <div className="text-xl font-bold mb-2">3D Portfolio</div>
            <div className="text-sm opacity-90">Interactive Experience</div>
            <div className="text-xs opacity-70 mt-2">AI-Powered Developer</div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <Canvas
      frameLoop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: isMobile ? "low-power" : "high-performance",
        antialias: !isMobile
      }}
      onCreated={({ gl }) => {
        gl.physicallyCorrectLights = true
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;