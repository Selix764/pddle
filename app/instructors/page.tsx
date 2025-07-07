"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Award, Users, MapPin, Mail, Phone } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import ScrollAnimatedSection from "../components/ScrollAnimatedSection"
import StaggeredScrollAnimation from "../components/StaggeredScrollAnimation"

export default function InstructorsPage() {
  const { t } = useLanguage()

  const instructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Lead SUP Instructor & Adventure Guide",
      experience: "8 years",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
      rating: 4.9,
      reviews: 156,
      specialties: ["Beginner Instruction", "Sunrise Tours", "SUP Yoga", "Safety Training"],
      certifications: ["SUP Instructor Level 2", "Water Safety Certified", "First Aid/CPR", "Yoga Alliance RYT-200"],
      languages: ["English", "Spanish"],
      bio: "Sarah has been passionate about water sports since childhood. With over 8 years of SUP instruction experience, she specializes in making beginners feel comfortable and confident on the water. Her calm demeanor and expert guidance have helped hundreds of people discover their love for paddleboarding.",
      achievements: [
        "Certified over 500 new SUP enthusiasts",
        "Led 200+ sunrise adventure tours",
        "Featured instructor in SUP Magazine",
        "Zero safety incidents in 8 years",
      ],
      availability: "Mon-Fri: 6AM-6PM, Weekends: 6AM-8PM",
      contact: {
        email: "sarah@pddle.com",
        phone: "+1 (555) 123-4567",
      },
      upcomingEvents: [
        { name: "Sunrise SUP Adventure", date: "2024-02-15", spots: 4 },
        { name: "SUP Yoga Session", date: "2024-02-16", spots: 2 },
        { name: "Beginner SUP Course", date: "2024-02-18", spots: 6 },
      ],
    },
    {
      id: 2,
      name: "Marcus Chen",
      title: "Performance Coach & Racing Specialist",
      experience: "12 years",
      image: "/placeholder.svg?height=300&width=300&text=Marcus+Chen",
      rating: 4.8,
      reviews: 89,
      specialties: ["Racing Technique", "Performance Training", "Advanced Skills", "Competition Prep"],
      certifications: ["SUP Racing Coach Level 3", "Sports Performance Specialist", "Water Safety Instructor"],
      languages: ["English", "Mandarin"],
      bio: "Marcus is a former professional SUP racer turned coach. He brings elite-level training techniques to recreational paddlers and competitive athletes alike. His technical expertise and motivational coaching style help students achieve their personal best.",
      achievements: [
        "Former World SUP Racing Championship finalist",
        "Coached 15 athletes to national competitions",
        "Developed advanced training programs",
        "12 years accident-free instruction",
      ],
      availability: "Tue-Sat: 7AM-7PM, Private sessions available",
      contact: {
        email: "marcus@pddle.com",
        phone: "+1 (555) 123-4568",
      },
      upcomingEvents: [
        { name: "SUP Racing Workshop", date: "2024-02-22", spots: 3 },
        { name: "Advanced Technique Class", date: "2024-02-24", spots: 5 },
        { name: "Competition Prep", date: "2024-02-26", spots: 2 },
      ],
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      title: "Wellness Instructor & Nature Guide",
      experience: "6 years",
      image: "/placeholder.svg?height=300&width=300&text=Emma+Rodriguez",
      rating: 5.0,
      reviews: 124,
      specialties: ["SUP Yoga", "Meditation Sessions", "Wildlife Tours", "Wellness Retreats"],
      certifications: [
        "SUP Yoga Instructor",
        "Certified Yoga Teacher (500hr)",
        "Marine Biology Degree",
        "Wilderness First Aid",
      ],
      languages: ["English", "Spanish", "Portuguese"],
      bio: "Emma combines her love for nature with wellness practices to create transformative SUP experiences. Her background in marine biology adds educational value to wildlife tours, while her yoga expertise brings mindfulness to the water.",
      achievements: [
        "Led 100+ SUP yoga sessions",
        "Organized 25 wellness retreats",
        "Marine conservation advocate",
        "Featured in Yoga Journal magazine",
      ],
      availability: "Wed-Sun: 6AM-8PM, Retreat weekends",
      contact: {
        email: "emma@pddle.com",
        phone: "+1 (555) 123-4569",
      },
      upcomingEvents: [
        { name: "SUP Yoga Session", date: "2024-02-17", spots: 3 },
        { name: "Wildlife SUP Tour", date: "2024-02-19", spots: 4 },
        { name: "Sunset Meditation Paddle", date: "2024-02-21", spots: 6 },
      ],
    },
    {
      id: 4,
      name: "Jake Thompson",
      title: "Family & Youth Instructor",
      experience: "5 years",
      image: "/placeholder.svg?height=300&width=300&text=Jake+Thompson",
      rating: 4.9,
      reviews: 78,
      specialties: ["Family Lessons", "Youth Programs", "Safety Education", "Group Activities"],
      certifications: ["Youth Water Sports Instructor", "Lifeguard Certified", "Child Development Specialist"],
      languages: ["English"],
      bio: "Jake specializes in making SUP accessible and fun for families and young paddlers. His patient teaching style and focus on safety make him the go-to instructor for parents introducing their children to paddleboarding.",
      achievements: [
        "Taught 300+ children to SUP safely",
        "Developed youth safety curriculum",
        "Family program satisfaction: 98%",
        "Youngest certified instructor at 23",
      ],
      availability: "Weekends & School holidays: 8AM-6PM",
      contact: {
        email: "jake@pddle.com",
        phone: "+1 (555) 123-4570",
      },
      upcomingEvents: [
        { name: "Family SUP Day", date: "2024-02-18", spots: 8 },
        { name: "Kids SUP Camp", date: "2024-02-20", spots: 12 },
        { name: "Teen Adventure Group", date: "2024-02-23", spots: 6 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#faf2e1]">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=SUP+Instructors+Hero')",
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container-custom">
          <div className="flex items-center justify-center h-full text-center">
            <div className="text-white max-w-6xl w-full animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-left">
                Meet Our <span className="text-[#e85a4f] animate-glow">Expert</span> Instructors
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed mx-auto max-w-3xl text-white/90 animate-slide-in-right animation-delay-300">
                Learn from certified professionals who are passionate about sharing their love for paddleboarding. Each
                instructor brings unique expertise and years of experience to help you master the water.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
                <Link
                  href="#instructors"
                  className="bg-[#e85a4f] hover:bg-[#d4472f] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center animate-pulse-glow"
                >
                  Meet the Team
                </Link>
                <Link
                  href="/events"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center hover:animate-shake"
                >
                  Book a Lesson
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

      {/* Instructors Content */}
      <div className="container-custom py-12 scroll-mt-24" id="instructors">
        {/* Introduction */}
        <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">Our Instructor Team</h2>
          <p className="text-xl text-[#1e2a4a]/70 max-w-3xl mx-auto">
            Every pddle instructor is certified, experienced, and passionate about creating safe, fun, and educational
            SUP experiences. From beginners to advanced paddlers, we have the right instructor for your journey.
          </p>
        </ScrollAnimatedSection>

        {/* Instructors Grid */}
        <StaggeredScrollAnimation animation="slideUp" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#FDDAC0]/30"
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#111C2F] mb-1">{instructor.name}</h3>
                      <p className="text-[#e85a4f] font-semibold">{instructor.title}</p>
                      <p className="text-gray-600">{instructor.experience} of experience</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-semibold ml-1">{instructor.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600">({instructor.reviews} reviews)</p>
                    </div>
                  </div>

                  <p className="text-[#111C2F]/70 mb-4 leading-relaxed">{instructor.bio}</p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#111C2F] mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, index) => (
                        <span key={index} className="bg-[#FDDAC0] text-[#111C2F] px-2 py-1 rounded text-sm font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#111C2F] mb-2">Languages</h4>
                    <p className="text-[#111C2F]/70">{instructor.languages.join(", ")}</p>
                  </div>

                  {/* Contact & Availability */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-[#111C2F] mb-2">Contact</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-[#e85a4f] mr-2" />
                          <a href={`mailto:${instructor.contact.email}`} className="text-[#e85a4f] hover:underline">
                            {instructor.contact.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-[#e85a4f] mr-2" />
                          <a href={`tel:${instructor.contact.phone}`} className="text-[#e85a4f] hover:underline">
                            {instructor.contact.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#111C2F] mb-2">Availability</h4>
                      <p className="text-sm text-[#111C2F]/70">{instructor.availability}</p>
                    </div>
                  </div>

                  {/* Upcoming Events */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#111C2F] mb-2">Upcoming Events</h4>
                    <div className="space-y-2">
                      {instructor.upcomingEvents.slice(0, 2).map((event, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-[#111C2F]/70">{event.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500">{new Date(event.date).toLocaleDateString()}</span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                              {event.spots} spots left
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/instructors/${instructor.id}`} className="flex-1 btn-primary text-center">
                      View Profile
                    </Link>
                    <Link href="/events" className="btn-secondary flex-shrink-0">
                      Book Lesson
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StaggeredScrollAnimation>

        {/* Why Choose Our Instructors */}
        <ScrollAnimatedSection animation="slideUp" className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h3 className="text-3xl font-bold text-[#1e2a4a] text-center mb-8">Why Choose Our Instructors?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#e85a4f] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#111C2F] mb-2">Certified Professionals</h4>
              <p className="text-[#111C2F]/70">
                All instructors hold current certifications and undergo regular training updates.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#e85a4f] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#111C2F] mb-2">Personalized Approach</h4>
              <p className="text-[#111C2F]/70">
                Each instructor adapts their teaching style to match your learning pace and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#e85a4f] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#111C2F] mb-2">Proven Track Record</h4>
              <p className="text-[#111C2F]/70">
                High ratings and positive reviews from hundreds of satisfied students.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#e85a4f] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#111C2F] mb-2">Local Expertise</h4>
              <p className="text-[#111C2F]/70">
                Deep knowledge of local waters, conditions, and the best spots for every skill level.
              </p>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* CTA Section */}
        <ScrollAnimatedSection animation="scaleIn" className="bg-[#1e2a4a] text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your SUP Journey?</h3>
          <p className="text-xl mb-8 text-white/80">
            Book a lesson with one of our expert instructors and discover the joy of paddleboarding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events" className="btn-primary">
              Browse Lessons
            </Link>
            <Link href="/contact" className="btn-secondary">
              Ask Questions
            </Link>
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  )
}
