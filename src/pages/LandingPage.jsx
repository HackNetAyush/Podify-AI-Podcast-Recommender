import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


export default function LandingPage() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRecommendation, setCurrentRecommendation] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");

  const navigateToChat = () => {
    navigate("/chat");
  }

  const recommendations = [
    "Based on your interest in true crime, I recommend 'Serial'",
    "Since you enjoy tech discussions, try 'Reply All'",
    "For science lovers, 'Radiolab' is perfect for you",
    "If you like storytelling, check out 'This American Life'"
  ];

  // Simulate typing effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < recommendations[currentRecommendation].length && isTyping) {
        setTypedText(recommendations[currentRecommendation].substring(0, typedText.length + 1));
      } else if (typedText.length === recommendations[currentRecommendation].length) {
        setTimeout(() => {
          setTypedText("");
          setCurrentRecommendation((prev) => (prev + 1) % recommendations.length);
        }, 2000);
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [typedText, currentRecommendation, isTyping, recommendations]);

  // Start typing animation when page loads
  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => {
      setIsTyping(true);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-indigo-950  text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="text-3xl font-bold text-white">
            Pod<span className="text-green-400">ify</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className="hidden md:flex space-x-8">
            <li><a href="#features" className="hover:text-green-400 transition duration-300">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-green-400 transition duration-300">How It Works</a></li>
            <li><a href="#testimonials" className="hover:text-green-400 transition duration-300">Testimonials</a></li>
          </ul>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
          onClick={navigateToChat}
        >
          Try Now
        </motion.button>
      </nav>
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover Your Next Favorite <span className="text-green-400">Podcast</span> With AI
          </h1>
          <p className="text-lg mb-8 text-gray-300 max-w-lg">
            Podify uses advanced AI to understand your preferences and recommend podcasts you'll actually love. Chat naturally and get personalized suggestions instantly.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button onClick={navigateToChat} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300 text-lg">
              Get Started Free
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 text-white font-semibold px-8 py-3 rounded-full transition duration-300 text-lg">
              See Demo
            </button>
          </div>
        </motion.div>
        
        {/* <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="md:w-1/2 mt-12 md:mt-0"
        >
          <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-3xl shadow-2xl border border-indigo-700 max-w-md mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-auto text-sm text-gray-400">Podify Chat</div>
            </div>
            <div className="bg-gray-900 bg-opacity-80 rounded-xl p-4 h-72 overflow-hidden">
              <div className="flex mb-4">
                <div className="bg-indigo-600 p-2 rounded-lg rounded-bl-none max-w-xs">
                  <p className="text-sm">I'm looking for new podcasts about technology and innovation</p>
                </div>
              </div>
              <div className="flex mb-4 justify-end">
                <div className="bg-green-600 p-2 rounded-lg rounded-br-none max-w-xs">
                  <p className="text-sm">Great! I'll find some tech podcasts for you. What specific topics interest you?</p>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="bg-indigo-600 p-2 rounded-lg rounded-bl-none max-w-xs">
                  <p className="text-sm">I'm interested in AI and machine learning</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-green-600 p-2 rounded-lg rounded-br-none max-w-xs">
                  <p className="text-sm">{typedText}<span className="animate-pulse">|</span></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </section>
      
      {/* Features Section */}
      <section id="features" className="bg-indigo-950 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-green-400">Podify</span>?</h2>
            <p className="text-gray-300 max-w-xl mx-auto">Our AI-powered recommendation engine goes beyond basic genre matching to find podcasts that truly resonate with your interests.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-900 bg-opacity-50 p-6 rounded-xl border border-indigo-800 hover:shadow-lg hover:shadow-purple-500/20 transition duration-300"
            >
              <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Conversations</h3>
              <p className="text-gray-300">Chat naturally with Podify just like talking to a friend who knows podcasts inside and out.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-indigo-900 bg-opacity-50 p-6 rounded-xl border border-indigo-800 hover:shadow-lg hover:shadow-purple-500/20 transition duration-300"
            >
              <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
              <p className="text-gray-300">Our AI analyzes thousands of podcasts to match your unique interests and listening preferences.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-indigo-900 bg-opacity-50 p-6 rounded-xl border border-indigo-800 hover:shadow-lg hover:shadow-purple-500/20 transition duration-300"
            >
              <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Time-Saving Discovery</h3>
              <p className="text-gray-300">Find your next favorite podcast in seconds instead of scrolling through endless directories.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How <span className="text-green-400">Podify</span> Works</h2>
          <p className="text-gray-300 max-w-xl mx-auto">Finding your perfect podcast match has never been easier.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto text-2xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-3">Chat With Podify</h3>
            <p className="text-gray-300">Tell our AI chatbot about your interests, preferred topics, or mood in a natural conversation.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto text-2xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-3">Get Personalized Recommendations</h3>
            <p className="text-gray-300">Receive tailored podcast suggestions based on your unique preferences and conversation.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto text-2xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-3">Listen And Enjoy</h3>
            <p className="text-gray-300">Discover new podcasts that match your interests perfectly and start listening right away.</p>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="bg-indigo-950 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-300 max-w-xl mx-auto">Join thousands of podcast enthusiasts who found their perfect listening match.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-indigo-900 bg-opacity-50 p-6 rounded-xl border border-indigo-800"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">"Podify changed how I discover podcasts. Instead of endless scrolling, I just chat about what I'm interested in and get amazing recommendations instantly."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold">Sarah T.</h4>
                  <p className="text-sm text-gray-400">Podcast Enthusiast</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-900 bg-opacity-50 p-6 rounded-xl border border-indigo-800"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">"I've discovered so many niche podcasts that perfectly match my interests. The AI really understands what I'm looking for, even when my tastes are quite specific."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold">Michael K.</h4>
                  <p className="text-sm text-gray-400">Daily Commuter</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-indigo-900 bg-opacity-50 p-6 rounded-xl border border-indigo-800"
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">"As a podcast creator, I love that Podify helps connect my show with the right audience. The recommendation engine truly understands content on a deeper level."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold">Jamie R.</h4>
                  <p className="text-sm text-gray-400">Podcast Creator</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Next Favorite Podcast?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">Join thousands of listeners who've discovered their perfect podcast match with Podify's AI-powered recommendation engine.</p>
          <button onClick={navigateToChat} className="bg-white text-indigo-700 hover:bg-green-100 font-semibold px-8 py-3 rounded-full transition duration-300 text-lg">
            Get Started Free
          </button>
          <p className="mt-4 text-sm text-indigo-200">No credit card required. Free 14-day trial.</p>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="bg-indigo-950 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold text-white mb-4">
                Pod<span className="text-green-400">ify</span>
              </div>
              <p className="text-gray-400 max-w-xs">Discover podcasts you'll love with our AI-powered recommendation engine.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">API</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Privacy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Terms</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-indigo-900 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 Podify. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}