'use client';

import { faqItems } from '@/lib/landing-data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { MessageSquare, PhoneCall } from 'lucide-react';

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center">
          <ScrollReveal direction="up" delay={50}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#629BB5] dark:text-[#89D8E1]">
              Got Questions?
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#1B4769] dark:text-white">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <p className="mt-4 text-base sm:text-lg text-[#1B4769]/80 dark:text-slate-300">
              Clear answers regarding Sri Lankan payment gateways, .lk domain registration, timeline deliverables, and support SLAs.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion */}
        <ScrollReveal direction="up" delay={300}>
          <Accordion
            type="single"
            collapsible
            className="mt-12 glass-card rounded-2xl p-4 sm:p-6 border border-[#629BB5]/25"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#629BB5]/15 last:border-none py-2"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-bold text-[#1B4769] dark:text-white hover:text-[#629BB5] dark:hover:text-[#89D8E1] hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-[#1B4769]/80 dark:text-slate-300 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        {/* Direct Colombo Hotline CTA */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-sm font-medium text-[#1B4769]/80 dark:text-slate-300">
              Have a question not covered here?
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-[#629BB5] text-[#1B4769] dark:text-[#89D8E1] hover:bg-[#629BB5]/10"
                asChild
              >
                <a href="#contact" className="flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Message Colombo Team
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-[#1B4769] hover:bg-[#153955] text-white"
                asChild
              >
                <a href="tel:+94112345678" className="flex items-center gap-1.5">
                  <PhoneCall className="h-3.5 w-3.5 text-[#89D8E1]" />
                  Call: +94 11 234 5678
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
