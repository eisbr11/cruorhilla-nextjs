import { FC, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';

export const DivContainer = styled('div')(() => ({
  width: '100dvw',
  display: 'flex',
  height: '100dvh',
  position: 'fixed',
  overflow: 'hidden',
  zIndex: 1,
  backgroundColor: '#CCCCCC',
}));

const CanvasStyled = styled('canvas')(() => ({
  flex: 1,
  width: '100%',
  height: '100%',
  opacity: 0.3,
  zIndex: -1,
}));

interface IPlasterCanvasProps {
  fps?: number;
  scale?: number;
  seed?: number;
}

export const PlasterCanvas: FC<IPlasterCanvasProps> = ({
  fps = 20,
  scale = 0.8,
  seed = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { desynchronized: true });
    if (!ctx) return;

    // Offscreen-sized backing canvas in CSS pixels (low-res); drawImage scales it up.
    const back = document.createElement('canvas');
    const bctx = back.getContext('2d', { desynchronized: true })!;

    // xorshift32 — fast deterministic RNG
    let s = seed | 0 || 1;
    const rnd = () => {
      s ^= s << 13;
      s ^= s >>> 17;
      s ^= s << 5;
      // convert to [0,1)
      return (s >>> 0) / 4294967296;
    };

    // State
    let cssW = 0,
      cssH = 0;
    let bw: number, bh: number; // backing (low-res) size in CSS px
    let imgData: ImageData;
    let u32: Uint32Array;
    let raf = 0;
    const interval = 1000 / Math.max(5, Math.min(60, fps));
    let last = 0;

    const prefersReduced =
      typeof window !== 'undefined' &&
      'matchMedia' in window &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      // Size the display canvas at device scale for crisp edges
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cssW = Math.max(1, Math.floor(canvas.clientWidth || window.innerWidth));
      cssH = Math.max(1, Math.floor(canvas.clientHeight || window.innerHeight));
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Backing resolution (low-res)
      bw = Math.max(1, Math.floor(cssW * scale));
      bh = Math.max(1, Math.floor(cssH * scale));
      back.width = bw;
      back.height = bh;

      imgData = bctx.createImageData(bw, bh);
      u32 = new Uint32Array(imgData.data.buffer);

      // Improve upscale quality (or set to false for blocky)
      ctx.imageSmoothingEnabled = true;
      bctx.imageSmoothingEnabled = false;
    };

    const drawFrame = () => {
      // Fill with random B/W pixels. Using 32-bit writes: 0xAABBGGRR (little-endian).
      // For white: RR=GG=BB=255, AA=255 -> 0xFFFFFFFF; For black: 0xFF000000
      const WHITE = 0xffffffff >>> 0;
      const BLACK = 0xff000000 >>> 0;

      const len = u32.length;
      for (let i = 0; i < len; i++) {
        u32[i] = rnd() >= 0.5 ? WHITE : BLACK;
      }
      bctx.putImageData(imgData, 0, 0);

      // Scale the low-res buffer to the full canvas in one blit
      ctx.clearRect(0, 0, cssW, cssH);
      ctx.drawImage(back, 0, 0, cssW, cssH);
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (prefersReduced || document.hidden) return;
      if (now - last < interval) return;
      last = now;
      drawFrame();
    };

    const onResize = () => resize();
    window.addEventListener('resize', onResize);
    resize();
    raf = requestAnimationFrame(loop);

    // Draw once immediately to avoid flash
    drawFrame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [fps, scale, seed]);

  return <CanvasStyled ref={canvasRef} aria-hidden />;
};
