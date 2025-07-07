"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Heart, MessageCircle, Tag } from "lucide-react"
import { useLanguage } from "../../contexts/LanguageContext"
import ScrollAnimatedSection from "../../components/ScrollAnimatedSection"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const { t } = useLanguage()

  // Mock blog post data - in real app, fetch based on params.id
  const post = {
    id: 1,
    title: "The Complete Beginner's Guide to Stand-Up Paddleboarding",
    excerpt:
      "Everything you need to know to start your SUP journey, from choosing the right board to mastering your first strokes on the water.",
    content: `
      <p>Stand-up paddleboarding (SUP) has exploded in popularity over the past decade, and for good reason. It's an accessible, full-body workout that connects you with nature while providing a peaceful escape from daily stress. Whether you're looking for a new fitness routine, a way to explore waterways, or simply a fun activity to try, SUP offers something for everyone.</p>

      <h2>Getting Started: What You Need to Know</h2>
      <p>Before you hit the water, there are several key things every beginner should understand about SUP. First and foremost, SUP is surprisingly easy to learn. Most people can stand up and paddle within their first session, though mastering the technique takes practice.</p>

      <h3>Choosing the Right Board</h3>
      <p>The type of board you choose can make or break your SUP experience. For beginners, we recommend starting with a wider, more stable board (typically 32-36 inches wide). These boards are more forgiving and help build confidence on the water.</p>

      <ul>
        <li><strong>All-Around Boards:</strong> Perfect for beginners, these boards offer stability and versatility</li>
        <li><strong>Touring Boards:</strong> Longer and narrower, better for experienced paddlers who want speed</li>
        <li><strong>Yoga Boards:</strong> Extra wide and stable, designed for SUP yoga practices</li>
        <li><strong>Racing Boards:</strong> Narrow and fast, for competitive paddlers</li>
      </ul>

      <h3>Essential Equipment</h3>
      <p>While the board is the most important piece of equipment, there are several other items you'll need for a safe and enjoyable SUP experience:</p>

      <h4>Safety Equipment</h4>
      <ul>
        <li>Personal Flotation Device (PFD) - required by law in many areas</li>
        <li>Leash - keeps you connected to your board</li>
        <li>Whistle - for emergency situations</li>
      </ul>

      <h4>Comfort Items</h4>
      <ul>
        <li>Sun protection (hat, sunscreen, UV shirt)</li>
        <li>Waterproof phone case</li>
        <li>Water bottle</li>
        <li>Dry bag for valuables</li>
      </ul>

      <h2>Basic Paddling Technique</h2>
      <p>Proper technique is crucial for both efficiency and injury prevention. Here's a step-by-step guide to basic SUP paddling:</p>

      <h3>Getting on the Board</h3>
      <ol>
        <li>Start in knee-deep water</li>
        <li>Place the paddle across the board</li>
        <li>Climb onto the board in a kneeling position</li>
        <li>Find your balance before attempting to stand</li>
      </ol>

      <h3>Standing Up</h3>
      <ol>
        <li>Place your hands where your knees were</li>
        <li>Bring one foot up, then the other</li>
        <li>Rise slowly, keeping your knees slightly bent</li>
        <li>Keep your eyes on the horizon, not down at the board</li>
      </ol>

      <h3>Paddling Stroke</h3>
      <p>The forward stroke is your primary means of propulsion. Here's how to do it correctly:</p>
      <ol>
        <li>Reach forward with the paddle, immersing the blade fully</li>
        <li>Pull the water toward you using your core muscles</li>
        <li>Exit the water when the paddle reaches your feet</li>
        <li>Switch sides every few strokes to maintain direction</li>
      </ol>

      <h2>Safety Considerations</h2>
      <p>Safety should always be your top priority when paddleboarding. Here are essential safety tips for beginners:</p>

      <h3>Weather and Water Conditions</h3>
      <ul>
        <li>Check weather conditions before heading out</li>
        <li>Avoid paddling in strong winds or storms</li>
        <li>Be aware of tides and currents</li>
        <li>Start in calm, protected waters</li>
      </ul>

      <h3>Know Your Limits</h3>
      <ul>
        <li>Stay close to shore when starting out</li>
        <li>Don't paddle alone - use the buddy system</li>
        <li>Tell someone your paddling plans</li>
        <li>Know how to self-rescue if you fall off</li>
      </ul>

      <h2>Building Your Skills</h2>
      <p>Once you've mastered the basics, there are many ways to improve your SUP skills and explore new aspects of the sport:</p>

      <h3>Take a Lesson</h3>
      <p>Professional instruction can accelerate your learning and help you develop proper technique from the start. Many rental shops offer beginner lessons that cover safety, basic strokes, and board handling.</p>

      <h3>Practice Regularly</h3>
      <p>Like any skill, SUP improves with practice. Try to get on the water regularly, even if it's just for short sessions. Consistency is key to building muscle memory and confidence.</p>

      <h3>Explore Different Styles</h3>
      <p>As you become more comfortable, consider trying different SUP activities:</p>
      <ul>
        <li><strong>SUP Yoga:</strong> Combines paddleboarding with yoga poses</li>
        <li><strong>SUP Touring:</strong> Longer distance paddling and exploration</li>
        <li><strong>SUP Surfing:</strong> Riding waves on a paddleboard</li>
        <li><strong>SUP Racing:</strong> Competitive paddleboarding</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Stand-up paddleboarding is an incredibly rewarding activity that offers fitness, relaxation, and connection with nature. While it may seem intimidating at first, most people find that SUP is easier to learn than expected. With proper equipment, basic technique, and attention to safety, you'll be enjoying the water in no time.</p>

      <p>Remember, every expert was once a beginner. Don't be discouraged if you fall off the board or struggle with balance at first - it's all part of the learning process. The SUP community is welcoming and supportive, so don't hesitate to ask for advice or tips from more experienced paddlers.</p>

      <p>Ready to start your SUP journey? Find a local rental shop or instructor and get out on the water. The peaceful, meditative experience of gliding across the water while getting a great workout is something everyone should experience at least once.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Complete+Beginner+SUP+Guide",
    author: {
      name: "Sarah Johnson",
      bio: "Professional SUP instructor with 8 years of experience teaching beginners and advanced paddlers.",
      image: "/placeholder.svg?height=100&width=100&text=Sarah+Johnson",
      social: {
        instagram: "@sarahsup",
        email: "sarah@pddle.com",
      },
    },
    date: "2024-02-10",
    readTime: "8 min read",
    category: "Beginner Tips",
    tags: ["Beginner", "SUP Basics", "Equipment", "Safety", "Technique"],
    likes: 127,
    comments: 23,
    shares: 45,
  }

  const relatedPosts = [
    {
      id: 2,
      title: "Essential SUP Safety Tips for Every Paddler",
      image: "/placeholder.svg?height=200&width=300&text=SUP+Safety+Tips",
      date: "2024-02-03",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "How Weather Affects Your SUP Experience",
      image: "/placeholder.svg?height=200&width=300&text=Weather+SUP+Guide",
      date: "2024-02-01",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "SUP Fitness: The Ultimate Full-Body Workout",
      image: "/placeholder.svg?height=200&width=300&text=SUP+Fitness+Workout",
      date: "2024-01-28",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-[#faf2e1]">
      {/* Back Navigation */}
      <div className="container-custom pt-24 pb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-[#e85a4f] hover:text-[#d4472f] transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      <div className="container-custom pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <ScrollAnimatedSection animation="slideUp" className="mb-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-[#e85a4f] text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      {post.category}
                    </span>
                    <div className="flex items-center text-white text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{post.title}</h1>
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Article Meta */}
          <ScrollAnimatedSection animation="slideUp" className="mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  <Image
                    src={post.author.image || "/placeholder.svg"}
                    alt={post.author.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#111C2F]">{post.author.name}</h3>
                    <p className="text-[#111C2F]/70 text-sm">{post.author.bio}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-gray-600">
                    <Heart className="w-5 h-5 mr-1" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MessageCircle className="w-5 h-5 mr-1" />
                    <span>{post.comments}</span>
                  </div>
                  <button className="flex items-center text-[#e85a4f] hover:text-[#d4472f] transition-colors">
                    <Share2 className="w-5 h-5 mr-1" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Article Content */}
          <ScrollAnimatedSection animation="slideUp" className="mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div
                className="prose prose-lg max-w-none prose-headings:text-[#111C2F] prose-p:text-[#111C2F]/80 prose-li:text-[#111C2F]/80 prose-strong:text-[#111C2F]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </ScrollAnimatedSection>

          {/* Tags */}
          <ScrollAnimatedSection animation="slideUp" className="mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Tag className="w-5 h-5 text-[#e85a4f] mr-2" />
                <h3 className="font-bold text-[#111C2F]">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#FDDAC0] text-[#111C2F] px-3 py-1 rounded-full text-sm font-medium hover:bg-[#e85a4f] hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Author Bio */}
          <ScrollAnimatedSection animation="slideUp" className="mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#111C2F] mb-6">About the Author</h3>
              <div className="flex items-start space-x-6">
                <Image
                  src={post.author.image || "/placeholder.svg"}
                  alt={post.author.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#111C2F] mb-2">{post.author.name}</h4>
                  <p className="text-[#111C2F]/70 mb-4 leading-relaxed">{post.author.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={`https://instagram.com/${post.author.social.instagram.replace("@", "")}`}
                      className="text-[#e85a4f] hover:text-[#d4472f] transition-colors"
                    >
                      {post.author.social.instagram}
                    </a>
                    <a
                      href={`mailto:${post.author.social.email}`}
                      className="text-[#e85a4f] hover:text-[#d4472f] transition-colors"
                    >
                      {post.author.social.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Related Posts */}
          <ScrollAnimatedSection animation="slideUp">
            <h3 className="text-3xl font-bold text-[#1e2a4a] mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#111C2F] mb-3">{relatedPost.title}</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{new Date(relatedPost.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </div>
  )
}
