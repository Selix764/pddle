"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Waves, Shield, Globe, CheckCircle, Calendar, Award, Target, MapPin, Clock } from "lucide-react"
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
    <>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: "url('/images/about-hero-new.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container-custom">
          <div className="flex items-center justify-center h-full text-center">
            {/* Centered Content */}
            <div className="text-white max-w-6xl w-full animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-left">
                {t("about.hero.title")} <span className="text-[#e85a4f]">pddle</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed mx-auto max-w-3xl text-white/90 animate-slide-in-right animation-delay-300">
                {t("about.hero.subtitle")}
              </p>

              {/* CTA Buttons - Consistent Heights */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
                <button className="btn-primary animate-pulse-glow">
                  <MapPin className="w-5 h-5 mr-2" />
                  {t("about.hero.ourJourney")}
                </button>
                <button className="btn-secondary hover:animate-shake">
                  <Users className="w-5 h-5 mr-2" />
                  {t("about.hero.meetTeam")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-pulse">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce animation-delay-500"></div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">{t("about.story.title")}</h2>
            <div className="prose prose-lg max-w-4xl mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                {t("about.story.intro")}
              </p>
              <p className="text-lg">
                {t("about.story.founder")}
              </p>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#faf2e1]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e2a4a] mb-4">
              {t("about.values.title")}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-equal-height bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#e85a4f] rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1e2a4a] mb-4">
                {t("about.values.passion.title")}
              </h3>
              <p className="text-gray-600">
                {t("about.values.passion.description")}
              </p>
            </div>

            <div className="card-equal-height bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#e85a4f] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1e2a4a] mb-4">
                {t("about.values.safety.title")}
              </h3>
              <p className="text-gray-600">
                {t("about.values.safety.description")}
              </p>
            </div>

            <div className="card-equal-height bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#e85a4f] rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1e2a4a] mb-4">
                {t("about.values.community.title")}
              </h3>
              <p className="text-gray-600">
                {t("about.values.community.description")}
              </p>
            </div>

            <div className="card-equal-height bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#e85a4f] rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1e2a4a] mb-4">
                {t("about.values.environment.title")}
              </h3>
              <p className="text-gray-600">
                {t("about.values.environment.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e2a4a] mb-4">
              {t("about.team.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.team.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-equal-height bg-[#faf2e1] p-6 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-[#1e2a4a] mb-2">
                {t("about.team.alex.name")}
              </h3>
              <p className="text-[#e85a4f] font-medium mb-3">
                {t("about.team.alex.role")}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                {t("about.team.alex.bio")}
              </p>
              <p className="text-xs text-gray-500">
                {t("about.team.alex.experience")}
              </p>
            </div>

            <div className="card-equal-height bg-[#faf2e1] p-6 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-[#1e2a4a] mb-2">
                {t("about.team.maria.name")}
              </h3>
              <p className="text-[#e85a4f] font-medium mb-3">
                {t("about.team.maria.role")}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                {t("about.team.maria.bio")}
              </p>
              <p className="text-xs text-gray-500">
                {t("about.team.maria.experience")}
              </p>
            </div>

            <div className="card-equal-height bg-[#faf2e1] p-6 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-[#1e2a4a] mb-2">
                {t("about.team.david.name")}
              </h3>
              <p className="text-[#e85a4f] font-medium mb-3">
                {t("about.team.david.role")}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                {t("about.team.david.bio")}
              </p>
              <p className="text-xs text-gray-500">
                {t("about.team.david.experience")}
              </p>
            </div>

            <div className="card-equal-height bg-[#faf2e1] p-6 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-[#1e2a4a] mb-2">
                {t("about.team.sarah.name")}
              </h3>
              <p className="text-[#e85a4f] font-medium mb-3">
                {t("about.team.sarah.role")}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                {t("about.team.sarah.bio")}
              </p>
              <p className="text-xs text-gray-500">
                {t("about.team.sarah.experience")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-[#faf2e1]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e2a4a] mb-4">
              {t("about.timeline.title")}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#e85a4f]"></div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-8 h-8 bg-[#e85a4f] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    19
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e2a4a] mb-2">
                      {t("about.timeline.2019.title")}
                    </h3>
                    <p className="text-gray-600">
                      {t("about.timeline.2019.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-8 h-8 bg-[#e85a4f] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    20
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e2a4a] mb-2">
                      {t("about.timeline.2020.title")}
                    </h3>
                    <p className="text-gray-600">
                      {t("about.timeline.2020.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-8 h-8 bg-[#e85a4f] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    21
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e2a4a] mb-2">
                      {t("about.timeline.2021.title")}
                    </h3>
                    <p className="text-gray-600">
                      {t("about.timeline.2021.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-8 h-8 bg-[#e85a4f] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    22
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e2a4a] mb-2">
                      {t("about.timeline.2022.title")}
                    </h3>
                    <p className="text-gray-600">
                      {t("about.timeline.2022.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-8 h-8 bg-[#e85a4f] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    23
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e2a4a] mb-2">
                      {t("about.timeline.2023.title")}
                    </h3>
                    <p className="text-gray-600">
                      {t("about.timeline.2023.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-8 h-8 bg-[#e85a4f] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    24
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e2a4a] mb-2">
                      {t("about.timeline.2024.title")}
                    </h3>
                    <p className="text-gray-600">
                      {t("about.timeline.2024.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#1e2a4a] mb-8">
              {t("about.mission.title")}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t("about.mission.description")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1e2a4a] text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t("about.cta.title")}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t("about.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              {t("about.cta.findLocation")}
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              {t("about.cta.bookExperience")}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
