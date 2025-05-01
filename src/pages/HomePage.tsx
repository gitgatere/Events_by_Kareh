import React from 'react';
import HeroBanner from '../components/hero/HeroBanner';
import FeaturedServices from '../components/home/FeaturedServices';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import GalleryPreview from '../components/home/GalleryPreview';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroBanner 
        title="Turning Moments Into Masterpieces"
        subtitle="Luxury event planning and design for life's most significant celebrations"
        backgroundImage="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <div id="main-content">
        <FeaturedServices />
        <AboutPreview />
        <GalleryPreview />
        <Testimonials />
        <CallToAction />
      </div>
    </>
  );
};

export default HomePage;