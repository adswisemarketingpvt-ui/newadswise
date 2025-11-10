import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

function BlogPage() {
  const blogPosts = [
    {
      title: '10 Digital Marketing Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with these emerging marketing trends that will shape the industry.',
      category: 'Trends',
      date: 'Jan 15, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Johnson'
    },
    {
      title: 'How to Optimize Your SEO Strategy for Voice Search',
      excerpt: 'Voice search is changing the game. Learn how to adapt your SEO strategy for this growing trend.',
      category: 'SEO',
      date: 'Jan 12, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Michael Chen'
    },
    {
      title: 'The ROI of Content Marketing: A Data-Driven Analysis',
      excerpt: 'Discover how content marketing delivers measurable results with real data and case studies.',
      category: 'Content Marketing',
      date: 'Jan 10, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Emily Rodriguez'
    },
    {
      title: 'Social Media Algorithm Changes: What You Need to Know',
      excerpt: 'Navigate the latest social media algorithm updates and maintain your organic reach.',
      category: 'Social Media',
      date: 'Jan 8, 2024',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'David Park'
    },
    {
      title: 'Email Marketing Best Practices for 2024',
      excerpt: 'Maximize your email campaign performance with these proven strategies and tactics.',
      category: 'Email Marketing',
      date: 'Jan 5, 2024',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Lisa Thompson'
    },
    {
      title: 'PPC vs. SEO: Which Strategy is Right for Your Business?',
      excerpt: 'Compare paid and organic search strategies to determine the best approach for your goals.',
      category: 'Strategy',
      date: 'Jan 3, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'James Wilson'
    },
    {
      title: 'Building a Strong Brand Identity in the Digital Age',
      excerpt: 'Create a memorable brand that resonates with your audience across all digital channels.',
      category: 'Branding',
      date: 'Dec 28, 2023',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Anna Martinez'
    },
    {
      title: 'Marketing Automation: Streamline Your Campaigns',
      excerpt: 'Learn how marketing automation can save time and improve campaign effectiveness.',
      category: 'Automation',
      date: 'Dec 25, 2023',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Robert Lee'
    },
    {
      title: 'Video Marketing Strategies That Drive Engagement',
      excerpt: 'Harness the power of video content to connect with your audience and boost conversions.',
      category: 'Video Marketing',
      date: 'Dec 22, 2023',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Jennifer Kim'
    }
  ];

  const categories = ['All', 'Trends', 'SEO', 'Content Marketing', 'Social Media', 'Strategy'];

  return (
    <>
      <SEO
        title="Blog - Digital Marketing Insights & Tips"
        description="Stay updated with the latest digital marketing trends, strategies, and best practices from our expert team."
      />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Insights, strategies, and tips from digital marketing experts
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    index === 0
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-gray-600">By {post.author}</span>
                      <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/btn">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogPage;
