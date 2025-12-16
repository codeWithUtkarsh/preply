import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CTASection from '@/components/CTASection'
import Problem from '@/components/Problem'
import Benefits from '@/components/Benefits'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <CTASection />
      <Problem />
      <div id="features">
        <Benefits />
      </div>
      <div id="pricing">
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}
