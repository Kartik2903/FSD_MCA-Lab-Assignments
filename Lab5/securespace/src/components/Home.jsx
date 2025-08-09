import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Secure Your Digital
            <span className="text-blue-400 block">Universe</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Welcome to SecureSpace - Your premier bug bounty platform where ethical hackers 
            and organizations collaborate to build a safer digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/bounties"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              Explore Bounties
            </Link>
            <Link
              to="/services"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose SecureSpace?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our platform connects security researchers with organizations to create 
            a more secure digital ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-blue-400 text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-white mb-3">Secure Platform</h3>
            <p className="text-gray-300">
              Enterprise-grade security measures protecting both researchers and organizations 
              throughout the bounty process.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-blue-400 text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold text-white mb-3">Fair Rewards</h3>
            <p className="text-gray-300">
              Competitive bounty payments with transparent reward structures and 
              fast payment processing.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-blue-400 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-white mb-3">Expert Community</h3>
            <p className="text-gray-300">
              Join a community of skilled security researchers and organizations 
              committed to improving cybersecurity.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Active Bounties</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
              <div className="text-gray-300">Security Researchers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">$2M+</div>
              <div className="text-gray-300">Rewards Paid</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Platform Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Security Journey?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Whether you're a security researcher looking for bounties or an organization 
          seeking to improve your security posture, we're here to help.
        </p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  );
};

export default Home;
