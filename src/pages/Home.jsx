import React from 'react'
import Navbar from '../Componets/Navbar'
import HeroSection from '../Componets/Hero';
import TrustedPartners from '../Componets/TrustedPartner';
import Features from '../Componets/Features';
import TrainingSection from '../Componets/EmailSection';
import TestimonialCarousel from '../Componets/Testiomial';
function Home() {
  return (
    <div className='bg-[#00222d]'>
      <HeroSection/>
      <TrustedPartners/>
      <Features/>
    <TrainingSection/>
    <TestimonialCarousel/>
  
    </div>
  )
}

export default Home;