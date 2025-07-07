"use client"

import type React from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

interface ScrollAnimatedSectionProps {
  children: React.ReactNode
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn" | "rotateIn"
  delay?: number
  className?: string
}

export default function ScrollAnimatedSection({
  children,
  animation = "fadeIn",
  delay = 0,
  className = "",
}: ScrollAnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000 ease-out"
    const delayClass = delay > 0 ? `animation-delay-${delay}` : ""

    if (!isVisible) {
      switch (animation) {
        case "slideUp":
          return `${baseClass} ${delayClass} opacity-0 translate-y-16`
        case "slideLeft":
          return `${baseClass} ${delayClass} opacity-0 -translate-x-16`
        case "slideRight":
          return `${baseClass} ${delayClass} opacity-0 translate-x-16`
        case "scaleIn":
          return `${baseClass} ${delayClass} opacity-0 scale-75`
        case "rotateIn":
          return `${baseClass} ${delayClass} opacity-0 rotate-12 scale-75`
        default:
          return `${baseClass} ${delayClass} opacity-0`
      }
    } else {
      return `${baseClass} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`
    }
  }

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
