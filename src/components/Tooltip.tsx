import React, { useState, useRef, useEffect, ReactNode, CSSProperties } from 'react';

interface TooltipProps {
  children: ReactNode;
  classname?: string;
  tooltipContent: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children, classname = '', tooltipContent }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  useEffect(() => {
    if (visible) {
      const handleMouseMove = (e: MouseEvent) => {
        const tooltip = tooltipRef.current;
        if (tooltip) {
          const tooltipRect = tooltip.getBoundingClientRect();
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;

          let top = e.clientY + 10;
          let left = e.clientX + 10;

          if (top + tooltipRect.height > windowHeight) {
            top = e.clientY - tooltipRect.height - 10;
          }
          if (left + tooltipRect.width > windowWidth) {
            left = e.clientX - tooltipRect.width - 10;
          }

          setPosition({ top, left });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [visible]);

  return (
    <div
      className={`relative inline-block ${classname}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          className="absolute z-10 p-2 text-sm text-white bg-gray-800 rounded shadow-lg"
          style={{ top: `${position.top}px`, left: `${position.left}px` } as CSSProperties}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
