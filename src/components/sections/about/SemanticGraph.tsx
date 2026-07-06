import React, { useEffect } from 'react';
import { motion, motionValue, animate, MotionValue } from 'framer-motion';

// ─── 22 Nodes ────────────────────────────────────────────────────────────────
const NODES = [
  { id: 0,  x: 60,   y: 80  }, { id: 1,  x: 220,  y: 50  },
  { id: 2,  x: 400,  y: 100 }, { id: 3,  x: 590,  y: 65  },
  { id: 4,  x: 770,  y: 110 }, { id: 5,  x: 960,  y: 70  },
  { id: 6,  x: 1130, y: 120 }, { id: 7,  x: 130,  y: 220 },
  { id: 8,  x: 310,  y: 200 }, { id: 9,  x: 500,  y: 240 },
  { id: 10, x: 680,  y: 210 }, { id: 11, x: 860,  y: 250 },
  { id: 12, x: 1060, y: 215 }, { id: 13, x: 80,   y: 370 },
  { id: 14, x: 250,  y: 350 }, { id: 15, x: 440,  y: 390 },
  { id: 16, x: 630,  y: 360 }, { id: 17, x: 820,  y: 395 },
  { id: 18, x: 1010, y: 360 }, { id: 19, x: 170,  y: 490 },
  { id: 20, x: 520,  y: 510 }, { id: 21, x: 880,  y: 495 },
];

// ─── 36 Edges ────────────────────────────────────────────────────────────────
const EDGES: [number, number][] = [
  // Row 1
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],
  // Row 2
  [7,8],[8,9],[9,10],[10,11],[11,12],
  // Row 3
  [13,14],[14,15],[15,16],[16,17],[17,18],
  // Row 1 → Row 2
  [0,7],[1,7],[1,8],[2,8],[2,9],[3,9],[3,10],[4,10],[4,11],[5,11],[5,12],[6,12],
  // Row 2 → Row 3
  [7,13],[8,14],[9,15],[10,16],[11,17],[12,18],
  // Row 3 → Row 4
  [13,19],[14,19],[15,20],[16,20],[17,21],[18,21],
  // Diagonals
  [8,10],[10,12],[14,16],[16,18],
];

// ─── Edge Index Map ───────────────────────────────────────────────────────────
const EDGE_INDEX = new Map<string, number>();
EDGES.forEach(([a, b], i) => {
  EDGE_INDEX.set(`${a}-${b}`, i);
  EDGE_INDEX.set(`${b}-${a}`, i);
});

// ─── Module-level Motion Values (created once, survive re-renders) ────────────
const EDGE_OPS  = EDGES.map(() => motionValue(0.28));
const EDGE_WDS  = EDGES.map(() => motionValue(1.5));
const SIG_X     = motionValue(NODES[0].x);
const SIG_Y     = motionValue(NODES[0].y);
const SIG_SCALE = motionValue(1);
const SIG2_X    = motionValue(NODES[6].x);
const SIG2_Y    = motionValue(NODES[6].y);
const SIG2_OP   = motionValue(0);
const TRAIL_X   = [motionValue(NODES[0].x), motionValue(NODES[0].x), motionValue(NODES[0].x)];
const TRAIL_Y   = [motionValue(NODES[0].y), motionValue(NODES[0].y), motionValue(NODES[0].y)];

// ─── Signal Traversal Paths ───────────────────────────────────────────────────
// All consecutive pairs MUST exist as edges (bidirectional)
const PRIMARY_PATH = [
  0,1,8,9,15,20,16,10,4,5,12,11,17,21,18,17,16,15,
  14,13,7,0,1,2,9,10,3,4,11,12,6,5,4,3,2,1,0
];
const SECONDARY_PATH = [
  6,12,11,10,9,15,20,16,17,21,18,12,5,6
];

