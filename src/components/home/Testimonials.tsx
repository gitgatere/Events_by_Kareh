import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Jessica Reynolds",
      role: "Bride, 2023",
      comment: "Working with Events by Kareh was the best decision we made for our wedding. Kareh's vision, attention to detail, and flawless execution made our dream wedding come to life in ways we couldn't have imagined.",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Michael Chen",
      role: "CEO, Luminary Tech",
      comment: "Our annual corporate gala needed to impress investors and celebrate our team's achievements. Events by Kareh delivered an experience that exceeded all expectations and left everyone in awe.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sophia Williams",
      role: "50th Birthday Celebration",
      comment: "I wanted a milestone birthday that would be remembered forever. The team at Events by Kareh created a magical evening that perfectly balanced elegance with personal touches.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [current, setCurrent] = useState(0);
  
  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };
  
  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Testimonials"
          className="text-neutral-white mb-16"
        />
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              {/* Client Image */}
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="rounded-full overflow-hidden h-60 w-60 mx-auto border-4 border-gold">
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 bg-gold text-primary p-4 rounded-full">
                    <Quote className="w-8 h-8" />
                  </div>
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <p className="text-xl md:text-2xl text-neutral-white italic mb-8 leading-relaxed">
                  "{testimonials[current].comment}"
                </p>
                <h4 className="text-gold text-xl font-serif mb-1">{testimonials[current].name}</h4>
                <p className="text-neutral-gray-300">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center md:justify-end gap-4 mt-12">
            <button 
              onClick={prevTestimonial} 
              className="p-3 rounded-full bg-primary-light text-gold hover:bg-gold hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="p-3 rounded-full bg-primary-light text-gold hover:bg-gold hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;