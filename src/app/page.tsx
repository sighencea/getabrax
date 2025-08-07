import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import BenefitsGrid from '@/components/BenefitsGrid'
import VideoTestimonialSection from '@/components/VideoTestimonialSection'
import HowItWorks from '@/components/HowItWorks'
import SignupFormSection from '@/components/SignupFormSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="pt-16">
        <HeroSection />
        <BenefitsGrid />
        <VideoTestimonialSection />
        <HowItWorks />
        <SignupFormSection />
        <Footer />
      </div>
    </main>
  )
}
