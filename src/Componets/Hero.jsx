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
        className="w-full  py-20 flex justify-between items-center  text-white  px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto flex text-center  flex-col md:flex-row items-center gap-12 w-full">
          {/* Text Content */}
          <div className=" md:text-left">
            <h2 className="text-lg font-monster font-[400] md:text-xl text-[#5EEAD4]  mb-4 font-Mon">
              AI SDRs (aiDRs)
            </h2>
            <h1 className="text-4xl font-monster font-[700] md:text-6xl lg:text-7xl  leading-tight">
              More{' '}
              <span className="italic">leads</span>,<br />
              less{' '}
              <span className="italic text-gray-300">people</span>.
            </h1>
            <p className="font-monster font-[300] text-lg md:text-xl text-gray-300 mt-6 mb-8 max-w-2xl">
              Train an aiDR on your ICP and messaging matrix. Activate it on a patch. 
              It will send personalized sequences to every target contact.
            </p>
            <button className="py-3 px-8 font-nav font-[500] bg-[#0FF1F6] hover:bg-[#0cdce0] rounded-full text-black  text-sm transition-all duration-300 transform hover:scale-105">
              Sign Up for the Beta <span><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
            </button>
          </div>

          
        </div>
      </section>
    );
  };
  
  export default HeroSection;