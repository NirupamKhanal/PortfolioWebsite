import React, { useEffect, useRef } from 'react';

export function OCRAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    const text = "Hello World";
    const fontSize = 24;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw text
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = '#4F46E5';
      ctx.fillText(text, 50, canvas.height / 2);

      // Animate scanning effect
      const scanPos = (frame % 100) / 100 * canvas.width;
      ctx.fillStyle = 'rgba(79, 70, 229, 0.2)';
      ctx.fillRect(scanPos - 2, 0, 4, canvas.height);

      // Highlight effect
      if (frame % 200 < 100) {
        ctx.fillStyle = 'rgba(79, 70, 229, 0.1)';
        ctx.fillRect(45, canvas.height / 2 - fontSize, 
                    ctx.measureText(text).width + 10, fontSize + 10);
      }

      frame++;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={200}
      className="w-full h-48 rounded-lg bg-white dark:bg-gray-800"
    />
  );
}