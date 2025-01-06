import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const PlayerVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isPlaying } = useSelector((state: RootState) => state.player);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const bars = 20;
    const barWidth = 2;
    const gap = 1;

    const animate = () => {
      if (!isPlaying) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < bars; i++) {
        const height = isPlaying ? Math.random() * canvas.height * 0.8 : 2;
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillRect(
          i * (barWidth + gap),
          (canvas.height - height) / 2,
          barWidth,
          height
        );
      }

      animationId = requestAnimationFrame(animate);
    };

    if (isPlaying) {
      animate();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isPlaying]);

  return (
    <canvas
      ref={canvasRef}
      width={60}
      height={30}
      className="opacity-60"
    />
  );
};

export default PlayerVisualizer;