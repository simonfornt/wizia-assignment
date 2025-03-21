import React from "react";
import frame3 from "../assets/frame3.svg";

function StatSection() {
  return (
    <div className="relative font-monster px-4 md:px-20 py-8 md:py-16 bg-[#002228] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0  h-full">
        <img src={frame3} alt="Background" className="mx-auto h-full object-cover opacity-100" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl  text-left md:text-left py-10 px-6 md:px-10">
        <h1 className="text-white font-[600] text-2xl md:text-4xl  mb-4">
          Allocate effort where your reps make an impact.
        </h1>
        <h3 className="text-[#0FF1F6] font-[500] text-xl md:text-4xl italic mb-6">
          Let us handle the rest.
        </h3>
        <p className="text-white font-[300] text-base md:text-xl mb-8 md:mb-12">
          Keep your reps “in the air” -- out in the field and on the phone where
          they can build relationships.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 font-monster sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-left ">
            <span className="text-[#0FF1F6] font-[700] text-3xl md:text-5xl  block">
              32%
            </span>
            <p className="text-[#E9EEF1] text-base font-[500] font-monster md:text-xl">
              Improvement in Open Rate
            </p>
          </div>

          <div className="text-left ">
            <span className="text-[#0FF1F6] text-3xl md:text-5xl font-bold block">
              75%
            </span>
            <p className="text-[#E9EEF1] text-base font-[500] md:text-xl">
              Improvement in Ramp Time
            </p>
          </div>

          <div className="text-left ">
            <span className="text-[#0FF1F6] text-3xl md:text-5xl font-bold block">
              35%
            </span>
            <p className="text-[#E9EEF1] font-[500] text-base md:text-xl">
              Improvement in Meetings Booked
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatSection;