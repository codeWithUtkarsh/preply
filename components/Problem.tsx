export default function Problem() {
  const problems = [
    {
      icon: '😴',
      stat: '67%',
      title: 'Poor Retention',
      description: 'Students struggle to retain information from video lectures'
    },
    {
      icon: '📺',
      stat: '85%',
      title: 'Passive Watching',
      description: 'Passive video watching leads to poor engagement and low retention'
    },
    {
      icon: '⏰',
      stat: '2+ hrs',
      title: 'Wasted Time',
      description: 'Students spend hours rewatching videos to find specific concepts'
    },
    {
      icon: '❓',
      stat: '0%',
      title: 'No Tracking',
      description: 'No way to track comprehension in real-time while watching'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Problem with Video Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional video platforms aren't designed for learning. They're built for entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">{problem.icon}</div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{problem.stat}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Additional problem illustration */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-red-100">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Sound Familiar?
            </h3>
            <div className="space-y-3 text-left md:text-center">
              <p className="text-lg text-gray-700">
                ❌ You watch a 1-hour lecture but can't remember the key concepts
              </p>
              <p className="text-lg text-gray-700">
                ❌ You zone out halfway through and miss important information
              </p>
              <p className="text-lg text-gray-700">
                ❌ You spend hours rewatching just to find one specific explanation
              </p>
              <p className="text-lg text-gray-700">
                ❌ You have no idea what you actually learned until the exam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
