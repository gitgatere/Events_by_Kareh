import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };
  
  const animate = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.div 
      className={`max-w-3xl mb-12 ${alignmentClasses[alignment]} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={animate}
    >
      {subtitle && (
        <p className="text-gold uppercase tracking-wide font-medium mb-2">{subtitle}</p>
      )}
      <h2 className="mb-4">{title}</h2>
      <div className="h-1 w-16 bg-gold rounded-full mb-4 inline-block"></div>
    </motion.div>
  );
};

export default SectionHeading;