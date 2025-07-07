"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Star, ArrowLeft, Check, Camera, Award, Shield } from "lucide-react"
import { useLanguage } from "../../contexts/LanguageContext"
import ScrollAnimatedSection from "../../components/ScrollAnimatedSection"

export default function EventDetailsPage({ params }: { params: { id: string } }) {
  const { t } = useLanguage()
  const [selectedDate, setSelectedDate] = useState("")
  const [participants, setParticipants] = useState(1)

  // Mock event data - in real app, fetch based on params.id
  const event = {
    id: 1,
    title: "Sunrise SUP Adventure",
    description:
      "Experience the magic of paddleboarding at sunrise with our expert guides. Perfect for beginners and experienced paddlers alike.",
    longDescription:
      "Join us for an unforgettable sunrise SUP adventure that combines the tranquility of early morning waters with the breathtaking beauty of dawn. Our experienced guides will lead you through calm waters as the sun rises, creating perfect conditions for both photography and peaceful paddling. This experience is designed for all skill levels, with basic instruction provided for beginners and advanced techniques shared with experienced paddlers.",
    images: [
      "/placeholder.svg?height=400&width=600&text=Sunrise+SUP+Main",
      "/placeholder.svg?height=400&width=600&text=Sunrise+SUP+2",
      "/placeholder.svg?height=400&width=600&text=Sunrise+SUP+3",
      "/placeholder.svg?height=400&width=600&text=Sunrise+SUP+4",
    ],
    date: "2024-02-15",
    time: "06:00 - 09:00",
    duration: "3 hours",
    location: "Lake Tahoe Marina",
    address: "123 Marina Dr, Lake Tahoe, CA 96150",
    price: 65,
    difficulty: "Beginner",
    maxParticipants: 12,
    currentParticipants: 8,
    rating: 4.9,
    reviews: 24,
    category: "Adventure",
    instructor: {
      name: "Sarah Johnson",
      experience: "8 years",
      certifications: ["SUP Instructor Level 2", "Water Safety Certified"],
      image: "/placeholder.svg?height=100&width=100&text=Sarah",
    },
    included: [
      "Professional SUP board and paddle",
      "Safety equipment (life jacket, whistle)",
      "Basic instruction and safety briefing",
      "Waterproof phone case",
      "Light breakfast and coffee",
      "Professional photos of the experience",
    ],
    requirements: [
      "Basic swimming ability required",
      "Minimum age: 12 years",
      "Weather dependent - may be rescheduled",
      "Arrive 30 minutes before start time",
    ],
    whatToBring: [
      "Swimwear and towel",
      "Sun protection (hat, sunscreen)",
      "Water bottle",
      "Change of clothes",
      "Waterproof camera (optional)",
    ],
    availableDates: ["2024-02-15", "2024-02-17", "2024-02-19", "2024-02-22", "2024-02-24"],
  }

  const reviews = [
    {
      id: 1,
      name: "Mike Chen",
      rating: 5,
      date: "2024-01-20",
      comment:
        "Absolutely incredible experience! Sarah was an amazing guide and the sunrise was breathtaking. Perfect for beginners like me.",
      verified: true,
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      rating: 5,
      date: "2024-01-18",
      comment:
        "This was the highlight of our Lake Tahoe trip. The photos they took were professional quality and the whole experience was magical.",
      verified: true,
    },
    {
      id: 3,
      name: "David Park",
      rating: 4,
      date: "2024-01-15",
      comment:
        "Great experience overall. The equipment was top-notch and the instruction was clear. Would definitely recommend!",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-[#faf2e1]">
      {/* Back Navigation */}
      <div className="container-custom pt-24 pb-8">
        <Link
          href="/events"
          className="inline-flex items-center text-[#e85a4f] hover:text-[#d4472f] transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>
      </div>

      <div className="container-custom pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <ScrollAnimatedSection animation="scaleIn" className="mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Image
                    src={event.images[0] || "/placeholder.svg"}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
                {event.images.slice(1, 4).map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${event.title} ${index + 2}`}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-xl"
                    />
                    {index === 2 && (
                      <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                        <div className="text-white text-center">
                          <Camera className="w-8 h-8 mx-auto mb-2" />
                          <span className="text-sm font-semibold">+5 more photos</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollAnimatedSection>

            {/* Event Details */}
            <ScrollAnimatedSection animation="slideUp">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#FDDAC0] text-[#111C2F] px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-lg font-semibold ml-1">{event.rating}</span>
                    <span className="text-gray-600 ml-1">({event.reviews} reviews)</span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-[#111C2F] mb-4">{event.title}</h1>
                <p className="text-xl text-[#111C2F]/70 mb-6">{event.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-[#faf2e1] rounded-xl">
                    <Calendar className="w-6 h-6 text-[#e85a4f] mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-semibold">{event.duration}</div>
                  </div>
                  <div className="text-center p-4 bg-[#faf2e1] rounded-xl">
                    <Users className="w-6 h-6 text-[#e85a4f] mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Group Size</div>
                    <div className="font-semibold">Max {event.maxParticipants}</div>
                  </div>
                  <div className="text-center p-4 bg-[#faf2e1] rounded-xl">
                    <Award className="w-6 h-6 text-[#e85a4f] mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Difficulty</div>
                    <div className="font-semibold">{event.difficulty}</div>
                  </div>
                  <div className="text-center p-4 bg-[#faf2e1] rounded-xl">
                    <MapPin className="w-6 h-6 text-[#e85a4f] mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Location</div>
                    <div className="font-semibold">{event.location}</div>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-[#111C2F] mb-4">About This Experience</h3>
                  <p className="text-[#111C2F]/70 leading-relaxed">{event.longDescription}</p>
                </div>
              </div>
            </ScrollAnimatedSection>

            {/* What's Included */}
            <ScrollAnimatedSection animation="slideUp">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#111C2F] mb-6">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.included.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-[#111C2F]/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>

            {/* Requirements & What to Bring */}
            <ScrollAnimatedSection animation="slideUp">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-[#111C2F] mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    {event.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <Shield className="w-5 h-5 text-[#e85a4f] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#111C2F]/70">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-[#111C2F] mb-4">What to Bring</h3>
                  <ul className="space-y-3">
                    {event.whatToBring.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-[#e85a4f] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#111C2F]/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimatedSection>

            {/* Instructor */}
            <ScrollAnimatedSection animation="slideUp">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#111C2F] mb-6">Your Instructor</h3>
                <div className="flex items-center space-x-4">
                  <Image
                    src={event.instructor.image || "/placeholder.svg"}
                    alt={event.instructor.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-[#111C2F]">{event.instructor.name}</h4>
                    <p className="text-[#111C2F]/70 mb-2">{event.instructor.experience} of experience</p>
                    <div className="flex flex-wrap gap-2">
                      {event.instructor.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="bg-[#FDDAC0] text-[#111C2F] px-2 py-1 rounded text-xs font-semibold"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>

            {/* Reviews */}
            <ScrollAnimatedSection animation="slideUp">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#111C2F] mb-6">Reviews ({event.reviews})</h3>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <h4 className="font-semibold text-[#111C2F] mr-2">{review.name}</h4>
                          {review.verified && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-[#111C2F]/70 mb-2">{review.comment}</p>
                      <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <ScrollAnimatedSection animation="slideLeft">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-[#e85a4f]">${event.price}</div>
                  <div className="text-gray-600">per person</div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Select Date</label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full input-consistent border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e85a4f] focus:border-[#e85a4f]"
                    >
                      <option value="">Choose a date</option>
                      {event.availableDates.map((date) => (
                        <option key={date} value={date}>
                          {new Date(date).toLocaleDateString()}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Participants</label>
                    <select
                      value={participants}
                      onChange={(e) => setParticipants(Number(e.target.value))}
                      className="w-full input-consistent border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e85a4f] focus:border-[#e85a4f]"
                    >
                      {[...Array(Math.min(6, event.maxParticipants - event.currentParticipants))].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? "person" : "people"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span>Subtotal</span>
                      <span>${event.price * participants}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Service fee</span>
                      <span>${Math.round(event.price * participants * 0.1)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                      <span>Total</span>
                      <span>${event.price * participants + Math.round(event.price * participants * 0.1)}</span>
                    </div>
                  </div>

                  <button type="submit" className="w-full btn-primary" disabled={!selectedDate}>
                    Book Now
                  </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                  <p className="mb-2">Free cancellation up to 24 hours before</p>
                  <p>
                    <span className="text-green-600 font-semibold">
                      {event.maxParticipants - event.currentParticipants} spots left
                    </span>
                  </p>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
