
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
    const numberOfSparkles = 15; // Increased number of sparkles
    for (let i = 0; i < numberOfSparkles; i++) {
      setTimeout(() => {
        if (!sparklesContainer) return;
        
        const sparkle = document.createElement('div');
        
        // Randomize sparkle sizes and colors
        const size = 1 + Math.random() * 2;
        const colors = ['#ffffff', '#A15CF7', '#8A2BE2', '#e2d1f9'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        sparkle.className = 'absolute rounded-full opacity-0';
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.backgroundColor = color;
        
        // Random position around the container
        const containerRect = container.getBoundingClientRect();
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 50; // Increased distance for wider spread
        
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        sparkle.style.left = `calc(50% + ${x}px)`;
        sparkle.style.top = `calc(50% + ${y}px)`;
        
        // Animate with variable duration
        const duration = 700 + Math.random() * 500;
        
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
      }, i * 40); // Reduced delay between sparkles for more dynamic effect
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
