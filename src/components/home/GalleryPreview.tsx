import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GalleryPreview: React.FC = () => {
  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Elegant wedding reception with floral centerpieces",
      category: "Wedding"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Corporate awards event setup with gold decor",
      category: "Corporate"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Luxurious private dinner party setting",
      category: "Dinner"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/758898/pexels-photo-758898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Birthday celebration with champagne tower",
      category: "Party"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1405531/pexels-photo-1405531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Outdoor wedding ceremony arch with florals",
      category: "Wedding"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3094341/pexels-photo-3094341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Beautifully decorated holiday party",
      category: "Party"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading 
          title="Our Event Portfolio" 
          subtitle="Recent Work"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-md shadow-md cursor-pointer h-64 md:h-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-gold text-sm mb-1">{image.category}</p>
                  <p className="text-white text-lg font-serif">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn btn-gold">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;