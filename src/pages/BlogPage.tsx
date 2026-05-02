import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Eye,
} from "lucide-react";
import SEO from "../components/SEO";
import { blogs } from "../data/blogs";

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  // very lightweight typewriter-like reveal using CSS animation on spans
  return (
    <div className="inline-block whitespace-nowrap overflow-hidden">
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 30}ms` }}
          className="inline-block opacity-0 transform translate-y-1 animate-typewriter"
        >
          {ch}
        </span>
      ))}
      <style>{`
        @keyframes typewriter {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-typewriter {
          animation-name: typewriter;
          animation-duration: 420ms;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Digital Marketing",
    "AI & Technology",
    "SEO",
    "SEO Tools",
    "Social Media",
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#D3D3D3] text-[#363636]">
      <SEO
        title="Digital Marketing Blog & Insights | AdsWise Marketing"
        description="Stay ahead with the latest insights, strategies, and trends in digital marketing, SEO, and AI technology from AdsWise Marketing experts."
        url="https://www.adswisemarketing.com/blog"
        canonical="/blog"
      />
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200">
        <div className="absolute inset-0 opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <div className="text-4xl sm:text-6xl lg:text-6xl font-bold text-[#536186] h-20 md:h-24 pb-3 flex justify-center">
              <TypewriterText text="Digital Marketing Blog" />
            </div>
            <p className="text-[#536186] text-lg sm:text-xl max-w-2xl mx-auto mb-12">
              Stay ahead with the latest insights, strategies, and trends in
              digital marketing, SEO, and AI technology
            </p>

            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#536186] w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-[#363636] placeholder-[#536186] focus:outline-none focus:border-[#536186] focus:ring-2 focus:ring-[#536186] transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-[#D3D3D3] text-[#363636] shadow-lg shadow-[#363636]/30 border border-[#363636]"
                    : "bg-slate-50 text-[#536186] hover:bg-slate-100 hover:text-[#363636]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">
              No articles found
            </h3>
            <p className="text-slate-600">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.slug}`}
                className="group bg-gradient-to-br from-slate-50 to-white/[0.02] rounded-3xl overflow-hidden border border-slate-200 hover:border-[#536186]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#536186]/10 hover:-translate-y-1 block"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-white/50 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-[#536186]/90 backdrop-blur-sm text-[#D3D3D3] text-xs font-semibold rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/70 backdrop-blur-sm rounded-full">
                    <Eye className="w-3.5 h-3.5 text-slate-600" />
                    <span className="text-xs text-slate-700 font-medium">
                      {blog.views}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-[#363636] group-hover:text-[#536186] transition-colors line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-[#536186] mb-4 line-clamp-2 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="group/btn flex items-center gap-2 text-[#536186] font-medium hover:text-[#363636] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filteredBlogs.length > 0 && (
          <div className="mt-20 p-8 bg-slate-50 rounded-3xl border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-[#536186]" />
              <h3 className="text-xl font-bold text-[#363636]">
                Trending Topics
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "AI Marketing",
                "Voice Search",
                "Visual SEO",
                "Semrush",
                "Social Media Tools",
                "Predictive Analytics",
                "ChatGPT",
                "Google Lens",
              ].map((topic, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-[#536186] hover:text-[#363636] rounded-full border border-slate-200 hover:border-[#536186]/30 transition-all cursor-pointer text-sm font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
