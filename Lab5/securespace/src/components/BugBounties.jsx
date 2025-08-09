
import React, { useState } from 'react';
import { BountyDetailsModal } from './Modal.jsx';

const BugBounties = () => {
  const [selectedBounty, setSelectedBounty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bounties = [
    {
      id: 1,
      title: "E-commerce Platform Security Assessment",
      company: "ShopSecure Inc.",
      reward: "$500 - $5,000",
      difficulty: "Medium",
      description: "We're looking for security researchers to test our e-commerce platform for vulnerabilities including SQL injection, XSS, CSRF, and business logic flaws.",
      scope: [
        "Main e-commerce website (shop.example.com)",
        "Admin panel (admin.shop.example.com)",
        "API endpoints (/api/v1/*)",
        "Mobile application"
      ],
      outOfScope: [
        "Third-party integrations",
        "Physical security testing",
        "Social engineering attacks",
        "DDoS attacks"
      ],
      tags: ["Web Application", "API", "Mobile"],
      deadline: "2024-03-15"
    },
    {
      id: 2,
      title: "Banking Mobile App Penetration Test",
      company: "SecureBank",
      reward: "$1,000 - $10,000",
      difficulty: "High",
      description: "Comprehensive security testing of our mobile banking application focusing on authentication, data encryption, and secure communication protocols.",
      scope: [
        "iOS mobile application",
        "Android mobile application",
        "Backend API services",
        "Authentication mechanisms"
      ],
      outOfScope: [
        "ATM systems",
        "Core banking infrastructure",
        "Physical branch security",
        "Employee systems"
      ],
      tags: ["Mobile Security", "Financial", "High Priority"],
      deadline: "2024-04-01"
    },
    {
      id: 3,
      title: "IoT Device Security Research",
      company: "SmartHome Technologies",
      reward: "$300 - $3,000",
      difficulty: "High",
      description: "Security assessment of our smart home IoT devices including smart locks, cameras, and environmental sensors for firmware vulnerabilities and network security issues.",
      scope: [
        "Smart lock firmware",
        "Security camera systems",
        "Environmental sensors",
        "Mobile companion app",
        "Cloud infrastructure"
      ],
      outOfScope: [
        "Physical device tampering",
        "Warranty void scenarios",
        "Manufacturing processes",
        "Supply chain attacks"
      ],
      tags: ["IoT", "Hardware", "Firmware"],
      deadline: "2024-03-30"
    },
    {
      id: 4,
      title: "Healthcare Platform HIPAA Compliance",
      company: "MedSecure Solutions",
      reward: "$750 - $7,500",
      difficulty: "Medium",
      description: "Security testing focused on HIPAA compliance for our healthcare management platform, including patient data protection and access controls.",
      scope: [
        "Patient portal",
        "Provider dashboard",
        "Database systems",
        "File storage systems",
        "Audit logging"
      ],
      outOfScope: [
        "Medical devices",
        "Physical infrastructure",
        "Third-party medical systems",
        "Insurance integrations"
      ],
      tags: ["Healthcare", "HIPAA", "Web Application"],
      deadline: "2024-04-15"
    },
    {
      id: 5,
      title: "Cloud Infrastructure Security",
      company: "CloudTech Corp",
      reward: "$400 - $4,000",
      difficulty: "Low",
      description: "Assessment of our cloud infrastructure security including container security, API gateways, and microservices architecture vulnerabilities.",
      scope: [
        "Kubernetes clusters",
        "Docker containers",
        "API Gateway",
        "Microservices",
        "Load balancers"
      ],
      outOfScope: [
        "Physical data centers",
        "Network infrastructure",
        "DNS systems",
        "CDN configurations"
      ],
      tags: ["Cloud Security", "DevOps", "Infrastructure"],
      deadline: "2024-03-25"
    },
    {
      id: 6,
      title: "Blockchain DeFi Protocol Audit",
      company: "DeFiSecure",
      reward: "$2,000 - $20,000",
      difficulty: "High",
      description: "Smart contract security audit for our decentralized finance protocol, focusing on vulnerabilities in smart contracts, token economics, and governance mechanisms.",
      scope: [
        "Smart contracts (Solidity)",
        "Token contracts",
        "Governance protocols",
        "Liquidity pools",
        "Frontend dApp"
      ],
      outOfScope: [
        "Ethereum network itself",
        "Third-party bridges",
        "External oracles",
        "Market manipulation"
      ],
      tags: ["Blockchain", "DeFi", "Smart Contracts"],
      deadline: "2024-04-30"
    }
  ];

  const openBountyDetails = (bounty) => {
    setSelectedBounty(bounty);
    setIsModalOpen(true);
  };

  const closeBountyDetails = () => {
    setIsModalOpen(false);
    setSelectedBounty(null);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Low': return 'bg-green-900 text-green-300';
      case 'Medium': return 'bg-yellow-900 text-yellow-300';
      case 'High': return 'bg-red-900 text-red-300';
      default: return 'bg-gray-900 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bug <span className="text-blue-400">Bounties</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover exciting security research opportunities and earn rewards for finding vulnerabilities.
            Join our community of ethical hackers making the digital world safer.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">{bounties.length}</div>
            <div className="text-gray-300">Active Bounties</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">$50K+</div>
            <div className="text-gray-300">Total Rewards</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">1,200+</div>
            <div className="text-gray-300">Researchers</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </div>

        {/* Bounties Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {bounties.map((bounty) => (
            <div 
              key={bounty.id}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 hover:transform hover:scale-105 cursor-pointer"
              onClick={() => openBountyDetails(bounty)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white mb-2 pr-4">{bounty.title}</h3>
                <span className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${getDifficultyColor(bounty.difficulty)}`}>
                  {bounty.difficulty}
                </span>
              </div>

              <div className="text-gray-400 mb-3">{bounty.company}</div>

              <p className="text-gray-300 mb-4 line-clamp-3">{bounty.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {bounty.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">{bounty.reward}</div>
                  <div className="text-gray-400 text-sm">Reward Range</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-300 text-sm">Deadline</div>
                  <div className="text-white font-medium">{bounty.deadline}</div>
                </div>
              </div>

              <button 
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  openBountyDetails(bounty);
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Submit Your Own Bounty?
          </h2>
          <p className="text-xl text-white mb-6">
            Organizations can create their own bug bounty programs on our platform.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300">
            Create Bounty Program
          </button>
        </div>
      </div>

      {/* Bounty Details Modal */}
      <BountyDetailsModal 
        isOpen={isModalOpen}
        onClose={closeBountyDetails}
        bounty={selectedBounty}
      />
    </div>
  );
};

export default BugBounties;
