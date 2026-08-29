'use client';

import { useState } from 'react';
import Image from 'next/image';
import { showcaseItems, showcaseFilters, type ShowcaseCategory } from '@/lib/landing-data';
import { cn } from '@/lib/utils';
import { ArrowUpRight, CheckCircle, ExternalLink } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function Showcase() {
  const [filter, setFilter] = useState<ShowcaseCategory>('all');

  const filtered =
    filter === 'all'
      ? showcaseItems
      : showcaseItems.filter((item) => item.category === filter);

  return (
    <section id="showcase" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up" delay={50}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#629BB5] dark:text-[#89D8E1]">
              Featured Client Case Studies
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#1B4769] dark:text-white">
              Proven Digital Craftsmanship
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <p className="mt-4 text-base sm:text-lg text-[#1B4769]/80 dark:text-slate-300">
              Explore bespoke digital platforms engineered for prominent Sri Lankan brands and ambitious global export enterprises.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Buttons */}
        <ScrollReveal direction="up" delay={300}>
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {showcaseFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  'rounded-full px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300',
                  filter === f.value
                    ? 'bg-[#1B4769] text-white shadow-lg shadow-[#1B4769]/25 scale-105 border border-[#89D8E1]/40'
                    : 'glass text-[#1B4769] dark:text-slate-300 hover:text-[#1B4769] hover:bg-[#629BB5]/15 border border-[#629BB5]/25'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => {
            return (
              <ScrollReveal
                key={item.id}
                direction="up"
                delay={100 + (index % 3) * 100}
              >
                <div
                  className="group relative flex flex-col h-full overflow-hidden rounded-2xl glass-card border border-[#629BB5]/30 hover:border-[#89D8E1] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1B4769]/20"
                >
                  {/* Mockup Preview Area */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-108 group-hover:opacity-95"
                      loading="lazy"
                    />
                    
                    {/* Glass Top Pill: Category */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-[#1B4769]/85 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-[#89D8E1]/30 shadow-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#89D8E1]" />
                      <span className="uppercase tracking-wider">
                        {item.category.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Metric Highlight Badge */}
                    <div className="absolute bottom-3 left-3 rounded-lg bg-white/90 dark:bg-[#0E2334]/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-bold text-[#1B4769] dark:text-[#89D8E1] border border-[#629BB5]/30 shadow-md">
                      {item.metric}
                    </div>

                    {/* Hover Link Button */}
                    <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 dark:bg-[#1B4769]/90 text-[#1B4769] dark:text-white backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 shadow-lg">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="flex flex-col flex-1 justify-between p-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#629BB5] dark:text-[#89D8E1]">
                        {item.client}
                      </p>
                      <h3 className="mt-1.5 text-xl font-bold text-[#1B4769] dark:text-white group-hover:text-[#1B4769] dark:group-hover:text-[#89D8E1] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-[#1B4769]/75 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#629BB5]/15 flex items-center justify-between">
                      <span className="text-xs font-medium text-[#1B4769]/60 dark:text-slate-400 flex items-center gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-[#629BB5]" />
                        Live in Production
                      </span>
                      <a
                        href="#contact"
                        className="text-xs font-bold text-[#1B4769] dark:text-[#89D8E1] hover:underline flex items-center gap-1"
                      >
                        Request Case Study
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
