'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What types of videos can I use with Preply?',
      answer: 'Preply works with YouTube videos, Vimeo, and direct video URLs (MP4, WebM). Whether it\'s a university lecture, online course, tutorial, or documentary, if it\'s educational content, Preply can transform it into an interactive learning experience.'
    },
    {
      question: 'How does the AI generate questions?',
      answer: 'Preply uses OpenAI\'s GPT-4 and Whisper technology. First, Whisper transcribes your video with high accuracy. Then, GPT-4 analyzes the content to understand context and key concepts, generating relevant flashcards and quiz questions that appear at strategic points during playback.'
    },
    {
      question: 'Can I use Preply offline?',
      answer: 'Once a video is processed, you can download the notes and flashcards for offline review. However, the initial video processing and interactive playback features require an internet connection.'
    },
    {
      question: 'How long does it take to process a video?',
      answer: 'Processing time depends on video length. A 10-minute video typically processes in 1-2 minutes, while a 1-hour lecture takes 5-10 minutes. Pro users get priority processing for faster results.'
    },
    {
      question: 'Can I export my flashcards and notes?',
      answer: 'Yes! Pro users can export flashcards to Anki, Quizlet, or download as PDF/Markdown. Study notes can be exported to Notion, Google Docs, or saved as PDF.'
    },
    {
      question: 'Is my data private and secure?',
      answer: 'Absolutely. We use enterprise-grade encryption for all data. Your videos and learning data are never shared with third parties. You can delete your data at any time from your account settings.'
    },
    {
      question: 'Can I use Preply for my entire class or organization?',
      answer: 'Yes! Our Team/Institution plan is designed for schools, universities, and companies. You get admin dashboards, student progress tracking, bulk processing, and custom branding. Contact our sales team for a demo.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! The Free plan lets you process 3 videos per month (up to 10 minutes each) with no credit card required. It\'s a great way to experience Preply before upgrading.'
    },
    {
      question: 'What languages does Preply support?',
      answer: 'Currently, Preply supports English, Spanish, French, German, Italian, Portuguese, and Mandarin. We\'re constantly adding more languages based on user demand.'
    },
    {
      question: 'Can I customize the types of questions generated?',
      answer: 'Pro users can customize question difficulty, frequency, and types (multiple choice, true/false, open-ended). You can also create custom flashcard templates to match your learning style.'
    },
    {
      question: 'How does the timestamp review feature work?',
      answer: 'When you answer a question incorrectly, Preply automatically bookmarks that timestamp. With one click, you can jump back to that exact moment in the video to review the concept you missed. No more scrubbing through hours of footage!'
    },
    {
      question: 'What if I have technical issues or questions?',
      answer: 'We offer email support for all users, with priority support for Pro and Team plans. Our help center has detailed guides, and we typically respond within 24 hours (faster for Pro users).'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Preply
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
