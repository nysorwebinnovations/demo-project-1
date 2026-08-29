'use client';

import { ArrowRight, Sparkles, TrendingUp, Users, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Badge: Colombo Digital Studio */}
          <ScrollReveal direction="up" delay={50}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1B4769] dark:text-[#89D8E1] shadow-sm border border-[#629BB5]/30">
              <span className="flex h-2 w-2 rounded-full bg-[#89D8E1] animate-ping" />
              <span>Premier Digital Engineering • Colombo, Sri Lanka</span>
            </div>
          </ScrollReveal>

          {/* Main Headline */}
          <ScrollReveal direction="up" delay={150}>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1B4769] dark:text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Modern Web Presence for{' '}
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1B4769] via-[#629BB5] to-[#89D8E1] dark:from-[#89D8E1] dark:via-[#A2E6EE] dark:to-white">
                  Sri Lanka&apos;s Businesses
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#89D8E1]/60"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 8 C 70 2 230 2 298 8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal direction="up" delay={250}>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-[#1B4769]/80 dark:text-slate-300 leading-relaxed">
              From innovative startups to established enterprises,{' '}
              <span className="font-semibold text-[#1B4769] dark:text-[#89D8E1]">NEXUS</span>{' '}
              creates powerful digital solutions that drive growth.
            </p>
          </ScrollReveal>

          {/* Action Buttons */}
          <ScrollReveal direction="up" delay={350}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* Primary Filled Button (#1B4769) */}
              <Button
                size="lg"
                className="group w-full sm:w-auto bg-[#1B4769] hover:bg-[#153955] text-white shadow-xl shadow-[#1B4769]/30 hover:shadow-2xl hover:shadow-[#1B4769]/40 hover:-translate-y-0.5 transition-all duration-300 px-7 py-6 text-base font-semibold rounded-xl"
                asChild
              >
                <a href="#pricing">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4 text-[#89D8E1] transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              {/* Secondary Bordered Button (#629BB5) */}
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto border-2 border-[#629BB5] bg-white/70 dark:bg-[#0E2334]/60 text-[#1B4769] dark:text-[#89D8E1] hover:bg-[#629BB5]/15 hover:border-[#1B4769] dark:hover:border-[#89D8E1] hover:-translate-y-0.5 transition-all duration-300 px-7 py-6 text-base font-semibold rounded-xl backdrop-blur-md"
                asChild
              >
                <a href="#showcase">
                  <Sparkles className="mr-2 h-4 w-4 text-[#629BB5] transition-transform group-hover:rotate-12" />
                  Explore Our Work
                </a>
              </Button>
            </div>
          </ScrollReveal>

          {/* Trust Highlights */}
          <ScrollReveal direction="up" delay={450}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-[#1B4769]/70 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#629BB5]" />
                PayHere & IPG Certified
              </span>
              <span className="text-[#89D8E1]">•</span>
              <span>Sub-30ms Dialog & SLT Speeds</span>
              <span className="text-[#89D8E1]">•</span>
              <span>Colombo Dedicated Team</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Interactive Sri Lankan Agency Dashboard Preview */}
        <ScrollReveal direction="up" delay={500}>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="relative">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#1B4769] via-[#629BB5] to-[#89D8E1] opacity-35 blur-xl animate-pulse-glow" />

              <div className="relative glass-card rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-[#629BB5]/30">
                {/* Browser Topbar */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#629BB5]/15 mb-3">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#1B4769]/40 dark:bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-[#629BB5]/40 dark:bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-[#89D8E1] dark:bg-emerald-500/80" />
                  </div>
                  <div className="rounded-lg bg-[#F0F7F9] dark:bg-[#132C40] px-4 py-1 text-xs font-mono text-[#1B4769] dark:text-[#89D8E1] border border-[#629BB5]/20 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    nexus.lk/client-analytics/live-metrics
                  </div>
                  <div className="text-xs text-muted-foreground hidden sm:block">
                    Colombo Node 01
                  </div>
                </div>

                {/* Dashboard Metrics Grid */}
                <div className="grid gap-3.5 p-2 sm:grid-cols-3">
                  <div className="glass rounded-xl p-4 border border-[#629BB5]/25 hover:border-[#89D8E1] transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1B4769]/10 text-[#1B4769] dark:bg-[#89D8E1]/15 dark:text-[#89D8E1]">
                        <Users className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">+38.4% YoY</span>
                    </div>
                    <p className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#1B4769] dark:text-white">128,490</p>
                    <p className="text-xs font-medium text-[#1B4769]/70 dark:text-slate-400">Monthly Sri Lankan Visitors</p>
                  </div>

                  <div className="glass rounded-xl p-4 border border-[#629BB5]/25 hover:border-[#89D8E1] transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#629BB5]/15 text-[#1B4769] dark:text-[#89D8E1]">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Rs +2.4M</span>
                    </div>
                    <p className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#1B4769] dark:text-white">Rs 3,845,000</p>
                    <p className="text-xs font-medium text-[#1B4769]/70 dark:text-slate-400">PayHere / LKR Monthly Volume</p>
                  </div>

                  <div className="glass rounded-xl p-4 border border-[#629BB5]/25 hover:border-[#89D8E1] transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#89D8E1]/20 text-[#1B4769] dark:text-[#89D8E1]">
                        <Zap className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-[#1B4769] dark:text-[#89D8E1] bg-[#89D8E1]/20 px-2 py-0.5 rounded-full">24ms Latency</span>
                    </div>
                    <p className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#1B4769] dark:text-white">99.98%</p>
                    <p className="text-xs font-medium text-[#1B4769]/70 dark:text-slate-400">SLT & Dialog Edge Availability</p>
                  </div>
                </div>

                {/* Visual Performance Chart */}
                <div className="px-2 pb-2">
                  <div className="glass rounded-xl p-4 border border-[#629BB5]/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-[#1B4769] dark:text-white">Weekly Client Conversions & Transactions</p>
                        <p className="text-xs text-[#1B4769]/60 dark:text-slate-400">Live feed across Colombo, Kandy, Galle & International Checkouts</p>
                      </div>
                      <span className="text-xs font-semibold text-[#1B4769] dark:text-[#89D8E1] bg-[#89D8E1]/15 px-2.5 py-1 rounded-md">Live LKR Stream</span>
                    </div>
                    <div className="mt-5 flex items-end gap-2.5 sm:gap-4 h-28 sm:h-36 pt-4">
                      {[
                        { day: 'Mon', height: '55%', val: 'Rs 420K' },
                        { day: 'Tue', height: '72%', val: 'Rs 610K' },
                        { day: 'Wed', height: '64%', val: 'Rs 540K' },
                        { day: 'Thu', height: '88%', val: 'Rs 790K' },
                        { day: 'Fri', height: '96%', val: 'Rs 920K' },
                        { day: 'Sat', height: '82%', val: 'Rs 690K' },
                        { day: 'Sun', height: '90%', val: 'Rs 810K' },
                      ].map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group/bar h-full justify-end">
                          <span className="text-[10px] font-mono text-muted-foreground opacity-0 group-hover/bar:opacity-100 transition-opacity">
                            {bar.val}
                          </span>
                          <div
                            className="w-full rounded-t-lg bg-gradient-to-t from-[#1B4769] via-[#629BB5] to-[#89D8E1] transition-all duration-300 group-hover/bar:brightness-125 shadow-sm"
                            style={{ height: bar.height }}
                          />
                          <span className="text-[11px] font-medium text-[#1B4769]/70 dark:text-slate-400">{bar.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
