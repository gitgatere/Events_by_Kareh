import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import HeroBanner from '../components/hero/HeroBanner';
import Testimonials from '../components/home/Testimonials';

const AboutPage: React.FC = () => {
  const milestones = [
    { year: 2015, title: "The Beginning", description: "Events by Kareh was founded with a vision to redefine luxury event planning." },
    { year: 2017, title: "Industry Recognition", description: "Received our first 'Best Luxury Event Planner' award from the Global Events Association." },
    { year: 2019, title: "Team Expansion", description: "Expanded our team of planners and designers to meet growing demand for our services." },
    { year: 2021, title: "International Reach", description: "Successfully planned our first international destination wedding, expanding our global presence." },
    { year: 2023, title: "Celebrated Milestone", description: "Reached our 500th event, celebrating years of creating unforgettable experiences." }
  ];

  return (
    <>
      <HeroBanner 
        title="About Events by Kareh"
        subtitle="Discover the passion, creativity, and dedication behind our luxury event planning business"
        backgroundImage="https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Our Story */}
      <section className="section-padding" id="main-content">
        <div className="container-custom">
          <SectionHeading 
            title="Our Story" 
            subtitle="The Journey"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="prose max-w-none">
                <p className="text-lg text-neutral-gray-700 leading-relaxed">
                  Founded by Kareh Williams in 2015, Events by Kareh began with a simple mission: to transform ordinary moments into extraordinary memories. With a background in design and hospitality, Kareh saw an opportunity to bring a fresh, innovative approach to event planning that prioritized personalization and flawless execution.
                </p>
                <p className="text-lg text-neutral-gray-700 leading-relaxed">
                  What started as a one-woman enterprise quickly blossomed into a sought-after luxury event planning company, known for attention to detail, creative excellence, and white-glove service. Today, our team of passionate planners, designers, and coordinators works tirelessly to bring our clients' visions to life.
                </p>
                <p className="text-lg text-neutral-gray-700 leading-relaxed">
                  From intimate weddings to large-scale corporate galas, we approach each event with the same level of care and commitment to excellence. Our clients trust us to manage every detail, allowing them to be fully present and enjoy their special moments.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Kareh planning an event" 
                className="w-full h-full object-cover rounded-md shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 border-4 border-gold rounded-md z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-neutral-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="What Drives Us"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-md shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl mb-4 font-serif text-primary">Excellence</h3>
              <p className="text-neutral-gray-700">
                We strive for perfection in every detail, ensuring each event exceeds expectations and creates lasting impressions.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-md shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl mb-4 font-serif text-primary">Creativity</h3>
              <p className="text-neutral-gray-700">
                We believe in pushing boundaries and thinking outside the box to create unique, memorable experiences.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-md shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl mb-4 font-serif text-primary">Integrity</h3>
              <p className="text-neutral-gray-700">
                We operate with honesty, transparency, and accountability in all aspects of our business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="The Talent Behind Every Event"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-4 rounded-full overflow-hidden h-64 w-64 mx-auto shadow-md">
                <img 
                  src="https://images.pexels.com/photos/5414000/pexels-photo-5414000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Kareh Williams, Founder & Creative Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Kareh Williams</h3>
              <p className="text-gold mb-3">Founder & Creative Director</p>
              <p className="text-neutral-gray-600">
                With a background in design and hospitality, Kareh brings creative vision and meticulous attention to detail to every event.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-4 rounded-full overflow-hidden h-64 w-64 mx-auto shadow-md">
                <img 
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Michael Roberts, Senior Event Planner" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Michael Roberts</h3>
              <p className="text-gold mb-3">Senior Event Planner</p>
              <p className="text-neutral-gray-600">
                Michael's expertise in logistics and vendor management ensures seamless execution of even the most complex events.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mb-4 rounded-full overflow-hidden h-64 w-64 mx-auto shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sophia Chen, Design Specialist" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-1">Sophia Chen</h3>
              <p className="text-gold mb-3">Design Specialist</p>
              <p className="text-neutral-gray-600">
                Sophia's eye for design and current trends helps create visually stunning environments that wow our clients and their guests.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionHeading 
            title="Our Journey" 
            subtitle="Timeline"
            className="text-neutral-white"
          />
          
          <div className="relative flex flex-col gap-8 py-8">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-[30px] md:left-1/2 w-0.5 bg-gold"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div 
                key={milestone.year}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-1 hidden md:block"></div>
                <div className="absolute top-0 left-[30px] md:left-1/2 w-12 h-12 bg-gold text-primary rounded-full -translate-x-1/2 flex items-center justify-center font-bold z-10">
                  {milestone.year}
                </div>
                <div className="flex-1 pl-16 md:pl-0 md:px-8">
                  <div className="bg-white p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-serif mb-2">{milestone.title}</h3>
                    <p className="text-neutral-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Testimonials */}
      <Testimonials />
    </>
  );
};

export default AboutPage;