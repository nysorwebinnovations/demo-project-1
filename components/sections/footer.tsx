'use client';

import { useEffect, useState } from 'react';
import {
  Twitter,
  Linkedin,
  Github,
  Youtube,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { footerSections } from '@/lib/landing-data';
import { NexusLogo } from '@/components/ui/nexus-logo';
import { cn } from '@/lib/utils';

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative border-t border-[#1B4769]/15 dark:border-[#629BB5]/30 bg-[#7eb6bd] dark:bg-[#07131D]/90 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        <div className="grid gap-10 lg:grid-cols-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2">
              <NexusLogo size="md" />
            </a>
            
            <p className="mt-4 max-w-sm text-sm font-semibold text-[#1B4769] dark:text-slate-300 leading-relaxed">
              Premier digital engineering studio headquartered in Colombo, crafting high-performance web applications, e-commerce architectures, and enterprise platforms for Sri Lanka and the global market.
            </p>

            <div className="mt-5 space-y-1.5 text-xs font-bold text-[#1B4769] dark:text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#1B4769] dark:text-[#629BB5]" />
                123, Galle Road, Colombo 03, Sri Lanka
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#1B4769] dark:text-[#629BB5]" />
                +94 11 234 5678
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#1B4769] dark:text-[#629BB5]" />
                hello@nexus.lk
              </p>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-[#629BB5]/30 text-[#1B4769] dark:text-slate-300 transition-all hover:bg-[#1B4769] hover:text-white hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#1B4769] dark:text-white">
                  {section.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs font-semibold text-[#1B4769]/90 dark:text-slate-400 transition-colors hover:text-[#0E283C] dark:hover:text-[#89D8E1]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Mid bar: Copyright & Registration */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1B4769]/20 dark:border-[#629BB5]/20 pt-8 sm:flex-row text-xs font-bold text-[#1B4769] dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} NEXUS Sri Lanka (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:underline">LK Domain Registration</a>
          </div>
        </div>

        {/* Absolute Bottom Signature: Design and developed by NYSOR Web Innovations */}
        <div className="mt-6 pt-5 border-t border-[#1B4769]/15 dark:border-[#629BB5]/10 text-center">
        </div>

      </div>

      {/* Back to top Floating Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          'fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#1B4769] text-white shadow-2xl shadow-[#1B4769]/40 hover:bg-[#153955] hover:scale-110 border border-white/40 transition-all duration-300',
          showTop
            ? 'opacity-100 translate-y-0'
            : 'pointer-events-none translate-y-4 opacity-0'
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </button>
    </footer>
  );
}
