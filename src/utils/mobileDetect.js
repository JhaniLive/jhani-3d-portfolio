// Mobile detection and WebGL support utilities
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isTabletDevice = () => {
  return /iPad|Android.*(?!.*Mobile)/i.test(navigator.userAgent);
};

export const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return false;
    
    // Additional check for mobile WebGL issues
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      // Check for problematic mobile renderers
      if (renderer.includes('SwiftShader') || renderer.includes('Mesa')) {
        return false;
      }
    }
    
    return true;
  } catch (e) {
    return false;
  }
};

export const shouldUseMobileFallback = () => {
  return isMobileDevice() || !checkWebGLSupport();
};