// ─── Stable Per-Node Params (no Math.random at render) ───────────────────────
const NODE_PARAMS = NODES.map((_, i) => ({
  od:   4 + ((i * 1.3)  % 4),       // opacity animation duration
  od_d: (i * 0.65) % 4,             // opacity delay
  dd:   10 + ((i * 1.7) % 8),       // drift duration
  dx:   (i%3===0?[0,2,-1.5,0] : i%3===1?[0,-2,1,0]   : [0,1.5,-2,0]),
  dy:   (i%4===0?[0,1,-0.8,0]: i%4===1?[0,-1,0.5,0]: i%4===2?[0,0.8,-1,0]:[0,-0.5,1,0]),
}));

// ─── Utility ─────────────────────────────────────────────────────────────────
const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

// ─── Traversal Engine ────────────────────────────────────────────────────────
async function traversePath(
  path: number[],
  sigX: MotionValue<number>,
  sigY: MotionValue<number>,
  sigScale: MotionValue<number> | null,
  withTrail: boolean,
  cancelled: { v: boolean },
) {
  for (let i = 0; i < path.length - 1; i++) {
    if (cancelled.v) return;
    const fromIdx = path[i];
    const toIdx   = path[i + 1];
    const from    = NODES[fromIdx];
    const to      = NODES[toIdx];

    // Shift trail positions before moving
    if (withTrail) {
      animate(TRAIL_X[2], TRAIL_X[1].get(), { duration: 0.18 });
      animate(TRAIL_Y[2], TRAIL_Y[1].get(), { duration: 0.18 });
      animate(TRAIL_X[1], TRAIL_X[0].get(), { duration: 0.18 });
      animate(TRAIL_Y[1], TRAIL_Y[0].get(), { duration: 0.18 });
      animate(TRAIL_X[0], from.x, { duration: 0.18 });
      animate(TRAIL_Y[0], from.y, { duration: 0.18 });
    }

    // Activate the traversed edge
    const edgeIdx = EDGE_INDEX.get(`${fromIdx}-${toIdx}`);
    if (edgeIdx !== undefined) {
      animate(EDGE_OPS[edgeIdx], 0.80, { duration: 0.22 });
      animate(EDGE_WDS[edgeIdx], 2.5,  { duration: 0.22 });
    }

    // Move signal with smooth cubic bezier
    await Promise.all([
      animate(sigX, to.x, { duration: 1.6, ease: [0.42, 0, 0.58, 1] }),
      animate(sigY, to.y, { duration: 1.6, ease: [0.42, 0, 0.58, 1] }),
    ]);

    if (cancelled.v) return;

    // Deactivate edge (fade back slowly)
    if (edgeIdx !== undefined) {
      animate(EDGE_OPS[edgeIdx], 0.28, { duration: 0.85 });
      animate(EDGE_WDS[edgeIdx], 1.5,  { duration: 0.85 });
    }

    // Pulse + pause at node (primary only)
    if (sigScale) {
      await animate(sigScale, [1, 1.35, 1], { duration: 0.42, ease: [0.25, 0, 0.35, 1] });
    }
    await sleep(220);
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// BACKGROUND GRAPH — static, React.memo, never re-renders
// ═══════════════════════════════════════════════════════════════════════════════
export const SemanticGraphBackground = React.memo(function SemanticGraphBackground() {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: '115%', height: '115%', marginLeft: '-7.5%', marginTop: '-7.5%' }}
      aria-hidden="true"
    >
      {/* Edges — opacity & width driven by module-level motion values */}
      {EDGES.map(([a, b], i) => (
        <motion.line
          key={`e-${i}`}
          x1={NODES[a].x} y1={NODES[a].y}
          x2={NODES[b].x} y2={NODES[b].y}
          stroke="#AFC8FF"
          style={{ strokeOpacity: EDGE_OPS[i], strokeWidth: EDGE_WDS[i] }}
        />
      ))}

      {/* Nodes — drift + breathe independently */}
      {NODES.map((node, i) => {
        const p = NODE_PARAMS[i];
        return (
          <motion.g
            key={`ng-${i}`}
            animate={{ x: p.dx, y: p.dy }}
            transition={{ duration: p.dd, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
          >
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={5}
              fill="#AFC8FF"
              animate={{ opacity: [0.65, 0.95, 0.65], scale: [1, 1.08, 1] }}
              transition={{
                duration: p.od,
                delay: p.od_d,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'mirror',
              }}
              style={{ originX: `${node.x}px`, originY: `${node.y}px` }}
            />
          </motion.g>
        );
      })}
    </svg>
  );
});

// ═══════════════════════════════════════════════════════════════════════════════
// SIGNAL LAYER — animated particles, React.memo, isolated from background
// ═══════════════════════════════════════════════════════════════════════════════
export const SemanticSignal = React.memo(function SemanticSignal() {
  useEffect(() => {
    const cancelled = { v: false };

    // Reset all motion values to clean initial state
    SIG_X.set(NODES[PRIMARY_PATH[0]].x);
    SIG_Y.set(NODES[PRIMARY_PATH[0]].y);
    SIG_SCALE.set(1);
    SIG2_OP.set(0);
    EDGE_OPS.forEach(mv => mv.set(0.28));
    EDGE_WDS.forEach(mv => mv.set(1.5));
    TRAIL_X.forEach(mv => mv.set(NODES[PRIMARY_PATH[0]].x));
    TRAIL_Y.forEach(mv => mv.set(NODES[PRIMARY_PATH[0]].y));

    // Primary signal — continuous infinite loop
    (async () => {
      while (!cancelled.v) {
        await traversePath(PRIMARY_PATH, SIG_X, SIG_Y, SIG_SCALE, true, cancelled);
      }
    })();

    // Secondary ambient signal — appears every ~12s, traverses a shorter path
    (async () => {
      await sleep(8000);
      while (!cancelled.v) {
        SIG2_X.set(NODES[SECONDARY_PATH[0]].x);
        SIG2_Y.set(NODES[SECONDARY_PATH[0]].y);
        await animate(SIG2_OP, 0.5, { duration: 0.6 });
        await traversePath(SECONDARY_PATH, SIG2_X, SIG2_Y, null, false, cancelled);
        await animate(SIG2_OP, 0, { duration: 0.9 });
        await sleep(10000);
      }
    })();

    return () => { cancelled.v = true; };
  }, []);

  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      style={{
        width: '115%',
        height: '115%',
        marginLeft: '-7.5%',
        marginTop: '-7.5%',
        position: 'absolute',
        inset: 0,
      }}
      aria-hidden="true"
    >
      {/* Trail circles — fade behind the primary signal */}
      {TRAIL_X.map((tx, i) => (
        <motion.g key={`tr-${i}`} style={{ x: tx, y: TRAIL_Y[i] }}>
          <circle
            cx={0} cy={0}
            r={Math.max(1, 3.5 - i)}
            fill="#2563EB"
            opacity={(3 - i) / 3 * 0.22}
          />
        </motion.g>
      ))}

      {/* Secondary ambient signal */}
      <motion.g style={{ x: SIG2_X, y: SIG2_Y, opacity: SIG2_OP }}>
        <circle
          cx={0} cy={0} r={3.5}
          fill="#3B82F6"
          style={{ filter: 'drop-shadow(0 0 4px rgba(59,130,246,0.5))' } as React.CSSProperties}
        />
      </motion.g>

      {/* Primary signal */}
      <motion.g style={{ x: SIG_X, y: SIG_Y, scale: SIG_SCALE, transformOrigin: '0px 0px' }}>
        <circle
          cx={0} cy={0} r={6}
          fill="#2563EB"
          style={{
            filter: [
              'drop-shadow(0 0 6px rgba(59,130,246,0.5))',
              'drop-shadow(0 0 12px rgba(59,130,246,0.35))',
              'drop-shadow(0 0 24px rgba(59,130,246,0.15))',
            ].join(' '),
          } as React.CSSProperties}
        />
      </motion.g>
    </svg>
  );
});
