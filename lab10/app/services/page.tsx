import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services | Next.js Web Application",
  description: "Explore our comprehensive range of services."
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            We offer a wide range of services designed to help your business succeed in the digital world.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our comprehensive range of services is designed to meet all your digital needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
              <div className="h-48 bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Image
                  src="/vercel.svg"
                  alt="Web Development"
                  width={120}
                  height={60}
                  className="dark:invert"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We build modern, responsive websites and web applications using the latest technologies like Next.js, React, and more.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Custom Website Development
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Web Application Development
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    E-commerce Solutions
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
              <div className="h-48 bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <Image
                  src="/window.svg"
                  alt="UI/UX Design"
                  width={120}
                  height={60}
                  className="dark:invert"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We create intuitive, beautiful user interfaces and experiences that delight your users and achieve your business goals.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    User Research & Testing
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Wireframing & Prototyping
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Visual Design & Branding
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:transform hover:scale-105">
              <div className="h-48 bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <Image
                  src="/globe.svg"
                  alt="Digital Marketing"
                  width={120}
                  height={60}
                  className="dark:invert"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We help you reach your target audience and grow your business through effective digital marketing strategies.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Search Engine Optimization (SEO)
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Social Media Marketing
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Content Marketing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              How we approach each project to ensure successful outcomes.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-600"></div>
            
            {/* Step 1 */}
            <div className="mb-16 md:mb-0 md:grid md:grid-cols-2 md:gap-8">
              <div className="md:text-right md:pr-8 relative">
                <div className="hidden md:block absolute right-0 top-5 transform translate-x-4 w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 z-10"></div>
                <h3 className="text-xl font-semibold mb-3">Discovery & Planning</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We begin by understanding your business goals, target audience, and project requirements.
                </p>
              </div>
              <div className="hidden md:block"></div>
            </div>
            
            {/* Step 2 */}
            <div className="mb-16 md:mb-0 md:grid md:grid-cols-2 md:gap-8">
              <div className="hidden md:block"></div>
              <div className="md:pl-8 relative">
                <div className="hidden md:block absolute left-0 top-5 transform -translate-x-4 w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 z-10"></div>
                <h3 className="text-xl font-semibold mb-3">Design & Development</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our team designs and develops solutions tailored to your specific needs.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="mb-16 md:mb-0 md:grid md:grid-cols-2 md:gap-8">
              <div className="md:text-right md:pr-8 relative">
                <div className="hidden md:block absolute right-0 top-5 transform translate-x-4 w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 z-10"></div>
                <h3 className="text-xl font-semibold mb-3">Testing & Refinement</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We thoroughly test and refine our work to ensure it meets the highest standards of quality.
                </p>
              </div>
              <div className="hidden md:block"></div>
            </div>
            
            {/* Step 4 */}
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="hidden md:block"></div>
              <div className="md:pl-8 relative">
                <div className="hidden md:block absolute left-0 top-5 transform -translate-x-4 w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 z-10"></div>
                <h3 className="text-xl font-semibold mb-3">Launch & Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We launch your project and provide ongoing support to ensure its continued success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you achieve your goals.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg inline-flex items-center justify-center"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
