import React from "react";
import backgroundImage from "../assets/frame2.svg"; // Replace with your actual image path

const TrainingSection = () => {
 

  return (
    <section className="relative min-h-[600px] flex items-center justify-center text-white bg-[#00222d]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 w-[1344px] h-[564px] mx-auto rounded-lg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
        }}
      >
      
      </div>

      {/* Content */}
      <div className="z-1 md:ml-[400px]  px-4 py-12">
        <div className="">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
            Train your aiDR on your...
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left text-cyan-400 italic">
            preferred email style
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 text-left">
            You're in control. Train your aiDR on elements of your Marketing strategy.
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:gap-6">
            <li className="list-none text-cyan-300">Quick to ramp</li>
            <li className="list-none text-cyan-300">Easy to optimize</li>
            <li className="list-none text-cyan-300">Quick to scale up</li>
            <li className="list-none text-cyan-300">Works with all your existing tools</li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;