import React, { useEffect, useRef } from 'react';

export function BrachistochroneAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const amplitude = 50;
    const frequency = 0.02;

    function drawCurve() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the hyperbolic curve
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 4);
      
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 4 + 
                 amplitude * Math.sin(x * frequency + time) * 
                 Math.exp(-x * 0.003);
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = '#4F46E5';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Animate a particle along the curve
      const particleX = (time * 50) % canvas.width;
      const particleY = canvas.height / 4 + 
                       amplitude * Math.sin(particleX * frequency + time) * 
                       Math.exp(-particleX * 0.003);

      ctx.beginPath();
      ctx.arc(particleX, particleY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#EF4444';
      ctx.fill();

      time += 0.02;
      requestAnimationFrame(drawCurve);
    }

    drawCurve();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={200}
      className="w-full h-48 rounded-lg bg-gray-100 dark:bg-gray-800"
    />
  );
}