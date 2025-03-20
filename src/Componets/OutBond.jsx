import React from 'react';

function OutBond() {
  return (
    <div className="flex justify-center items-center px-4 md:px-10 lg:px-20 py-10 text-white text-center">
      <div className="max-w-2xl">
        <span className="text-lg md:text-xl text-[#0FF1F6]">GET STARTED</span>
        <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
          <span className="italic">Embrace</span> the new era of outbound
        </h1>
        <p className="text-base md:text-lg text-[#FFFFFF] py-5 mx-auto">
          Wizia lets you train, activate, and optimize aiDRs. <br />
          Take your outbound to new levels of performance and efficiency.
        </p>
        <button 
          className="bg-[#0FF1F6] text-black px-6 py-3 rounded-full mt-6 font-semibold text-sm md:text-base hover:bg-cyan-500 transition-all">
          Sign up for the Beta
        </button>
      </div>
    </div>
  );
}

export default OutBond;