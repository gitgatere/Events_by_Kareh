import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import HeroBanner from '../components/hero/HeroBanner';
import CallToAction from '../components/home/CallToAction';

interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: Array<{text: string, included: boolean}>;
  highlight?: boolean;
}

const PricingPage: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Essential",
      description: "Perfect for clients who need assistance with specific aspects of their event.",
      price: "Starting at $5,000",
      features: [
        { text: "Initial consultation", included: true },
        { text: "Vendor recommendations", included: true },
        { text: "Budget management", included: true },
        { text: "Day-of coordination", included: true },
        { text: "Full planning services", included: false },
        { text: "Design & styling", included: false },
        { text: "Custom event website", included: false },
        { text: "VIP vendor access", included: false }
      ]
    },
    {
      name: "Signature",
      description: "Our most popular option for clients seeking comprehensive planning services.",
      price: "Starting at $10,000",
      highlight: true,
      features: [
        { text: "Initial consultation", included: true },
        { text: "Vendor recommendations", included: true },
        { text: "Budget management", included: true },
        { text: "Day-of coordination", included: true },
        { text: "Full planning services", included: true },
        { text: "Design & styling", included: true },
        { text: "Custom event website", included: false },
        { text: "VIP vendor access", included: false }
      ]
    },
    {
      name: "Luxury",
      description: "The ultimate event experience with exclusive services and white-glove treatment.",
      price: "Starting at $25,000",
      features: [
        { text: "Initial consultation", included: true },
        { text: "Vendor recommendations", included: true },
        { text: "Budget management", included: true },
        { text: "Day-of coordination", included: true },
        { text: "Full planning services", included: true },
        { text: "Design & styling", included: true },
        { text: "Custom event website", included: true },
        { text: "VIP vendor access", included: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "What is included in the initial consultation?",
      answer: "Our initial consultation includes a comprehensive discussion about your vision, preferences, and expectations. We'll discuss potential venues, themes, and provide a general outline of the planning process. This consultation helps us understand your needs and determine the best package for your event."
    },
    {
      question: "How far in advance should I book your services?",
      answer: "For full-service planning, we recommend booking 9-12 months in advance for weddings and 6-9 months for other significant events. For day-of coordination or partial planning, 3-6 months is typically sufficient. However, we occasionally have availability for shorter timelines and can accommodate rush planning when possible."
    },
    {
      question: "Do you work with clients outside of your local area?",
      answer: "Yes! We specialize in both local and destination events. For destination events, additional travel fees will apply, which we'll outline clearly in your custom proposal."
    },
    {
      question: "Can I customize a package to fit my specific needs?",
      answer: "Absolutely! We understand that every event is unique, and we're happy to create a custom package tailored to your specific requirements and budget. After our initial consultation, we'll provide a detailed proposal outlining services that align with your vision."
    },
    {
      question: "What is your payment schedule?",
      answer: "We require a 50% deposit to secure your date, with the remaining balance due in installments leading up to your event. For custom packages, we can create a payment schedule that works for your budget and timeline."
    },
    {
      question: "Do you offer vendor discounts?",
      answer: "Yes, we have established relationships with many premium vendors who offer our clients special rates and priority booking. Our Luxury package clients receive access to our exclusive VIP vendor network with significant discounts and special amenities."
    }
  ];

  return (
    <>
      <HeroBanner 
        title="Investment & Packages"
        subtitle="Transparent pricing for exceptional event experiences"
        backgroundImage="https://images.pexels.com/photos/931887/pexels-photo-931887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section-padding" id="main-content">
        <div className="container-custom">
          <SectionHeading 
            title="Our Packages" 
            subtitle="Services & Pricing"
          />
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-neutral-gray-700">
              We offer a range of packages designed to meet different needs and budgets. Each package can be customized to ensure your event receives the attention it deserves. All pricing is based on event size, complexity, and location.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div 
                key={tier.name}
                className={`rounded-lg overflow-hidden shadow-lg border ${
                  tier.highlight 
                    ? 'border-gold relative shadow-gold transform -translate-y-4' 
                    : 'border-neutral-gray-200'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold text-primary px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${tier.highlight ? 'bg-primary text-neutral-white' : 'bg-white'}`}>
                  <h3 className={`text-2xl font-serif mb-2 ${tier.highlight ? 'text-gold' : 'text-primary'}`}>{tier.name}</h3>
                  <p className={`mb-6 ${tier.highlight ? 'text-neutral-gray-200' : 'text-neutral-gray-600'}`}>{tier.description}</p>
                  <p className={`text-3xl font-serif font-medium mb-8 ${tier.highlight ? 'text-gold' : 'text-primary'}`}>
                    {tier.price}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className={`w-5 h-5 mt-0.5 ${tier.highlight ? 'text-gold' : 'text-gold'}`} />
                        ) : (
                          <X className={`w-5 h-5 mt-0.5 ${tier.highlight ? 'text-neutral-gray-400' : 'text-neutral-gray-400'}`} />
                        )}
                        <span className={feature.included 
                          ? tier.highlight ? 'text-neutral-white' : 'text-neutral-gray-800'
                          : tier.highlight ? 'text-neutral-gray-400' : 'text-neutral-gray-400'
                        }>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 rounded-sm font-medium transition-colors ${
                      tier.highlight 
                        ? 'bg-gold text-primary hover:bg-gold-light' 
                        : 'bg-primary text-white hover:bg-primary-light'
                    }`}
                  >
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-neutral-gray-600 mb-6">
              Need something more customized? We offer bespoke packages tailored to your specific event needs.
            </p>
            <button className="btn btn-outline">
              Request Custom Package
            </button>
          </div>
        </div>
      </section>
      
      {/* Custom Pricing */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionHeading 
            title="Custom Event Solutions" 
            subtitle="Tailored Services"
            className="text-neutral-white"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-neutral-white">
                <p className="mb-6">
                  We understand that every event is unique, with specific requirements and challenges. That's why we offer custom pricing based on your event's specific needs, complexity, guest count, and location.
                </p>
                <p className="mb-6">
                  Our tailored approach ensures you receive exactly the services you need, without paying for ones you don't. Whether you're planning an intimate celebration or a grand affair, we'll create a custom package that aligns with your vision and budget.
                </p>
                <p className="mb-8">
                  After an initial consultation, we'll provide a detailed proposal outlining our recommended services and associated costs, with no hidden fees or surprises.
                </p>
                
                <button className="btn btn-gold">
                  Schedule a Consultation
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-primary-light p-6 rounded-md">
                <h3 className="text-xl font-serif text-gold mb-3">À La Carte</h3>
                <p className="text-neutral-gray-200">
                  Select individual services to complement your own planning efforts.
                </p>
              </div>
              
              <div className="bg-primary-light p-6 rounded-md">
                <h3 className="text-xl font-serif text-gold mb-3">Month-Of</h3>
                <p className="text-neutral-gray-200">
                  Perfect for couples who've handled the planning but need execution.
                </p>
              </div>
              
              <div className="bg-primary-light p-6 rounded-md">
                <h3 className="text-xl font-serif text-gold mb-3">Destination</h3>
                <p className="text-neutral-gray-200">
                  Specialized services for events outside your local area.
                </p>
              </div>
              
              <div className="bg-primary-light p-6 rounded-md">
                <h3 className="text-xl font-serif text-gold mb-3">VIP</h3>
                <p className="text-neutral-gray-200">
                  Ultra-luxury service with premium amenities and exclusivity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-neutral-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Common Inquiries"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-md shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer text-lg font-medium">
                      {faq.question}
                      <span className="transform group-open:rotate-180 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-neutral-gray-700">{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-neutral-gray-700 mb-6">
                Have additional questions about our services or pricing?
              </p>
              <button className="btn btn-primary">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default PricingPage;