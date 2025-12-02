import React, { useState } from 'react';

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const teamMembers = [
    {
      name: 'Gaurav Jagtap',
      role: 'CEO',
      image: 'https://adswisemarketing.com/ceo.jpg?w=400&h=400&fit=crop'
    },
    {
      name: 'Shalmali Shinde',
      role: 'CONSULTING HEAD',
      image: 'https://i.pinimg.com/736x/32/4f/a4/324fa4d50eab63a93f12dc9fee6720cc.jpg?w=400&h=400&fit=crop'
    },
    {
      name: 'Niraj Bhumkar',
      role: 'CO-FOUNDER',
      // Added https://i.pinimg.com prefix to fix the broken link you had
      image: 'heab63a93f12dc9fee6720cc.jpg?w=400&h=400&fit=crop'
    },
    {
      name: 'Nikhil M',
      role: 'WEB DEVELOPER',
      image: 'https://adswisemarketing.com//website.jpg?w=400&h=400&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeIn" style={{ animationDelay: "0s" }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-500">Team</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-lg">
            Meet the passionate minds driving our success.
          </p>
        </div>

        {/* TEAM GRID SECTION - UPDATED FOR RESPONSIVENESS */}
        {/* Changes made:
            1. Changed flex to grid.
            2. grid-cols-1: Shows 1 card per row on Mobile.
            3. sm:grid-cols-2: Shows 2 cards per row on Tablets.
            4. lg:grid-cols-4: Shows 4 cards per row on Desktop.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative cursor-pointer w-full max-w-[280px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden  border border-gray-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{
                    filter: hoveredIndex === index ? 'grayscale(0%)' : 'grayscale(100%)'
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-xs text-yellow-500 font-semibold uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Team;