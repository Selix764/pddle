"use client"

import Image from "next/image"
import Link from "next/link"
import { Building2, Users, TrendingUp, Shield, Clock, Award, CheckCircle, Star } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import ScrollAnimatedSection from "../components/ScrollAnimatedSection"
import StaggeredScrollAnimation from "../components/StaggeredScrollAnimation"

export default function BusinessPage() {
  const { t } = useLanguage()

  const businessSolutions = [
    {
      title: "Corporate Team Building",
      description: "Strengthen team bonds with guided SUP adventures designed for corporate groups.",
      icon: <Users className="w-8 h-8" />,
      features: ["Customized group activities", "Professional facilitation", "Team challenges", "Catering options"],
      pricing: "Starting at $45/person",
      image: "/placeholder.svg?height=300&width=400&text=Corporate+Team+Building",
    },
    {
      title: "Hotel & Resort Partnerships",
      description: "Enhance your guest experience with premium SUP rental services and guided tours.",
      icon: <Building2 className="w-8 h-8" />,
      features: ["Guest activity programs", "Equipment management", "Certified instructors", "Liability coverage"],
      pricing: "Custom partnership rates",
      image: "/placeholder.svg?height=300&width=400&text=Hotel+Resort+Partnership",
    },
    {
      title: "Event & Wedding Services",
      description: "Create unforgettable memories with SUP experiences for special occasions.",
      icon: <Award className="w-8 h-8" />,
      features: ["Bachelor/bachelorette parties", "Wedding activities", "Private group events", "Photography services"],
      pricing: "Starting at $65/person",
      image: "/placeholder.svg?height=300&width=400&text=Event+Wedding+Services",
    },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12 text-[#e85a4f]" />,
      title: "Increase Revenue",
      description:
        "Add a new revenue stream with minimal investment. Our partnership model ensures profitability from day one.",
    },
    {
      icon: <Users className="w-12 h-12 text-[#e85a4f]" />,
      title: "Enhance Guest Experience",
      description:
        "Offer unique water activities that differentiate your business and create lasting memories for customers.",
    },
    {
      icon: <Shield className="w-12 h-12 text-[#e85a4f]" />,
      title: "Full Insurance Coverage",
      description:
        "Comprehensive liability insurance and safety protocols protect your business and give peace of mind.",
    },
    {
      icon: <Clock className="w-12 h-12 text-[#e85a4f]" />,
      title: "Turnkey Solution",
      description: "We handle equipment, maintenance, instruction, and booking. You focus on your core business.",
    },
  ]

  const testimonials = [
    {
      name: "Marina Bay Resort",
      location: "Lake Tahoe, CA",
      quote:
        "Partnering with pddle has been incredible for our guest satisfaction. The SUP program is now one of our most requested amenities.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100&text=Marina+Bay",
    },
    {
      name: "TechCorp Solutions",
      location: "San Francisco, CA",
      quote:
        "Our team building event was amazing! The instructors were professional and the experience brought our team closer together.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100&text=TechCorp",
    },
    {
      name: "Sunset Beach Hotel",
      location: "Santa Monica, CA",
      quote:
        "The pddle team made implementation seamless. Our guests love the SUP tours and it's become a signature experience.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100&text=Sunset+Beach",
    },
  ]

  const packages = [
    {
      name: "Starter Package",
      price: "Custom Pricing",
      description: "Perfect for small businesses and hotels",
      features: [
        "5-10 SUP boards and equipment",
        "Basic safety training",
        "Insurance coverage",
        "Booking system access",
        "Monthly maintenance",
      ],
      popular: false,
    },
    {
      name: "Professional Package",
      price: "Custom Pricing",
      description: "Ideal for resorts and larger operations",
      features: [
        "15-25 SUP boards and equipment",
        "Certified instructor on-site",
        "Full insurance coverage",
        "Advanced booking system",
        "Weekly maintenance",
        "Marketing support",
      ],
      popular: true,
    },
    {
      name: "Enterprise Package",
      price: "Custom Pricing",
      description: "Complete solution for large resorts",
      features: [
        "30+ SUP boards and equipment",
        "Multiple certified instructors",
        "Comprehensive insurance",
        "Custom booking platform",
        "Daily maintenance",
        "Full marketing package",
        "24/7 support",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#faf2e1]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=Business+Partnership+Hero')",
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container-custom">
          <div className="flex items-center justify-center h-full text-center">
            <div className="text-white max-w-6xl w-full animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-left">
                Partner with <span className="text-[#e85a4f] animate-glow">pddle</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed mx-auto max-w-3xl text-white/90 animate-slide-in-right animation-delay-300">
                Transform your business with premium SUP experiences. From corporate team building to resort
                partnerships, we provide turnkey solutions that drive revenue and delight customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
                <Link
                  href="#solutions"
                  className="btn-primary animate-pulse-glow"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary hover:animate-shake"
                >
                  Get Quote
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

      {/* Business Solutions */}
      <div className="container-custom py-12 scroll-mt-24" id="solutions">
        <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">Business Solutions</h2>
          <p className="text-xl text-[#1e2a4a]/70 max-w-3xl mx-auto">
            Whether you're a hotel, resort, corporate event planner, or business owner, we have the perfect SUP solution
            to enhance your offerings.
          </p>
        </ScrollAnimatedSection>

        <StaggeredScrollAnimation animation="slideUp" className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {businessSolutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#FDDAC0]/30 transform hover:scale-105 card-equal-height"
            >
              <div className="relative h-48 flex-shrink-0">
                <Image src={solution.image || "/placeholder.svg"} alt={solution.title} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-[#E8563D] font-bold">{solution.pricing}</span>
                </div>
              </div>
              <div className="p-8 card-content">
                <div>
                  <div className="bg-[#e85a4f] rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#111C2F] mb-4 text-center text-title-consistent">
                    {solution.title}
                  </h3>
                  <p className="text-[#111C2F]/70 mb-6 text-center text-body-consistent">{solution.description}</p>

                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-[#111C2F]/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="w-full btn-primary text-center mt-auto">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </StaggeredScrollAnimation>

        {/* Benefits */}
        <ScrollAnimatedSection animation="slideUp" className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h3 className="text-3xl font-bold text-[#1e2a4a] text-center mb-12">Why Partner with pddle?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-[#111C2F] mb-2">{benefit.title}</h4>
                  <p className="text-[#111C2F]/70 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* Packages */}
        <ScrollAnimatedSection animation="slideUp" className="mb-16">
          <h3 className="text-3xl font-bold text-[#1e2a4a] text-center mb-12">Partnership Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 hover:scale-105 card-equal-height ${
                  pkg.popular ? "border-[#e85a4f] relative" : "border-[#FDDAC0]/30"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#e85a4f] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="card-content">
                  <div>
                    <h4 className="text-2xl font-bold text-[#111C2F] mb-2 text-title-consistent">{pkg.name}</h4>
                    <div className="text-3xl font-bold text-[#e85a4f] mb-2">{pkg.price}</div>
                    <p className="text-[#111C2F]/70 mb-6 text-body-consistent">{pkg.description}</p>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-[#111C2F]/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full text-center btn-primary ${pkg.popular ? "animate-pulse-glow" : ""}`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* Testimonials */}
        <ScrollAnimatedSection animation="slideUp" className="mb-16">
          <h3 className="text-3xl font-bold text-[#1e2a4a] text-center mb-12">What Our Partners Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center card-equal-height">
                <div className="card-content">
                  <div>
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto mb-4"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-[#111C2F]/70 italic mb-4 text-body-consistent">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111C2F]">{testimonial.name}</h4>
                    <p className="text-[#111C2F]/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* CTA Section */}
        <ScrollAnimatedSection animation="scaleIn" className="bg-[#1e2a4a] text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-xl mb-8 text-white/80">
            Let's discuss how pddle can enhance your business and create new revenue opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link href="tel:+15551237335" className="btn-secondary">
              Call Now
            </Link>
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  )
}
