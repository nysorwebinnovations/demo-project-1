'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
import { testimonials, clientLogos } from '@/lib/landing-data';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);

  const visible = testimonials.slice(
    index * perPage,
    index * perPage + perPage
  );

  const go = (dir: number) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return totalPages - 1;
      if (next >= totalPages) return 0;
      return next;
    });
  };

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal direction="up" delay={50}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#629BB5] dark:text-[#89D8E1]">
              Trusted Client Endorsements
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#1B4769] dark:text-white">
              Endorsed by Sri Lanka&apos;s Industry Leaders
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <p className="mt-4 text-base sm:text-lg text-[#1B4769]/80 dark:text-slate-300">
              Discover how leading Colombo enterprises, retail champions, and fast-growing exporters scale with NEXUS.
            </p>
          </ScrollReveal>
        </div>

        {/* Client Logos Ribbon */}
        <ScrollReveal direction="up" delay={300}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12 py-6 px-4 rounded-2xl glass border border-[#629BB5]/25">
            {clientLogos.map((logo) => {
              const Icon = logo.icon;
              return (
                <div
                  key={logo.name}
                  className="flex items-center gap-2.5 text-[#1B4769]/70 dark:text-slate-400 transition-all hover:text-[#1B4769] dark:hover:text-[#89D8E1] hover:scale-105"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1B4769]/10 dark:bg-[#89D8E1]/15 text-[#1B4769] dark:text-[#89D8E1]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-tight">{logo.name}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {visible.map((t, idx) => (
            <ScrollReveal
              key={t.id}
              direction="up"
              delay={100 + idx * 80}
            >
              <Card
                className="relative h-full flex flex-col justify-between overflow-hidden border border-[#629BB5]/25 dark:border-[#629BB5]/20 bg-white/80 dark:bg-[#0D2131]/80 backdrop-blur-xl shadow-lg shadow-[#1B4769]/5 hover:border-[#89D8E1] transition-all duration-300 hover:-translate-y-1.5 rounded-2xl"
              >
                <CardContent className="p-7">
                  <Quote className="absolute right-5 top-5 h-10 w-10 text-[#629BB5]/15 dark:text-[#89D8E1]/10" />

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#1B4769]/85 dark:text-slate-200 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author Bio */}
                  <div className="mt-8 flex items-center gap-3.5 pt-4 border-t border-[#629BB5]/15">
                    <Avatar className="h-11 w-11 border border-[#89D8E1]/40 shadow-sm">
                      <AvatarFallback className={cn('text-white text-sm font-bold', t.avatarColor)}>
                        {t.avatarInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-bold text-[#1B4769] dark:text-white">{t.name}</p>
                      <p className="text-xs font-medium text-[#1B4769]/70 dark:text-slate-300">
                        {t.role}, {t.company}
                      </p>
                      <p className="text-[11px] text-[#629BB5] dark:text-[#89D8E1] flex items-center gap-1 mt-0.5 font-medium">
                        <MapPin className="h-3 w-3" />
                        {t.location}, Sri Lanka
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full glass border-[#629BB5]/30 text-[#1B4769] dark:text-white hover:bg-[#629BB5]/20 hover:border-[#1B4769]"
            onClick={() => go(-1)}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex gap-2 items-center">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  i === index
                    ? 'w-9 bg-[#1B4769] dark:bg-[#89D8E1]'
                    : 'w-2 bg-[#629BB5]/30 hover:bg-[#629BB5]/60'
                )}
                aria-label={`Go to testimonial page ${i + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full glass border-[#629BB5]/30 text-[#1B4769] dark:text-white hover:bg-[#629BB5]/20 hover:border-[#1B4769]"
            onClick={() => go(1)}
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
