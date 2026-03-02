import { useEffect, useRef, useState } from 'react';

const Portfolio = () => {
  const portfolioRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

    if (portfolioRef.current) {
      const elements = portfolioRef.current.querySelectorAll('.fade-in-element');
      elements.forEach((el, index) => {
        (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Luxury Brand Campaign',
      description: 'A sophisticated rebranding project that elevated market presence and increased engagement by 250%.',
      image: '/assets/generated/portfolio-1.dim_600x400.png',
      category: 'Branding',
    },
    {
      title: 'Tech Startup Launch',
      description: 'Complete digital marketing strategy that drove 10K+ signups in the first month.',
      image: '/assets/generated/portfolio-2.dim_600x400.png',
      category: 'Digital Marketing',
    },
    {
      title: 'Social Media Revolution',
      description: 'Transformed social presence with viral content strategy, reaching 5M+ impressions.',
      image: '/assets/generated/portfolio-3.dim_600x400.png',
      category: 'Social Media',
    },
    {
      title: 'E-commerce Excellence',
      description: 'Award-winning website design that increased conversion rates by 180%.',
      image: '/assets/generated/portfolio-4.dim_600x400.png',
      category: 'Web Design',
    },
  ];

  return (
    <section id="portfolio" ref={portfolioRef} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="fade-in-element text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            OUR WORK
          </h2>
          <div className="fade-in-element w-24 h-1 bg-golden mx-auto mb-8" />
          <p className="fade-in-element text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our portfolio of successful campaigns and transformative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="fade-in-element relative overflow-hidden group cursor-pointer bg-black"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/2] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-golden transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-95' : 'opacity-0'
                  }`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-black">
                    <span className="text-sm font-bold tracking-widest mb-4 uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-4 text-center">
                      {project.title}
                    </h3>
                    <p className="text-center leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
