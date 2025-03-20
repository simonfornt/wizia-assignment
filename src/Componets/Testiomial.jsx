import React, { useState, useEffect } from "react";
import quate from "../assets/Group 9.png";

const testimonials = [
  // ... keep your testimonials array same
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "John Doe",
    title: "Chief Strategy Officer @ Company",
  },
  {
    quote: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "Jane Smith",
    title: "Marketing Manager",
  },
  {
    quote: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    author: "David Lee",
    title: "Software Engineer",
  },
];

const TestimonialCarousel = ({ data = testimonials }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
    };
  
    const goToSlide = (index) => {
      setCurrentSlide(index);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % data.length);
      }, 8000);
  
      return () => clearInterval(interval);
    }, [data.length]);
  // ... keep existing state and logic

  return (
    <div className="bg-[#00222d] h-[500px] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl text-center">
        <div className="relative overflow-hidden min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          {data.map((testimonial, index) => (
            <div
              key={index}
              role="tabpanel"
              className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== currentSlide}
            >
              <div className="p-6 sm:p-8 md:p-12 lg:p-16">
                <div className="flex justify-center mb-4 md:mb-6 lg:mb-8">
                  <img 
                    src={quate} 
                    alt="quotation mark" 
                    className="w-12 h-auto md:w-16 lg:w-20"
                  />
                </div>
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose mb-8 md:mb-14 text-gray-200 px-2 sm:px-4 md:px-8">
                  {testimonial.quote}
                </p>
                <div className="space-y-1 md:space-y-2">
                  <p className="font-bold text-lg md:text-xl lg:text-2xl  text-[#00ced1]">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-400 text-sm  lg:text-lg">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-4 md:left-[5vw] lg:left-[1vw] transform -translate-y-1/2 text-gray-400 hover:text-[#00ced1] transition-colors"
          aria-label="Previous testimonial"
        >
          <svg 
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 md:right-[1vw] lg:right-[1vw] transform -translate-y-1/2 text-gray-400 hover:text-[#00ced1] transition-colors"
          aria-label="Next testimonial"
        >
          <svg 
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 sm:space-x-3">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-colors ${
                index === currentSlide 
                  ? "bg-[#00ced1] scale-125" 
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;