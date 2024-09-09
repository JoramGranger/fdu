import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import CustomButton from "../../primitives/Button";

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

// Add cloned slides for a circular effect
const infiniteSlides = [slides[slides.length - 1], ...slides, slides[0]];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start from the first actual slide
  const [transitioning, setTransitioning] = useState(false);

  // Use useCallback to memoize the nextSlide function
  const nextSlide = useCallback(() => {
    if (transitioning) return; // Prevent accidental fast clicks
    setCurrentSlide((prev) => prev + 1);
    setTransitioning(true);
  }, [transitioning]);

  const prevSlide = () => {
    if (transitioning) return;
    setCurrentSlide((prev) => prev - 1);
    setTransitioning(true);
  };

  // Reset to the real first/last slide after looping
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (transitioning) {
      timeout = setTimeout(() => {
        if (currentSlide === 0) {
          setCurrentSlide(slides.length);
          setTransitioning(false);
        } else if (currentSlide === slides.length + 1) {
          setCurrentSlide(1);
          setTransitioning(false);
        } else {
          setTransitioning(false);
        }
      }, 700); // Matches the CSS transition duration
    }
    return () => clearTimeout(timeout);
  }, [currentSlide, transitioning]);

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide(); // Call the memoized nextSlide function
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]); // Include nextSlide as a dependency

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
          {infiniteSlides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex items-center justify-between gap-6"
            >
              <div className="w-1/2">
                <div
                  className={`relative w-[600px] h-[400px] overflow-hidden rounded-lg`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                    className={`transform transition-transform duration-700 ease-in-out ${
                      currentSlide === index + 1 ? "scale-105" : "scale-100"
                    }`}
                  />
                </div>
              </div>
              <div className="w-1/2 pl-8 z-10">
                <h2
                  className={`text-4xl font-bold text-gray-800 mb-4 transition-opacity duration-700 ease-in-out ${
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index + 1 ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index + 1)}
          ></button>
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Hero;