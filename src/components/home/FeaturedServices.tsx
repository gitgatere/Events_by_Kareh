import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, link, index }) => {
  return (
    <motion.div 
      className="group card card-hover overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-70"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif mb-3">{title}</h3>
        <p className="text-neutral-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-gold hover:text-gold-dark transition-colors"
        >
          Learn more 
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const FeaturedServices: React.FC = () => {
  const services = [
    {
      title: "Wedding Planning",
      description: "From intimate gatherings to grand celebrations, we craft weddings that reflect your unique love story.",
      image: "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/services"
    },
    {
      title: "Corporate Events",
      description: "Elevate your brand with meticulously planned corporate events that leave lasting impressions.",
      image: "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/services"
    },
    {
      title: "Private Parties",
      description: "Create unforgettable moments with bespoke private celebrations tailored to your vision.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/services"
    },
    {
      title: "Luxury Dinners",
      description: "Indulge in exquisite dining experiences with curated menus and impeccable service.",
      image: "https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/services"
    }
  ];

  return (
    <section className="section-padding bg-neutral-gray-50">
      <div className="container-custom">
        <SectionHeading 
          title="Our Signature Services" 
          subtitle="What We Offer"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;