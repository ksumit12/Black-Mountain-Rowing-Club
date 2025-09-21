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

      // Proper rowing mechanics with correct stroke phases
      const rowers = animationRef.current?.querySelectorAll('.rower');
      rowers?.forEach((rower, index) => {
        const phaseOffset = index * 0.25; // Stagger the rowing motion (4 rowers)
        const rowingCycle = ((scrollProgress * 6) + phaseOffset) % 1;
        
        // Rowing stroke phases based on proper technique
        let oarAngle, shoulderAngle, elbowAngle, torsoAngle, seatPosition, bladeRoll;
        
        if (rowingCycle < 0.15) {
          // Catch phase (0-15%)
          const catchProgress = rowingCycle / 0.15;
          oarAngle = -22 + (catchProgress * 12); // -22° to -10°
          shoulderAngle = 55 - (catchProgress * 15); // 55° to 40°
          elbowAngle = 70 - (catchProgress * 20); // 70° to 50°
          torsoAngle = -3 + (catchProgress * 1); // -3° to -2°
          seatPosition = 0; // Front
          bladeRoll = 0; // Squared
        } else if (rowingCycle < 0.35) {
          // Early drive (15-35%)
          const driveProgress = (rowingCycle - 0.15) / 0.20;
          oarAngle = -10 + (driveProgress * 15); // -10° to +5°
          shoulderAngle = 40 - (driveProgress * 15); // 40° to 25°
          elbowAngle = 50 - (driveProgress * 25); // 50° to 25°
          torsoAngle = -2 + (driveProgress * 2); // -2° to 0°
          seatPosition = driveProgress * 60; // 0% to 60%
          bladeRoll = 0; // Squared
        } else if (rowingCycle < 0.60) {
          // Mid drive to finish (35-60%)
          const finishProgress = (rowingCycle - 0.35) / 0.25;
          oarAngle = 5 + (finishProgress * 13); // +5° to +18°
          shoulderAngle = 25 - (finishProgress * 10); // 25° to 15°
          elbowAngle = 25 + (finishProgress * 15); // 25° to 40°
          torsoAngle = 0 + (finishProgress * 3); // 0° to +3°
          seatPosition = 60 + (finishProgress * 40); // 60% to 100%
          bladeRoll = finishProgress * 16; // 0° to +16° (feather)
        } else if (rowingCycle < 0.75) {
          // Hands away (60-75%)
          const handsAwayProgress = (rowingCycle - 0.60) / 0.15;
          oarAngle = 18 - (handsAwayProgress * 10); // +18° to +8°
          shoulderAngle = 15 + (handsAwayProgress * 10); // 15° to 25°
          elbowAngle = 40 - (handsAwayProgress * 20); // 40° to 20°
          torsoAngle = 3 - (handsAwayProgress * 1); // +3° to +2°
          seatPosition = 100 - (handsAwayProgress * 30); // 100% to 70%
          bladeRoll = 16; // Feathered
        } else if (rowingCycle < 0.90) {
          // Recovery (75-90%)
          const recoveryProgress = (rowingCycle - 0.75) / 0.15;
          oarAngle = 8 - (recoveryProgress * 16); // +8° to -8°
          shoulderAngle = 25 + (recoveryProgress * 15); // 25° to 40°
          elbowAngle = 20 + (recoveryProgress * 30); // 20° to 50°
          torsoAngle = 2 - (recoveryProgress * 3); // +2° to -1°
          seatPosition = 70 - (recoveryProgress * 40); // 70% to 30%
          bladeRoll = 16 - (recoveryProgress * 16); // 16° to 0° (square)
        } else {
          // Return to catch (90-100%)
          const returnProgress = (rowingCycle - 0.90) / 0.10;
          oarAngle = -8 - (returnProgress * 14); // -8° to -22°
          shoulderAngle = 40 + (returnProgress * 15); // 40° to 55°
          elbowAngle = 50 + (returnProgress * 20); // 50° to 70°
          torsoAngle = -1 - (returnProgress * 2); // -1° to -3°
          seatPosition = 30 - (returnProgress * 30); // 30% to 0%
          bladeRoll = 0; // Squared
        }
        
        // Apply transformations with proper pivot points
        const upperArm = rower.querySelector('.upper-arm') as HTMLElement;
        const forearm = rower.querySelector('.forearm') as HTMLElement;
        const oar = rower.querySelector('.oar') as HTMLElement;
        const body = rower.querySelector('.body') as HTMLElement;
        const seat = rower.querySelector('.seat') as HTMLElement;
        const blade = rower.querySelector('.blade') as HTMLElement;
        
        if (upperArm) upperArm.style.transform = `rotate(${shoulderAngle}deg)`;
        if (forearm) forearm.style.transform = `rotate(${elbowAngle}deg)`;
        if (oar) oar.style.transform = `rotate(${oarAngle}deg)`;
        if (body) body.style.transform = `rotate(${torsoAngle}deg)`;
        if (seat) seat.style.transform = `translateX(${seatPosition * 0.3}px)`;
        if (blade) blade.style.transform = `rotate(${bladeRoll}deg)`;
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
        width="280"
        height="140"
        viewBox="0 0 280 140"
        className="drop-shadow-lg"
        style={{
          filter: 'drop-shadow(3px 3px 12px rgba(0,0,0,0.4))'
        }}
      >
        {/* Boat hull - sleek rowing shell */}
        <g className="boat" style={{ transformOrigin: '140px 70px' }}>
          <ellipse
            cx="140"
            cy="70"
            rx="130"
            ry="10"
            fill="#1f2937"
            stroke="#dc2626"
            strokeWidth="2"
          />
          
          {/* Boat center line */}
          <line x1="20" y1="70" x2="260" y2="70" stroke="#dc2626" strokeWidth="1" />
          
          {/* Oarlocks */}
          <circle cx="60" cy="65" r="2" fill="#6b7280"/>
          <circle cx="100" cy="65" r="2" fill="#6b7280"/>
          <circle cx="140" cy="65" r="2" fill="#6b7280"/>
          <circle cx="180" cy="65" r="2" fill="#6b7280"/>
        </g>
        
        {/* Rower 1 */}
        <g className="rower">
          {/* Seat */}
          <rect className="seat" x="56" y="68" width="8" height="4" fill="#1f2937" rx="2" style={{ transformOrigin: '60px 70px' }}/>
          
          {/* Body with realistic proportions */}
          <g className="body" style={{ transformOrigin: '60px 55px' }}>
            <circle cx="60" cy="45" r="5" fill="#dc2626"/>
            <rect x="57" y="50" width="6" height="12" fill="#dc2626" rx="3"/>
          </g>
          
          {/* Upper arm */}
          <g className="upper-arm" style={{ transformOrigin: '60px 55px' }}>
            <line x1="60" y1="55" x2="75" y2="52" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
            
            {/* Forearm */}
            <g className="forearm" style={{ transformOrigin: '75px 52px' }}>
              <line x1="75" y1="52" x2="90" y2="50" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
            </g>
          </g>
          
          {/* Oar */}
          <g className="oar" style={{ transformOrigin: '60px 65px' }}>
            <line x1="25" y1="68" x2="95" y2="62" stroke="#8b4513" strokeWidth="3" strokeLinecap="round"/>
            <g className="blade" style={{ transformOrigin: '20px 69px' }}>
              <ellipse cx="20" cy="69" rx="10" ry="4" fill="#dc2626"/>
            </g>
          </g>
        </g>
        
        {/* Rower 2 */}
        <g className="rower">
          {/* Seat */}
          <rect className="seat" x="96" y="68" width="8" height="4" fill="#1f2937" rx="2" style={{ transformOrigin: '100px 70px' }}/>
          
          {/* Body with realistic proportions */}
          <g className="body" style={{ transformOrigin: '100px 55px' }}>
            <circle cx="100" cy="45" r="5" fill="#dc2626"/>
            <rect x="97" y="50" width="6" height="12" fill="#dc2626" rx="3"/>
          </g>
          
          {/* Upper arm */}
          <g className="upper-arm" style={{ transformOrigin: '100px 55px' }}>
            <line x1="100" y1="55" x2="115" y2="52" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
            
            {/* Forearm */}
            <g className="forearm" style={{ transformOrigin: '115px 52px' }}>
              <line x1="115" y1="52" x2="130" y2="50" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
            </g>
          </g>
          
          {/* Oar */}
          <g className="oar" style={{ transformOrigin: '100px 65px' }}>
            <line x1="65" y1="68" x2="135" y2="62" stroke="#8b4513" strokeWidth="3" strokeLinecap="round"/>
            <g className="blade" style={{ transformOrigin: '60px 69px' }}>
              <ellipse cx="60" cy="69" rx="10" ry="4" fill="#dc2626"/>
            </g>
          </g>
        </g>
        
        {/* Rower 3 */}
        <g className="rower">
          {/* Seat */}
          <rect className="seat" x="136" y="68" width="8" height="4" fill="#1f2937" rx="2" style={{ transformOrigin: '140px 70px' }}/>
          
          {/* Body with realistic proportions */}
          <g className="body" style={{ transformOrigin: '140px 55px' }}>
            <circle cx="140" cy="45" r="5" fill="#dc2626"/>
            <rect x="137" y="50" width="6" height="12" fill="#dc2626" rx="3"/>
          </g>
          
          {/* Upper arm */}
          <g className="upper-arm" style={{ transformOrigin: '140px 55px' }}>
            <line x1="140" y1="55" x2="155" y2="52" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
            
            {/* Forearm */}
            <g className="forearm" style={{ transformOrigin: '155px 52px' }}>
              <line x1="155" y1="52" x2="170" y2="50" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
            </g>
          </g>
          
          {/* Oar */}
          <g className="oar" style={{ transformOrigin: '140px 65px' }}>
            <line x1="105" y1="68" x2="175" y2="62" stroke="#8b4513" strokeWidth="3" strokeLinecap="round"/>
            <g className="blade" style={{ transformOrigin: '100px 69px' }}>
              <ellipse cx="100" cy="69" rx="10" ry="4" fill="#dc2626"/>
            </g>
          </g>
        </g>
        
        {/* Rower 4 */}
        <g className="rower">
          {/* Seat */}
          <rect className="seat" x="176" y="68" width="8" height="4" fill="#1f2937" rx="2" style={{ transformOrigin: '180px 70px' }}/>
          
          {/* Body with realistic proportions */}
          <g className="body" style={{ transformOrigin: '180px 55px' }}>
            <circle cx="180" cy="45" r="5" fill="#dc2626"/>
            <rect x="177" y="50" width="6" height="12" fill="#dc2626" rx="3"/>
          </g>
          
          {/* Upper arm */}
          <g className="upper-arm" style={{ transformOrigin: '180px 55px' }}>
            <line x1="180" y1="55" x2="195" y2="52" stroke="#dc2626" strokeWidth="3" strokeLinecap="round"/>
            
            {/* Forearm */}
            <g className="forearm" style={{ transformOrigin: '195px 52px' }}>
              <line x1="195" y1="52" x2="210" y2="50" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
            </g>
          </g>
          
          {/* Oar */}
          <g className="oar" style={{ transformOrigin: '180px 65px' }}>
            <line x1="145" y1="68" x2="215" y2="62" stroke="#8b4513" strokeWidth="3" strokeLinecap="round"/>
            <g className="blade" style={{ transformOrigin: '140px 69px' }}>
              <ellipse cx="140" cy="69" rx="10" ry="4" fill="#dc2626"/>
            </g>
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
