import React from 'react'
import Navbar from '../Componets/Navbar'
import HeroSection from '../Componets/Hero';
import TrustedPartners from '../Componets/TrustedPartner';
import Features from '../Componets/Features';

function Home() {
  return (
    <div>
      <HeroSection/>
      <TrustedPartners/>
      <Features/>
    </div>
  )
}

export default Home;