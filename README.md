# Emaar Luxury Real Estate Redesign

![Style](https://img.shields.io/badge/style-luxury-blueviolet)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![ChatGPT](https://img.shields.io/badge/ChatGPT-API-green?logo=openai)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)

A premium redesign of Emaar's homepage featuring luxury UI/UX design, AI-powered chatbot integration, and seamless dark/light mode functionality.

## 🎥 Demo  
[Click here to view the demo](https://www.loom.com/share/7b2bcd5a1a1946fd8a8cdb51316e01e9?sid=4de4f950-b209-49d2-a9b4-b40b29266865)

## ✨ Features

### 🎨 Luxury UI/UX Design
- **Premium Color Scheme**: OKLCH-based luxury palette with rich blacks and gold accents
- **Sophisticated Typography**: Geist font family for optimal readability
- **Smooth Animations**: Elegant transitions and micro-interactions
- **Responsive Design**: Optimized for all device sizes and screen types

### 🤖 AI-Powered Chatbot
- **24/7 Property Assistance**: ChatGPT API integration for instant customer support
- **Context-Aware Responses**: Intelligent answers about properties and neighborhoods
- **Quick Help Suggestions**: Pre-defined questions for faster navigation
- **Real Estate Expertise**: Specialized prompts for property-related inquiries

### 🌓 Advanced Theme System
- **Dual Mode Support**: Elegant dark and light themes
- **System Integration**: Automatic detection of user's system preferences
- **Smooth Transitions**: Seamless switching between themes
- **Persistent Storage**: User preferences saved across sessions

### 🚀 Modern Architecture
- **Next.js 14**: Latest App Router for optimal performance
- **TypeScript**: Full type safety and enhanced developer experience
- **Component Library**: Customized shadcn/ui components
- **Modern Styling**: Tailwind CSS with custom luxury modifications

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React Framework | 14 (App Router) |
| **TypeScript** | Type Safety | Latest |
| **Tailwind CSS** | Styling | Latest |
| **shadcn/ui** | UI Components | Latest |
| **OpenAI API** | AI Chatbot | Free Version |
| **Lucide** | Icons | Latest |
| **Framer Motion** | Animations | Latest |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm/yarn/pnpm package manager
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/emaar-luxury-redesign.git
   cd emaar-luxury-redesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
emaar-luxury-redesign/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── components/        # components
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── custom/           
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional styling
└── types/                # TypeScript definitions
```

## 🎨 Design Philosophy

The redesign embodies luxury and exclusivity through carefully crafted elements:

- **Color Palette**: Rich blacks (#0a0a0a), subtle gold accents (#d4af37), and platinum tones
- **Typography**: Clean, elegant Geist font family with optimal hierarchy
- **Spacing**: Generous whitespace creating a premium, uncluttered experience
- **Motion Design**: Subtle yet sophisticated animations that enhance user interaction
- **Visual Hierarchy**: Strategic use of contrast and sizing to guide user attention

## 🧠 AI Chatbot Configuration

### Setup Requirements
- Valid OpenAI API key with GPT-4 access
- Configured system prompts for real estate context
- Rate limiting and error handling

### Custom System Prompt
```typescript
const SYSTEM_PROMPT = `
You are an AI assistant for Emaar Properties, a premier luxury real estate developer.
Provide accurate information about properties, neighborhoods, pricing, and availability.

Guidelines:
1. Maintain a professional yet approachable tone
2. Keep responses concise but comprehensive
3. Direct users to the sales team for specific pricing
4. Never fabricate property details or availability
5. Suggest relevant properties based on user preferences
`;
```

## 🌙 Theme System

### Features
- **Auto-Detection**: Respects user's system color scheme preference
- **Manual Override**: Toggle button for user preference
- **Smooth Transitions**: CSS transitions for seamless theme switching
- **Persistence**: localStorage integration to remember user choice
- **Custom Palettes**: Tailored luxury color schemes for both modes

### Implementation
```typescript
  // Theme switching logic
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false)

  // Wait until after component is mounted to access theme
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Avoid hydration mismatch by not rendering until mounted
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
```


## 🚀 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components and images loaded on demand
- **Caching**: Strategic caching of API responses
- **Bundle Analysis**: Webpack bundle analyzer integration

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
npm run analyze      # Analyze bundle size
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code formatting
- Write descriptive commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📚 Resources & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [OpenAI API Reference](https://platform.openai.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ritik**
- Crafting luxury digital experiences
- Redefining modern web design standards

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>🐛 Found a bug? <a href="https://github.com/iritikraj/emaar-luxury-redesign/issues">Report it here</a></p>
</div>
