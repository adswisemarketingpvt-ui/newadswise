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
      role: 'Consulting Head',
      image: 'https://i.pinimg.com/736x/32/4f/a4/324fa4d50eab63a93f12dc9fee6720cc.jpg?w=400&h=400&fit=crop'
    },
    {
      name: 'Niraj Bhumkar',
      role: 'Co-FOUNDER',
      image: '?w=400&h=400&fit=crop'
    },
    {
      name: 'Nikhil M',
      role: 'WEB DEVELOPER',
      image: 'https://adswisemarketing.com//website.jpg?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
         <div
              className="text-center mb-4 md:mb-5 animate-fadeIn"
              style={{ animationDelay: "0s" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold text-white mb-4">
                Our <span className="text-yellow-500">Team</span>
              </h1>
              <p className="text-gray-500 text-sm md:text-lg mb-12 ">
                Meet the passionate minds driving our success.
              </p>
            </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden ">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75 grayscale group-hover:grayscale-0"
                  style={{
                    filter: hoveredIndex === index ? 'grayscale(0%)' : 'grayscale(100%)'
                  }}
                />
                
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 group-hover:translate-y-0">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 tracking-widest uppercase">
                      {member.role}
                    </p>
                  </div>
                  
                  <div 
                    className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100"
                  >
                    <a 
                      href="#" 
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                      onClick={(e) => e.preventDefault()}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                      onClick={(e) => e.preventDefault()}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="text-white hover:text-blue-400 transition-colors duration-300"
                      onClick={(e) => e.preventDefault()}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Team;