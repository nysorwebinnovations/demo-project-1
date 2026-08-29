'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { NexusLogo } from '@/components/ui/nexus-logo';
import { navItems } from '@/lib/landing-data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 backdrop-blur-xl',
        /* Light mode: #89d8e1 gradient; Dark mode: dark navy glass */
        scrolled
          ? 'bg-gradient-to-r from-[#89D8E1]/95 via-[#A2EBF2]/95 to-[#76C9D4]/95 dark:from-transparent dark:to-transparent dark:bg-[#0A1826]/90 shadow-md shadow-[#1B4769]/10 dark:shadow-black/40 border-b border-[#629BB5]/40 dark:border-[#629BB5]/20 py-2.5'
          : 'bg-gradient-to-r from-[#89D8E1]/85 via-[#A8EDF5]/85 to-[#7BCED8]/85 dark:from-transparent dark:to-transparent dark:bg-transparent border-b border-[#89D8E1]/40 dark:border-transparent py-3.5 sm:py-4'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 group">
          <NexusLogo size="md" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:gap-2 md:flex rounded-full bg-white/40 dark:bg-[#0D2131]/70 px-4 py-1.5 backdrop-blur-md border border-white/60 dark:border-[#629BB5]/25 shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1B4769] dark:text-slate-200 transition-all hover:text-[#0E283C] hover:bg-white/60 dark:hover:text-[#89D8E1] dark:hover:bg-[#629BB5]/20"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA & Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+94112345678"
            className="flex items-center gap-1.5 text-xs font-bold text-[#1B4769] dark:text-[#89D8E1] hover:underline px-2"
          >
            <Phone className="h-3.5 w-3.5 text-[#1B4769] dark:text-[#89D8E1]" />
            +94 11 234 5678
          </a>
          <ThemeToggle />
          <Button
            size="sm"
            className="bg-[#1B4769] hover:bg-[#153955] text-white shadow-md shadow-[#1B4769]/25 font-bold px-4 border border-[#1B4769]/40"
            asChild
          >
            <a href="#contact" className="flex items-center gap-1.5">
              <span>Request Quote</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#89D8E1]" />
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 text-[#1B4769] dark:text-white hover:bg-white/40 dark:hover:bg-slate-800"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="bg-gradient-to-b from-[#89D8E1]/98 via-[#A8EDF5]/98 to-[#7BCED8]/98 dark:from-transparent dark:to-transparent dark:bg-[#0A1826]/98 backdrop-blur-2xl border-b border-[#629BB5]/30 shadow-xl md:hidden animate-fade-in">
          <div className="space-y-1.5 px-5 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3.5 py-2.5 text-sm font-bold text-[#1B4769] dark:text-slate-200 transition-colors hover:bg-white/50 hover:text-[#1B4769] dark:hover:text-[#89D8E1]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#1B4769]/20 dark:border-slate-800 space-y-2">
              <a
                href="tel:+94112345678"
                className="flex items-center gap-2 text-xs font-bold text-[#1B4769] dark:text-[#89D8E1] py-1"
              >
                <Phone className="h-4 w-4 text-[#1B4769]" />
                Direct Colombo Hotline: +94 11 234 5678
              </a>
              <Button className="w-full bg-[#1B4769] hover:bg-[#153955] text-white font-bold" asChild>
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Request a Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
