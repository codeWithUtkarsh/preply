'use client'

import { useState } from 'react'

export default function Benefits() {
  const [activeTab, setActiveTab] = useState('students')

  const audiences = {
    students: {
      title: 'For Students & Self-Learners',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      headline: 'Ace Your Exams Without Rewatching Hours of Lectures',
      benefits: [
        {
          metric: '3x',
          title: 'Better Retention',
          description: 'Compared to passive video watching'
        },
        {
          metric: '60%',
          title: 'Less Study Time',
          description: 'Through targeted review and smart navigation'
        },
        {
          metric: '85%',
          title: 'Higher Scores',
          description: 'Improvement in quiz performance'
        }
      ],
      useCases: [
        'Complete online courses (Coursera, Udemy, YouTube)',
        'Prepare for exams with video lectures',
        'Learn new languages from video content',
        'Develop technical skills faster'
      ]
    },
    educators: {
      title: 'For Educators & Institutions',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      headline: 'Know Exactly How Your Students Are Learning',
      benefits: [
        {
          metric: '70%',
          title: 'Less Grading Time',
          description: 'With auto-generated quizzes and analytics'
        },
        {
          metric: '25%',
          title: 'Higher Pass Rates',
          description: 'Students retain more with active learning'
        },
        {
          metric: '100%',
          title: 'Engagement Tracking',
          description: 'Real-time insights into student comprehension'
        }
      ],
      useCases: [
        'Implement flipped classroom models',
        'Enhance remote and hybrid learning',
        'Track student performance before exams',
        'Identify struggling students early'
      ]
    },
    businesses: {
      title: 'For Companies & Training',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      headline: 'Ensure Your Training Videos Actually Work',
      benefits: [
        {
          metric: '50%',
          title: 'Faster Onboarding',
          description: 'Employees learn and retain faster'
        },
        {
          metric: '90%',
          title: 'Compliance Verified',
          description: 'Track completion and comprehension'
        },
        {
          metric: '2x',
          title: 'ROI on Training',
          description: 'Better retention means better performance'
        }
      ],
      useCases: [
        'Employee onboarding and training',
        'Compliance training verification',
        'Skill development tracking',
        'Knowledge retention measurement'
      ]
    }
  }

  const currentAudience = audiences[activeTab as keyof typeof audiences]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Everyone Who Learns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a student, educator, or professional, Preply transforms how you learn from videos
          </p>
        </div>

        {/* Audience tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(audiences).map(([key, audience]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{audience.icon}</span>
              <span>{audience.title}</span>
            </button>
          ))}
        </div>

        {/* Content for selected audience */}
        <div className="transition-all duration-300">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentAudience.headline}
            </h3>
          </div>

          {/* Benefits metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {currentAudience.benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200 text-center">
                <div className="text-5xl font-bold gradient-text mb-2">
                  {benefit.metric}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Use cases */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Perfect For:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {currentAudience.useCases.map((useCase, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4">
                  <svg
                    className="w-6 h-6 text-green-500 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
