/**
 * Utilities for Three.js Canvas responsiveness and performance.
 */

/**
 * Returns the optimal Device Pixel Ratio based on the user's device capabilities.
 * Caps at 2 to avoid massive performance drops on ultra-high-res devices unless explicitly needed.
 */
export function getOptimalDPR(): number {
  if (typeof window === 'undefined') return 1;
  // E.g., limit DPR to 1.5 or 2 for heavy 3D scenes on mobile devices
  return Math.min(window.devicePixelRatio || 1, 2);
}

/**
 * Calculates responsive fov or camera positioning based on screen width.
 * Useful for ensuring 3D objects stay in frame on mobile vs desktop.
 */
export function getResponsiveCameraZ(width: number): number {
  if (width < 640) return 8; // Further away on mobile
  if (width < 1024) return 6; // Mid distance on tablet
  return 5; // Standard distance on desktop
}
