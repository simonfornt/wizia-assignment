import React from 'react'
import Navbar from '../Componets/Navbar'
import HeroSection from '../Componets/Hero';
import TrustedPartners from '../Componets/TrustedPartner';
import Features from '../Componets/Features';
import TrainingSection from '../Componets/EmailSection';
import TestimonialCarousel from '../Componets/Testiomial';
import StatSection from '../Componets/StatSection';


function Home() {
  return (
    <div className='bg-[#00222d]'>
      <HeroSection/>
      <TrustedPartners/>
      <Features/>
    <TrainingSection/>
    <TestimonialCarousel/>
    <StatSection/>
  
    </div>
  )
}

export default Home;