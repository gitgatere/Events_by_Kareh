import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-cover bg-center relative" style={{ 
      backgroundImage: "url(https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
    }}>
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neutral-white mb-6">Ready to Create Something Unforgettable?</h2>
          <p className="text-neutral-gray-100 text-lg mb-10 max-w-2xl mx-auto">
            Let's collaborate to turn your vision into a masterfully crafted experience that exceeds expectations and creates lasting memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-gold">
              Book a Consultation
            </Link>
            <Link to="/portfolio" className="btn btn-outline">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;