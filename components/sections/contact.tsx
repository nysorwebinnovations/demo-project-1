'use client';

import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Colombo Head Office',
    value: '123, Galle Road, Colombo 03, Sri Lanka',
    sub: 'Visits by appointment (Mon-Fri)',
  },
  {
    icon: Phone,
    label: 'Direct Phone & WhatsApp',
    value: '+94 11 234 5678',
    sub: 'Immediate support during Sri Lanka business hours',
  },
  {
    icon: Mail,
    label: 'Official Inquiries',
    value: 'hello@nexus.lk',
    sub: 'Average response time: 2 hours',
  },
  {
    icon: Clock,
    label: 'Operating Hours',
    value: '8:30 AM – 6:00 PM (IST)',
    sub: '24/7 emergency hotline for SLA corporate clients',
  },
];

export function Contact() {
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: 'Rs 50,000 – 100,000',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (field: keyof FormData, value: string): string | undefined => {
    if (field === 'name' && !value.trim()) return 'Please provide your name';
    if (field === 'email') {
      if (!value.trim()) return 'Email address is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return 'Please enter a valid business email';
    }
    if (field === 'phone' && value && !/^[+0-9\s-]{8,18}$/.test(value)) {
      return 'Please enter a valid phone number (e.g. +94 77 123 4567)';
    }
    if (field === 'message' && !value.trim()) return 'Please describe your project scope';
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    const error = validate(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {
      name: validate('name', data.name),
      email: validate('email', data.email),
      phone: validate('phone', data.phone),
      message: validate('message', data.message),
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setSubmitted(true);
      setData({ name: '', email: '', phone: '', company: '', budget: 'Rs 50,000 – 100,000', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Office info */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={100}>
              <p className="text-xs font-bold uppercase tracking-widest text-[#629BB5] dark:text-[#89D8E1]">
                Connect with NEXUS Colombo
              </p>
              
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#1B4769] dark:text-white leading-tight">
                Let&apos;s Build Your Next Digital Flagship
              </h2>
              
              <p className="mt-4 text-base sm:text-lg text-[#1B4769]/80 dark:text-slate-300 leading-relaxed">
                Whether launching a modern brand, scaling an e-commerce operation, or building high-performance web applications in Sri Lanka, our engineers are ready.
              </p>

              <div className="mt-10 space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-start gap-4 p-3.5 rounded-xl glass border border-[#629BB5]/20 hover:border-[#89D8E1] transition-colors">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1B4769] to-[#266187] text-white shadow-md">
                        <Icon className="h-5 w-5 text-[#89D8E1]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#629BB5] dark:text-[#89D8E1]">
                          {info.label}
                        </p>
                        <p className="text-sm font-bold text-[#1B4769] dark:text-white mt-0.5">{info.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{info.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Badge */}
              <div className="mt-8 flex items-center gap-3 p-4 rounded-xl bg-[#89D8E1]/15 border border-[#89D8E1]/40 text-[#1B4769] dark:text-[#89D8E1]">
                <ShieldCheck className="h-6 w-6 shrink-0" />
                <p className="text-xs font-semibold">
                  Registered Sri Lankan Business Entity • Complete NDA & Copyright IP Protection Guaranteed.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={200}>
              <div className="glass-card rounded-3xl p-7 sm:p-10 border-2 border-[#629BB5]/25 dark:border-[#629BB5]/20 shadow-2xl">
                
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1B4769] dark:text-[#89D8E1] bg-[#89D8E1]/20 px-3 py-1 rounded-full">
                    <Sparkles className="h-3 w-3" />
                    Sri Lanka Project Inquiry Form
                  </span>
                  <h3 className="text-2xl font-black text-[#1B4769] dark:text-white mt-2">
                    Request a Customized Proposal
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Receive a comprehensive timeline and Rupee cost breakdown within 24 hours.
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 p-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300 animate-fade-in">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    Thank you! Your quotation request has been received. A Senior Colombo Consultant will reach out within 2 business hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name" className="text-xs font-bold text-[#1B4769] dark:text-slate-200">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={data.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="e.g. Sunil Fernando"
                        className={cn(
                          'mt-1.5 h-11 bg-white/70 dark:bg-[#0A1826]/70 border-[#629BB5]/30 focus-visible:ring-[#1B4769]',
                          errors.name && 'border-destructive focus-visible:ring-destructive'
                        )}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-xs font-bold text-[#1B4769] dark:text-slate-200">
                        Business Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="sunil@enterprise.lk"
                        className={cn(
                          'mt-1.5 h-11 bg-white/70 dark:bg-[#0A1826]/70 border-[#629BB5]/30 focus-visible:ring-[#1B4769]',
                          errors.email && 'border-destructive focus-visible:ring-destructive'
                        )}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="phone" className="text-xs font-bold text-[#1B4769] dark:text-slate-200">
                        Contact Phone / WhatsApp
                      </Label>
                      <Input
                        id="phone"
                        value={data.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+94 77 123 4567"
                        className={cn(
                          'mt-1.5 h-11 bg-white/70 dark:bg-[#0A1826]/70 border-[#629BB5]/30 focus-visible:ring-[#1B4769]',
                          errors.phone && 'border-destructive focus-visible:ring-destructive'
                        )}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-xs font-bold text-[#1B4769] dark:text-slate-200">
                        Company / Brand Name
                      </Label>
                      <Input
                        id="company"
                        value={data.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="e.g. Ceylon Exports Ltd"
                        className="mt-1.5 h-11 bg-white/70 dark:bg-[#0A1826]/70 border-[#629BB5]/30 focus-visible:ring-[#1B4769]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-xs font-bold text-[#1B4769] dark:text-slate-200">
                      Estimated Project Budget (LKR)
                    </Label>
                    <select
                      id="budget"
                      value={data.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className="mt-1.5 h-11 w-full rounded-md border border-[#629BB5]/30 bg-white/70 dark:bg-[#0A1826]/70 px-3 py-2 text-sm text-[#1B4769] dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4769]"
                    >
                      <option value="Rs 35,000 – 75,000">Rs 35,000 – 75,000 (Starter Business Presence)</option>
                      <option value="Rs 75,000 – 150,000">Rs 75,000 – 150,000 (Growth E-Commerce / Web App)</option>
                      <option value="Rs 150,000 – 350,000">Rs 150,000 – 350,000 (Enterprise Cloud Platform)</option>
                      <option value="Rs 350,000+">Rs 350,000+ (Custom Architecture & SLA)</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-xs font-bold text-[#1B4769] dark:text-slate-200">
                      Project Requirements & Goals *
                    </Label>
                    <Textarea
                      id="message"
                      value={data.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Describe your desired features (e.g. PayHere gateway, .lk domain, multilingual support, expected timeline)..."
                      className={cn(
                        'mt-1.5 min-h-[110px] bg-white/70 dark:bg-[#0A1826]/70 border-[#629BB5]/30 focus-visible:ring-[#1B4769]',
                        errors.message && 'border-destructive focus-visible:ring-destructive'
                      )}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#1B4769] hover:bg-[#153955] text-white shadow-xl shadow-[#1B4769]/25 py-6 text-base font-bold rounded-xl transition-all duration-300"
                  >
                    <Send className="mr-2 h-4 w-4 text-[#89D8E1]" />
                    Request a Quote
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
