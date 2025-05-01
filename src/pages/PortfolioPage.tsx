import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import HeroBanner from '../components/hero/HeroBanner';
import CallToAction from '../components/home/CallToAction';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const PortfolioPage: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Elegant Garden Wedding",
      category: "Wedding",
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A romantic garden wedding featuring lush floral arrangements and a sophisticated color palette of blush, ivory, and gold."
    },
    {
      id: 2,
      title: "Annual Corporate Gala",
      category: "Corporate",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A high-profile corporate gala with custom lighting, interactive experiences, and gourmet catering for 300 executives."
    },
    {
      id: 3,
      title: "Seaside Birthday Celebration",
      category: "Birthday",
      image: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A luxurious 50th birthday celebration held at a private beach property with personalized experiences for the guest of honor."
    },
    {
      id: 4,
      title: "Luxury Product Launch",
      category: "Corporate",
      image: "https://images.pexels.com/photos/7594266/pexels-photo-7594266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "An exclusive product launch event for a luxury fashion brand, featuring interactive displays and celebrity appearances."
    },
    {
      id: 5,
      title: "Winter Wonderland Wedding",
      category: "Wedding",
      image: "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A magical winter wedding with crystal and ice-inspired decor, snow effects, and a monochromatic color scheme."
    },
    {
      id: 6,
      title: "Charity Fundraising Gala",
      category: "Gala",
      image: "https://images.pexels.com/photos/3319126/pexels-photo-3319126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A sophisticated charity event that raised over $500,000 for ocean conservation with an under-the-sea theme."
    },
    {
      id: 7,
      title: "Intimate Anniversary Dinner",
      category: "Anniversary",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A romantic 25th anniversary celebration with a private chef's dinner and personalized touches honoring the couple's journey."
    },
    {
      id: 8,
      title: "Tech Company Conference",
      category: "Corporate",
      image: "https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A tech industry conference featuring interactive stations, cutting-edge presentations, and networking opportunities."
    },
    {
      id: 9,
      title: "Boho Chic Wedding",
      category: "Wedding",
      image: "https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A free-spirited wedding celebration with macramé details, earthy tones, and an outdoor ceremony under a custom floral arch."
    }
  ];

  const categories = ["All", ...new Set(galleryItems.map(item => item.category))];
  
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);
  
  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <HeroBanner 
        title="Our Event Portfolio"
        subtitle="Explore our collection of extraordinary events and celebrations"
        backgroundImage="https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section-padding" id="main-content">
        <div className="container-custom">
          <SectionHeading 
            title="Our Work" 
            subtitle="Event Gallery"
          />
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-gold text-primary shadow-gold'
                    : 'bg-neutral-gray-100 text-neutral-gray-700 hover:bg-neutral-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative cursor-pointer rounded-md overflow-hidden shadow-md h-72"
                  onClick={() => openLightbox(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-gold text-sm mb-1">{item.category}</p>
                      <p className="text-neutral-white text-xl font-serif">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Case Studies */}
      <section className="section-padding bg-neutral-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Featured Events" 
            subtitle="Case Studies"
          />
          
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-gold text-sm uppercase tracking-wide font-medium mb-2">Luxury Wedding</p>
                <h3 className="text-2xl font-serif mb-4">The Johnson-Smith Wedding</h3>
                <p className="text-neutral-gray-700 mb-6">
                  This glamorous wedding at The Grand Hotel featured a custom-designed floral installation, a 10-piece orchestra, and a five-course gourmet dinner for 250 guests. We coordinated every detail from save-the-dates to the honeymoon departure.
                </p>
                
                <div className="space-y-2 mb-8">
                  <div className="flex items-start gap-2">
                    <div className="text-gold mt-1">•</div>
                    <p>Custom ceremony arch with 5,000 roses</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-gold mt-1">•</div>
                    <p>Interactive food stations featuring global cuisine</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-gold mt-1">•</div>
                    <p>Personalized guest welcome packages</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-gold mt-1">•</div>
                    <p>Custom lighting design transforming the space throughout the night</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-md overflow-hidden shadow-xl"
              >
                <img 
                  src="https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Johnson-Smith Wedding" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center md:grid-flow-col">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:order-2"
              >
                <p className="text-gold text-sm uppercase tracking-wide font-medium mb-2">Corporate Celebration</p>
                <h3 className="text-2xl font-serif mb-4">Innovatech Annual Gala</h3>
                <p className="text-neutral-gray-700 mb-6">
                  This technology company's annual celebration required a modern, innovative approach. We transformed their headquarters into an immersive futuristic environment for 400 employees and guests with interactive experiences throughout.
                </p>
                
                <div className="space-y-2 mb-8">
                  <div className="flex items-start gap-2">
                    <div className="text-gold mt-1">•</div>
                    <p>Custom digital projection mapping on building exterior</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-gold mt-1">•</div>
                    <p>Interactive technology stations showcasing company innovations</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-gold mt-1">•</div>
                    <p>Celebrity chef-curated menu with molecular gastronomy elements</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-gold mt-1">•</div>
                    <p>Custom awards presentation with animated graphics for each recipient</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-md overflow-hidden shadow-xl md:order-1"
              >
                <img 
                  src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Innovatech Annual Gala" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div 
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-md overflow-hidden shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full max-h-[60vh] object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gold text-sm mb-1">{selectedItem.category}</p>
                    <h3 className="text-2xl font-serif">{selectedItem.title}</h3>
                  </div>
                  <button 
                    onClick={closeLightbox}
                    className="text-neutral-gray-500 hover:text-primary transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-neutral-gray-700">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default PortfolioPage;