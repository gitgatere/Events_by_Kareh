import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

const AboutPreview: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-md overflow-hidden shadow-xl">
              <img 
                src="https://photos.google.com/search/CgAiCBIGCgRyAgoAKNaf3IzpMg%3D%3D/photo/AF1QipP6ZU95dDtXTwPUJsmY4JoVy568zQc0NWsafHAd" 
                alt="Fridah Wangari, Founder of Events by Kareh" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border-4 border-gold rounded-md z-0"></div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              title="Meet Kareh" 
              subtitle="The Visionary"
              alignment="left"
              className="mb-6"
            />
            
            <div className="space-y-4 text-neutral-gray-700">
              <p>
                With over a three years of experience in luxury event planning, Kareh has established herself as the go-to curator for clients who demand nothing but excellence.
              </p>
              <p>
                Her approach combines meticulous attention to detail with boundless creativity, resulting in events that don't just meet expectations—they transform them.
              </p>
              <p>
                From intimate celebrations to grand galas, Kareh infuses each event with personalized elegance that reflects the unique story and style of her clients.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-4xl font-serif text-gold">12+</p>
                <p className="text-neutral-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif text-gold">500+</p>
                <p className="text-neutral-gray-600">Events Planned</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-serif text-gold">100%</p>
                <p className="text-neutral-gray-600">Client Satisfaction</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/about" className="btn btn-outline">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;