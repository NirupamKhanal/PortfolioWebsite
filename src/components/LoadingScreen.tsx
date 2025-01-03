import React, { useState, useEffect } from 'react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 bg-white dark:bg-black transition-colors duration-500 
                 flex items-center justify-center z-50"
      style={{ opacity, transition: 'opacity 0.5s ease-out' }}
    >
      <div className="max-w-2xl p-8">
        <p className="text-2xl md:text-3xl text-gray-800 dark:text-gray-200 text-center 
                     font-light transition-all duration-500 animate-fade-in">
          Website still in dev labs, formal deployment soon ...
        </p>
      </div>
    </div>
  );
}