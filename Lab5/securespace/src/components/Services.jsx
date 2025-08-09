import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Bug Bounty Programs",
      description: "Comprehensive bug bounty programs tailored to your organization's needs with expert security researchers.",
      features: [
        "Continuous security testing",
        "Expert vulnerability assessment",
        "Detailed reporting and remediation guidance",
        "24/7 platform monitoring"
      ],
      icon: "🐛"
    },
    {
      title: "Penetration Testing",
      description: "Professional penetration testing services conducted by certified security experts to identify vulnerabilities.",
      features: [
        "Comprehensive security audits",
        "Network and application testing",
        "Social engineering assessments",
        "Compliance reporting"
      ],
      icon: "🔍"
    },
    {
      title: "Security Consulting",
      description: "Strategic security consulting to help organizations build robust cybersecurity frameworks and policies.",
      features: [
        "Security strategy development",
        "Risk assessment and management",
        "Compliance guidance",
        "Staff training and awareness"
      ],
      icon: "🎯"
    },
    {
      title: "Vulnerability Management",
      description: "End-to-end vulnerability management services to identify, prioritize, and remediate security issues.",
      features: [
        "Automated vulnerability scanning",
        "Risk-based prioritization",
        "Remediation tracking",
        "Executive reporting"
      ],
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity services designed to protect your organization 
            from evolving threats and vulnerabilities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start mb-6">
                <div className="text-4xl mr-4">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-lg">{service.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
              <p className="text-gray-300">Initial security assessment and requirements analysis</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Planning</h3>
              <p className="text-gray-300">Custom security strategy and implementation planning</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Execution</h3>
              <p className="text-gray-300">Professional security testing and implementation</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Reporting</h3>
              <p className="text-gray-300">Detailed reporting and ongoing support</p>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Service Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Starter</h3>
              <div className="text-3xl font-bold text-blue-400 mb-4">$999/mo</div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Basic vulnerability scanning</li>
                <li>Monthly security reports</li>
                <li>Email support</li>
                <li>Up to 5 applications</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border-2 border-blue-400">
              <div className="text-center mb-2">
                <span className="bg-blue-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">Popular</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-blue-400 mb-4">$2,999/mo</div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Advanced penetration testing</li>
                <li>Weekly security reports</li>
                <li>24/7 priority support</li>
                <li>Unlimited applications</li>
                <li>Compliance assistance</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-blue-400 mb-4">Custom</div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Full security program</li>
                <li>Dedicated security team</li>
                <li>Custom integrations</li>
                <li>On-site consulting</li>
                <li>Executive reporting</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-white mb-6">
            Let our experts help you build a comprehensive security strategy.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
