// src/pages/BlogPage.tsx
import React, { useState, useEffect } from "react";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Eye,
  ArrowLeft,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Sparkles,
} from "lucide-react";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  views: string;
  content: string;
};

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
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const blogs: Blog[] = [
    {
      id: 1,
      title: "How AI is Revolutionizing Digital Marketing Agencies in Pune",
      excerpt:
        "Discover how AI is transforming the digital marketing landscape and helping agencies deliver smarter, data-driven results.",
      category: "AI & Technology",
      date: "Nov 14, 2025",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tags: ["AI", "Digital Marketing", "Automation"],
      views: "5.2K",
      content: `
        <h2>Introduction</h2>
        <p>Artificial intelligence is not just a buzzword; it is a game-changer in the world of digital marketing. 
        From predictive analytics down to automated campaign optimization, AI reshapes how brands 
        connect with their audience. In a competitive city like Pune, where innovation meets technology, 
        every business is looking for the best digital marketing agency in Pune that can drive measurable 
        results using the power of AI. 
        As digital transformation reaches warp speed, agencies that are leveraging AI aren't just keeping 
        up; they set a new bar for marketing efficiency, personalization, and ROI. Let's explore how AI is 
        revolutionizing digital marketing agencies in Pune and why adopting it has become essential for 
        modern businesses. </p>

        <h2>The Rise of AI in Digital Marketing</h2>
        <p>More recently, artificial intelligence tools and algorithms for machine learning have reshaped how 
marketers get insights from data, construct strategies, and communicate with customers. Digital 
agencies in Pune adopted AI to survive the competition and remain relevant in a crowded 
marketplace. 
By integrating AI-driven tools such as Google Ads Smart Bidding, HubSpot's AI CRM, and ChatGPT 
for copywriting, today's marketer is now able to make quicker, wiser, and more accurate decisions. 
The transition has transformed how the best digital marketing agency in Pune offers 
hyper-personalized campaigns, advanced user targeting, and real-time analytics-all things that 
have reached beyond the conventional methods of doing marketing. 
AI helps marketers pinpoint trends and consumer behavior more precisely. From segmenting 
audiences to forecasting purchase intent, through artificial intelligence, agencies can optimize the 
utilization of a budget to maximize ROI.</p>

        <h2>Data-Driven Decision Making and Predictive Analytics</h2>
        <p>Data is the lifeblood of modern marketing, and AI has raised data analysis to an entirely new level. 
These days, agencies in Pune don't look at intuition or guesswork to get the required results. 
Machine learning models now predict consumer actions and campaign outcomes. 
For example, AI-driven analytics platforms such as Semrush and Google Analytics 4 provide 
insights into customer journeys, click behavior, and conversion probabilities. These enable 
marketers to craft very personalized campaigns suited to the needs of the audience. 
The predictive modeling used at Adswise Marketing-a top-tier agency and among the best digital 
marketing agencies in Pune-helps predict when and how one's potential customers are most likely 
to engage. It results in sharper ad placements, better targeting, and increased engagement. </p>

        <h2>Personalized Customer Experience through AI Automation</h2>
        <p>AI has redefined the concept of personalization in marketing. Driven by algorithms, agencies can 
now provide content and ads that perfectly align with a person's preferences. AI-driven tools 
analyze browsing patterns, demographics, and online behavior to deliver experiences specifically 
tailored to the needs of a customer. 
For instance, AI-driven chatbots have now become a feature on many business websites, allowing 
for 24/7 support and responses in real-time. All these repetitive tasks, like customer inquiries and 
lead qualifications, are automated, saving time for marketing agencies and ensuring that no 
opportunity ever slips through the cracks for clients. 
The best digital marketing agency in Pune understands that personalization isn't just about 
knowing your customer but, rather, anticipating their next move. AI tools help businesses create 
dynamic email campaigns, recommend products, and optimize content that resonates with each 
segment of the audience. </p>

        <h2>AI in Content Creation and Social Media Marketing</h2>
        <p>Content is still king, but AI is surely the royal advisor. It's now possible for AI-based platforms to 
help generate creative content ideas, write ad copies, and analyze the performance of content. 
Tools such as Jasper AI, ChatGPT, and BuzzSumo can ensure that content creators stay on top of 
trends and roll out optimized posts at scale. 
For agencies like Adswise Marketing, which also functions as a social media marketing agency in 
Pune, AI is critical for automating scheduling, enhancing engagement timing, and analyzing social 
sentiment. AI analytics show what type of posts work best, at what time the audience is most 
active, and which trends to leverage. 
Therefore, social media campaigns are no longer a guesswork but data-backed, precision-oriented, 
and result-driven, which is a major reason businesses prefer partnering with AI-enabled marketing 
agencies in Pune. </p>

        <h2>Conclusion</h2>
        <p>AI has changed the way digital marketing agencies work in every aspect: from analytics to 
automation, creativity to communication. For businesses in Pune looking to stay ahead in this 
fast-paced digital era, picking the best digital marketing agency in Pune that integrates AI-driven 
tools and strategies will indeed make all the difference. 
At Adswise Marketing, our AI-powered approach helps brands become more visible, run smarter 
campaigns, and ensure business growth that can actually be measured. From SEO agencies to PPC 
or social media marketing agencies in Pune, we bring innovation with intelligence to offer only 
those results that truly matter.</p>
      `,
    },
    {
      id: 2,
      title: "Voice & Visual Search Optimization: The Future of SEO in 2025",
      excerpt:
        "Learn how voice and visual search are shaping the future of SEO and how to optimize your business for these emerging trends.",
      category: "SEO",
      date: "Nov 13, 2025",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
      tags: ["Voice Search", "Visual Search", "SEO 2025"],
      views: "4.8K",
      content: `
        <h2>Introduction</h2>
        <p>The search habits of people are now changing more rapidly than ever. It's no longer about just 
typing a few keywords in Google. Now, voice search and visual search are reinventing the way 
consumers search for information, products, and services. Considering that smart assistants like 
Alexa and Google Assistant are fast becoming household names, and tools like Google Lens are 
redefining what discovery means, optimizing for these types of search is no longer optional; it is 
essential. 
For businesses in India's digital hub, working with an experienced SEO agency in Pune can make 
all the difference between being found or forgotten. As 2025 approaches, companies that adapt to 
these new SEO trends will increase visibility and smoothly deliver experiences to their audiences. 
Let's further explore how voice and visual search optimization are transforming the future of 
SEO-and how your brand can leverage these innovations to stay ahead. </p>

        <h2>The Rise of Voice Search</h2>
        <p>Voice search has become an integral part of how people interact with technology. According to 
Google, more than 50% of all mobile searches are now voice-based. People prefer to ask their 
devices questions since it is faster, more convenient, and natural. 
This development has very far-reaching implications for SEO. Traditional keyword targeting is 
going to change to conversational search optimization, centered on how people speak, not how 
they type. Example: Instead of “best restaurant Pune,” users might say, “Which is the best 
restaurant near me?” 
An experienced SEO agency in Pune, such as Adswise Marketing, can attest to this trend and 
optimizes website content towards natural, query-based results. This would involve long-tail 
keyword implementation, optimization of the FAQ section, and creating structured data to ensure 
visibility in voice search results using Schema Markup. 
Voice search also closely aligns with Local SEO, making it even more important for businesses 
serving a regional audience. When someone asks, "Where's the best SEO agency near 
me?"-Google will favor local listings with strong voice optimization, verified Google Business 
profiles, and positive reviews. </p>

        <h2>How to Optimize for Voice Search</h2>
        <ul>
          <li>Create conversational content that matches real speech patterns</li>
          <li>Optimize for featured snippets</li>
          <li>Ensure mobile-first design</li>
          <li>Improve local SEO with location-based keywords</li>
        </ul>

        <h2>The Emergence of Visual Search</h2>
        <p>While voice search dominates auditory interaction, visual search is revolutionizing how users 
discover products and information visually. Thanks to technologies like Google Lens, Pinterest 
Lens, and Bing Visual Search, users can now take a photo of an object and instantly find related 
products or similar items online. 
For example, if a customer snaps a picture of a shoe they like, Google will show product pages of 
similar designs. This feature, therefore, is a game-changer for e-commerce brands and social 
media marketing in Pune since visual discovery drives engagement and conversions. 
Agencies like Adswice Marketing are helping businesses harness the power of visual SEO through 
image optimization, structured data implementation, and AI-driven content tagging. By combining 
these techniques, brands improve visibility not only in standard search results but also in image 
and visual search engines. </p>

        <h2>How to Optimize for Visual Search</h2>
        <ul>
          <li>Write descriptive alt tags with relevant keywords</li>
          <li>Use high-resolution, compressed images</li>
          <li>Add structured data with schema markup</li>
          <li>Maintain consistent branding across channels</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Voice and visual search mark a new era in the evolution of SEO, where convenience meets 
personalization, and technology meets the desired output. Businesses that adapt now will lead the 
charge in the digital revolution of 2025 and beyond. 
As an SEO agency in Pune that knows the latest search trends and how to keep you on top of voice 
and visual discovery, Adswise Marketing is your go-to partner. With expertise in SEO, AI 
integration, and social media marketing in Pune, we help businesses grow smarter and faster in 
the digital age.</p>
      `,
    },
    {
      id: 3,
      title: "Semrush SEO Guide: How Top SEO Services in Pune Boost Rankings",
      excerpt:
        "A comprehensive guide on using Semrush for complete SEO management and why expert services make all the difference.",
      category: "SEO Tools",
      date: "Nov 12, 2025",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["Semrush", "SEO Tools", "Analytics"],
      views: "6.1K",
      content: `
        <h2>Introduction</h2>
        <p>In today's digitally competitive era, any business can no longer afford to operate on mere 
guesswork to enhance online visibility. SEO has turned increasingly complicated and crucial in view 
of algorithm updates, changing user behaviors, and emergent rivalries. As such, this is where 
advanced tools like Semrush step in. Backed by its powerful analytics and deep insight into data, 
Semrush has become a go-to platform for businesses that look to scale their online presence 
strategically. 
For companies in search of reliable SEO services in Pune, leveraging Semrush is one of the 
smartest ways to build a strong SEO foundation. Be it keyword research, competitor analysis, 
backlink tracking, or technical audits, Semrush contains everything one needs to manage SEO 
successfully. This guide will walk through how businesses can use Semrush step by step and why 
partnering with a knowledgeable SEO agency in Pune like Adswise Marketing ensures long-term 
success. </p>

        <h2>Understanding Semrush</h2>
        <p>Semrush is an all-in-one SEO and digital marketing platform serving millions of marketers 
worldwide. Countless brands worldwide are using it, from startups to global enterprises, to 
understand customer search behavior, track their rankings, and discover business growth 
opportunities. Its comprehensive dashboard covers SEO, content marketing, paid advertising, 
social media, and competitor insights. 
For businesses seeking professional SEO services in Pune, Semrush offers unmatched accuracy in 
keyword data, domain analytics, and website performance metrics that make it easier to create 
data-backed SEO strategies that actually deliver real results. </p>

        <h2>Step 1: Keyword Research</h2>
        <p>Keyword research is the backbone of SEO success, andSemrush helps businesses identify 
high-performing keywords related to their niche and audience. 
All Semrush needs is a seed keyword, something like "SEO services"; it then pulls up a detailed list 
of variations, search volumes, and keyword difficulty scores, complete with intent-based 
suggestions. This helps businesses understand which phrases people are actively searching 
for—and how competitive those terms are. 
A professional SEO agency in Pune uses Semrush to build a keyword strategy in line with your 
business goals, hence you rank for terms that truly matter. 
Long-tail, question-based keyword identifications and high-converting opportunities are all part of 
keyword research that will help attract qualified leads to a website. </p>

        <h2>Step 2: Competitor Analysis</h2>
        <p>Semrush is very good at competitor analysis, and entering one will give you full visibility into their 
organic traffic, top-ranking pages, keyword portfolio, and sources of backlinks. 
This enables businesses to discover strategies that their competitors are implementing and where 
they have left gaps in order to outcompete them. If your competitors rank for “digital marketing 
services” keywords, Semrush shows you the opportunity to create optimized content and close the 
gap. Top SEO services in Pune use this information to create very specific strategies that allow 
businesses to rise above a sea of competition. Competitor analysis then becomes a roadmap for 
smarter, faster SEO growth. - </p>

        <h2>Step 3: Website Audit</h2>
        <p>A technically sound website is the building block of any strong SEO strategy. SEMrush's Site Audit 
scans your website and can identify such issues as broken links, slow-loading pages, duplicated 
content, missing meta tags, indexing problems, and more. 
Technical errors usually affect rankings since search engines can't crawl or understand the site as 
such. Detailed audit reports with clear recommendations for correcting errors and improving site 
health are provided through Semrush. 
A specialized SEO agency in Pune makes it a point to ensure that all technical problems are 
resolved promptly, so that it helps the website to rank higher, as well as opens up faster—both 
very important for users and search engines.</p>

        <h2>Step 4: Tracking Rankings</h2>
        <p>SEO is a process, not an event; hence, Semrush equips brands with its Position Tracking tool for 
daily monitoring of keyword rankings and visibility trends, along with the ability to measure the 
influence of optimization efforts. 
Businesses can track local rankings, which will be important for companies targeting audiences in 
Pune. Tracking rankings provides the ability to stay ahead of competitors and identify any sudden 
drops caused by algorithmic changes. 
A reliable partner offering SEO services in Pune should be constantly monitoring the same and 
working out strategies to sustain the growth. </p>

        <h2>Step 5: Backlink Analysis</h2>
        <p>Backlinks remain one of the strongest ranking factors in 2025. Semrush provides detailed backlink 
reports that enable any business to understand the quality and quantity of links pointing to their 
site. 
You can view competitor backlinks, identify toxic links, and explore opportunities for high-authority 
link-building. This is very important because search engines trust websites with strong backlink 
profiles. 
The professional SEO agency in Pune will then use this data to implement an ethical, credible 
link-building plan that boosts domain authority and hence improves rankings. </p>

<h2>Step 6: Content Optimization with Semrush Tools </h2>
        <p>Semrush's Content Marketing Toolkit helps businesses create SEO-optimized content that 
resonates with both search engines and users. 
Tools like the SEO Writing Assistant will guide the copywriters through keyword usage, readability, 
tone, and originality to make sure the content will perform well and avoid keyword stuffing or 
duplication. 
The tool helps businesses in Pune that rely on SEO services by providing data-driven 
recommendations for improving blog posts, landing pages, and website copy.</p>

<h2>Step 7: Managing Local SEO with Semrush </h2>
        <p>Local visibility is of essence for location-based businesses. Semrush helps in the management of 
online presence across local listings, reviews, and local keyword ranking tracking. 
If your business needs to attract customers residing in Pune, integrating local SEO tools ensures 
that your brand appears in “near me” results and Google Maps. 
Working with a reputable SEO agency in Pune ensures that your local SEO strategy is executed 
precisely, hence helping you attract local traffic on a consistent basis.</p>


        <h2>Conclusion</h2>
        <p>Semrush is one of the most powerful tools in the market for complete SEO management. From 
keyword insights to competitor intelligence, technical audits, and content optimization, it 
empowers businesses with everything needed to grow online. Using Semrush effectively, though, 
requires expertise, strategy, and continuous monitoring. 
That is the reason why partnering with a skilled SEO services provider in Pune will ensure the 
maximum possible value from this powerful platform. With several years of experience and 
advanced SEO knowledge, Adswise Marketing adopts Semrush to deliver customized strategies 
that boost the ranking, drive organic traffic, and strengthen your brand's overall digital presence. 
Get ready to boost your rankings with Semrush-powered SEO! 
Take advantage of professional SEO services that will fast-track your journey to business success 
at Adswise Marketing today. </p>
      `,
    },
    {
      id: 4,
      title: "Top 10 Tools Every Social Media Marketing Agency Should Use",
      excerpt:
        "Explore the essential social media marketing tools that boost engagement and drive results in 2025.",
      category: "Social Media",
      date: "Nov 11, 2025",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      tags: ["Social Media", "Marketing Tools", "Engagement"],
      views: "7.3K",
      content: `
        <h2>Introduction</h2>
        <p>In today's fast-paced digital environment, social media has become the heartbeat of brand 
communication. These businesses need to create quality content consistently, analyze audience 
behavior, and boost engagement across platforms. However, doing all this manually is no longer 
feasible in 2025. That's why, nowadays, brands rely more on strong tools that make the process of 
content creation, scheduling, analytics, and interacting with audiences easier. 
Be it a startup, an established brand, or working with any trusted social media marketing agency 
in Pune, the right tools will bring about a real difference. The tools not only manage your work but 
also help you get connected with your audience in the best way possible. Further, in this guide, we 
have rounded up the top 10 social media marketing tools that will change how you do engagement 
and really drive results. </p>

        <h2>Why Social Media Tools Matter</h2>
        <p>Social media is not just about posting; rather, it is about creating meaningful interactions. With 
millions of users scrolling every minute, brands need tools that provide insights, automate tasks, 
and maintain consistency. Advanced tools to analyze Instagram, Facebook, LinkedIn, Pinterest, 
and YouTube form the basis of any professional social media marketing agency in Pune. 
The tools show which content works best, when audiences are active, and how engagement 
patterns evolve over time. Even companies outsourcing SEO services in Pune can use social tools 
to enhance keyword tracking, content visibility, and integrated digital strategy. </p>

        <h2>1. Hootsuite</h2>
        <p>Hootsuite offers multi-account management from a single dashboard, making it easy to schedule, monitor, and report across platforms.</p>

        <h2>2. Buffer</h2>
        <p>Buffer is perfect for scheduling posts and reviewing performance with a clean, intuitive interface.</p>

        <h2>3. Canva</h2>
        <p>Canva is the ultimate design tool for marketers, offering templates for every social platform to create professional visuals.</p>

        <h2>4. Later</h2>
        <p>Later helps businesses plan Instagram content visually with drag-and-drop planning.</p>

        <h2>5. Sprout Social</h2>
        <p>Sprout Social provides advanced analytics with deep insights into audience behavior and content performance.</p>

        <h2>6. BuzzSumo</h2>
        <p>BuzzSumo enables marketers to find trending topics and track performance across social platforms.</p>

        <h2>7. Loomly</h2>
        <p>Loomly provides content scheduling, idea suggestions, and collaboration tools for teams.</p>

        <h2>8. Google Analytics</h2>
        <p>Google Analytics combined with native social insights helps brands understand audience sources and engagement.</p>

        <h2>9. Mailchimp</h2>
        <p>Mailchimp integrates with social platforms to create unified campaigns combining email and social targeting.</p>

        <h2>10. ChatGPT</h2>
        <p>AI-powered tools like ChatGPT help marketers brainstorm ideas, generate captions, and improve engagement.</p>

        <h2>Conclusion</h2>
        <p>With the right tools and strategy, businesses can transform their social media presence and build deeper audience relationships.</p>
      `,
    },
  ];

  const categories = [
    "All",
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

  const handleReadMore = (blog: Blog) => {
    setSelectedBlog(blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToBlogs = () => {
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- render selected article view ---
  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={handleBackToBlogs}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Articles</span>
            </button>
          </div>
        </div>

        <div className="relative h-96 overflow-hidden">
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
            <span className="inline-block px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full mb-4">
              {selectedBlog.category}
            </span>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 sm:p-12 border border-white/10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              {selectedBlog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{selectedBlog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{selectedBlog.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{selectedBlog.views} views</span>
              </div>
            </div>

            {/* <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
              <span className="text-sm text-gray-400">Share:</span>
              <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Facebook className="w-4 h-4 text-blue-400" />
              </button>
              <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Twitter className="w-4 h-4 text-sky-400" />
              </button>
              <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Linkedin className="w-4 h-4 text-blue-500" />
              </button>
              <button className="ml-auto p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Bookmark className="w-4 h-4 text-gray-400" />
              </button>
            </div> */}

            <div
              className="prose prose-invert prose-lg max-w-none article-content"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />

            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-sm text-gray-400 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedBlog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30 hover:bg-purple-600/30 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="mt-16 mb-20">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs
                .filter(
                  (b) =>
                    b.id !== selectedBlog.id &&
                    b.category === selectedBlog.category
                )
                .slice(0, 2)
                .map((blog) => (
                  <div
                    key={blog.id}
                    onClick={() => handleReadMore(blog)}
                    className="group cursor-pointer bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div> */}
        </article>

        <style>{`
          .article-content { color: #d1d5db; line-height: 1.8; }
          .article-content h2 { color: #fff; font-size: 1.75rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1.25rem; }
          .article-content p { margin-bottom: 1.25rem; color: #d1d5db; }
          .article-content ul { margin: 1.5rem 0; padding-left: 1.5rem; list-style-type: disc; }
          .article-content li { margin-bottom: 0.75rem; color: #d1d5db; }
          .article-content strong { color: #fff; font-weight: 600; }
        `}</style>
      </div>
    );
  }

  // --- render list view ---
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20">
        <div className="absolute inset-0 opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <div className="text-4xl sm:text-6xl lg:text-6xl font-bold text-orange-500 h-20 md:h-24 pb-3 flex justify-center">
              <TypewriterText text="Digital Marketing Blog" />
            </div>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
              Stay ahead with the latest insights, strategies, and trends in
              digital marketing, SEO, and AI technology
            </p>

            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
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
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full">
                    <Eye className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs text-gray-300 font-medium">
                      {blog.views}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleReadMore(blog)}
                    className="group/btn flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {filteredBlogs.length > 0 && (
          <div className="mt-20 p-8 bg-gradient-to-br from-purple-900/10 to-blue-900/10 rounded-3xl border border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Trending Topics</h3>
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
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-full border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer text-sm font-medium"
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
