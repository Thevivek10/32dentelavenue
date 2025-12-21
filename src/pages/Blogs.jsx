import React, { useEffect } from 'react';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import dentalImplantsImg from '../assets/images/dental-implants/hero.png';
import teethWhiteningImg from '../assets/images/teeth-whitening.png';
import oralHygieneImg from '../assets/images/oral-hygiene/cleaning.png';
import alignersImg from '../assets/images/service-aligners.png';
import rootCanalImg from '../assets/images/root-canal/care.png';
import kidsDentistryImg from '../assets/images/kids-dentistry.png';
import blogHeroBg from '../assets/images/blog-hero-bg.png';

const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogPosts = [
        {
            id: 1,
            title: "The Permanent Solution for Missing Teeth",
            excerpt: "Discover how dental implants can restore your smile and confidence with a natural look and feel.",
            category: "Dental Implants",
            author: "Dr. Smith",
            date: "Dec 15, 2024",
            readTime: "5 min read",
            image: dentalImplantsImg
        },
        {
            id: 2,
            title: "Brighten Your Smile Safely",
            excerpt: "Learn about professional teeth whitening options and why over-the-counter kits might not be enough.",
            category: "Cosmetic Dentistry",
            author: "Dr. Emily",
            date: "Dec 10, 2024",
            readTime: "4 min read",
            image: teethWhiteningImg
        },
        {
            id: 3,
            title: "Daily Habits for a Healthy Smile",
            excerpt: "Simple yet effective daily routines to keep your teeth and gums healthy between visits.",
            category: "Oral Hygiene",
            author: "Dr. John",
            date: "Dec 05, 2024",
            readTime: "3 min read",
            image: oralHygieneImg
        },
        {
            id: 4,
            title: "Clear Aligners vs Braces",
            excerpt: "Comparing the pros and cons of clear aligners and traditional braces to help you decide.",
            category: "Orthodontics",
            author: "Dr. Sarah",
            date: "Nov 28, 2024",
            readTime: "6 min read",
            image: alignersImg
        },
        {
            id: 5,
            title: "Debunking Common Root Canal Myths",
            excerpt: "Separating fact from fiction about this common and pain-relieving dental procedure.",
            category: "Endodontics",
            author: "Dr. Michael",
            date: "Nov 20, 2024",
            readTime: "5 min read",
            image: rootCanalImg
        },
        {
            id: 6,
            title: "Making the First Visit Fun",
            excerpt: "Tips for parents to help their children have a positive and anxiety-free first dental experience.",
            category: "Pediatric Dentistry",
            author: "Dr. Lisa",
            date: "Nov 15, 2024",
            readTime: "4 min read",
            image: kidsDentistryImg
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20">


            {/* Hero Section */}
            <div className="relative bg-[#f7f4f1] py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={blogHeroBg} alt="Background" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4f1] via-[#f7f4f1]/90 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#424040] mb-6 tracking-tight">
                        Our Latest <span className="text-[#88d4cb]">Insights & News</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Stay updated with expert advice, dental health tips, and the latest trends in modern dentistry.
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full group">
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-[#88d4cb] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center text-sm text-gray-400 mb-4 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1.5" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1.5" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-[#424040] mb-3 leading-snug group-hover:text-[#88d4cb] transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                                    <div className="flex items-center text-sm font-medium text-gray-500">
                                        <User className="w-4 h-4 mr-2" />
                                        {post.author}
                                    </div>
                                    <Link
                                        to="#"
                                        className="inline-flex items-center text-[#88d4cb] font-semibold hover:text-[#76b8b0] transition-colors group-hover:translate-x-1 duration-300"
                                    >
                                        Read More
                                        <ArrowRight className="ml-1.5 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-white py-16 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#424040] mb-4">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Get the latest dental health tips and exclusive offers delivered correctly to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#88d4cb]/50 focus:border-[#88d4cb] transition-all"
                        />
                        <button
                            type="submit"
                            className="bg-[#88d4cb] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#76b8b0] transition-all shadow-lg shadow-[#88d4cb]/20"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
