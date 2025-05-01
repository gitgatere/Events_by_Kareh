import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import HeroBanner from '../components/hero/HeroBanner';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
}

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How to Choose the Perfect Wedding Venue",
      excerpt: "Finding the ideal venue for your special day involves balancing aesthetics, practicality, and budget. Here's our guide to making the right choice.",
      date: "April 15, 2023",
      author: "Kareh Williams",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Weddings"
    },
    {
      id: 2,
      title: "Corporate Event Trends for 2023",
      excerpt: "Discover the latest trends shaping corporate events this year, from interactive experiences to sustainable practices.",
      date: "March 22, 2023",
      author: "Michael Roberts",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Corporate"
    },
    {
      id: 3,
      title: "Creating a Memorable Birthday Celebration",
      excerpt: "Tips and inspiration for planning a birthday party that guests will remember for years to come.",
      date: "February 8, 2023",
      author: "Sophia Chen",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/4581172/pexels-photo-4581172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Birthdays"
    },
    {
      id: 4,
      title: "The Art of Floral Design for Events",
      excerpt: "Explore how thoughtful floral arrangements can transform your event space and create a cohesive aesthetic.",
      date: "January 30, 2023",
      author: "Kareh Williams",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Design"
    },
    {
      id: 5,
      title: "Planning the Perfect Destination Wedding",
      excerpt: "A comprehensive guide to organizing a wedding in a faraway location while keeping stress at bay.",
      date: "December 12, 2022",
      author: "Michael Roberts",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Weddings"
    },
    {
      id: 6,
      title: "Sustainable Event Planning: Reducing Your Carbon Footprint",
      excerpt: "Practical tips for making your events more environmentally friendly without sacrificing luxury or style.",
      date: "November 5, 2022",
      author: "Sophia Chen",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Tips"
    }
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <>
      <HeroBanner 
        title="Event Planning Insights"
        subtitle="Tips, trends, and inspiration for creating memorable events"
        backgroundImage="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="section-padding" id="main-content">
        <div className="container-custom">
          <SectionHeading 
            title="Our Blog" 
            subtitle="Event Planning Insights"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Posts - First Column */}
            <div className="md:col-span-2">
              <div className="grid gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article 
                    key={post.id}
                    className="bg-white rounded-md shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <div className="h-60 md:h-full">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="md:w-3/5 p-6">
                        <span className="inline-block bg-gold/20 text-primary text-sm font-medium px-3 py-1 rounded-full mb-3">
                          {post.category}
                        </span>
                        
                        <h3 className="text-xl font-serif mb-3">
                          <Link to={`/blog/${post.id}`} className="hover:text-gold transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        
                        <p className="text-neutral-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center text-sm text-neutral-gray-500 mb-4">
                          <div className="flex items-center mr-4">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          
                          <div className="flex items-center mr-4">
                            <User className="w-4 h-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="text-gold hover:text-gold-dark transition-colors inline-flex items-center"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <button className="btn btn-outline">
                  Load More Articles
                </button>
              </div>
            </div>
            
            {/* Sidebar - Second Column */}
            <div>
              <div className="sticky top-24">
                {/* Search Bar */}
                <div className="bg-white p-6 rounded-md shadow-md mb-8">
                  <h3 className="text-lg font-serif mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-3 border border-neutral-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold pr-10"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-white p-6 rounded-md shadow-md mb-8">
                  <h3 className="text-lg font-serif mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category}>
                        <Link 
                          to={`/blog/category/${category.toLowerCase()}`} 
                          className="flex justify-between items-center hover:text-gold transition-colors"
                        >
                          <span>{category}</span>
                          <span className="bg-neutral-gray-100 text-neutral-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                            {blogPosts.filter(post => post.category === category).length}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Featured Post */}
                <div className="bg-white rounded-md shadow-md overflow-hidden mb-8">
                  <div className="h-48">
                    <img 
                      src="https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Featured Post" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-gold/20 text-primary text-sm font-medium px-3 py-1 rounded-full mb-3">
                      Featured
                    </span>
                    <h3 className="text-lg font-serif mb-3">7 Wedding Trends That Will Dominate in 2023</h3>
                    <Link 
                      to="/blog/7" 
                      className="text-gold hover:text-gold-dark transition-colors inline-flex items-center"
                    >
                      Read Article
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Subscribe */}
                <div className="bg-primary text-neutral-white p-6 rounded-md shadow-md">
                  <h3 className="text-lg font-serif text-gold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-neutral-gray-200 mb-4">
                    Stay updated with our latest articles, tips, and event inspiration.
                  </p>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 border border-primary-light bg-primary-light text-neutral-white rounded-md focus:outline-none focus:ring-2 focus:ring-gold placeholder-neutral-gray-400"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-gold w-full">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;