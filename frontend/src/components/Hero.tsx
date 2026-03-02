import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.fade-in-element');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="fade-in-element text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            WE CREATE
            <span className="block text-golden mt-2">BOLD IDEAS</span>
          </h1>
          <p className="fade-in-element text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light tracking-wide">
            Transforming brands through strategic creativity and innovative marketing solutions
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="fade-in-element bg-golden text-black hover:bg-golden-light font-semibold text-lg px-8 py-6 rounded-none transition-all duration-300 hover:scale-105 group"
          >
            Let's Work Together
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-golden rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-golden rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
