import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "DTK footwear",
      description: "Modern shopping platform",
      image:
        "https://adswisemarketing.com//public/dtk.png?w=400&h=300&fit=crop",
      link: "https://www.dtkfootwear.com/",
    },
    {
      id: 2,
      title: "vishwaswami interiors",
      description: "Elegant home designs",
      image:
        "https://adswisemarketing.com/public/interior.png?w=400&h=300&fit=crop",
      link: "https://vishwaswamiinteriors.com/",
    },
    {
      id: 3,
      title: "suncreast financials",
      description: "Trusted financial services",
      image:
        "https://adswisemarketing.com/public/suncreast.png?w=400&h=300&fit=crop",
      link: "https://www.suncreastfinancials.com/",
    },
    {
      id: 4,
      title: "believe properties",
      description: "Real estate solutions",
      image:
        "https://adswisemarketing.com//public/belive.png?w=400&h=300&fit=crop",
      link: "https://www.believe-properties.com/",
    },
    {
      id: 5,
      title: "bookshow",
      description: "Your gateway to entertainment",
      image:
        "https://adswisemarketing.com/public/bookshow.png?w=400&h=300&fit=crop",
      link: "https://react-movie-booker-client-nikhil-s-projects-e7f22d62.vercel.app/",
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "Explore the world",
      image:
        "https://adswisemarketing.com/public/e-commerce.png?w=400&h=300&fit=crop",
      link: "https://e-commerce-application-vxn8.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div
              className="text-center mb-4 md:mb-5 animate-fadeIn"
              style={{ animationDelay: "0s" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold text-white mb-4">
                Our <span className="text-yellow-500">Projects</span>
              </h1>
              <p className="text-gray-500 text-sm md:text-lg mb-12 ">
                A showcase of our diverse and impactful work.
              </p>
            </div>


      {/* Grid of cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} in new tab`}
            className="group block transform transition-all will-change-transform"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <article className="relative bg-slate-900  shadow-xl overflow-hidden ">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* orange gradient on images */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>

                {/* <p className="text-sm text-yellow-200/80 mb-4">
                  {project.description}
                </p> */}

                <div className="flex items-center text-orange-500  transition-colors">
                  <span className="text-sm font-semibold">View Live Site</span>
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>

      {/* Local styles */}
      <style jsx>{`
        .card-border {
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          transform-origin: center;

          opacity: 0;
          transform: translateY(18px) scale(0.995);
          animation: fadeUp 560ms ease forwards;
        }

        .card-border:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0px 0px 25px rgba(255, 165, 0, 0.25);
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Project;
