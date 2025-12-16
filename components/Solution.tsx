'use client'

import { useState } from 'react'

export default function Solution() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Smart Video Processing',
      description: 'Process any YouTube video or direct video URL with AI-powered transcription',
      benefits: [
        'Support for YouTube and direct URLs',
        'AI-powered transcription using Whisper',
        'Automatic content segmentation',
        'Fast processing - ready in minutes'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Interactive Flashcards',
      description: 'Questions appear at strategic timestamps during playback',
      benefits: [
        'Contextual questions based on content',
        'Immediate feedback on answers',
        'Spaced repetition algorithm',
        'Stay engaged throughout the video'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Adaptive Quizzes',
      description: '10-question comprehensive final quiz that adapts to your performance',
      benefits: [
        'Difficulty adjusts based on answers',
        'Covers key concepts from entire video',
        'Detailed explanations for each question',
        'Track your progress over time'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
        </svg>
      ),
      title: 'Smart Review System',
      description: 'Incorrect answers redirect to exact video timestamps',
      benefits: [
        'No more scrubbing through videos',
        'Jump directly to concepts you missed',
        'Targeted review of weak areas',
        'Save 60% of your study time'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Learning Analytics',
      description: 'Detailed performance reports and progress tracking',
      benefits: [
        'Visual performance dashboards',
        'Word frequency analysis',
        'Progress tracking with metrics',
        'Key takeaways automatically extracted'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Visual Notes & Diagrams',
      description: 'Auto-generated study notes with visual diagrams',
      benefits: [
        'Mermaid diagrams for complex concepts',
        'Casual, student-friendly formatting',
        'Export to your favorite note-taking app',
        'Review anytime, anywhere'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Preply</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform any video into an interactive learning experience powered by AI
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group ${
                activeFeature === index
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl shadow-purple-500/40 pulse-glow'
                  : 'glass-effect border border-purple-500/20 hover:border-purple-500/50 text-white hover:shadow-xl hover:shadow-purple-500/20'
              }`}
            >
              <div className={`mb-4 transition-transform duration-300 ${activeFeature === index ? '' : 'group-hover:scale-110'}`}>{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className={`mb-4 ${activeFeature === index ? 'text-blue-100' : 'text-gray-400'}`}>
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                        activeFeature === index ? 'text-yellow-300' : 'text-green-500'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-sm ${activeFeature === index ? 'text-blue-100' : 'text-gray-300'}`}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key value props */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-purple-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Preply is Different
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Active Learning</h4>
              <p className="text-gray-600">Turn passive watching into active engagement with real-time questions</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">AI-Powered</h4>
              <p className="text-gray-600">GPT-4 and Whisper automatically generate contextual content</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Save Time</h4>
              <p className="text-gray-600">Learn faster with targeted review and smart timestamp navigation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
