import { useState } from 'react';
import { useDevice } from '@/hooks/useDevice';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Icons } from '@/constants/icons';

/**
 * A floating development tool to help monitor responsive behavior.
 * Only rendered in development mode.
 */
export function ResponsiveHelper() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  
  const { windowWidth, breakpoint, isTouchDevice } = useDevice();
  const prefersReducedMotion = useReducedMotion();
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

  // Ensure this is strictly development only
  if (import.meta.env.PROD || !isVisible) return null;

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 z-[9999] flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white shadow-lg backdrop-blur hover:bg-slate-900 transition-colors"
        title="Show Responsive Helper"
      >
        <Icons.Activity className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] w-72 rounded-lg border border-slate-700/50 bg-slate-900/80 p-4 text-xs text-slate-300 shadow-2xl backdrop-blur-md transition-all">
      <div className="mb-3 flex items-center justify-between border-b border-slate-700 pb-2">
        <h4 className="font-mono font-bold text-white flex items-center gap-2">
          <Icons.Activity className="h-4 w-4 text-emerald-400" /> Dev Helper
        </h4>
        <div className="flex gap-2">
          <button onClick={() => setIsMinimized(true)} className="hover:text-white"><Icons.Menu className="h-4 w-4" /></button>
          <button onClick={() => setIsVisible(false)} className="hover:text-red-400"><Icons.X className="h-4 w-4" /></button>
        </div>
      </div>

      <div className="space-y-2 font-mono">
        <div className="flex justify-between">
          <span className="text-slate-400">Breakpoint:</span>
          <span className="font-bold text-white uppercase">{breakpoint}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Viewport:</span>
          <span className="text-white">{windowWidth}px</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">DPR:</span>
          <span className="text-white">{dpr.toFixed(1)}x</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Touch:</span>
          <span className={isTouchDevice ? 'text-emerald-400' : 'text-slate-500'}>
            {isTouchDevice ? 'Yes' : 'No'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Motion:</span>
          <span className={prefersReducedMotion ? 'text-amber-400' : 'text-slate-500'}>
            {prefersReducedMotion ? 'Reduced' : 'Full'}
          </span>
        </div>
      </div>
    </div>
  );
}
