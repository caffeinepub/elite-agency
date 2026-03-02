import { useEffect, useRef } from 'react';
import { MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const careersRef = useRef<HTMLElement>(null);

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

    if (careersRef.current) {
      const elements = careersRef.current.querySelectorAll('.fade-in-element');
      elements.forEach((el, index) => {
        (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  const jobs = [
    {
      title: 'Digital Marketing Specialist',
      description: 'Drive innovative digital campaigns across multiple channels. Analyze data, optimize performance, and deliver measurable results for our diverse client portfolio.',
      location: 'Remote',
    },
    {
      title: 'Paid Ads Manager',
      description: 'Manage and optimize paid advertising campaigns across Google, Meta, and other platforms. Maximize ROI through strategic budget allocation and creative testing.',
      location: 'On-site',
    },
    {
      title: 'Social Media Strategist',
      description: 'Develop and execute compelling social media strategies that build communities and drive engagement. Create content that resonates and converts.',
      location: 'Remote',
    },
    {
      title: 'Web Designer / Developer',
      description: 'Design and build stunning, high-performance websites that deliver exceptional user experiences. Collaborate with our creative team to bring visions to life.',
      location: 'On-site',
    },
    {
      title: 'Sales & Client Success Manager',
      description: 'Build lasting relationships with clients, understand their needs, and ensure their success. Drive growth through consultative selling and exceptional service.',
      location: 'Remote',
    },
  ];

  return (
    <section id="careers" ref={careersRef} className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="fade-in-element text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            JOIN OUR TEAM
          </h2>
          <div className="fade-in-element w-24 h-1 bg-golden mx-auto mb-8" />
          <p className="fade-in-element text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            At Elite Agency, we foster a culture of innovation, creativity, and excellence. We're always looking for talented individuals who are passionate about pushing boundaries and delivering exceptional results.
          </p>
          <p className="fade-in-element text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Join a performance-driven environment where your ideas matter, your growth is prioritized, and your contributions make a real impact. We believe in empowering our team to do their best work.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-12">
          <h3 className="fade-in-element text-2xl md:text-3xl font-bold text-golden mb-8 text-center">
            Current Openings
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="fade-in-element group bg-white text-black p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-4 border-transparent hover:border-golden"
            >
              <div className="mb-4 flex items-center justify-center">
                <Briefcase className="w-12 h-12 text-golden" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center group-hover:text-golden transition-colors">
                {job.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed mb-6 min-h-[120px]">
                {job.description}
              </p>
              <div className="flex items-center justify-center gap-2 mb-6 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{job.location}</span>
              </div>
              <Button
                className="w-full bg-golden hover:bg-golden/90 text-black font-bold transition-colors"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
