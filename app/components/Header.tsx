"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, MapPin, Download, Phone, Globe, Home, User, Briefcase, Mail } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navigation = [
    { name: t("header.locations"), href: "/locations", icon: <MapPin className="w-5 h-5" /> },
    { name: t("header.contact"), href: "/contact", icon: <Phone className="w-5 h-5" /> },
    { name: t("header.about"), href: "/about", icon: <User className="w-5 h-5" /> },
    { name: t("header.business"), href: "/business", icon: <Briefcase className="w-5 h-5" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
              className={`text-[#1e2a4a] hover:text-[#e85a4f] transition-all duration-300 font-medium p-3 rounded-full transform hover:scale-105 flex items-center justify-center ${
                isScrolled ? "bg-white shadow-lg hover:shadow-xl" : "bg-[#faf2e1] shadow-sm hover:shadow-md"
              }`}
              style={{ width: "3.5rem", height: "3.5rem" }}
              title="pddle Home"
            >
              <Home className="w-5 h-5" />
            </Link>

            {/* Language Toggle Button - Icon Only */}
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

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[#1e2a4a] hover:text-[#e85a4f] transition-all duration-300 font-medium p-3 rounded-full transform hover:scale-105 flex items-center justify-center ${
                  isScrolled ? "bg-white shadow-lg hover:shadow-xl" : "bg-[#faf2e1] shadow-sm hover:shadow-md"
                }`}
                style={{ width: "3.5rem", height: "3.5rem" }}
                title={item.name}
              >
                {item.icon}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Icon Only */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/locations"
              className={`text-[#e85a4f] hover:text-[#d4472f] transition-all duration-300 font-medium p-3 rounded-full transform hover:scale-105 flex items-center justify-center ${
                isScrolled ? "bg-white shadow-lg hover:shadow-xl" : "bg-[#faf2e1] shadow-sm hover:shadow-md"
              }`}
              style={{ width: "3.5rem", height: "3.5rem" }}
              title={t("header.findLocker")}
            >
              <MapPin className="w-5 h-5" />
            </Link>
            <button
              className={`text-white bg-[#e85a4f] hover:bg-[#d4472f] transition-all duration-300 font-medium p-3 rounded-full transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl ${
                isScrolled ? "shadow-xl hover:shadow-2xl" : ""
              }`}
              style={{ width: "3.5rem", height: "3.5rem" }}
              title={t("header.downloadApp")}
            >
              <Download className="w-5 h-5" />
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

        {/* Mobile Navigation - Icon Only Grid */}
        {isMenuOpen && (
          <div
            className={`lg:hidden py-6 rounded-b-2xl mx-4 transition-all duration-300 ${
              isScrolled ? "bg-white/95 backdrop-blur-md shadow-xl" : "bg-[#faf2e1]/90 backdrop-blur-sm shadow-lg"
            }`}
          >
            <div className="grid grid-cols-4 gap-4 mb-6">
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`text-[#1e2a4a] hover:text-[#e85a4f] transition-all duration-300 font-medium p-3 rounded-full transform hover:scale-105 flex items-center justify-center ${
                  isScrolled ? "bg-[#faf2e1] shadow-md hover:shadow-lg" : "bg-white shadow-sm hover:shadow-md"
                }`}
                style={{ width: "3.5rem", height: "3.5rem" }}
                title={`${t("header.switchTo")} ${language === "RO" ? t("header.english") : t("header.romanian")}`}
              >
                <Globe className="w-5 h-5" />
              </button>

              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[#1e2a4a] hover:text-[#e85a4f] transition-all duration-300 font-medium p-3 rounded-full transform hover:scale-105 flex items-center justify-center ${
                    isScrolled ? "bg-[#faf2e1] shadow-md hover:shadow-lg" : "bg-white shadow-sm hover:shadow-md"
                  }`}
                  style={{ width: "3.5rem", height: "3.5rem" }}
                  title={item.name}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
            
            {/* Mobile CTA Buttons - Icon Only */}
            <div className="flex justify-center space-x-4">
              <Link
                href="/locations"
                className={`text-[#e85a4f] hover:text-[#d4472f] transition-all duration-300 font-medium p-3 rounded-full transform hover:scale-105 flex items-center justify-center ${
                  isScrolled ? "bg-[#faf2e1] shadow-md hover:shadow-lg" : "bg-white shadow-sm hover:shadow-md"
                }`}
                style={{ width: "3.5rem", height: "3.5rem" }}
                title={t("header.findLocker")}
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin className="w-5 h-5" />
              </Link>
              <button
                className={`text-white bg-[#e85a4f] hover:bg-[#d4472f] transition-all duration-300 font-medium p-3 rounded-full transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl`}
                style={{ width: "3.5rem", height: "3.5rem" }}
                title={t("header.downloadApp")}
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
