'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 700,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return 'translateY(32px)';
      case 'down':
        return 'translateY(-32px)';
      case 'left':
        return 'translateX(32px)';
      case 'right':
        return 'translateX(-32px)';
      case 'none':
        return 'scale(0.96)';
      default:
        return 'translateY(32px)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn('transition-all', className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}
