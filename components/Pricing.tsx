'use client'

import { useState } from 'react'

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for trying out Preply',
      features: [
        '3 videos per month',
        'Videos up to 10 minutes',
        'Basic flashcards',
        'Standard quiz generation',
        'Email support'
      ],
      limitations: [
        'No advanced features',
        'No exports',
        'Limited analytics'
      ],
      cta: 'Start Free',
      popular: false,
      color: 'gray'
    },
    {
      name: 'Student',
      price: { monthly: 9, annual: 7 },
      description: 'Most popular for individual learners',
      features: [
        '50 videos per month',
        'Videos up to 60 minutes',
        'Advanced flashcards with spaced repetition',
        'Detailed learning reports',
        'Study notes generation',
        'Word frequency analysis',
        'Priority email support'
      ],
      limitations: [],
      cta: 'Start Learning',
      popular: true,
      color: 'purple'
    },
    {
      name: 'Pro',
      price: { monthly: 29, annual: 24 },
      description: 'For serious learners and professionals',
      features: [
        '200 videos per month',
        'Videos up to 2 hours',
        'AI study assistant',
        'Playlist processing',
        'Priority processing',
        'Export to Anki/Quizlet',
        'Custom flashcard templates',
        'Advanced analytics',
        'API access',
        'Priority support'
      ],
      limitations: [],
      cta: 'Go Pro',
      popular: false,
      color: 'blue'
    },
    {
      name: 'Team/Institution',
      price: { monthly: 99, annual: 79 },
      description: 'For schools and organizations',
      features: [
        'Unlimited videos',
        'Admin dashboard',
        'Student progress tracking',
        'Custom branding',
        'Team analytics',
        'Bulk video processing',
        'SSO integration',
        'API access',
        'Dedicated support',
        'Training & onboarding'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'indigo'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free, upgrade when you need more. No hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-600'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 relative ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl transform scale-105'
                  : 'bg-gray-50 border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                </span>
                <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  /month
                </span>
                {billingCycle === 'annual' && plan.price.monthly > 0 && (
                  <p className={`text-sm mt-1 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    Billed annually (${plan.price.annual * 12}/year)
                  </p>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-bold mb-6 transition-all ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-900'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-yellow-300' : 'text-green-500'
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
                    <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ about pricing */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Pricing FAQs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600 text-sm">Yes! Upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600 text-sm">We accept all major credit cards, PayPal, and can invoice institutions.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Is there a refund policy?</h4>
              <p className="text-gray-600 text-sm">Yes! We offer a 30-day money-back guarantee on all paid plans.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Do you offer educational discounts?</h4>
              <p className="text-gray-600 text-sm">Yes! Students and educators get 20% off. Contact us for verification.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
