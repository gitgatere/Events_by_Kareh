import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import HeroBanner from '../components/hero/HeroBanner';
import CallToAction from '../components/home/CallToAction';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServicesPage: React.FC = () => {
  const services: ServiceDetail[] = [
    {
      id: "weddings",
      title: "Wedding Planning",
      description: "From intimate gatherings to grand celebrations, we craft weddings that reflect your unique love story and style. Our comprehensive wedding planning services ensure every detail is perfect for your special day.",
      features: [
        "Comprehensive planning from engagement to honeymoon",
        "Personalized design and styling",
        "Vendor selection and management",
        "Budget planning and management",
        "Day-of coordination and execution",
        "Destination wedding expertise"
      ],
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "corporate",
      title: "Corporate Events",
      description: "Elevate your brand with meticulously planned corporate events that leave lasting impressions on clients, employees, and stakeholders. We understand the importance of aligning events with your business objectives.",
      features: [
        "Product launches and brand activations",
        "Award ceremonies and galas",
        "Conferences and retreats",
        "Team building events",
        "Client appreciation events",
        "Holiday celebrations"
      ],
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "private",
      title: "Private Parties",
      description: "Create unforgettable moments with bespoke private celebrations tailored to your vision. Whether it's a milestone birthday, anniversary, or special occasion, we transform your ideas into extraordinary experiences.",
      features: [
        "Birthday celebrations",
        "Anniversary parties",
        "Engagement parties",
        "Baby and bridal showers",
        "Graduation celebrations",
        "Holiday gatherings"
      ],
      image: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: "dinners",
      title: "Luxury Dinners",
      description: "Indulge in exquisite dining experiences with curated menus and impeccable service. Our luxury dinner events combine gourmet cuisine, elegant decor, and flawless execution for unforgettable culinary journeys.",
      features: [
        "Intimate dinner parties",
        "Chef's table experiences",
        "Wine pairing dinners",
        "Themed dining events",
        "Outdoor dining experiences",
        "Private restaurant buyouts"
      ],
      image: "https://images.pexels.com/photos/5379707/pexels-photo-5379707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const approaches = [
    {
      title: "Consultation",
      description: "We begin with an in-depth consultation to understand your vision, preferences, and expectations for your event."
    },
    {
      title: "Concept Development",
      description: "Based on your input, we create a detailed concept that captures the essence of your event vision."
    },
    {
      title: "Planning & Coordination",
      description: "Our team handles all logistics, vendor management, and timeline creation to ensure seamless execution."
    },
    {
      title: "Design & Styling",
      description: "We curate every visual element, from floral arrangements to lighting, creating a cohesive and stunning aesthetic."
    },
    {
      title: "Execution",
      description: "On the day of your event, our team manages every detail, allowing you to fully enjoy the experience."
    },
    {
      title: "Post-Event Support",
      description: "We handle all follow-up tasks and provide a detailed recap of your successful event."
    }
  ];

  return (
    <>
      <HeroBanner 
        title="Our Luxury Services"
        subtitle="Bespoke event planning and design for every celebration"
        backgroundImage="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Service Introduction */}
      <section className="section-padding bg-neutral-white" id="main-content">
        <div className="container-custom">
          <SectionHeading 
            title="Exceptional Event Experiences" 
            subtitle="Our Expertise"
          />
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-neutral-gray-700">
              At Events by Kareh, we specialize in creating memorable, luxurious events that exceed expectations. From concept to execution, our team of experienced planners and designers works tirelessly to ensure every detail is perfect. We believe that each event should be a unique reflection of our clients' vision and style.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <motion.div 
                key={approach.title}
                className="bg-neutral-gray-50 p-6 rounded-md border-t-4 border-gold shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-serif mb-3">{index + 1}. {approach.title}</h3>
                <p className="text-neutral-gray-600">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Services */}
      <section className="section-padding bg-neutral-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Signature Services" 
            subtitle="What We Offer"
          />
          
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 1 ? 'md:order-2' : ''}
                >
                  <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                  <p className="text-neutral-gray-700 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <div className="text-gold mt-1">•</div>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative rounded-md overflow-hidden shadow-xl ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 p-6">
                      <h4 className="text-xl text-neutral-white font-serif">{service.title}</h4>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionHeading 
            title="Additional Services" 
            subtitle="Enhancing Your Experience"
            className="text-neutral-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-primary-light p-8 rounded-md text-neutral-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-serif text-gold mb-4">Venue Selection</h3>
              <p className="text-neutral-gray-200">
                We help you find the perfect venue that aligns with your vision, budget, and guest list. Our extensive network includes exclusive access to unique and sought-after locations.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-primary-light p-8 rounded-md text-neutral-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif text-gold mb-4">Floral Design</h3>
              <p className="text-neutral-gray-200">
                Our floral design services create breathtaking arrangements that enhance your event's ambiance and complement your chosen aesthetic.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-primary-light p-8 rounded-md text-neutral-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-serif text-gold mb-4">Culinary Curation</h3>
              <p className="text-neutral-gray-200">
                From menu development to food styling, we ensure every culinary aspect of your event is exceptional and memorable.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-primary-light p-8 rounded-md text-neutral-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-serif text-gold mb-4">Entertainment</h3>
              <p className="text-neutral-gray-200">
                We source and manage high-quality entertainment options, from live bands and DJs to unique performers that elevate your event experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-primary-light p-8 rounded-md text-neutral-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-serif text-gold mb-4">Photography & Videography</h3>
              <p className="text-neutral-gray-200">
                We connect you with talented professionals who capture your event's special moments with a style that matches your vision.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-primary-light p-8 rounded-md text-neutral-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-serif text-gold mb-4">Guest Experience</h3>
              <p className="text-neutral-gray-200">
                We enhance your guests' experience with thoughtful touches, from welcome packages to personalized favors that leave lasting impressions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default ServicesPage;