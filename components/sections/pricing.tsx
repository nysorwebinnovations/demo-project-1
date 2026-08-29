'use client';

import { useState } from 'react';
import { Check, Sparkles, HelpCircle, ShieldCheck } from 'lucide-react';
import { pricingTiers, type BillingCycle } from '@/lib/landing-data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>('monthly');

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="up" delay={50}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#629BB5] dark:text-[#89D8E1]">
              Transparent Sri Lankan Pricing
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#1B4769] dark:text-white">
              Investment Plans Tailored to Your Growth
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <p className="mt-4 text-base sm:text-lg text-[#1B4769]/80 dark:text-slate-300">
              Clear, transparent pricing in Sri Lankan Rupees (LKR) with no hidden fees or surprise renewal costs.
            </p>
          </ScrollReveal>
        </div>

        {/* Billing Switch Toggle */}
        <ScrollReveal direction="up" delay={300}>
          <div className="mt-10 flex items-center justify-center gap-3.5">
            <Label
              htmlFor="billing-cycle"
              className={cn(
                'text-sm font-bold transition-colors cursor-pointer',
                cycle === 'monthly'
                  ? 'text-[#1B4769] dark:text-white'
                  : 'text-muted-foreground'
              )}
            >
              Monthly Billing
            </Label>
            <Switch
              id="billing-cycle"
              checked={cycle === 'yearly'}
              onCheckedChange={(checked) =>
                setCycle(checked ? 'yearly' : 'monthly')
              }
              className="data-[state=checked]:bg-[#1B4769]"
            />
            <Label
              htmlFor="billing-cycle"
              className={cn(
                'text-sm font-bold transition-colors cursor-pointer',
                cycle === 'yearly'
                  ? 'text-[#1B4769] dark:text-white'
                  : 'text-muted-foreground'
              )}
            >
              Annual Billing
            </Label>
            <span className="rounded-full bg-[#89D8E1]/25 border border-[#89D8E1]/50 px-3 py-0.5 text-xs font-bold text-[#1B4769] dark:text-[#89D8E1]">
              Save 20%
            </span>
          </div>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier, idx) => {
            const price =
              cycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice;
            return (
              <ScrollReveal
                key={tier.name}
                direction="up"
                delay={100 + idx * 100}
              >
                <Card
                  className={cn(
                    'relative flex flex-col justify-between h-full rounded-2xl transition-all duration-300',
                    tier.popular
                      ? 'border-2 border-[#1B4769] dark:border-[#89D8E1] bg-white/90 dark:bg-[#0D2131]/95 shadow-2xl shadow-[#1B4769]/20 lg:-translate-y-2'
                      : 'border border-[#629BB5]/25 dark:border-[#629BB5]/20 bg-white/75 dark:bg-[#0D2131]/75 shadow-lg shadow-[#1B4769]/5 hover:border-[#89D8E1] hover:-translate-y-1'
                  )}
                >
                  {/* Badge */}
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#1B4769] to-[#2B6891] px-4 py-1 text-xs font-extrabold text-white shadow-lg border border-[#89D8E1]/40 tracking-wide uppercase">
                        <Sparkles className="h-3.5 w-3.5 text-[#89D8E1]" />
                        {tier.badge || 'Recommended'}
                      </span>
                    </div>
                  )}

                  <CardContent className="p-7 sm:p-8">
                    <h3 className="text-2xl font-extrabold text-[#1B4769] dark:text-white">{tier.name}</h3>
                    <p className="mt-2 text-sm text-[#1B4769]/75 dark:text-slate-300 min-h-[40px]">
                      {tier.description}
                    </p>

                    {/* Price Block */}
                    <div className="mt-6 pb-6 border-b border-[#629BB5]/20">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-black tracking-tight text-[#1B4769] dark:text-white">
                          {price}
                        </span>
                        <span className="text-sm font-semibold text-muted-foreground">
                          /mo
                        </span>
                      </div>
                      <p className="text-xs text-[#629BB5] dark:text-[#89D8E1] font-medium mt-1">
                        {cycle === 'yearly' ? 'Billed annually with 20% discount' : 'Billed monthly (LKR)'}
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="mt-6 space-y-3.5">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#89D8E1]/30 text-[#1B4769] dark:text-[#89D8E1]">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <span className="text-[#1B4769]/85 dark:text-slate-200 font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="p-7 sm:p-8 pt-0">
                    <Button
                      size="lg"
                      className={cn(
                        'w-full py-6 font-bold rounded-xl transition-all duration-300 shadow-md',
                        tier.popular
                          ? 'bg-[#1B4769] hover:bg-[#153955] text-white shadow-xl shadow-[#1B4769]/25 hover:shadow-2xl'
                          : 'border-2 border-[#629BB5] bg-transparent text-[#1B4769] dark:text-white hover:bg-[#629BB5]/15 hover:border-[#1B4769]'
                      )}
                      asChild
                    >
                      <a href="#contact">{tier.cta}</a>
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Custom Quote Footer Alert */}
        <ScrollReveal direction="up" delay={450}>
          <div className="mt-12 rounded-2xl glass p-6 border border-[#629BB5]/30 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1B4769] text-[#89D8E1]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1B4769] dark:text-white">Need a customized scope or government tender proposal?</p>
                <p className="text-xs text-muted-foreground">We provide formal SLA proposals and NDA protections for Sri Lankan corporate clients.</p>
              </div>
            </div>
            <Button
              className="bg-[#1B4769] hover:bg-[#153955] text-white shrink-0 text-xs font-semibold px-5"
              asChild
            >
              <a href="#contact">Request Custom Scope</a>
            </Button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
