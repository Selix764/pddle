"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Users, Star, Filter } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import ScrollAnimatedSection from "../components/ScrollAnimatedSection"
import StaggeredScrollAnimation from "../components/StaggeredScrollAnimation"

export default function EventsPage() {
  const { language, t } = useLanguage()

  const events = [
    {
      id: 1,
      title: "Sunrise SUP Session",
      description: "Start your day with a peaceful paddle as the sun rises over the water.",
      date: "2024-02-15",
      time: "06:00 AM",
      location: "Lake Herastrau",
      category: "Wellness",
      difficulty: "Beginner",
      price: "150 RON",
      currentParticipants: 8,
      maxParticipants: 12,
      rating: 4.8,
      reviews: 24,
      featured: true,
    },
    {
      id: 2,
      title: "SUP Yoga Workshop",
      description: "Combine the tranquility of yoga with the challenge of paddleboarding.",
      date: "2024-02-20",
      time: "08:00 AM",
      location: "Snagov Lake",
      category: "Wellness",
      difficulty: "Intermediate",
      price: "200 RON",
      currentParticipants: 6,
      maxParticipants: 10,
      rating: 4.9,
      reviews: 18,
      featured: true,
    },
    {
      id: 3,
      title: "Night SUP Adventure",
      description: "Experience the magic of paddleboarding under the stars with LED lighting.",
      date: "2024-02-25",
      time: "07:00 PM",
      location: "Baneasa Lake",
      category: "Adventure",
      difficulty: "Intermediate",
      price: "180 RON",
      currentParticipants: 5,
      maxParticipants: 8,
      rating: 4.7,
      reviews: 31,
      featured: true,
    },
    {
      id: 4,
      title: "Family SUP Day",
      description: "Perfect introduction to SUP for families with children.",
      date: "2024-03-02",
      time: "10:00 AM",
      location: "Tineretului Park Lake",
      category: "Family",
      difficulty: "All Levels",
      price: "120 RON",
      currentParticipants: 12,
      maxParticipants: 20,
      rating: 4.6,
      reviews: 42,
      featured: false,
    },
    {
      id: 5,
      title: "SUP Racing Workshop",
      description: "Learn racing techniques and improve your speed on the water.",
      date: "2024-03-05",
      time: "09:00 AM",
      location: "Lake Herastrau",
      category: "Training",
      difficulty: "Advanced",
      price: "250 RON",
      currentParticipants: 4,
      maxParticipants: 8,
      rating: 4.8,
      reviews: 16,
      featured: false,
    },
    {
      id: 6,
      title: "Wildlife SUP Tour",
      description: "Explore local wildlife while paddling through scenic waterways.",
      date: "2024-03-10",
      time: "07:30 AM",
      location: "Comana Natural Park",
      category: "Nature",
      difficulty: "Beginner",
      price: "170 RON",
      currentParticipants: 7,
      maxParticipants: 15,
      rating: 4.9,
      reviews: 28,
      featured: true,
    },
  ]

  const categories = ["All", "Adventure", "Wellness", "Family", "Training", "Nature"]
  const difficulties = ["All Levels", "Beginner", "Intermediate", "Advanced"]

  return (
    <>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: "url('/images/events-hero.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container-custom">
          <div className="flex items-center justify-center h-full text-center">
            <div className="text-white max-w-6xl w-full animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-left">
                SUP <span className="text-[#e85a4f] animate-glow">Events</span> & Adventures
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed mx-auto max-w-3xl text-white/90 animate-slide-in-right animation-delay-300">
                Join our guided SUP experiences, workshops, and adventures. From sunrise paddles to yoga sessions,
                discover the perfect event for your skill level.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
                <Link
                  href="#events"
                  className="bg-[#e85a4f] hover:bg-[#d4472f] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center animate-pulse-glow"
                >
                  Browse Events
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center hover:animate-shake"
                >
                  Custom Events
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

      {/* Filters Section */}
      <section className="section-padding bg-white" id="events">
        <div className="container-custom">
          <ScrollAnimatedSection animation="slideUp" className="bg-[#faf2e1] rounded-2xl shadow-lg p-6 mb-12 mx-8">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-[#E8563D] mr-2 animate-float" />
              <h3 className="text-lg font-semibold text-[#111C2F]">Filter Events</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="border border-[#FDDAC0] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#E8563D] focus:border-[#E8563D] bg-[#faf2e1] transition-all duration-300 input-consistent">
                <option>All Categories</option>
                {categories.slice(1).map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
              <select className="border border-[#FDDAC0] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#E8563D] focus:border-[#E8563D] bg-[#faf2e1] transition-all duration-300 input-consistent">
                <option>All Difficulties</option>
                {difficulties.slice(1).map((difficulty) => (
                  <option key={difficulty}>{difficulty}</option>
                ))}
              </select>
              <input
                type="date"
                className="border border-[#FDDAC0] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#E8563D] focus:border-[#E8563D] bg-[#faf2e1] transition-all duration-300 input-consistent"
              />
              <button className="btn-primary">Apply Filters</button>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="section-padding bg-[#faf2e1]">
        <div className="container-custom">
          <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">Featured Events</h2>
          </ScrollAnimatedSection>

          <StaggeredScrollAnimation
            animation="scaleIn"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-equal-height"
          >
            {events
              .filter((event) => event.featured)
              .map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#FDDAC0]/30 transform hover:scale-105 card-equal-height"
                >
                  <div className="relative h-48 flex-shrink-0">
                    <Image src="/placeholder.svg" alt={event.title} fill className="object-cover" />
                    <div className="absolute top-4 right-4 bg-[#e85a4f] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-[#E8563D] font-bold">{event.price}</span>
                    </div>
                  </div>
                  <div className="p-6 card-content">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-[#FDDAC0] text-[#111C2F] px-2 py-1 rounded text-xs font-semibold">
                          {event.category}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">
                            {event.rating} ({event.reviews})
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#111C2F] mb-2 text-title-consistent">{event.title}</h3>
                      <p className="text-[#111C2F]/70 mb-4 text-body-consistent">{event.description}</p>

                      <div className="space-y-2 text-sm text-[#111C2F]/60 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(event.date).toLocaleDateString()} • {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {event.currentParticipants}/{event.maxParticipants} participants
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      <Link href={`/events/${event.id}`} className="flex-1 btn-primary">
                        Book Now
                      </Link>
                      <Link href={`/events/${event.id}`} className="btn-secondary flex-shrink-0">
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </StaggeredScrollAnimation>
        </div>
      </section>

      {/* All Events Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">All Events</h2>
          </ScrollAnimatedSection>

          <StaggeredScrollAnimation
            animation="slideUp"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-equal-height"
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#FDDAC0]/30 transform hover:scale-105 card-equal-height"
              >
                <div className="relative h-48 flex-shrink-0">
                  <Image src="/placeholder.svg" alt={event.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-[#E8563D] font-bold">{event.price}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        event.difficulty === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : event.difficulty === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800"
                            : event.difficulty === "Advanced"
                              ? "bg-red-100 text-red-800"
                              : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {event.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6 card-content">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-[#FDDAC0] text-[#111C2F] px-2 py-1 rounded text-xs font-semibold">
                        {event.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {event.rating} ({event.reviews})
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#111C2F] mb-2 text-title-consistent">{event.title}</h3>
                    <p className="text-[#111C2F]/70 mb-4 text-body-consistent">{event.description}</p>

                    <div className="space-y-2 text-sm text-[#111C2F]/60 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString()} • {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {event.currentParticipants}/{event.maxParticipants} participants
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Link href={`/events/${event.id}`} className="flex-1 btn-primary">
                      Book Now
                    </Link>
                    <Link href={`/events/${event.id}`} className="btn-secondary flex-shrink-0">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#faf2e1]">
        <div className="container-custom">
          <ScrollAnimatedSection animation="scaleIn" className="bg-[#1e2a4a] text-white rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-xl mb-8 text-white/80">
              We offer custom SUP experiences for groups, corporate events, and special occasions.
            </p>
            <Link href="/contact" className="btn-primary">
              Plan Custom Event
            </Link>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}

