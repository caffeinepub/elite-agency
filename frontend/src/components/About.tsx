import { useEffect, useRef } from 'react';
import { Target, Eye, Zap } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

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

    if (aboutRef.current) {
      const elements = aboutRef.current.querySelectorAll('.fade-in-element');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="fade-in-element text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              WHO WE ARE
            </h2>
            <div className="fade-in-element w-24 h-1 bg-golden mx-auto mb-8" />
            <p className="fade-in-element text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Elite Agency is a cutting-edge advertising firm dedicated to crafting compelling narratives 
              and delivering exceptional results. We blend creativity with strategy to elevate brands 
              and drive meaningful engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-20">
            <div className="fade-in-element space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Target className="text-golden" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower brands with innovative marketing strategies that resonate with audiences 
                    and drive sustainable growth. We believe in the power of bold ideas executed with precision.
                  </p>
                </div>
              </div>
            </div>

            <div className="fade-in-element space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Eye className="text-golden" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the world's most trusted creative partner, setting new standards in advertising 
                    excellence and transforming how brands connect with their audiences in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-element mt-16 p-8 md:p-12 bg-black text-white rounded-none">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-golden rounded-full flex items-center justify-center">
                <Zap className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Why Choose Us</h3>
                <p className="text-gray-300 leading-relaxed">
                  We combine strategic thinking with creative excellence to deliver campaigns that don't just 
                  look good—they perform. Our data-driven approach ensures every decision is backed by insights, 
                  while our creative team brings the magic that makes brands unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
