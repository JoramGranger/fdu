import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import CustomButton from "../../primitives/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Slide {
  image: string;
  title: string;
}

const slides: Slide[] = [
  { image: "/assets/p001.jpg", title: "Amazing Product 1" },
  { image: "/assets/p004.webp", title: "Amazing Product 2" },
  { image: "/assets/p005.webp", title: "Amazing Product 3" },
  { image: "/assets/p006.webp", title: "Amazing Product 4" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (transitioning) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTransitioning(true);
  }, [transitioning]);

  const prevSlide = () => {
    if (transitioning) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTransitioning(true);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (transitioning) {
      timeout = setTimeout(() => {
        setTransitioning(false);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [transitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative max-w-6xl mx-auto p-4">
      {/* Slides */}
      <div className="overflow-hidden">
        <div
          className={`flex transition-transform duration-700 ease-in-out ${
            transitioning ? "" : "transition-none"
          }`}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center justify-center gap-6"
            >
              <div className="relative w-full lg:w-1/2 h-[300px] lg:h-[400px] overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  className="animate-zoomInOut"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-8 flex flex-col items-center text-center lg:items-start lg:text-left">
                <h2
                  className={`text-2xl lg:text-4xl font-bold text-gray-800 mb-4 transition-opacity duration-700 ease-in-out ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {slide.title}
                </h2>
                <CustomButton
                  variant="primary"
                  className="px-6 py-3"
                  onClick={() => alert("Buy Now Clicked!")}
                >
                  Buy Now
                </CustomButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Page Indicators */}
      <div className="absolute mt-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-12 rounded-sm ${
              currentSlide === index ? "bg-black" : "bg-fd-pink-dark"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Hero;