import React from "react";
import backgroundImage from "../assets/frame2.svg";

const TrainingSection = () => {
  return (
    <section className="relative h-auto md:min-h-[600px] flex items-center justify-center text-white bg-[#00222d]">
      {/* Background Image with responsive sizing */}
      <div
        className="absolute inset-0 z-0 w-full h-full mx-auto rounded-lg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* */}
      <div className="z-10  px-6 py-8 md:py-12">
        <div className="max-w-[500px] md:max-w-none md:ml-[30%] lg:ml-[400px]">
          {/* Responsive typography */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-monster font-[600] mb-4 text-left">
            Train your aiDR on your...
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-monster font-[500] mb-6 text-left text-cyan-400 italic">
            preferred email style|
          </h2>
          
          {/* Responsive paragraph text */}
          <p className=" text-xl font-nav font-[300] text-gray-200 mb-6 md:mb-8 text-left">
            You're in control. Train your aiDR on elements of your Marketing strategy.
          </p>

          {/* Responsive list grid */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2  md:gap-4 font-monster font-[500]">
            <li className="list-none text-cyan-300 text-base md:text-lg">Quick to ramp</li>
            <li className="list-none text-cyan-300 text-base md:text-lg">Easy to optimize</li>
            <li className="list-none text-cyan-300 text-base md:text-lg">Quick to scale up</li>
            <li className="list-none text-cyan-300 text-base md:text-lg">Works with all your existing tools</li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;