"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Users, Star, Filter } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import ScrollAnimatedSection from "../components/ScrollAnimatedSection"
import StaggeredScrollAnimation from "../components/StaggeredScrollAnimation"

export default function EventsPage() {
  const { t } = useLanguage()

  const events = [
    {
      id: 1,
      title: "Sunrise SUP Adventure",
      description:
        "Experience the magic of paddleboarding at sunrise with our expert guides. Perfect for beginners and experienced paddlers alike.",
      image: "/placeholder.svg?height=300&width=400&text=Sunrise+SUP+Adventure",
      date: "2024-02-15",
      time: "06:00 - 09:00",
      location: "Lake Tahoe Marina",
      price: "$65",
      difficulty: "Beginner",
      maxParticipants: 12,
      currentParticipants: 8,
      rating: 4.9,
      reviews: 24,
      category: "Adventure",
      featured: true,
    },
    {
      id: 2,
      title: "SUP Yoga Session",
      description:
        "Find your balance on water with our peaceful SUP yoga classes. Connect with nature while strengthening your core.",
      image: "/placeholder.svg?height=300&width=400&text=SUP+Yoga+Session",
      date: "2024-02-16",
      time: "08:00 - 10:00",
      location: "Mission Bay",
      price: "$45",
      difficulty: "All Levels",
      maxParticipants: 8,
      currentParticipants: 6,
      rating: 4.8,
      reviews: 18,
      category: "Wellness",
      featured: false,
    },
    {
      id: 3,
      title: "Full Moon Night Paddle",
      description:
        "Paddle under the stars in this magical nighttime SUP experience. LED boards and safety equipment provided.",
      image: "/placeholder.svg?height=300&width=400&text=Full+Moon+Night+Paddle",
      date: "2024-02-20",
      time: "19:00 - 21:30",
      location: "Santa Monica Pier",
      price: "$85",
      difficulty: "Intermediate",
      maxParticipants: 10,
      currentParticipants: 3,
      rating: 5.0,
      reviews: 12,
      category: "Adventure",
      featured: true,
    },
    {
      id: 4,
      title: "Family SUP Day",
      description:
        "Perfect introduction to SUP for families. Kid-friendly boards and shallow water location ensure everyone has fun safely.",
      image: "/placeholder.svg?height=300&width=400&text=Family+SUP+Day",
      date: "2024-02-18",
      time: "10:00 - 13:00",
      location: "Calm Bay Marina",
      price: "$35",
      difficulty: "Beginner",
      maxParticipants: 16,
      currentParticipants: 12,
      rating: 4.7,
      reviews: 31,
      category: "Family",
      featured: false,
    },
    {
      id: 5,
      title: "SUP Racing Workshop",
      description:
        "Learn racing techniques from professional SUP athletes. Improve your speed, technique, and competitive edge.",
      image: "/placeholder.svg?height=300&width=400&text=SUP+Racing+Workshop",
      date: "2024-02-22",
      time: "14:00 - 17:00",
      location: "Golden Gate Marina",
      price: "$95",
      difficulty: "Advanced",
      maxParticipants: 6,
      currentParticipants: 4,
      rating: 4.9,
      reviews: 8,
      category: "Training",
      featured: false,
    },
    {
      id: 6,
      title: "Wildlife SUP Tour",
      description:
        "Explore marine wildlife while paddleboarding. Guided tour with marine biologist and underwater viewing opportunities.",
      image: "/placeholder.svg?height=300&width=400&text=Wildlife+SUP+Tour",
      date: "2024-02-25",
      time: "09:00 - 12:00",
      location: "Monterey Bay",
      price: "$75",
      difficulty: "Intermediate",
      maxParticipants: 8,
      currentParticipants: 5,
      rating: 4.8,
      reviews: 15,
      category: "Nature",
      featured: true,
    },
  ]

  const categories = ["All", "Adventure", "Wellness", "Family", "Training", "Nature"]
  const difficulties = ["All Levels", "Beginner", "Intermediate", "Advanced"]

  return (
    <div className="min-h-screen bg-[#faf2e1]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=SUP+Events+Hero')",
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

      {/* Events Content */}
      <div className="container-custom py-12 scroll-mt-24" id="events">
        {/* Filters */}
        <ScrollAnimatedSection animation="slideUp" className="bg-white rounded-2xl shadow-lg p-6 mb-12">
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

        {/* Featured Events */}
        <ScrollAnimatedSection animation="slideUp" className="mb-16">
          <h2 className="text-4xl font-bold font-serif mb-8 text-[#1e2a4a] text-center">Featured Events</h2>
          <StaggeredScrollAnimation
            animation="scaleIn"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events
              .filter((event) => event.featured)
              .map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#FDDAC0]/30 transform hover:scale-105 card-equal-height"
                >
                  <div className="relative h-48 flex-shrink-0">
                    <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
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
        </ScrollAnimatedSection>

        {/* All Events */}
        <ScrollAnimatedSection animation="slideUp" className="mb-16">
          <h2 className="text-4xl font-bold font-serif mb-8 text-[#1e2a4a] text-center">All Events</h2>
          <StaggeredScrollAnimation
            animation="slideUp"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#FDDAC0]/30 transform hover:scale-105 card-equal-height"
              >
                <div className="relative h-48 flex-shrink-0">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
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
        </ScrollAnimatedSection>

        {/* CTA Section */}
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
    </div>
  )
}
