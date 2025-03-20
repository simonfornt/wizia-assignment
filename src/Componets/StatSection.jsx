import React from "react";
import frame3 from "../assets/frame3.svg";

function StatSection() {
  return (
    <div className="relative px-4 md:px-20 py-8 md:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={frame3} 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
            Allocate effort where your reps make an impact.
          </h1>
          <h3 className="text-[#0FF1F6] text-xl md:text-4xl italic mb-6">
            Let us handle the rest.
          </h3>
          <p className="text-white text-base md:text-xl mb-8 md:mb-12">
            Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center md:justify-start">
            <div className="flex-1">
              <span className="text-[#0FF1F6] text-3xl md:text-5xl font-bold block">
                32%
              </span>
              <p className="text-white text-base md:text-xl">
                Improvement in Open Rate
              </p>
            </div>
            
            <div className="flex-1">
              <span className="text-[#0FF1F6] text-3xl md:text-5xl font-bold block">
                75%
              </span>
              <p className="text-white text-base md:text-xl">
                Improvement in Ramp Time
              </p>
            </div>
            
            <div className="flex-1">
              <span className="text-[#0FF1F6] text-3xl md:text-5xl font-bold block">
                35%
              </span>
              <p className="text-white text-base md:text-xl">
                Improvement in Meetings Booked
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatSection;