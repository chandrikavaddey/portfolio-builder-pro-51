
import React, { useState, useRef, useEffect } from 'react';

interface SparkleEffectProps {
  children: React.ReactNode;
}

const SparkleEffect = ({ children }: SparkleEffectProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHovering || !containerRef.current || !sparklesRef.current) return;

    const container = containerRef.current;
    const sparklesContainer = sparklesRef.current;
    
    // Clear previous sparkles
    sparklesContainer.innerHTML = '';
    
    // Create new sparkles
    const numberOfSparkles = 10;
    for (let i = 0; i < numberOfSparkles; i++) {
      setTimeout(() => {
        if (!sparklesContainer) return;
        
        const sparkle = document.createElement('div');
        sparkle.className = 'absolute w-1.5 h-1.5 rounded-full bg-white opacity-0';
        
        // Random position around the container
        const containerRect = container.getBoundingClientRect();
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 30;
        
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        sparkle.style.left = `calc(50% + ${x}px)`;
        sparkle.style.top = `calc(50% + ${y}px)`;
        
        // Animate
        sparkle.animate([
          { 
            transform: 'scale(0)', 
            opacity: 0 
          },
          { 
            transform: 'scale(1)', 
            opacity: 0.8 
          },
          { 
            transform: 'scale(0)', 
            opacity: 0 
          }
        ], {
          duration: 700 + Math.random() * 500,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });
        
        sparklesContainer.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
          if (sparklesContainer.contains(sparkle)) {
            sparklesContainer.removeChild(sparkle);
          }
        }, 1200);
      }, i * 50);
    }
  }, [isHovering]);

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative group"
    >
      <div ref={sparklesRef} className="absolute inset-0 pointer-events-none z-10"></div>
      <div className="relative z-0 transition-transform duration-300 hover:scale-105">
        {children}
      </div>
    </div>
  );
};

export default SparkleEffect;
