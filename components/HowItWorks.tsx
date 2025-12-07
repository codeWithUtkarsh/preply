export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Paste Your Video URL',
      description: 'Copy any YouTube URL or direct video link and paste it into Preply',
      icon: '🔗',
      details: [
        'Works with YouTube, Vimeo, and direct URLs',
        'No downloads required',
        'Instant processing starts'
      ]
    },
    {
      number: '2',
      title: 'AI Creates Your Learning Path',
      description: 'Our AI analyzes the content and generates flashcards, quizzes, and notes',
      icon: '🤖',
      details: [
        'GPT-4 understands the context',
        'Whisper transcribes accurately',
        'Smart question generation'
      ]
    },
    {
      number: '3',
      title: 'Learn Actively & Track Progress',
      description: 'Watch with interactive flashcards, take quizzes, and review your weak spots',
      icon: '🎓',
      details: [
        'Questions appear during playback',
        'Instant feedback on answers',
        'Jump to timestamps for review'
      ]
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform any video into an interactive learning experience in 3 simple steps
          </p>
        </div>

        {/* Steps visualization */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-purple-100">
                  {/* Step number circle */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-6xl text-center mb-4 mt-4">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg
                          className="w-5 h-5 mr-2 text-green-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video walkthrough section */}
        <div id="demo" className="mt-16">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">See It In Action</h3>
                <p className="text-blue-100 mb-6">
                  Watch how Preply transforms a typical lecture video into an engaging learning experience with real-time flashcards and comprehensive quizzes.
                </p>
                <button className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-yellow-300 hover:text-purple-900 transition-colors duration-200">
                  Watch Full Demo
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white">2:30 Demo Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
