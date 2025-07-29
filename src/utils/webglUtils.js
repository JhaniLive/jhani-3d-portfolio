// WebGL utilities for mobile/desktop optimization
export const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    return false;
  }
};

export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const getOptimalCanvasSettings = (isMobile) => ({
  dpr: isMobile ? [1, 1] : [1, 2],
  gl: {
    preserveDrawingBuffer: true,
    powerPreference: isMobile ? "low-power" : "high-performance",
    antialias: !isMobile,
  }
});