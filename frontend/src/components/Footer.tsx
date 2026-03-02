import { SiFacebook, SiX, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'elite-agency';

  return (
    <footer className="bg-black text-white border-t border-golden/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-golden mb-4">ELITE AGENCY</h3>
            <p className="text-gray-400 leading-relaxed">
              Transforming brands through strategic creativity and innovative marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Quick Links</h4>
            <nav className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Careers', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="block text-gray-400 hover:text-golden transition-colors"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: hello@eliteagency.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Creative Street, NY 10001</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mb-8 pb-8 border-b border-golden/20">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-golden transition-colors"
            aria-label="Facebook"
          >
            <SiFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-golden transition-colors"
            aria-label="Twitter"
          >
            <SiX size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-golden transition-colors"
            aria-label="Instagram"
          >
            <SiInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-golden transition-colors"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm space-y-2">
          <p>© {currentYear} Elite Agency. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="text-golden" size={16} fill="currentColor" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-golden hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
