# 🎧 Podify AI - Intelligent Podcast Recommender

<div align="center">

![Podify AI Logo](https://via.placeholder.com/120x120/6366f1/ffffff?text=🎧)

**Discover Your Next Favorite Podcast with AI-Powered Recommendations**

[![Deployed on Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00c7b7?logo=netlify&logoColor=white)](https://podify-ai.netlify.app)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.3-38b2ac?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google AI](https://img.shields.io/badge/Google%20AI-Gemini-4285f4?logo=google&logoColor=white)](https://ai.google.dev/)

[🚀 Live Demo](https://podify-ai.netlify.app/) • [📖 Documentation](#-features) • [🛠️ Installation](#-installation)

</div>

---

## 🌟 Overview

Podify AI revolutionizes podcast discovery by combining natural language processing with intelligent recommendation algorithms. Simply chat about your interests, mood, or current situation, and receive personalized podcast suggestions that truly resonate with your preferences.

### ✨ What Makes Podify Special?

- **🤖 AI-Powered Conversations**: Chat naturally with Gemini AI to express your interests
- **🎯 Context-Aware Recommendations**: Understands your mood and provides relevant suggestions
- **🎤 Voice Input Support**: Speak your preferences using voice recognition
- **🌙 Dark/Light Mode**: Seamless theme switching for comfortable viewing
- **📱 Responsive Design**: Perfect experience across all devices
- **🔄 Real-time Search**: Instant podcast discovery from comprehensive databases

---

## 🎯 Features

### 🗣️ **Intelligent Conversation System**
- Natural language processing to understand user intent
- Context-aware responses based on conversation history
- Support for greetings, clarifications, and follow-up requests
- Emotional intelligence to match podcasts with your current mood

### 🎙️ **Advanced Voice Integration**
- Browser-based speech recognition
- Real-time voice input with visual feedback
- Hands-free podcast discovery experience
- Multi-language support for voice commands

### 🔍 **Smart Recommendation Engine**
- Integration with Podchaser API for comprehensive podcast database
- AI-powered content analysis and matching
- Personalized suggestions based on user preferences
- Ability to request more recommendations on any topic

### 🎨 **Beautiful User Interface**
- Modern, responsive design with Framer Motion animations
- Dual-pane layout for chat and podcast discovery
- Interactive podcast cards with rich metadata
- Smooth transitions and micro-interactions

### 🌐 **Seamless Navigation**
- Elegant landing page showcasing features
- Intuitive chat interface for recommendations
- Direct links to podcast platforms
- Mobile-optimized responsive design

---

## 🚀 Live Demo

Experience Podify AI in action: **[https://podify-ai.netlify.app/](https://podify-ai.netlify.app/)**

### 🎮 Try These Sample Queries:
- *"I'm feeling stressed and need something to help me relax"*
- *"I want to learn about artificial intelligence and machine learning"*
- *"Recommend podcasts for my morning workout routine"*
- *"I'm interested in true crime stories"*
- *"Show me more options"* (after receiving initial recommendations)

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | AI/ML | Styling | Tools |
|----------|-------|---------|-------|
| ![React](https://img.shields.io/badge/React-19.0.0-61dafb?logo=react) | ![Google AI](https://img.shields.io/badge/Google%20Gemini-4285f4?logo=google) | ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.3-38b2ac?logo=tailwind-css) | ![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff?logo=vite) |
| ![React Router](https://img.shields.io/badge/React%20Router-7.5.1-ca4245?logo=react-router) | ![Podchaser API](https://img.shields.io/badge/Podchaser%20API-FF6B6B) | ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.6.3-0055ff?logo=framer) | ![ESLint](https://img.shields.io/badge/ESLint-9.21.0-4b32c3?logo=eslint) |
| ![React Markdown](https://img.shields.io/badge/React%20Markdown-10.1.0-000000?logo=markdown) | | ![Lucide Icons](https://img.shields.io/badge/Lucide%20Icons-0.487.0-f56565?logo=lucide) | ![Netlify](https://img.shields.io/badge/Netlify-00c7b7?logo=netlify) |

</div>

---

## 📦 Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Google AI API Key** ([Get one here](https://ai.google.dev/))
- **Podchaser API Key** ([Sign up here](https://www.podchaser.com/api))

### 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/HackNetAyush/Podify-AI-Podcast-Recommender.git
   cd Podify-AI-Podcast-Recommender
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_google_ai_api_key_here
   VITE_PODCHASER_API_KEY=your_podchaser_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see Podify AI in action!

### 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

The optimized build will be available in the `dist` directory.

---

## 🎯 Usage Guide

### 💬 **Starting a Conversation**

1. **Landing Page**: Visit the beautiful landing page showcasing Podify's features
2. **Enter Chat**: Click "Try Now" or "Get Started Free" to access the chat interface
3. **Start Chatting**: Type or speak your podcast preferences naturally
4. **Receive Recommendations**: Get personalized podcast suggestions instantly
5. **Explore More**: Ask for additional recommendations or try different topics

### 🎤 **Using Voice Input**

1. **Click the microphone icon** in the chat input
2. **Grant microphone permissions** when prompted
3. **Speak your request** clearly
4. **Watch real-time transcription** appear in the input field
5. **Submit or continue** to get recommendations

### 🌙 **Theme Switching**

- **Light/Dark Mode**: Click the sun/moon icon in the header
- **Automatic Detection**: Respects your system's color scheme preference
- **Persistent Settings**: Your theme choice is remembered

---

## 🏗️ Project Structure

```
Podify-AI-Podcast-Recommender/
├── 📁 public/
│   ├── _redirects              # Netlify redirects
│   └── vite.svg               # Favicon
├── 📁 src/
│   ├── 📁 assets/             # Static assets
│   ├── 📁 lib/                # AI & utility libraries
│   │   ├── geminiMessageAnalyzer.js      # Message intent analysis
│   │   ├── geminiRecommendationGenerator.js  # Recommendation generation
│   │   ├── geminiConversationManager.js      # Conversation handling
│   │   ├── geminiWithMemory.js           # Contextual AI responses
│   │   ├── geminiWithoutMemory.js        # Stateless AI responses
│   │   └── g2_testing.js                 # Gemini 2.0 testing
│   ├── 📁 pages/
│   │   └── LandingPage.jsx              # Beautiful landing page
│   ├── App.jsx                          # Main app component
│   ├── PodcastRecommender.jsx           # Core chat interface
│   ├── Chat.module.css                  # Chat-specific styles
│   ├── index.css                        # Global styles
│   └── main.jsx                         # App entry point
├── 📄 package.json                      # Dependencies & scripts
├── 📄 vite.config.js                    # Vite configuration
├── 📄 eslint.config.js                  # ESLint configuration
└── 📄 index.html                        # HTML template
```

---

## 🤖 AI Architecture

### 🧠 **Gemini AI Integration**

Podify leverages Google's Gemini AI through multiple specialized modules:

#### **Message Analysis Pipeline**
```javascript
User Input → Intent Analysis → Context Understanding → Response Generation
```

#### **Core AI Modules**

1. **🔍 Message Analyzer** (`geminiMessageAnalyzer.js`)
   - Determines if input is greeting, request for more content, or new topic
   - Extracts search terms from natural language
   - Identifies when clarification is needed

2. **💡 Recommendation Generator** (`geminiRecommendationGenerator.js`)
   - Creates personalized podcast recommendations
   - Formats responses with markdown and links
   - Maintains conversation context

3. **💬 Conversation Manager** (`geminiConversationManager.js`)
   - Handles greetings, errors, and edge cases
   - Manages conversational flow
   - Provides contextual responses

4. **🧠 Memory Systems**
   - **With Memory**: Maintains conversation context across interactions
   - **Without Memory**: Provides stateless responses for specific tasks

---

## 🔧 Configuration

### 🌐 **API Configuration**

The application requires two API keys:

```javascript
// Google AI (Gemini)
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Podchaser API
const API_TOKEN = import.meta.env.VITE_PODCHASER_API_KEY;
```

### 🎨 **Styling Configuration**

Podify uses TailwindCSS with custom configurations:

- **Custom Colors**: Indigo and purple gradient themes
- **Dark Mode**: System preference detection with manual override
- **Animations**: Framer Motion for smooth transitions
- **Responsive Design**: Mobile-first approach

### 🔊 **Voice Recognition Setup**

```javascript
// Browser compatibility check
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Configuration
recognitionRef.current.continuous = false;
recognitionRef.current.interimResults = false;
recognitionRef.current.lang = 'en-US';
```

---

## 🚀 Deployment

### 🌐 **Netlify Deployment**

The application is optimized for Netlify deployment:

1. **Automatic Deployment**: Connected to GitHub for continuous deployment
2. **Environment Variables**: Securely configured in Netlify dashboard
3. **SPA Routing**: Configured with `_redirects` file for client-side routing
4. **Build Optimization**: Vite build process optimized for production

### 🔧 **Build Process**

```bash
# Production build
npm run build

# Preview build locally
npm run preview

# Lint code
npm run lint
```

---

## 🎨 Design Philosophy

### 🌟 **User Experience Principles**

- **Conversational Interface**: Natural language interaction feels like chatting with a knowledgeable friend
- **Instant Gratification**: Quick responses and real-time feedback
- **Visual Hierarchy**: Clear separation between chat and recommendations
- **Accessibility**: Voice input, keyboard navigation, and screen reader support

### 🎯 **Visual Design**

- **Modern Aesthetics**: Clean, professional interface with subtle animations
- **Color Psychology**: Calming indigo and energetic purple gradient
- **Typography**: System fonts for optimal readability across platforms
- **Responsive Layout**: Fluid design that adapts to any screen size

---

## 🤝 Contributing

We welcome contributions to make Podify even better! Here's how you can help:

### 🔧 **Development Setup**

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### 🐛 **Bug Reports**

Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### 💡 **Feature Requests**

Have an idea? We'd love to hear it! Open an issue describing:
- The feature you'd like to see
- Why it would be useful
- How you envision it working

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

 

### 🙏 **Acknowledgments**

- **Google AI** for the powerful Gemini language model
- **Podchaser** for comprehensive podcast database access
- **React Community** for excellent libraries and tools
- **Open Source Community** for inspiration and support

</div>

---

<div align="center">

### 🌟 **If you found this project helpful, please give it a star!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/HackNetAyush/Podify-AI-Podcast-Recommender?style=social)](https://github.com/HackNetAyush/Podify-AI-Podcast-Recommender/stargazers)

**Made with ❤️ for podcast lovers everywhere**

[🚀 Try Podify AI Now](https://podify-ai.netlify.app/) | [📚 Documentation](#-features) | [🐛 Report Issues](https://github.com/HackNetAyush/Podify-AI-Podcast-Recommender/issues)

</div>
