import React from "react";
import bgimage from "../assets/hero-bg.svg";

const HeroSection = () => {
    return (
      <section 
        style={{
          backgroundImage: ` url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        className="w-full min-h-screen flex items-center text-white py-20 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg md:text-xl text-[#5EEAD4] font-semibold mb-4">
              AI SDRs (aiDRs)
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              More{' '}
              <span className="italic text-[#5EEAD4]">leads</span>,<br />
              less{' '}
              <span className="italic text-gray-300">people</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mt-6 mb-8 max-w-2xl">
              Train an aiDR on your ICP and messaging matrix. Activate it on a patch. 
              It will send personalized sequences to every target contact.
            </p>
            <button className="py-3 px-8 bg-[#0FF1F6] hover:bg-[#0cdce0] rounded-full text-black font-semibold text-sm transition-all duration-300 transform hover:scale-105">
              Sign Up for the Beta
            </button>
          </div>

          
        </div>
      </section>
    );
  };
  
  export default HeroSection;