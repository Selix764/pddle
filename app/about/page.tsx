"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Waves, Shield, Globe } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import ScrollAnimatedSection from "../components/ScrollAnimatedSection"
import StaggeredScrollAnimation from "../components/StaggeredScrollAnimation"

export default function AboutPage() {
  const { t } = useLanguage()

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Water",
      description:
        "We believe everyone should experience the joy and freedom of being on the water. SUP is more than a sport - it's a way to connect with nature and yourself.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description:
        "Your safety is our top priority. All equipment is regularly maintained, and our instructors are certified in water safety and first aid.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focus",
      description:
        "We're building a community of water enthusiasts who support and inspire each other to explore, learn, and grow together.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Environmental Responsibility",
      description:
        "We're committed to protecting the waters we love through sustainable practices and environmental education.",
    },
  ]

  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300&text=Alex+Rivera",
      bio: "Former tech executive turned water sports entrepreneur. Alex founded pddle after experiencing the transformative power of SUP during a difficult period in his life.",
      experience: "15 years in tech, 8 years SUP enthusiast",
    },
    {
      name: "Maria Santos",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300&text=Maria+Santos",
      bio: "Marine biologist and operations expert who ensures our equipment and locations meet the highest standards of safety and environmental responsibility.",
      experience: "12 years marine biology, 6 years operations",
    },
    {
      name: "David Kim",
      role: "Technology Director",
      image: "/placeholder.svg?height=300&width=300&text=David+Kim",
      bio: "Software engineer who developed our smart locker system and mobile app. David's innovations make SUP rental seamless and accessible.",
      experience: "10 years software development",
    },
    {
      name: "Sarah Johnson",
      role: "Lead Instructor",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson+Team",
      bio: "Professional SUP instructor and yoga teacher who leads our instructor training program and develops our educational content.",
      experience: "8 years SUP instruction, 500+ certified students",
    },
  ]

  const milestones = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Founded pddle with the first smart locker station at Lake Tahoe",
    },
    {
      year: "2020",
      title: "Expansion",
      description: "Launched 10 locations across California and introduced guided tours",
    },
    {
      year: "2021",
      title: "Innovation",
      description: "Developed mobile app and advanced booking system",
    },
    {
      year: "2022",
      title: "Growth",
      description: "Reached 50+ locations and 10,000+ happy customers",
    },
    {
      year: "2023",
      title: "Recognition",
      description: "Named 'Best Water Sports Rental' by California Tourism Board",
    },
    {
      year: "2024",
      title: "Future",
      description: "Expanding nationwide with 100+ locations planned",
    },
  ]

  const stats = [
    { number: "50+", label: "Locations" },
    { number: "15,000+", label: "Happy Customers" },
    { number: "500+", label: "SUP Lessons Given" },
    { number: "99.9%", label: "Safety Record" },
  ]

  return (
    <div className="min-h-screen bg-[#faf2e1]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=About+Us+Hero')",
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container-custom">
          <div className="flex items-center justify-center h-full text-center">
            <div className="text-white max-w-6xl w-full animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-left">
                Our <span className="text-[#e85a4f] animate-glow">Story</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed mx-auto max-w-3xl text-white/90 animate-slide-in-right animation-delay-300">
                Born from a passion for water sports and a vision to make SUP accessible to everyone, pddle is
                revolutionizing how people experience paddleboarding.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
                <Link
                  href="#story"
                  className="btn-primary animate-pulse-glow"
                >
                  Our Journey
                </Link>
                <Link
                  href="#team"
                  className="btn-secondary hover:animate-shake"
                >
                  Meet the Team
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-pulse">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce animation-delay-500"></div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <div className="container-custom py-12 scroll-mt-24" id="story">
        <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-[#1e2a4a]/70 mb-8 leading-relaxed">
              pddle was born from a simple belief: everyone should have easy access to the transformative experience of
              paddleboarding. What started as a weekend passion project has grown into a mission to revolutionize water
              sports accessibility.
            </p>
            <p className="text-lg text-[#1e2a4a]/70 leading-relaxed">
              Our founder, Alex Rivera, discovered SUP during a challenging time in his corporate career. The peace and
              clarity he found on the water inspired him to share this experience with others. Frustrated by the hassles
              of traditional rental shops - limited hours, long lines, and inconvenient locations - Alex envisioned a
              better way.
            </p>
          </div>
        </ScrollAnimatedSection>

        {/* Stats */}
        <StaggeredScrollAnimation animation="slideUp" className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 stats-card">
                <div className="text-4xl font-bold text-[#e85a4f] mb-2 animate-number-count">{stat.number}</div>
                <div className="text-[#111C2F]/70 font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </StaggeredScrollAnimation>

        {/* Values */}
        <ScrollAnimatedSection animation="slideUp" className="mb-16">
          <h3 className="text-3xl font-bold text-[#1e2a4a] text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-equal-height">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-equal-height bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="card-content">
                  <div>
                    <div className="bg-[#e85a4f] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 text-white">
                      {value.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-[#111C2F] mb-4 text-title-consistent">{value.title}</h4>
                  </div>
                  <p className="text-[#111C2F]/70 leading-relaxed text-body-consistent">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* Timeline */}
        <ScrollAnimatedSection animation="slideUp" className="mb-16">
          <h3 className="text-3xl font-bold text-[#1e2a4a] text-center mb-12">Our Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#e85a4f]/20"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <div className="text-2xl font-bold text-[#e85a4f] mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-[#111C2F] mb-2">{milestone.title}</h4>
                      <p className="text-[#111C2F]/70">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#e85a4f] rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Team */}
        <div className="scroll-mt-24" id="team">
          <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1e2a4a] mb-6">Meet Our Team</h3>
            <p className="text-xl text-[#1e2a4a]/70 max-w-3xl mx-auto">
              Our diverse team brings together expertise in technology, marine biology, operations, and water sports
              instruction to create the best SUP experience possible.
            </p>
          </ScrollAnimatedSection>

          <StaggeredScrollAnimation animation="slideUp" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 grid-equal-height">
            {team.map((member, index) => (
              <div
                key={index}
                className="card-equal-height bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="md:flex h-full">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="md:w-2/3 p-8 card-content">
                    <div>
                      <h4 className="text-2xl font-bold text-[#111C2F] mb-2 text-title-consistent">{member.name}</h4>
                      <p className="text-[#e85a4f] font-semibold mb-4 text-title-consistent">{member.role}</p>
                      <p className="text-[#111C2F]/70 mb-4 leading-relaxed text-body-consistent">{member.bio}</p>
                    </div>
                    <p className="text-sm text-[#111C2F]/60 font-medium">{member.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredScrollAnimation>
        </div>

        {/* Mission Statement */}
        <ScrollAnimatedSection
          animation="scaleIn"
          className="bg-[#1e2a4a] text-white rounded-2xl p-12 text-center mb-16"
        >
          <Waves className="w-16 h-16 text-[#e85a4f] mx-auto mb-6 animate-float" />
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            To make paddleboarding accessible, safe, and enjoyable for everyone while fostering a community that
            respects and protects our precious water environments. We believe that time on the water should be
            effortless, inspiring, and transformative.
          </p>
        </ScrollAnimatedSection>

        {/* CTA Section */}
        <ScrollAnimatedSection animation="slideUp" className="text-center">
          <h3 className="text-3xl font-bold text-[#1e2a4a] mb-6">Join Our Story</h3>
          <p className="text-xl text-[#1e2a4a]/70 mb-8 max-w-2xl mx-auto">
            Whether you're a first-time paddler or a seasoned pro, we invite you to be part of the pddle community and
            discover your own water story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations" className="btn-primary animate-pulse-glow">
              Find a Location
            </Link>
            <Link href="/events" className="btn-secondary hover:animate-wiggle">
              Book an Experience
            </Link>
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  )
}
