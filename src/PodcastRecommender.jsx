import React, { useState, useRef, useEffect } from 'react';
import { getSearchTerm } from './lib/geminiWithoutMemory';
import { chatWithMemory } from './lib/geminiWithMemory';
import { Sparkles, Send, Moon, Sun, ChevronRight, ExternalLink, Headphones, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const API_TOKEN = import.meta.env.VITE_PODCHASER_API_KEY;

const PodcastRecommender = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const chatEndRef = useRef(null);
  
  // Check system preference for dark mode
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Scroll to bottom of chat when new messages are added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const searchPodcasts = async (searchTerm) => {
    const query = `
      query {
        podcasts(
          searchTerm: "${searchTerm}", 
          first: 4,
          filters: {rating: {minRating: 4, maxRating: 5}}
        ) {
          paginatorInfo {
            currentPage,
            hasMorePages,
            lastPage,
          },
          data {
            id,
            title,
            description,
            webUrl,
            imageUrl,
          }
        }
      }
    `;
  
    try {
      const response = await fetch("https://api.podchaser.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_TOKEN}`
        },
        body: JSON.stringify({ query }),
      });
  
      const result = await response.json();
      
      if (result.data && result.data.podcasts && result.data.podcasts.data) {
        return result.data.podcasts.data;
      } else {
        console.error("Unexpected API response structure:", result);
        return [];
      }
    } catch (error) {
      console.error("Error fetching podcasts:", error);
      return [];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const userMessage = message;
    setMessage('');
    
    // Add user message to chat
    setChatHistory(prev => [...prev, { sender: 'user', text: userMessage }]);
    
    setIsLoading(true);
    
    try {
      // First AI - Get search term
      const { searchTerm } = await getSearchTerm(userMessage);
      
      // Add AI search term note to chat
      setChatHistory(prev => [...prev, { 
        sender: 'system', 
        text: `🔎 Finding podcasts about "${searchTerm}"...` 
      }]);
      
      // Search for podcasts
      const podcastResults = await searchPodcasts(searchTerm);
      setPodcasts(podcastResults);
      
      // Second AI - Get recommendation with memory
      const aiResponse = await chatWithMemory(userMessage, "default", podcastResults);
      
      // Add AI response to chat
      setChatHistory(prev => [...prev, { sender: 'assistant', text: aiResponse }]);
    } catch (error) {
      console.error("Error in recommendation flow:", error);
      setChatHistory(prev => [...prev, { 
        sender: 'system', 
        text: "Sorry, I encountered an error while processing your request. Please try again." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleView = () => {
    setShowChat(!showChat);
  };
  
  // Dynamic classes based on theme
  const themeClasses = {
    app: darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900',
    header: darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
    sidebar: darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
    card: darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200 hover:bg-gray-50',
    input: darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500',
    messageUser: darkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-600 text-white',
    messageAI: darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800',
    messageSystem: darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-200 text-gray-700',
    icon: darkMode ? 'text-gray-300' : 'text-gray-600',
    buttonPrimary: darkMode ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white',
    buttonSecondary: darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    welcome: darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800',
  };

  return (
    <div className={`flex h-screen ${themeClasses.app} transition-colors duration-300`}>
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className={`${themeClasses.header} border-b shadow-sm py-3 px-6 flex items-center justify-between transition-colors duration-300`}>
          <div className="flex items-center">
            <div className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 p-2 mr-3">
              <Headphones className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Podify  AI
            </h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={toggleView}
              className={`p-2 rounded-full ${themeClasses.buttonSecondary} transition-colors`}
              aria-label={showChat ? "Show podcasts" : "Show chat"}
            >
              {showChat ? <Headphones className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
            </button>
            
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${themeClasses.buttonSecondary} transition-colors`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </header>
        
        {/* Main container with tabs */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Chat section */}
          <AnimatePresence mode="wait">
            {(showChat || window.innerWidth >= 768) && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex-1 flex flex-col ${!showChat && window.innerWidth < 768 ? 'hidden' : ''}`}
              >
                {/* Chat messages */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                  <div className="max-w-3xl mx-auto">
                    {chatHistory.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-center p-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
                          <Sparkles className="h-10 w-10 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                          Welcome to Podify AI
                        </h2>
                        <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Share your mood, interests, or what's on your mind, and I'll recommend podcasts you might enjoy.
                        </p>
                        <div className={`${themeClasses.welcome} rounded-xl shadow-lg w-full max-w-md p-5 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                          <p className="font-medium mb-3">Try asking:</p>
                          <ul className="space-y-3">
                            <li className={`p-3 ${darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg cursor-pointer transition-all transform hover:scale-[1.02]`}>
                              "I am stressed out, suggest a podcast to relax"
                            </li>
                            <li className={`p-3 ${darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg cursor-pointer transition-all transform hover:scale-[1.02]`}>
                              "I want to learn more about cybersecurity"
                            </li>
                            <li className={`p-3 ${darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg cursor-pointer transition-all transform hover:scale-[1.02]`}>
                              "Relationship advice? 👀"
                            </li>
                            {/* <li className={`p-3 ${darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg cursor-pointer transition-all transform hover:scale-[1.02]`}>
                              "Need motivation for my workout routine"
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-5 py-4">
                        {chatHistory.map((msg, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 40 }}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div 
                              className={`max-w-[80%] p-4 rounded-2xl shadow ${
                                msg.sender === 'user' 
                                  ? `${themeClasses.messageUser} rounded-br-none` 
                                  : msg.sender === 'system'
                                    ? `${themeClasses.messageSystem}`
                                    : `${themeClasses.messageAI} rounded-bl-none`
                              }`}
                            >
                              <ReactMarkdown>{msg.text}</ReactMarkdown>
                            </div>
                          </motion.div>
                        ))}
                        {isLoading && (
                          <div className="flex justify-start">
                            <div className={`${themeClasses.messageAI} p-4 rounded-2xl shadow rounded-bl-none max-w-[80%]`}>
                              <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-400 opacity-75 animate-pulse" style={{ animationDelay: '0s' }}></div>
                                <div className="w-3 h-3 rounded-full bg-indigo-400 opacity-75 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-3 h-3 rounded-full bg-indigo-400 opacity-75 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div ref={chatEndRef} />
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Message input */}
                <div className={`${themeClasses.header} border-t p-4 transition-colors duration-300`}>
                  <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                    <div className="relative">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share your mood or interests..."
                        className={`w-full px-4 py-3 pr-12 rounded-full border shadow-sm ${themeClasses.input} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300`}
                        disabled={isLoading}
                      />
                      <button 
                        type="submit" 
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${isLoading ? 'bg-gray-400' : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90'} rounded-full p-2 text-white transition-all`}
                        disabled={isLoading}
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Podcast recommendations */}
          <AnimatePresence mode="wait">
            {(!showChat || window.innerWidth >= 768) && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`md:w-1/2 lg:w-2/5 ${themeClasses.sidebar} border-l overflow-y-auto ${showChat && window.innerWidth < 768 ? 'hidden' : ''}`}
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <Headphones className="w-5 h-5 mr-2 text-indigo-500" />
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                      Recommended Podcasts
                    </span>
                  </h2>
                  
                  {podcasts.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4">
                      {podcasts.map((podcast) => (
                        <PodcastCard key={podcast.id} podcast={podcast} darkMode={darkMode} themeClasses={themeClasses} />
                      ))}
                    </div>
                  ) : (
                    <div className={`text-center py-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <Headphones className="w-16 h-16 mx-auto mb-4 opacity-30" />
                      <p className="text-lg">Start a conversation to get podcast recommendations tailored to your mood! <br /> <br /> <small className='bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full border-purple-500 border-0'>⚡Made By Ayush Swami (12311389) and Aakash Kumar (12311105)⚡ </small> </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// Enhanced Podcast card component
const PodcastCard = ({ podcast, darkMode, themeClasses }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`${themeClasses.card} rounded-xl shadow-lg overflow-hidden border transition-all duration-300`}
    >
      <div className="relative">
        {podcast.imageUrl ? (
          <img 
            src={podcast.imageUrl} 
            alt={podcast.title} 
            className="w-full h-44 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400x200?text=Podcast";
            }}
          />
        ) : (
          <div className="w-full h-44 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Headphones className="w-16 h-16 text-white/80" />
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Title at the bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-bold text-white text-lg leading-snug line-clamp-2">{podcast.title}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-3 mb-4`}>
          {podcast.description || "No description available."}
        </p>
        
        <div className="flex justify-between items-center">
          <span className={`text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-800 ${darkMode ? 'bg-indigo-900/50 text-indigo-300' : ''}`}>
            ID: {podcast.id}
          </span>
          
          {podcast.webUrl && (
            <a 
              href={podcast.webUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-indigo-500 hover:text-indigo-600 transition-colors"
            >
              Visit <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PodcastRecommender;