import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
        ? 'bg-primary shadow-md py-2' 
        : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-gold" />
          <span className="font-serif text-xl font-medium text-neutral-white">
            Events by <span className="text-gold">Kareh</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'text-gold' : 'text-neutral-white'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'text-gold' : 'text-neutral-white'}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'text-gold' : 'text-neutral-white'}`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'text-gold' : 'text-neutral-white'}`
            }
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/pricing" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'text-gold' : 'text-neutral-white'}`
            }
          >
            Pricing
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'text-gold' : 'text-neutral-white'}`
            }
          >
            Blog
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'text-gold' : 'text-neutral-white'}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Call to Action Button (Desktop) */}
        <Link to="/contact" className="hidden md:block btn btn-gold">
          Book Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gold" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary shadow-lg"
          >
            <div className="container-custom py-4 flex flex-col gap-4">
              <NavLink 
                to="/" 
                className="nav-link py-2 px-4 hover:bg-primary-light rounded" 
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className="nav-link py-2 px-4 hover:bg-primary-light rounded" 
                onClick={closeMenu}
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                className="nav-link py-2 px-4 hover:bg-primary-light rounded" 
                onClick={closeMenu}
              >
                Services
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className="nav-link py-2 px-4 hover:bg-primary-light rounded" 
                onClick={closeMenu}
              >
                Portfolio
              </NavLink>
              <NavLink 
                to="/pricing" 
                className="nav-link py-2 px-4 hover:bg-primary-light rounded" 
                onClick={closeMenu}
              >
                Pricing
              </NavLink>
              <NavLink 
                to="/blog" 
                className="nav-link py-2 px-4 hover:bg-primary-light rounded" 
                onClick={closeMenu}
              >
                Blog
              </NavLink>
              <NavLink 
                to="/contact" 
                className="nav-link py-2 px-4 hover:bg-primary-light rounded" 
                onClick={closeMenu}
              >
                Contact
              </NavLink>

              <Link 
                to="/contact" 
                className="btn btn-gold mt-2" 
                onClick={closeMenu}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;