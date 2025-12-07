'use client'

import { useState } from 'react'

export default function Solution() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: '🎬',
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
      icon: '💡',
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
      icon: '📝',
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
      icon: '⏱️',
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
      icon: '📊',
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
      icon: '📖',
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet <span className="gradient-text">Preply</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform any video into an interactive learning experience powered by AI
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                activeFeature === index
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
              }`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className={`mb-4 ${activeFeature === index ? 'text-blue-100' : 'text-gray-600'}`}>
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
                    <span className="text-sm">{benefit}</span>
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
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-lg mb-2">Active Learning</h4>
              <p className="text-gray-600">Turn passive watching into active engagement with real-time questions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="font-bold text-lg mb-2">AI-Powered</h4>
              <p className="text-gray-600">GPT-4 and Whisper automatically generate contextual content</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-lg mb-2">Save Time</h4>
              <p className="text-gray-600">Learn faster with targeted review and smart timestamp navigation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
