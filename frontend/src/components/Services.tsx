import { useEffect, useRef } from 'react';

const Services = () => {
  const servicesRef = useRef<HTMLElement>(null);

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

    if (servicesRef.current) {
      const elements = servicesRef.current.querySelectorAll('.fade-in-element');
      elements.forEach((el, index) => {
        (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Branding',
      description: 'Crafting unique brand identities that resonate with your target audience and stand out in the market.',
      icon: '/assets/generated/icon-branding.dim_64x64.png',
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven campaigns across all digital channels to maximize your ROI and reach.',
      icon: '/assets/generated/icon-digital-marketing.dim_64x64.png',
    },
    {
      title: 'Social Media Management',
      description: 'Building engaged communities and managing your social presence with strategic content.',
      icon: '/assets/generated/icon-social-media.dim_64x64.png',
    },
    {
      title: 'Creative Strategy',
      description: 'Developing innovative concepts that capture attention and drive meaningful engagement.',
      icon: '/assets/generated/icon-creative-strategy.dim_64x64.png',
    },
    {
      title: 'Web Design',
      description: 'Creating stunning, user-friendly websites that convert visitors into customers.',
      icon: '/assets/generated/icon-web-design.dim_64x64.png',
    },
  ];

  return (
    <section id="services" ref={servicesRef} className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="fade-in-element text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            OUR SERVICES
          </h2>
          <div className="fade-in-element w-24 h-1 bg-golden mx-auto mb-8" />
          <p className="fade-in-element text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions tailored to elevate your brand and drive results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in-element group bg-white text-black p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border-4 border-transparent hover:border-golden"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-golden transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
