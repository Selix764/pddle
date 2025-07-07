"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import ScrollAnimatedSection from "../components/ScrollAnimatedSection"
import StaggeredScrollAnimation from "../components/StaggeredScrollAnimation"

export default function BlogPage() {
  const { t } = useLanguage()

  const featuredPost = {
    id: 1,
    title: "The Complete Beginner's Guide to Stand-Up Paddleboarding",
    excerpt:
      "Everything you need to know to start your SUP journey, from choosing the right board to mastering your first strokes on the water.",
    image: "/placeholder.svg?height=400&width=600&text=Beginner+SUP+Guide",
    author: "Sarah Johnson",
    date: "2024-02-10",
    readTime: "8 min read",
    category: "Beginner Tips",
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "Top 10 SUP Destinations in California",
      excerpt:
        "Discover the most beautiful and SUP-friendly locations across the Golden State, from serene lakes to stunning coastlines.",
      image: "/placeholder.svg?height=300&width=400&text=California+SUP+Destinations",
      author: "Marcus Chen",
      date: "2024-02-08",
      readTime: "6 min read",
      category: "Destinations",
    },
    {
      id: 3,
      title: "SUP Yoga: Finding Balance on Water",
      excerpt:
        "Learn how combining yoga with paddleboarding creates a unique mindfulness experience that challenges both body and mind.",
      image: "/placeholder.svg?height=300&width=400&text=SUP+Yoga+Balance",
      author: "Emma Rodriguez",
      date: "2024-02-05",
      readTime: "5 min read",
      category: "Wellness",
    },
    {
      id: 4,
      title: "Essential SUP Safety Tips for Every Paddler",
      excerpt:
        "Stay safe on the water with these crucial safety guidelines, equipment recommendations, and emergency procedures.",
      image: "/placeholder.svg?height=300&width=400&text=SUP+Safety+Tips",
      author: "Jake Thompson",
      date: "2024-02-03",
      readTime: "7 min read",
      category: "Safety",
    },
    {
      id: 5,
      title: "How Weather Affects Your SUP Experience",
      excerpt:
        "Understanding wind, waves, and weather patterns to choose the perfect conditions for your paddleboarding adventure.",
      image: "/placeholder.svg?height=300&width=400&text=Weather+SUP+Guide",
      author: "Sarah Johnson",
      date: "2024-02-01",
      readTime: "4 min read",
      category: "Tips & Tricks",
    },
    {
      id: 6,
      title: "SUP Fitness: The Ultimate Full-Body Workout",
      excerpt:
        "Discover how paddleboarding provides an incredible workout that builds core strength, improves balance, and burns calories.",
      image: "/placeholder.svg?height=300&width=400&text=SUP+Fitness+Workout",
      author: "Marcus Chen",
      date: "2024-01-28",
      readTime: "6 min read",
      category: "Fitness",
    },
    {
      id: 7,
      title: "Protecting Our Waters: SUP and Environmental Conservation",
      excerpt:
        "Learn how the SUP community is working to protect marine environments and how you can paddle responsibly.",
      image: "/placeholder.svg?height=300&width=400&text=Environmental+Conservation",
      author: "Emma Rodriguez",
      date: "2024-01-25",
      readTime: "5 min read",
      category: "Environment",
    },
    {
      id: 8,
      title: "SUP Racing: From Recreational to Competitive",
      excerpt:
        "Everything you need to know about getting into SUP racing, from training tips to choosing the right equipment.",
      image: "/placeholder.svg?height=300&width=400&text=SUP+Racing+Guide",
      author: "Marcus Chen",
      date: "2024-01-22",
      readTime: "8 min read",
      category: "Racing",
    },
    {
      id: 9,
      title: "Family SUP Adventures: Making Memories on Water",
      excerpt:
        "Tips for introducing children to paddleboarding and creating safe, fun family experiences on the water.",
      image: "/placeholder.svg?height=300&width=400&text=Family+SUP+Adventures",
      author: "Jake Thompson",
      date: "2024-01-20",
      readTime: "6 min read",
      category: "Family",
    },
  ]

  const categories = [
    "All Posts",
    "Beginner Tips",
    "Destinations",
    "Wellness",
    "Safety",
    "Tips & Tricks",
    "Fitness",
    "Environment",
    "Racing",
    "Family",
  ]

  return (
    <div className="min-h-screen bg-[#faf2e1]">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=SUP+Blog+Hero')",
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container-custom">
          <div className="flex items-center justify-center h-full text-center">
            <div className="text-white max-w-6xl w-full animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-left">
                SUP <span className="text-[#e85a4f] animate-glow">Stories</span> & Tips
              </h1>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed mx-auto max-w-3xl text-white/90 animate-slide-in-right animation-delay-300">
                Dive into our collection of paddleboarding guides, destination features, wellness tips, and inspiring
                stories from the SUP community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
                <Link
                  href="#blog"
                  className="bg-[#e85a4f] hover:bg-[#d4472f] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center animate-pulse-glow"
                >
                  Read Stories
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center hover:animate-shake"
                >
                  Share Your Story
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

      {/* Blog Content */}
      <div className="container-custom py-12 scroll-mt-24" id="blog">
        {/* Categories Filter */}
        <ScrollAnimatedSection animation="slideUp" className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-[#e85a4f] text-white"
                    : "bg-white text-[#111C2F] hover:bg-[#FDDAC0] border border-[#FDDAC0]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimatedSection>

        {/* Featured Post */}
        <ScrollAnimatedSection animation="scaleIn" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-96">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#e85a4f] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-[#FDDAC0] text-[#111C2F] px-3 py-1 rounded-full text-sm font-semibold mr-4">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-[#111C2F] mb-4">{featuredPost.title}</h2>
                <p className="text-[#111C2F]/70 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600 mr-4">{featuredPost.author}</span>
                    <Clock className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">{featuredPost.readTime}</span>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`} className="btn-primary inline-flex items-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Blog Posts Grid */}
        <ScrollAnimatedSection animation="slideUp" className="mb-16">
          <h3 className="text-3xl font-bold text-[#1e2a4a] mb-8">Latest Posts</h3>
          <StaggeredScrollAnimation
            animation="slideUp"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#FDDAC0]/30 transform hover:scale-105 card-equal-height"
              >
                <div className="relative h-48 flex-shrink-0">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-[#FDDAC0] text-[#111C2F] px-2 py-1 rounded text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 card-content">
                  <div>
                    <div className="flex items-center mb-3 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#111C2F] mb-3 text-title-consistent">{post.title}</h3>
                    <p className="text-[#111C2F]/70 mb-4 text-body-consistent">{post.excerpt}</p>
                    <div className="flex items-center mb-4">
                      <User className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-[#e85a4f] hover:text-[#d4472f] font-semibold transition-colors mt-auto"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </StaggeredScrollAnimation>
        </ScrollAnimatedSection>

        {/* Newsletter Signup */}
        <ScrollAnimatedSection animation="scaleIn" className="bg-[#1e2a4a] text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl mb-8 text-white/80">
            Get the latest SUP tips, destination guides, and community stories delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#e85a4f] focus:outline-none"
            />
            <button className="btn-primary px-6">Subscribe</button>
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  )
}
