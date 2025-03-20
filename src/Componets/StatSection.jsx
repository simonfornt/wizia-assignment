import React from "react";
import frame3 from "../assets/frame3.svg";

function StatSection() {
  return (
    <div className="relative px-4 md:px-20 py-8 md:py-16 bg-[#002228] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img src={frame3} alt="Background" className="w-full h-full object-cover opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left py-10 px-6 md:px-10">
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
          Allocate effort where your reps make an impact.
        </h1>
        <h3 className="text-[#0FF1F6] text-xl md:text-4xl italic mb-6">
          Let us handle the rest.
        </h3>
        <p className="text-white text-base md:text-xl mb-8 md:mb-12">
          Keep your reps “in the air” -- out in the field and on the phone where
          they can build relationships.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <span className="text-[#0FF1F6] text-3xl md:text-5xl font-bold block">
              32%
            </span>
            <p className="text-white text-base md:text-xl">
              Improvement in Open Rate
            </p>
          </div>

          <div className="text-center">
            <span className="text-[#0FF1F6] text-3xl md:text-5xl font-bold block">
              75%
            </span>
            <p className="text-white text-base md:text-xl">
              Improvement in Ramp Time
            </p>
          </div>

          <div className="text-center">
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
  );
}

export default StatSection;