'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface NexusLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function NexusLogo({ className, iconOnly = false, size = 'md' }: NexusLogoProps) {
  const sizeMap = {
    sm: { icon: 'h-7 w-7', text: 'text-lg', dot: 'h-1.5 w-1.5' },
    md: { icon: 'h-9 w-9', text: 'text-xl', dot: 'h-2 w-2' },
    lg: { icon: 'h-12 w-12', text: 'text-2xl sm:text-3xl', dot: 'h-2.5 w-2.5' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={cn('flex items-center gap-2.5 select-none group', className)}>
      {/* Modern Minimalist Graphic Logo Symbol */}
      <div
        className={cn(
          'relative flex items-center justify-center rounded-xl p-1.5 shadow-md shadow-[#1B4769]/15 transition-transform duration-300 group-hover:scale-105',
          'bg-gradient-to-br from-[#1B4769] via-[#245D86] to-[#629BB5]',
          currentSize.icon
        )}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
        >
          <defs>
            <linearGradient id="nexusGrad1" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#89D8E1" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#89D8E1" />
            </linearGradient>
            <linearGradient id="nexusGrad2" x1="36" y1="4" x2="4" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#89D8E1" />
              <stop offset="100%" stopColor="#629BB5" />
            </linearGradient>
          </defs>

          {/* Left Vertical Pillar */}
          <path
            d="M9 31V9C9 7.89543 9.89543 7 11 7C12.1046 7 13 7.89543 13 9V31C13 32.1046 12.1046 33 11 33C9.89543 33 9 32.1046 9 31Z"
            fill="url(#nexusGrad1)"
          />

          {/* Dynamic Diagonal Nexus Node Wave */}
          <path
            d="M11 9L29 31"
            stroke="url(#nexusGrad1)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Right Vertical Pillar */}
          <path
            d="M27 9V31C27 32.1046 27.8954 33 29 33C30.1046 33 31 32.1046 31 31V9C31 7.89543 30.1046 7 29 7C27.8954 7 27 7.89543 27 9Z"
            fill="url(#nexusGrad1)"
          />

          {/* Nexus Core Node Glow Points */}
          <circle cx="11" cy="9" r="2.75" fill="#89D8E1" />
          <circle cx="20" cy="20" r="3.25" fill="#FFFFFF" />
          <circle cx="29" cy="31" r="2.75" fill="#89D8E1" />
        </svg>

        {/* Ambient Ring Highlight */}
        <div className="absolute inset-0 rounded-xl border border-white/25 pointer-events-none" />
      </div>

      {!iconOnly && (
        <div className="flex items-center tracking-tight">
          <span
            className={cn(
              'font-extrabold tracking-widest text-[#1B4769] dark:text-white transition-colors duration-200',
              currentSize.text
            )}
            style={{ letterSpacing: '0.18em' }}
          >
            NEXUS
          </span>
          <span className={cn('ml-1 rounded-full bg-[#89D8E1] animate-pulse', currentSize.dot)} />
        </div>
      )}
    </div>
  );
}
