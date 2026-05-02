import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Eye } from "lucide-react";
import SEO from "../components/SEO";
import { blogs } from "../data/blogs";

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    if (!blog) {
      navigate("/blog");
    } else {
      window.scrollTo(0, 0);
    }
  }, [blog, navigate]);

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-[#D3D3D3] text-[#363636]">
      <SEO
        title={`${blog.title} | Adswise Marketing`}
        description={blog.excerpt}
        url={`https://www.adswisemarketing.com/blog/${blog.slug}`}
        canonical={`/blog/${blog.slug}`}
      />
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-[#536186] hover:text-[#363636] transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Articles</span>
          </Link>
        </div>
      </div>

      <div className="relative h-96 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-white/70 to-transparent"></div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <span className="inline-block px-4 py-2 bg-[#536186] text-[#D3D3D3] text-sm font-semibold rounded-full mb-4">
            {blog.category}
          </span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-gradient-to-br from-slate-50 to-white/[0.02] rounded-3xl p-8 sm:p-12 border border-slate-200">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#363636] via-[#363636] to-[#363636] bg-clip-text text-transparent">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#536186] mb-8 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{blog.views} views</span>
            </div>
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none article-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-sm text-[#536186] mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#536186]/20 text-[#536186] text-sm rounded-full border border-[#536186]/30 hover:bg-[#536186]/30 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <style>{`
        .article-content { color: #000000; line-height: 1.8; }
        .article-content h2 { color: #050505; font-size: 1.75rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1.25rem; }
        .article-content p { margin-bottom: 1.25rem; color: #003481; }
        .article-content ul { margin: 1.5rem 0; padding-left: 1.5rem; list-style-type: disc; }
        .article-content li { margin-bottom: 0.75rem; color: #003481; }
        .article-content strong { color: #003481; font-weight: 600; }
      `}</style>
    </div>
  );
};

export default BlogDetailPage;
