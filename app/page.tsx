"use client"

import Link from "next/link"
import { MapPin, Unlock, Waves, Shield, Clock, Smartphone, CheckCircle, ArrowRight, Compass, QrCode, Activity, Anchor, Zap, Route } from "lucide-react"
import { useLanguage } from "./contexts/LanguageContext"
import ScrollAnimatedSection from "./components/ScrollAnimatedSection"
import StaggeredScrollAnimation from "./components/StaggeredScrollAnimation"

export default function HomePage() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: <Compass className="w-8 h-8 text-white animate-spin-slow" />,
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
    },
    {
      icon: <QrCode className="w-8 h-8 text-white animate-pulse" />,
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.description"),
    },
    {
      icon: <Activity className="w-8 h-8 text-white animate-bounce" />,
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
    },
  ]

  const benefits = [
    {
      title: t("benefits.quickRentals.title"),
      subtitle: t("benefits.quickRentals.subtitle"),
      description: t("benefits.quickRentals.description"),
      bgColor: "bg-[#1e2a4a]",
      textColor: "text-white",
    },
    {
      title: t("benefits.onDemand.title"),
      subtitle: t("benefits.onDemand.subtitle"),
      description: t("benefits.onDemand.description"),
      bgColor: "bg-[#1e2a4a]",
      textColor: "text-white",
    },
    {
      title: t("benefits.liveYourMoment.title"),
      subtitle: t("benefits.liveYourMoment.subtitle"),
      description: t("benefits.liveYourMoment.description"),
      bgColor: "bg-[#1e2a4a]",
      textColor: "text-white",
    },
  ]

  const pricingCards = [
    {
      title: t("pricing.hourly"),
      price: t("pricing.hourly.price"),
      period: t("pricing.hourly.period"),
      features: [
        t("pricing.features.premiumBoard"),
        t("pricing.features.safetyEquipment"),
        t("pricing.features.access247"),
      ],
      isPopular: false,
    },
    {
      title: t("pricing.halfDay"),
      price: t("pricing.halfDay.price"),
      period: t("pricing.halfDay.period"),
      features: [
        t("pricing.features.premiumBoard"),
        t("pricing.features.safetyEquipment"),
        t("pricing.features.access247"),
        t("pricing.features.save20"),
      ],
      isPopular: true,
    },
    {
      title: t("pricing.fullDay"),
      price: t("pricing.fullDay.price"),
      period: t("pricing.fullDay.period"),
      features: [
        t("pricing.features.premiumBoard"),
        t("pricing.features.safetyEquipment"),
        t("pricing.features.access247"),
        t("pricing.features.save80"),
      ],
      isPopular: false,
    },
  ]

  return (
    <>
      {/* Hero Section - Urban Paddleboarding - Full Screen */}
      <section className="relative h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: "url('/images/hero-paddleboard.jpg')",
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
                {t("hero.title")}
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed mx-auto max-w-3xl text-white/90 animate-slide-in-right animation-delay-300">
                {t("hero.subtitle")}
              </p>

              {/* CTA Buttons - Consistent Heights */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
                <Link
                  href="/locations"
                  className="btn-primary animate-pulse-glow"
                >
                  {t("hero.findLocker")}
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary hover:animate-shake"
                >
                  {t("hero.contactUs")}
                </Link>
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

      {/* How It Works */}
      <section className="section-padding bg-[#faf2e1]">
        <div className="container-custom">
          <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">{t("howItWorks.title")}</h2>
            <p className="text-xl text-[#1e2a4a]/70 max-w-3xl mx-auto">{t("howItWorks.subtitle")}</p>
          </ScrollAnimatedSection>

          <StaggeredScrollAnimation animation="slideUp" className="grid grid-cols-1 md:grid-cols-3 gap-8 grid-equal-height">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="card-equal-height bg-[#faf2e1] rounded-3xl p-8 mb-6 card-hover transform transition-all duration-500 hover:rotate-1 hover:shadow-2xl">
                  <div className="card-content">
                    <div className="flex flex-col items-center">
                      <div className="bg-[#e85a4f] rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 animate-float">
                        {step.icon}
                      </div>
                      <div className="bg-[#1e2a4a] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <h3 className="text-xl font-bold mb-3 text-[#1e2a4a] group-hover:animate-wiggle text-title-consistent">{step.title}</h3>
                      <p className="text-[#1e2a4a]/70 leading-relaxed transform transition-all duration-300 group-hover:scale-105 text-body-consistent">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredScrollAnimation>
        </div>
      </section>

      {/* Benefits Cards Section */}
      <section className="section-padding bg-[#faf2e1]">
        <div className="container-custom">
          <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">{t("benefits.title")}</h2>
            <p className="text-xl text-[#1e2a4a]/70 max-w-3xl mx-auto">{t("benefits.subtitle")}</p>
          </ScrollAnimatedSection>

          <StaggeredScrollAnimation animation="scaleIn" className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-equal-height">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.bgColor} rounded-3xl p-6 relative overflow-hidden card-hover card-compact-height fade-in transform transition-all duration-500 hover:scale-105 hover:-rotate-1`}
              >
                <div className="card-content">
                  <div className="flex items-center justify-between h-full">
                    <div className="flex-1">
                      <div className="text-[#e85a4f] text-lg font-semibold mb-1 text-title-consistent">{benefit.title}</div>
                      <div className={`${benefit.textColor} text-2xl font-bold mb-3 text-title-consistent`}>{benefit.subtitle}</div>
                      <p className={`${benefit.textColor}/80 text-sm leading-relaxed text-body-consistent`}>{benefit.description}</p>
                    </div>
                    <div className="ml-4">
                      <div className="w-20 h-20 bg-[#e85a4f] rounded-2xl flex items-center justify-center animate-float">
                        <Waves className="w-10 h-10 text-white animate-wave" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full animate-ping animation-delay-2000"></div>
                <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full animate-pulse animation-delay-3000"></div>
              </div>
            ))}
          </StaggeredScrollAnimation>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-[#faf2e1]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch grid-equal-height">
            <ScrollAnimatedSection animation="slideLeft">
              <div className="card-equal-height bg-[#e85a4f] rounded-3xl p-12 relative overflow-hidden organic-bg transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                <div className="card-content">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1e2a4a] mb-6 text-title-consistent">{t("location.title")}</h2>
                    <p className="text-white text-xl mb-8 text-body-consistent">{t("location.subtitle")}</p>
                  </div>
                  <div className="bg-[#1e2a4a] rounded-2xl p-4 inline-flex items-center">
                    <MapPin className="w-8 h-8 text-white animate-pulse" />
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection animation="slideRight">
              <div className="card-equal-height bg-[#1e2a4a] rounded-3xl p-12 relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
                <div className="card-content">
                  <div>
                    <div className="text-[#e85a4f] text-lg font-semibold mb-2 text-title-consistent">{t("location.expanding.title")}</div>
                    <div className="text-white text-3xl font-bold mb-6 text-title-consistent">{t("location.expanding.subtitle")}</div>
                    <p className="text-white/80 mb-8 leading-relaxed text-body-consistent">{t("location.expanding.description")}</p>
                  </div>
                  <Link
                    href="/locations"
                    className="btn-primary inline-flex items-center animate-pulse-glow hover:animate-shake"
                  >
                    {t("location.viewAll")}
                    <ArrowRight className="w-5 h-5 ml-2 animate-bounce-horizontal" />
                  </Link>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-[#faf2e1]">
        <div className="container-custom">
          <ScrollAnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#1e2a4a]">{t("pricing.title")}</h2>
            <p className="text-xl text-[#1e2a4a]/70 max-w-2xl mx-auto">{t("pricing.subtitle")}</p>
          </ScrollAnimatedSection>

          <StaggeredScrollAnimation
            animation="slideUp"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto grid-equal-height"
          >
            {pricingCards.map((card, index) => (
              <div
                key={index}
                className={`${
                  card.isPopular ? "bg-[#e85a4f] text-white relative transform scale-105 shadow-2xl" : "bg-white"
                } rounded-3xl p-8 card-hover card-equal-height border-2 border-[#faf2e1]/30 transform transition-all duration-500 hover:scale-105 ${
                  index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
                }`}
              >
                <div className="card-content">
                  <div>
                    {card.isPopular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1e2a4a] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {t("pricing.mostPopular")}
                      </div>
                    )}
                    <h3 className={`text-xl font-bold mb-4 text-title-consistent ${card.isPopular ? "text-white" : "text-[#1e2a4a]"}`}>
                      {card.title}
                    </h3>
                    <div className={`text-4xl font-bold mb-2 ${card.isPopular ? "text-white" : "text-[#e85a4f]"}`}>
                      {card.price}
                    </div>
                    <div className={`mb-6 ${card.isPopular ? "text-white/80" : "text-[#1e2a4a]/60"}`}>{card.period}</div>
                    <ul className={`space-y-3 text-body-consistent ${card.isPopular ? "text-white/90" : "text-[#1e2a4a]/70"}`}>
                      {card.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className={`w-4 h-4 mr-2 ${card.isPopular ? "text-white" : "text-[#e85a4f]"}`} />
                          {feature.includes("Save") ? <strong>{feature}</strong> : feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredScrollAnimation>

          <ScrollAnimatedSection animation="scaleIn" delay={600} className="text-center mt-12">
            <Link href="/locations" className="btn-primary animate-pulse-glow hover:animate-shake">
              {t("pricing.startAdventure")}
            </Link>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1e2a4a] text-white relative overflow-hidden">
        <div className="absolute inset-0 organic-bg animate-pulse-slow"></div>
        <div className="container-custom text-center relative z-10">
          <ScrollAnimatedSection animation="slideUp">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">{t("cta.title")}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">{t("cta.subtitle")}</p>
          </ScrollAnimatedSection>

          <ScrollAnimatedSection animation="scaleIn" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/locations" className="btn-primary animate-pulse-glow hover:animate-shake">
                {t("cta.findLocker")}
              </Link>
              <Link href="#" className="btn-secondary hover:animate-wiggle">
                {t("cta.downloadApp")}
              </Link>
            </div>
          </ScrollAnimatedSection>

          <StaggeredScrollAnimation
            animation="fadeIn"
            className="flex items-center justify-center gap-8 text-sm text-white/60"
          >
            <div className="flex items-center animate-float">
              <Smartphone className="w-4 h-4 mr-2 animate-bounce-gentle" />
              {t("cta.ios")}
            </div>
            <div className="flex items-center animate-float">
              <Shield className="w-4 h-4 mr-2 animate-pulse" />
              {t("cta.secure")}
            </div>
            <div className="flex items-center animate-float">
              <Clock className="w-4 h-4 mr-2 animate-spin-slow" />
              {t("cta.support")}
            </div>
          </StaggeredScrollAnimation>
        </div>
      </section>
    </>
  )
}
