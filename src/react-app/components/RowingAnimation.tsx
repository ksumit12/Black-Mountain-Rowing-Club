import { useEffect, useRef } from 'react';

export default function RowingAnimation() {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animationRef.current) return;

    // Don't show on mobile to avoid performance issues
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      animationRef.current.style.display = 'none';
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const updateAnimation = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollTop / docHeight, 1);

      // Simple rowing motion
      const rowers = animationRef.current?.querySelectorAll('.rower');
      rowers?.forEach((rower, index) => {
        const phaseOffset = index * 0.3; // Stagger the rowing motion
        const rowingCycle = ((scrollProgress * 4) + phaseOffset) % 1;
        
        // Simple back and forth motion for arms
        const armAngle = Math.sin(rowingCycle * Math.PI * 2) * 25;
        const oarAngle = Math.sin(rowingCycle * Math.PI * 2) * 30;
        
        const arm = rower.querySelector('.arm') as HTMLElement;
        const oar = rower.querySelector('.oar') as HTMLElement;
        
        if (arm) arm.style.transform = `rotate(${armAngle}deg)`;
        if (oar) oar.style.transform = `rotate(${oarAngle}deg)`;
      });

      // Boat subtle movement
      const boat = animationRef.current?.querySelector('.boat');
      if (boat) {
        const rockAngle = Math.sin(scrollProgress * Math.PI * 3) * 0.8;
        (boat as HTMLElement).style.transform = `rotate(${rockAngle}deg)`;
      }
    };

    // Use requestAnimationFrame for smooth updates
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateAnimation();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateAnimation(); // Initial call

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div 
      ref={animationRef}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 pointer-events-none"
      style={{
        opacity: 0,
        animation: 'fadeInRight 1s ease-out 2s forwards'
      }}
    >
      <svg
        width="220"
        height="120"
        viewBox="0 0 220 120"
        className="drop-shadow-lg"
        style={{
          filter: 'drop-shadow(3px 3px 12px rgba(0,0,0,0.4))'
        }}
      >
        {/* Boat hull - sleek rowing shell */}
        <g className="boat" style={{ transformOrigin: '110px 60px' }}>
          <ellipse
            cx="110"
            cy="60"
            rx="100"
            ry="8"
            fill="#1f2937"
            stroke="#dc2626"
            strokeWidth="2"
          />
          
          {/* Boat center line */}
          <line x1="20" y1="60" x2="200" y2="60" stroke="#dc2626" strokeWidth="1" />
          
          {/* Oarlocks */}
          <circle cx="70" cy="55" r="2" fill="#6b7280"/>
          <circle cx="110" cy="55" r="2" fill="#6b7280"/>
          <circle cx="150" cy="55" r="2" fill="#6b7280"/>
        </g>
        
        {/* Rower 1 */}
        <g className="rower">
          {/* Seat */}
          <rect x="66" y="58" width="8" height="4" fill="#1f2937" rx="2"/>
          
          {/* Body silhouette */}
          <circle cx="70" cy="45" r="4" fill="#dc2626"/>
          <rect x="68" y="49" width="4" height="10" fill="#dc2626" rx="2"/>
          
          {/* Arm */}
          <g className="arm" style={{ transformOrigin: '70px 52px' }}>
            <line x1="70" y1="52" x2="90" y2="50" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
          </g>
          
          {/* Oar */}
          <g className="oar" style={{ transformOrigin: '70px 55px' }}>
            <line x1="35" y1="58" x2="105" y2="52" stroke="#8b4513" strokeWidth="2" strokeLinecap="round"/>
            <ellipse cx="30" cy="59" rx="8" ry="3" fill="#dc2626"/>
          </g>
        </g>
        
        {/* Rower 2 */}
        <g className="rower">
          {/* Seat */}
          <rect x="106" y="58" width="8" height="4" fill="#1f2937" rx="2"/>
          
          {/* Body silhouette */}
          <circle cx="110" cy="45" r="4" fill="#dc2626"/>
          <rect x="108" y="49" width="4" height="10" fill="#dc2626" rx="2"/>
          
          {/* Arm */}
          <g className="arm" style={{ transformOrigin: '110px 52px' }}>
            <line x1="110" y1="52" x2="130" y2="50" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
          </g>
          
          {/* Oar */}
          <g className="oar" style={{ transformOrigin: '110px 55px' }}>
            <line x1="75" y1="58" x2="145" y2="52" stroke="#8b4513" strokeWidth="2" strokeLinecap="round"/>
            <ellipse cx="70" cy="59" rx="8" ry="3" fill="#dc2626"/>
          </g>
        </g>
        
        {/* Rower 3 */}
        <g className="rower">
          {/* Seat */}
          <rect x="146" y="58" width="8" height="4" fill="#1f2937" rx="2"/>
          
          {/* Body silhouette */}
          <circle cx="150" cy="45" r="4" fill="#dc2626"/>
          <rect x="148" y="49" width="4" height="10" fill="#dc2626" rx="2"/>
          
          {/* Arm */}
          <g className="arm" style={{ transformOrigin: '150px 52px' }}>
            <line x1="150" y1="52" x2="170" y2="50" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
          </g>
          
          {/* Oar */}
          <g className="oar" style={{ transformOrigin: '150px 55px' }}>
            <line x1="115" y1="58" x2="185" y2="52" stroke="#8b4513" strokeWidth="2" strokeLinecap="round"/>
            <ellipse cx="110" cy="59" rx="8" ry="3" fill="#dc2626"/>
          </g>
        </g>
      </svg>
      
      {/* Scroll indicator */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-xs text-red-600 font-medium uppercase tracking-wide">
          Scroll to Row
        </div>
      </div>
    </div>
  );
}
