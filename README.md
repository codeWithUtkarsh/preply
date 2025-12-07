# Preply Landing Page

A modern, responsive SPA landing page for Preply - an AI-powered video learning platform that transforms passive video watching into active learning experiences.

## Features

- ✨ Modern, responsive design with Tailwind CSS
- 🎨 Gradient-based purple/blue color scheme
- 📱 Mobile-first responsive layout
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Interactive components and smooth animations
- 🚀 Optimized for performance and SEO

## Sections

1. **Hero Section** - Eye-catching header with email capture and demo video
2. **Problem Section** - Highlights pain points of traditional video learning
3. **Solution/Features** - Interactive feature cards showcasing Preply's capabilities
4. **How It Works** - 3-step visualization of the user journey
5. **Benefits** - Tabbed section for different user personas (Students, Educators, Businesses)
6. **Social Proof** - Testimonials, statistics, and trust indicators
7. **Pricing** - Tier comparison with monthly/annual toggle
8. **FAQ** - Expandable accordion with common questions
9. **Footer** - Final CTA with navigation links and social media

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Static export (can be deployed to Vercel, Netlify, etc.)

## Project Structure

```
preply-landing-page/
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main landing page
├── components/
│   ├── Navigation.tsx    # Sticky navigation bar
│   ├── Hero.tsx          # Hero section with CTA
│   ├── Problem.tsx       # Problem statement section
│   ├── Solution.tsx      # Features showcase
│   ├── HowItWorks.tsx    # Process explanation
│   ├── Benefits.tsx      # Benefits by user type
│   ├── SocialProof.tsx   # Testimonials and stats
│   ├── Pricing.tsx       # Pricing tiers
│   ├── FAQ.tsx           # Frequently asked questions
│   └── Footer.tsx        # Footer with final CTA
└── public/               # Static assets

```

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`. The primary gradient uses purple to blue:

- Primary: Blue shades (#0ea5e9 to #0c4a6e)
- Secondary: Purple shades (#a855f7 to #581c87)
- Accent: Yellow (#fbbf24)

### Content

All content can be easily modified in the component files:

- Testimonials: `components/SocialProof.tsx`
- Pricing tiers: `components/Pricing.tsx`
- FAQ items: `components/FAQ.tsx`
- Features: `components/Solution.tsx`

## Deployment

This project is configured for static export and can be deployed to any static hosting service:

```bash
npm run build
```

The built files will be in the `out/` directory.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## License

MIT

## About Preply

Preply is an AI-powered video learning platform that uses OpenAI's GPT-4 and Whisper technology to automatically generate contextual questions, flashcards, and quizzes while students watch educational videos, dramatically improving retention and comprehension.

Key benefits:
- 3x better retention compared to passive watching
- 60% reduction in study time through targeted review
- 85% improvement in quiz scores
- Real-time comprehension tracking

---

Built with ❤️ for learners everywhere
