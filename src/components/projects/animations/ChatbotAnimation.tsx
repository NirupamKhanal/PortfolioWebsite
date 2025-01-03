import React, { useEffect, useRef } from 'react';

export function ChatbotAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const messages = [
      { text: "Hello!", isUser: false },
      { text: "Hi there!", isUser: true },
      { text: "How can I help?", isUser: false }
    ];
    
    let currentMessage = 0;
    let charIndex = 0;
    
    function drawChat() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i <= currentMessage; i++) {
        const message = messages[i];
        const text = i === currentMessage 
          ? message.text.substring(0, charIndex)
          : message.text;
        
        const y = 40 + i * 60;
        const x = message.isUser ? canvas.width - 20 : 20;
        
        // Draw bubble
        ctx.beginPath();
        ctx.roundRect(
          message.isUser ? x - 150 : x,
          y,
          150,
          40,
          10
        );
        ctx.fillStyle = message.isUser ? '#4F46E5' : '#E5E7EB';
        ctx.fill();
        
        // Draw text
        ctx.fillStyle = message.isUser ? '#FFFFFF' : '#000000';
        ctx.font = '14px Arial';
        ctx.textAlign = message.isUser ? 'right' : 'left';
        ctx.fillText(text, message.isUser ? x - 10 : x + 10, y + 25);
      }

      charIndex++;
      if (charIndex > messages[currentMessage].text.length) {
        charIndex = 0;
        if (currentMessage < messages.length - 1) {
          currentMessage++;
        } else {
          currentMessage = 0;
        }
      }

      requestAnimationFrame(drawChat);
    }

    drawChat();
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