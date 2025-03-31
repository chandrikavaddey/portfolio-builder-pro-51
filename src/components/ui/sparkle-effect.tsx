
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
    const numberOfSparkles = 20; // Increased number of sparkles
    for (let i = 0; i < numberOfSparkles; i++) {
      setTimeout(() => {
        if (!sparklesContainer) return;
        
        const sparkle = document.createElement('div');
        
        // Randomize sparkle sizes and colors
        const size = 1 + Math.random() * 3;
        const colors = ['#ffffff', '#A15CF7', '#8A2BE2', '#e2d1f9', '#ff00ff', '#d4af37'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        sparkle.className = 'absolute rounded-full opacity-0 z-10';
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.backgroundColor = color;
        sparkle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        
        // Random position around the container with a wider spread
        const containerRect = container.getBoundingClientRect();
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 60; // Increased distance for wider spread
        
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        sparkle.style.left = `calc(50% + ${x}px)`;
        sparkle.style.top = `calc(50% + ${y}px)`;
        
        // Animate with variable duration and more dynamic movement
        const duration = 700 + Math.random() * 600;
        
        // Add a small random movement to make sparkles more dynamic
        const finalX = x + (Math.random() * 20 - 10);
        const finalY = y + (Math.random() * 20 - 10);
        
        sparkle.animate([
          { 
            transform: 'scale(0) rotate(0deg)', 
            opacity: 0 
          },
          { 
            transform: 'scale(1) rotate(180deg)', 
            opacity: 0.9,
            offset: 0.5
          },
          { 
            transform: `scale(0) rotate(360deg) translate(${finalX - x}px, ${finalY - y}px)`, 
            opacity: 0 
          }
        ], {
          duration: duration,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        });
        
        sparklesContainer.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
          if (sparklesContainer.contains(sparkle)) {
            sparklesContainer.removeChild(sparkle);
          }
        }, duration + 100);
      }, i * 30); // Reduced delay between sparkles for more dynamic effect
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
      <div className="relative z-0 transition-all duration-300 hover:scale-105">
        {children}
      </div>
    </div>
  );
};

export default SparkleEffect;
