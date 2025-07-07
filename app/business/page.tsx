"use client"

import Image from "next/image"
import Link from "next/link"
import { Building2, Users, TrendingUp, Shield, Clock, Award, CheckCircle, Star, Briefcase, Phone, Calendar } from "lucide-react"
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
      icon: <TrendingUp className="w-8 h-8" />,
      title: t("business.benefits.revenue.title"),
      description: t("business.benefits.revenue.description"),
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t("business.benefits.experience.title"),
      description: t("business.benefits.experience.description"),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("business.benefits.insurance.title"),
      description: t("business.benefits.insurance.description"),
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: t("business.benefits.turnkey.title"),
      description: t("business.benefits.turnkey.description"),
    }
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
      title: t("business.packages.starter.title"),
      description: t("business.packages.starter.description"),
      features: ["5-10 SUP boards", "Basic training", "Monthly maintenance", "Customer support"],
      highlight: false,
    },
    {
      title: t("business.packages.professional.title"),
      description: t("business.packages.professional.description"),
      features: ["15-25 SUP boards", "Advanced training", "Weekly maintenance", "Priority support", "Marketing materials"],
      highlight: true,
    },
    {
      title: t("business.packages.enterprise.title"),
      description: t("business.packages.enterprise.description"),
      features: ["50+ SUP boards", "Complete training program", "Daily maintenance", "24/7 support", "Custom branding", "Dedicated account manager"],
      highlight: false,
    }
  ]

  return (
    <>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: "url('/images/business-hero-new.jpg')",
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
                {t("business.hero.title")} <span className="text-[#e85a4f]">pddle</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed mx-auto max-w-3xl text-white/90 animate-slide-in-right animation-delay-300">
                {t("business.hero.subtitle")}
              </p>

              {/* CTA Buttons - Consistent Heights */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
                <button className="btn-primary animate-pulse-glow">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {t("business.hero.exploreSolutions")}
                </button>
                <button className="btn-secondary hover:animate-shake">
                  <Phone className="w-5 h-5 mr-2" />
                  {t("business.hero.getQuote")}
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

      {/* Business Solutions */}
      <section className="section-padding bg-[#faf2e1]" id="solutions">
        <div className="container-custom">
          <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">Business Solutions</h2>
            <p className="text-xl text-[#1e2a4a]/70 max-w-3xl mx-auto">
              Whether you're a hotel, resort, corporate event planner, or business owner, we have the perfect SUP solution
              to enhance your offerings.
            </p>
          </ScrollAnimatedSection>

          <StaggeredScrollAnimation animation="slideUp" className="grid grid-cols-1 lg:grid-cols-3 gap-8 grid-equal-height">
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">Why Partner with pddle?</h2>
          </ScrollAnimatedSection>
          
          <StaggeredScrollAnimation animation="slideUp" className="grid grid-cols-1 md:grid-cols-2 gap-8 card-compact-height">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#faf2e1] rounded-3xl p-8 card-hover transform transition-all duration-500 hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-[#e85a4f] rounded-2xl w-16 h-16 flex items-center justify-center text-white">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e2a4a] mb-3 text-title-consistent">{benefit.title}</h3>
                    <p className="text-[#1e2a4a]/70 leading-relaxed text-body-consistent">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredScrollAnimation>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-[#faf2e1]">
        <div className="container-custom">
          <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">Partnership Packages</h2>
            <p className="text-xl text-[#1e2a4a]/70 max-w-2xl mx-auto">Choose the perfect package that fits your business needs</p>
          </ScrollAnimatedSection>

          <StaggeredScrollAnimation animation="slideUp" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto grid-equal-height">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`${
                  pkg.highlight ? "bg-[#e85a4f] text-white relative transform scale-105 shadow-2xl" : "bg-white"
                } rounded-3xl p-8 card-hover card-equal-height border-2 border-[#faf2e1]/30 transform transition-all duration-500 hover:scale-105 ${
                  index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
                }`}
              >
                <div className="card-content">
                  <div>
                    {pkg.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1e2a4a] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <h3 className={`text-xl font-bold mb-4 text-title-consistent ${pkg.highlight ? "text-white" : "text-[#1e2a4a]"}`}>
                      {pkg.title}
                    </h3>
                    <div className={`text-2xl font-bold mb-6 ${pkg.highlight ? "text-white" : "text-[#e85a4f]"}`}>
                      {pkg.description}
                    </div>
                    <ul className={`space-y-3 text-body-consistent ${pkg.highlight ? "text-white/90" : "text-[#1e2a4a]/70"}`}>
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className={`w-4 h-4 mr-2 ${pkg.highlight ? "text-white" : "text-[#e85a4f]"}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`w-full text-center btn-primary ${pkg.highlight ? "animate-pulse-glow" : ""}`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredScrollAnimation>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">What Our Partners Say</h2>
            <p className="text-xl text-[#1e2a4a]/70 max-w-2xl mx-auto">Success stories from our valued business partners</p>
          </ScrollAnimatedSection>

          <StaggeredScrollAnimation animation="slideUp" className="grid grid-cols-1 md:grid-cols-3 gap-8 grid-equal-height">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#faf2e1] rounded-3xl p-8 card-hover card-equal-height transform transition-all duration-500 hover:scale-105">
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
                    <p className="text-[#1e2a4a]/70 italic mb-4 text-center text-body-consistent">"{testimonial.quote}"</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-[#1e2a4a] text-title-consistent">{testimonial.name}</h4>
                    <p className="text-[#1e2a4a]/60">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1e2a4a] text-white relative overflow-hidden">
        <div className="absolute inset-0 organic-bg animate-pulse-slow"></div>
        <div className="container-custom text-center relative z-10">
          <ScrollAnimatedSection animation="slideUp">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
              Let's discuss how pddle can enhance your business and create new revenue opportunities.
            </p>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="scaleIn" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary animate-pulse-glow hover:animate-shake">
                <Phone className="w-5 h-5 mr-2" />
                {t("business.cta.contact")}
              </button>
              <button className="btn-secondary hover:animate-wiggle">
                <Calendar className="w-5 h-5 mr-2" />
                {t("business.cta.schedule")}
              </button>
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>
    </>
  )
}
