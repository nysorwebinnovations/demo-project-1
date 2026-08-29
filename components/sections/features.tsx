'use client';

import { features } from '@/lib/landing-data';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Sparkles } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal direction="up" delay={50}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#629BB5] dark:text-[#89D8E1]">
              Engineered for Sri Lankan Enterprises
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#1B4769] dark:text-white">
              Everything Your Brand Needs to Excel Online
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <p className="mt-4 text-base sm:text-lg text-[#1B4769]/80 dark:text-slate-300">
              From local payment integrations to blazing edge cloud infrastructure, we build digital experiences tailored for sustainable growth in the Sri Lankan and global markets.
            </p>
          </ScrollReveal>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal
                key={feature.title}
                direction="up"
                delay={100 + index * 75}
              >
                <Card
                  className="group relative h-full overflow-hidden border border-[#629BB5]/25 dark:border-[#629BB5]/20 bg-white/75 dark:bg-[#0D2131]/80 backdrop-blur-xl shadow-lg shadow-[#1B4769]/5 hover:shadow-2xl hover:shadow-[#1B4769]/15 hover:border-[#89D8E1] transition-all duration-300 hover:-translate-y-1.5 rounded-2xl flex flex-col justify-between"
                >
                  {/* Subtle Gradient Glow Accent */}
                  <div className="absolute top-0 right-0 h-28 w-28 rounded-full bg-gradient-to-bl from-[#89D8E1]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <CardContent className="relative p-7">
                    <div className="flex items-center justify-between">
                      {/* Icon container */}
                      <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-gradient-to-br from-[#1B4769] to-[#2B6891] text-white p-3 shadow-md shadow-[#1B4769]/20 group-hover:scale-110 group-hover:from-[#629BB5] group-hover:to-[#1B4769] transition-all duration-300">
                        <Icon className="h-6 w-6 text-[#89D8E1] group-hover:text-white transition-colors" />
                      </div>

                      {feature.tag && (
                        <span className="text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full bg-[#EBF7F9] dark:bg-[#153249] text-[#1B4769] dark:text-[#89D8E1] border border-[#89D8E1]/30">
                          {feature.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#1B4769] dark:text-white group-hover:text-[#1B4769] dark:group-hover:text-[#89D8E1] transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="mt-3 text-sm text-[#1B4769]/75 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>

                  {/* Bottom Accent Bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#89D8E1]/0 to-transparent group-hover:via-[#89D8E1] transition-all duration-500" />
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
