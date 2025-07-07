"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, MapPin, Download, Phone, Globe, User, Briefcase, Calendar } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navigation = [
    { name: t("header.locations"), href: "/locations", icon: <MapPin className="w-5 h-5" /> },
    { name: "Events", href: "/events", icon: <Calendar className="w-5 h-5" /> },
    { name: t("header.about"), href: "/about", icon: <User className="w-5 h-5" /> },
    { name: t("header.business"), href: "/business", icon: <Briefcase className="w-5 h-5" /> },
    { name: t("header.contact"), href: "/contact", icon: <Phone className="w-5 h-5" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
      
      // Close mobile menu on scroll
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])

  const toggleLanguage = () => {
    setLanguage(language === "RO" ? "EN" : "RO")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#faf2e1]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Left side - Logo and Language Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className={`transition-all duration-300 px-4 py-2 rounded-full transform hover:scale-105 flex items-center justify-center ${
                isScrolled ? "bg-white shadow-lg hover:shadow-xl" : "bg-[#faf2e1] shadow-sm hover:shadow-md"
              }`}
              title="pddle Home"
            >
              <Image
                src="/images/pddle-logo.svg"
                alt="pddle"
                width={80}
                height={28}
                className="object-contain"
                priority
              />
            </Link>

            {/* Language Toggle Button - Desktop and Mobile */}
            <button
              onClick={toggleLanguage}
              className={`text-[#1e2a4a] hover:text-[#e85a4f] transition-all duration-300 font-medium p-3 rounded-full transform hover:scale-105 flex items-center justify-center ${
                isScrolled ? "bg-white shadow-lg hover:shadow-xl" : "bg-[#faf2e1] shadow-sm hover:shadow-md"
              }`}
              style={{ width: "3.5rem", height: "3.5rem" }}
              title={`${t("header.switchTo")} ${language === "RO" ? t("header.english") : t("header.romanian")}`}
            >
              <Globe className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Navigation - Centered - Text Based */}
          <div className="hidden lg:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[#1e2a4a] hover:text-[#e85a4f] transition-all duration-300 font-semibold text-base px-3 py-2 rounded-full transform hover:scale-105 whitespace-nowrap ${
                  isScrolled ? "bg-white shadow-lg hover:shadow-xl" : "bg-[#faf2e1] shadow-sm hover:shadow-md"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Text Based */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/locations"
              className={`text-[#e85a4f] hover:text-[#d4472f] transition-all duration-300 font-semibold px-4 py-2 rounded-full transform hover:scale-105 border-2 border-[#e85a4f] hover:border-[#d4472f] ${
                isScrolled ? "bg-white shadow-lg hover:shadow-xl" : "bg-[#faf2e1] shadow-sm hover:shadow-md"
              }`}
            >
              Find Lockers
            </Link>
            <button className={`text-white bg-[#e85a4f] hover:bg-[#d4472f] transition-all duration-300 font-semibold px-6 py-2 rounded-full transform hover:scale-105 border border-[#e85a4f] hover:border-[#d4472f] ${
              isScrolled ? "shadow-lg hover:shadow-xl" : "shadow-sm hover:shadow-md"
            }`}>
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden text-[#1e2a4a] p-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
              isScrolled ? "bg-white shadow-lg hover:shadow-xl" : "bg-[#faf2e1] shadow-sm hover:shadow-md"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Partial Upper Screen Overlay */}
        {isMenuOpen && (
          <>
            {/* Background overlay for the full screen to capture clicks */}
            <div 
              className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel - Upper portion only */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-[70vh] bg-white/95 backdrop-blur-md shadow-2xl">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#faf2e1]/90 to-white/95 rounded-b-3xl" />
              
              {/* Menu Content */}
              <div className="relative z-10 flex flex-col h-full justify-center px-8 py-8">
                {/* Navigation Links - Compact for upper screen */}
                <div className="space-y-3 mb-8">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-4 p-3 rounded-2xl transition-all duration-500 hover:scale-105 bg-white/80 hover:bg-white shadow-lg hover:shadow-xl animate-slide-in-left"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-[#1e2a4a] text-xl">{item.icon}</span>
                      <span className="font-bold text-lg text-[#1e2a4a]">{item.name}</span>
                    </Link>
                  ))}
                </div>
                
                {/* Mobile CTA Buttons - Compact */}
                <div className="space-y-3">
                  <Link
                    href="/locations"
                    className="w-full flex items-center justify-center space-x-3 py-3 px-6 rounded-2xl font-bold text-base transition-all duration-500 border-2 border-[#e85a4f] text-[#e85a4f] hover:text-white hover:bg-[#e85a4f] bg-white/80 hover:bg-[#e85a4f] shadow-lg hover:shadow-xl animate-slide-in-up"
                    style={{ animationDelay: '500ms' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MapPin className="w-5 h-5" />
                    <span>{t("header.findLocker")}</span>
                  </Link>
                  <button
                    className="w-full flex items-center justify-center space-x-3 py-3 px-6 rounded-2xl font-bold text-base transition-all duration-500 text-white bg-[#e85a4f] hover:bg-[#d4472f] shadow-lg hover:shadow-xl animate-slide-in-up"
                    style={{ animationDelay: '600ms' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Download className="w-5 h-5" />
                    <span>{t("header.downloadApp")}</span>
                  </button>
                </div>

                {/* Close hint */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                  <p className="text-[#1e2a4a]/60 text-sm animate-pulse">Scroll or tap to close</p>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>


    </header>
  )
}
