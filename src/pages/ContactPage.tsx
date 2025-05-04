import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import HeroBanner from '../components/hero/HeroBanner';

interface FormState {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          message: '',
        });
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <HeroBanner 
        title="Get In Touch"
        subtitle="Let's discuss how we can bring your vision to life"
        backgroundImage="https://images.pexels.com/photos/4344878/pexels-photo-4344878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section-padding" id="main-content">
        <div className="container-custom">
          <SectionHeading 
            title="Contact Us" 
            subtitle="Reach Out"
          />
          
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-primary text-neutral-white p-8 rounded-md shadow-md h-full">
                <h3 className="text-2xl font-serif text-gold mb-6">Let's Connect</h3>
                <p className="mb-8">
                  We'd love to hear about your event vision. Reach out to us through any of the channels below or fill out the contact form to start the conversation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Our Location</h4>
                      <p className="text-neutral-gray-200">123 Luxury Avenue, Beverly Hills, CA 90210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-neutral-gray-200">+254 793823140</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-neutral-gray-200">info@eventsbykareh.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-gold mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Business Hours</h4>
                      <p className="text-neutral-gray-200">Monday - Friday: 9am - 6pm</p>
                      <p className="text-neutral-gray-200">Weekends: By appointment only</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-light text-gold hover:bg-gold hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-light text-gold hover:bg-gold hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-light text-gold hover:bg-gold hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-light text-gold hover:bg-gold hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="md:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-md shadow-md">
                <h3 className="text-2xl font-serif text-primary mb-6">Tell Us About Your Event</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-medium mb-2">Thank You!</h4>
                    <p className="text-neutral-gray-600">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-neutral-gray-700 mb-2">Full Name*</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-neutral-gray-700 mb-2">Email Address*</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                          placeholder="Your email"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-neutral-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                          placeholder="Your phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="eventType" className="block text-neutral-gray-700 mb-2">Event Type*</label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formState.eventType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                        >
                          <option value="">Select event type</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Corporate">Corporate Event</option>
                          <option value="Birthday">Birthday Celebration</option>
                          <option value="Anniversary">Anniversary</option>
                          <option value="Dinner">Luxury Dinner</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="eventDate" className="block text-neutral-gray-700 mb-2">Event Date</label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={formState.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="guestCount" className="block text-neutral-gray-700 mb-2">Guest Count (Approximate)</label>
                        <input
                          type="number"
                          id="guestCount"
                          name="guestCount"
                          value={formState.guestCount}
                          onChange={handleChange}
                          min="1"
                          className="w-full px-4 py-3 border border-neutral-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                          placeholder="Number of guests"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-neutral-gray-700 mb-2">Tell Us About Your Vision*</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-neutral-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Share your event vision, goals, and any specific requirements..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-gold flex items-center justify-center gap-2 w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-96 bg-neutral-gray-100 relative">
        {/* This would typically be a Google Maps embed */}
        <div className="absolute inset-0 bg-neutral-gray-200 flex items-center justify-center">
          <p className="text-neutral-gray-600 text-lg">
            Google Maps would be embedded here
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactPage;