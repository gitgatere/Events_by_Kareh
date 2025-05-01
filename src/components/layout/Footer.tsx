import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-neutral-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif font-medium text-neutral-white">
                Events by <span className="text-gold">Kareh</span>
              </h3>
            </div>
            <p className="text-neutral-gray-200 mb-4">
              Turning moments into masterpieces since 2020. We create unforgettable, luxury events for the most discerning clients.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-gray-300 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-gray-300 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-gray-300 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-gray-300 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-gray-300 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-neutral-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-neutral-gray-300 hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-neutral-gray-300 hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="text-neutral-gray-300 hover:text-gold transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="text-neutral-gray-300 hover:text-gold transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-serif mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-neutral-gray-300 hover:text-gold transition-colors">Wedding Planning</Link></li>
              <li><Link to="/services" className="text-neutral-gray-300 hover:text-gold transition-colors">Corporate Events</Link></li>
              <li><Link to="/services" className="text-neutral-gray-300 hover:text-gold transition-colors">Private Parties</Link></li>
              <li><Link to="/services" className="text-neutral-gray-300 hover:text-gold transition-colors">Luxury Dinners</Link></li>
              <li><Link to="/services" className="text-neutral-gray-300 hover:text-gold transition-colors">Event Design</Link></li>
              <li><Link to="/services" className="text-neutral-gray-300 hover:text-gold transition-colors">Destination Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-serif mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <span className="text-neutral-gray-300">123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:+11234567890" className="text-neutral-gray-300 hover:text-gold transition-colors">+1 (123) 456-7890</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:info@eventsbykareh.com" className="text-neutral-gray-300 hover:text-gold transition-colors">info@eventsbykareh.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Events by Kareh. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-neutral-gray-400">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;