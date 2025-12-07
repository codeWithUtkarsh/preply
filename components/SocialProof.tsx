export default function SocialProof() {
  const testimonials = [
    {
      quote: "Preply helped me pass my medical exams. The flashcards during anatomy videos were a game-changer!",
      author: "Sarah M.",
      role: "Medical Student",
      avatar: "👩‍⚕️",
      rating: 5
    },
    {
      quote: "Our students' engagement increased by 300% after implementing Preply for our online courses.",
      author: "Prof. Johnson",
      role: "Stanford University",
      avatar: "👨‍🏫",
      rating: 5
    },
    {
      quote: "I finally completed that 40-hour Python course. Preply kept me engaged throughout!",
      author: "Alex D.",
      role: "Software Developer",
      avatar: "👨‍💻",
      rating: 5
    }
  ]

  const stats = [
    { number: '500+', label: 'Beta Users', sublabel: 'In first month' },
    { number: '85%', label: 'User Retention', sublabel: 'After 30 days' },
    { number: '4.8/5', label: 'Average Rating', sublabel: 'User satisfaction' },
    { number: '10K+', label: 'Videos Processed', sublabel: 'And counting' },
    { number: '50K+', label: 'Questions Generated', sublabel: 'AI-powered learning' }
  ]

  const logos = [
    { name: 'Stanford', icon: '🎓' },
    { name: 'MIT', icon: '🎓' },
    { name: 'Coursera', icon: '📚' },
    { name: 'Udemy', icon: '💻' },
    { name: 'Khan Academy', icon: '📖' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Traction stats */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Learners Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join thousands of students, educators, and professionals already learning smarter
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-900 font-semibold">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Rating stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="text-4xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo garden */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <p className="text-center text-gray-600 mb-6 font-semibold">
            Used at leading institutions and platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition-colors">
                <span className="text-3xl">{logo.icon}</span>
                <span className="text-xl font-bold">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
