import React, { useState, useEffect } from 'react';

const Carousel = ({ items, autoPlay = true, interval = 500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && items.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);

      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!items || items.length === 0) {
    return <div className="text-gray-400">No items to display</div>;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-lg bg-gray-800">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {item.type === 'image' ? (
                <div className="relative">
                  <img 
                    src={item.src} 
                    alt={item.alt || `Slide ${index + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      <h3 className="text-white text-xl font-bold mb-2">{item.caption}</h3>
                      {item.description && (
                        <p className="text-gray-300">{item.description}</p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-8 h-64 md:h-96 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-lg mb-4">{item.content}</p>
                  {item.action && (
                    <button 
                      onClick={item.action.onClick}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-fit transition duration-300"
                    >
                      {item.action.text}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition duration-300"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {items.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-500' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Example usage component for demonstration
export const TestimonialCarousel = () => {
  const testimonials = [
    {
      type: 'content',
      title: 'Outstanding Security Partnership',
      content: 'SecureSpace helped us identify critical vulnerabilities in our infrastructure. Their team of ethical hackers is top-notch, and their platform made the entire process seamless.',
      author: 'Sarah Chen, CTO at TechCorp'
    },
    {
      type: 'content',
      title: 'Excellent Bug Bounty Program',
      content: 'The bug bounty program exceeded our expectations. We received high-quality reports and the researchers were professional throughout the engagement.',
      author: 'Mike Rodriguez, Security Director at DataFlow'
    },
    {
      type: 'content',
      title: 'Comprehensive Security Testing',
      content: 'Their penetration testing services are thorough and well-documented. The remediation guidance helped us significantly improve our security posture.',
      author: 'Emily Johnson, CISO at FinanceSecure'
    }
  ];

  return (
    <div className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          What Our Clients Say
        </h2>
        <Carousel items={testimonials} autoPlay={true} interval={6000} />
      </div>
    </div>
  );
};

export default Carousel;
