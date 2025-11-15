import React, { useEffect, useState, useRef } from 'react';
import { Target, Eye, TrendingUp, Globe, Users, Briefcase, Building, GraduationCap, ShoppingCart, Heart } from 'lucide-react';

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check which sections are visible
      Object.entries(sectionRefs.current).forEach(([key, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75) {
            setVisibleSections(prev => new Set([...prev, key]));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    { title: 'Honesty Over Hype', desc: "If a campaign idea won't work, we'll say it — and fix it." },
    { title: 'Always Learning', desc: 'The digital world evolves fast; we stay ahead with constant training, testing, and innovation.' },
    { title: 'Client as Partner', desc: "We don't work for clients; we work with them. Your goals define our direction." },
    { title: 'Real Results', desc: 'Not reach. Not likes. Not vanity. Just measurable business growth.' }
  ];

  const differentiators = [
    { icon: Target, title: 'ROI Over Aesthetics', desc: 'Every decision starts with your goal — leads, sales, or calls — not vanity metrics.' },
    { icon: Globe, title: 'Local Market Intelligence', desc: 'We understand the Maharashtra audience, local SEO patterns, and buying psychology.' },
    { icon: Briefcase, title: 'One Partner, All Services', desc: 'From SEO to Google Ads, Meta Ads, Branding, and Web Design — one team handles everything.' },
    { icon: TrendingUp, title: 'Industry Expertise', desc: 'We tailor campaigns to fit real estate, e-commerce, healthcare, education, B2B, B2C.' },
    { icon: Users, title: 'Radical Transparency', desc: "Every report is clear, every action traceable, every rupee justified." }
  ];

  const clients = [
    { icon: Users, title: 'Startups & MSMEs', desc: 'Ready to accelerate growth' },
    { icon: ShoppingCart, title: 'E-commerce brands', desc: 'Hungry for consistent online sales' },
    { icon: Building, title: 'Real estate developers', desc: 'Needing steady, qualified leads' },
    { icon: GraduationCap, title: 'Educational & Healthcare', desc: 'Focused on visibility and trust' },
    { icon: Heart, title: 'B2B & B2C brands', desc: 'Building long-term digital presence' }
  ];

  const process = [
    { num: '01', title: 'Research Deep Dive', desc: 'We analyse your market, competition, and customer base to find real growth levers.' },
    { num: '02', title: 'Strategic Roadmap', desc: 'Every campaign is planned — from keyword mapping to ad structure, creative tone, and funnel flow.' },
    { num: '03', title: 'Execution with Precision', desc: 'We run your ads, design your site, and execute SEO with data-led decisions.' },
    { num: '04', title: 'Measure & Optimise', desc: 'Every campaign is refined continuously to increase ROI and reduce waste.' }
  ];

  return (
    <div className="bg-[#000101] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 md:px-12">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at 30% 50%, #C7843B 0%, transparent 50%), 
                         radial-gradient(circle at 70% 50%, #2C4657 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block text-[#F3BD68]">Built Out of Frustration.</span>
            <span className="block text-[#C7843B] mt-2">Perfected Through Experience.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-3xl mx-auto animate-fade-in-delay">
            We started Adswise with a simple observation: most agencies overpromise and underdeliver. 
            They chase reach, not results. So we flipped the script.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in-delay-2">
            <button className="bg-[#C7843B] hover:bg-[#F3BD68] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Speak to Our Strategist Now
            </button>
            <button className="border-2 border-[#4D6473] hover:border-[#C7843B] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section 
        ref={el => sectionRefs.current['story'] = el}
        className={`py-20 px-6 md:px-12 transition-all duration-1000 ${
          visibleSections.has('story') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F3BD68] mb-8">The Adswise Story</h2>
          <div className="grid md:grid-cols-2 gap-8 text-[#2C4657] leading-relaxed">
            <div className="space-y-4 text-lg text-white">
              <p>
                We built a team of strategists, not campaign-pushers — people who understand data, 
                creative storytelling, and consumer psychology. We rooted ourselves in Maharashtra's 
                market culture, because you can't scale nationally if you don't first master local 
                ground realities.
              </p>
            </div>
            <div className="space-y-4 text-lg text-white">
              <p>
                Our first wins came from real estate and education sectors in Pune, then e-commerce 
                and healthcare in Mumbai. From there, we expanded our full-service stack — Google Ads, 
                Meta Ads, SEO, Branding, and Web Design — to help clients get everything under one roof.
              </p>
              <p className="text-[#C7843B] font-semibold">
                Today, Adswise Marketing partners with brands that value depth, not noise. 
                We grow with our clients, not at their expense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section 
        ref={el => sectionRefs.current['mission'] = el}
        className={`py-20 px-6 md:px-12 bg-[#172531] transition-all duration-1000 ${
          visibleSections.has('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="border-l-4 border-[#C7843B] pl-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-[#F3BD68]" size={32} />
              <h3 className="text-3xl font-bold text-[#F3BD68]">Mission</h3>
            </div>
            <p className="text-lg text-white leading-relaxed">
              Empower startups and MSMEs in Pune, Mumbai, and across Maharashtra to win online using 
              research-backed marketing, measurable ROI, and creative precision.
            </p>
          </div>
          <div className="border-l-4 border-[#F3BD68] pl-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-[#C7843B]" size={32} />
              <h3 className="text-3xl font-bold text-[#C7843B]">Vision</h3>
            </div>
            <p className="text-lg text-white leading-relaxed">
              Be the most trusted digital marketing agency in Maharashtra — recognised for transparency, 
              results, and the ability to turn ad budgets into real business growth.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section 
        ref={el => sectionRefs.current['differentiators'] = el}
        className={`py-20 px-6 md:px-12 transition-all duration-1000 ${
          visibleSections.has('differentiators') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F3BD68] mb-12 text-center">
            What Sets Adswise Apart
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className="bg-[#172531] p-6 rounded-lg border border-[#2C4657] hover:border-[#C7843B] transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="text-[#F3BD68] mb-4" size={40} />
                <h3 className="text-xl font-bold text-[#C7843B] mb-3">{item.title}</h3>
                <p className="text-white leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section 
        ref={el => sectionRefs.current['values'] = el}
        className={`py-20 px-6 md:px-12 bg-[#172531] transition-all duration-1000 ${
          visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F3BD68] mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#2C4657] to-[#172531] p-6 rounded-lg border-l-4 border-[#C7843B]"
              >
                <h3 className="text-2xl font-bold text-[#F3BD68] mb-3">{value.title}</h3>
                <p className="text-white leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section 
        ref={el => sectionRefs.current['clients'] = el}
        className={`py-20 px-6 md:px-12 transition-all duration-1000 ${
          visibleSections.has('clients') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F3BD68] mb-12 text-center">
            Who We Work With
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-[#172531] p-6 rounded-lg border border-[#2C4657] hover:border-[#F3BD68] transition-all duration-300 text-center group"
              >
                <client.icon className="text-[#C7843B] mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-bold text-[#F3BD68] mb-2">{client.title}</h3>
                <p className="text-white">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section 
        ref={el => sectionRefs.current['process'] = el}
        className={`py-20 px-6 md:px-12 bg-[#172531] transition-all duration-1000 ${
          visibleSections.has('process') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F3BD68] mb-12 text-center">
            Our Process
          </h2>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div 
                key={index}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#C7843B] to-[#F3BD68] rounded-lg flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <div className="flex-1 bg-[#2C4657] p-6 rounded-lg border border-[#4D6473] group-hover:border-[#C7843B] transition-all">
                  <h3 className="text-2xl font-bold text-[#F3BD68] mb-3">{step.title}</h3>
                  <p className="text-white leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-[#F3BD68] mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-[#4D6473] mb-8">
            Let's make your marketing profitable.
          </p>
          <p className="text-lg text-white mb-8">
            Book a free consultation with our strategist today and discover how we can help you scale 
            through Google Ads, Meta Ads, SEO, and smart branding.
          </p>
          <button className="bg-gradient-to-r from-[#C7843B] to-[#F3BD68] hover:from-[#F3BD68] hover:to-[#C7843B] text-white px-12 py-5 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Speak to Our Strategist Now
          </button>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}