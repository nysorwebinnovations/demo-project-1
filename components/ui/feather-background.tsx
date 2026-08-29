'use client';

import React from 'react';

export function FeatherBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Ambient Color Field */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3F9FB] via-[#F8FBFC] to-[#EEF6F8] dark:from-[#091520] dark:via-[#0D1E2D] dark:to-[#08121C] transition-colors duration-500" />

      {/* 2. Soft Ambient Radial Glow Orbs */}
      <div className="absolute -top-32 -left-32 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#89D8E1]/25 via-[#629BB5]/15 to-transparent blur-[120px] animate-pulse-glow" />
      <div className="absolute top-[25%] -right-40 h-[700px] w-[700px] rounded-full bg-gradient-to-bl from-[#629BB5]/20 via-[#89D8E1]/15 to-transparent blur-[140px] animate-float-slow" />
      <div className="absolute top-[60%] -left-48 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#1B4769]/15 via-[#89D8E1]/15 to-transparent blur-[130px] animate-float" />
      <div className="absolute bottom-0 right-[10%] h-[550px] w-[550px] rounded-full bg-gradient-to-t from-[#89D8E1]/20 via-[#629BB5]/10 to-transparent blur-[120px] animate-pulse-glow" />

      {/* 3. Subtle Authentic Feather Image Texture (Masked & Watermark-Free) */}
      <div
        className="absolute inset-0 opacity-[0.14] dark:opacity-[0.09] mix-blend-multiply dark:mix-blend-screen scale-110"
        style={{
          backgroundImage: 'url(/images/feather-texture.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          filter: 'contrast(115%) brightness(105%)',
          maskImage:
            'radial-gradient(ellipse 90% 85% at 50% 45%, black 20%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 85% at 50% 45%, black 20%, transparent 80%)',
        }}
      />

      {/* 4. High-Resolution Vector Feather Filaments & Spine Curvature */}
      <svg
        className="absolute inset-0 h-full w-full opacity-35 dark:opacity-25"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="featherGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#89D8E1" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#629BB5" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1B4769" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="featherGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#89D8E1" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#629BB5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#89D8E1" stopOpacity="0.05" />
          </linearGradient>
          <pattern id="microFeatherBarbs" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
            <path d="M 0,20 Q 60,35 120,20 M 0,40 Q 60,55 120,40 M 0,60 Q 60,75 120,60 M 0,80 Q 60,95 120,80 M 0,100 Q 60,115 120,100" stroke="#629BB5" strokeWidth="0.6" fill="none" opacity="0.25" />
          </pattern>
        </defs>

        {/* Micro feather barbs pattern layer */}
        <rect width="100%" height="100%" fill="url(#microFeatherBarbs)" />

        {/* Primary Central Feather Quill Spine */}
        <path
          d="M 120,-50 C 350,220 520,540 820,950"
          stroke="url(#featherGrad1)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Secondary Feather Quill Spine */}
        <path
          d="M 980,-80 C 850,280 940,650 1350,980"
          stroke="url(#featherGrad2)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Delicate sweeping barbs (Left plume) */}
        {[
          { y: 80, cp1x: 180, cp1y: 120, cp2x: 320, cp2y: 90, ex: 480, ey: 70 },
          { y: 160, cp1x: 240, cp1y: 200, cp2x: 380, cp2y: 170, ex: 560, ey: 150 },
          { y: 240, cp1x: 300, cp1y: 280, cp2x: 450, cp2y: 250, ex: 640, ey: 220 },
          { y: 320, cp1x: 360, cp1y: 360, cp2x: 520, cp2y: 330, ex: 720, ey: 300 },
          { y: 400, cp1x: 420, cp1y: 440, cp2x: 590, cp2y: 410, ex: 800, ey: 380 },
          { y: 480, cp1x: 480, cp1y: 520, cp2x: 660, cp2y: 490, ex: 880, ey: 460 },
          { y: 560, cp1x: 540, cp1y: 600, cp2x: 730, cp2y: 570, ex: 960, ey: 540 },
          { y: 640, cp1x: 600, cp1y: 680, cp2x: 800, cp2y: 650, ex: 1040, ey: 620 },
          { y: 720, cp1x: 660, cp1y: 760, cp2x: 870, cp2y: 730, ex: 1120, ey: 700 },
        ].map((barb, i) => (
          <path
            key={`l-barb-${i}`}
            d={`M ${barb.cp1x - 80},${barb.y} C ${barb.cp1x},${barb.cp1y} ${barb.cp2x},${barb.cp2y} ${barb.ex},${barb.ey}`}
            stroke="#89D8E1"
            strokeWidth="0.85"
            strokeDasharray="4 2"
            fill="none"
            opacity="0.45"
          />
        ))}

        {/* Delicate sweeping barbs (Right plume) */}
        {[
          { y: 120, cp1x: 1020, cp1y: 150, cp2x: 880, cp2y: 190, ex: 740, ey: 210 },
          { y: 220, cp1x: 960, cp1y: 250, cp2x: 820, cp2y: 290, ex: 680, ey: 310 },
          { y: 320, cp1x: 900, cp1y: 350, cp2x: 760, cp2y: 390, ex: 620, ey: 410 },
          { y: 420, cp1x: 840, cp1y: 450, cp2x: 700, cp2y: 490, ex: 560, ey: 510 },
          { y: 520, cp1x: 780, cp1y: 550, cp2x: 640, cp2y: 590, ex: 500, ey: 610 },
          { y: 620, cp1x: 720, cp1y: 650, cp2x: 580, cp2y: 690, ex: 440, ey: 710 },
        ].map((barb, i) => (
          <path
            key={`r-barb-${i}`}
            d={`M ${barb.cp1x + 80},${barb.y} C ${barb.cp1x},${barb.cp1y} ${barb.cp2x},${barb.cp2y} ${barb.ex},${barb.ey}`}
            stroke="#629BB5"
            strokeWidth="0.85"
            fill="none"
            opacity="0.4"
          />
        ))}
      </svg>

      {/* 5. Floating Soft Ethereal Plume Wisps */}
      <div className="absolute top-[18%] left-[8%] w-72 h-44 rounded-full bg-gradient-to-r from-[#89D8E1]/15 to-transparent rotate-[-25deg] blur-2xl animate-feather-sway pointer-events-none" />
      <div className="absolute top-[52%] right-[12%] w-96 h-52 rounded-full bg-gradient-to-l from-[#629BB5]/15 via-[#89D8E1]/10 to-transparent rotate-[18deg] blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute top-[78%] left-[22%] w-80 h-40 rounded-full bg-gradient-to-r from-[#1B4769]/10 to-[#89D8E1]/15 rotate-[-10deg] blur-2xl animate-pulse-glow pointer-events-none" />

      {/* 6. Subtle Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none" />
    </div>
  );
}
