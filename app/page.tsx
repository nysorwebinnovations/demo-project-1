import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Showcase } from '@/components/sections/showcase';
import { Testimonials } from '@/components/sections/testimonials';
import { Pricing } from '@/components/sections/pricing';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { FeatherBackground } from '@/components/ui/feather-background';

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-[#89D8E1]/30 selection:text-[#1B4769]">
      <FeatherBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
