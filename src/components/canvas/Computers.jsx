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

  // Mobile fallback - stunning hero design
  if (useFallback) {
    return (
      <div className="w-full h-full flex items-center justify-center px-4">
        <div className="relative w-full max-w-[320px] h-[400px]">
          {/* Main card with gradient background */}
          <div 
            className="w-full h-full rounded-2xl shadow-2xl overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d1b69 50%, #915eff 100%)',
              boxShadow: '0 25px 50px -12px rgba(145, 94, 255, 0.5)',
            }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-6 right-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center text-white">
              {/* Main icon - subtle floating animation */}
              <div className="mb-6 mobile-fallback-float">
                <svg 
                  className="w-16 h-16 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20 3H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h3l-1 2v1h12v-1l-1-2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 14V5h16v9H4z"/>
                  <circle cx="12" cy="9" r="2"/>
                </svg>
              </div>
              
              {/* Text content */}
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                AI-Powered Developer
              </h3>
              
              <p className="text-sm opacity-90 mb-4 leading-relaxed">
                Crafting innovative solutions with<br/>
                React, AI & 3D Technologies
              </p>
              
              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">React</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">AI</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">3D</span>
              </div>
            </div>
            
            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
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