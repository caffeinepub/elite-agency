import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const formRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

    if (formRef.current) {
      const elements = formRef.current.querySelectorAll('.fade-in-element');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" ref={formRef} className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="fade-in-element text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              LET'S TALK
            </h2>
            <div className="fade-in-element w-24 h-1 bg-golden mx-auto mb-8" />
            <p className="fade-in-element text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to elevate your brand? Get in touch and let's create something extraordinary together.
            </p>
          </div>

          {submitSuccess && (
            <div className="fade-in-element mb-8 p-4 bg-golden text-black text-center font-semibold rounded-none">
              Thank you! We'll be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="fade-in-element space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-sm font-medium">
                  Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="bg-white text-black border-2 border-white focus:border-golden rounded-none h-12"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-golden text-sm">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="bg-white text-black border-2 border-white focus:border-golden rounded-none h-12"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-golden text-sm">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white text-sm font-medium">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="bg-white text-black border-2 border-white focus:border-golden rounded-none h-12"
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && <p className="text-golden text-sm">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-white text-sm font-medium">
                  Company *
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="bg-white text-black border-2 border-white focus:border-golden rounded-none h-12"
                  placeholder="Your company"
                />
                {errors.company && <p className="text-golden text-sm">{errors.company}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-white text-sm font-medium">
                Service Required *
              </Label>
              <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                <SelectTrigger className="bg-white text-black border-2 border-white focus:border-golden rounded-none h-12">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
                  <SelectItem value="branding">Branding</SelectItem>
                  <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                  <SelectItem value="social-media">Social Media Management</SelectItem>
                  <SelectItem value="creative-strategy">Creative Strategy</SelectItem>
                  <SelectItem value="web-design">Web Design</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && <p className="text-golden text-sm">{errors.service}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white text-sm font-medium">
                Message *
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="bg-white text-black border-2 border-white focus:border-golden rounded-none min-h-[150px]"
                placeholder="Tell us about your project..."
              />
              {errors.message && <p className="text-golden text-sm">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-golden text-black hover:bg-golden-light font-semibold text-lg px-12 py-6 rounded-none transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
