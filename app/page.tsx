import { Button } from "@/components/ui/button"
import {
  Download,
  Play,
  Star,
  Users,
  Clock,
  Zap,
  MessageSquare,
  Brain,
  Shield,
  Sparkles,
  Mic,
  Volume2,
  Eye,
} from "lucide-react"
import Image from "next/image"
import Script from "next/script" // Import Script from next/script

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-cyan-300/20 rounded-full blur-md animate-ping"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="OffMode" width={120} height={40} className="h-8 w-auto" />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
            Reviews
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#support" className="text-gray-300 hover:text-white transition-colors">
            Support
          </a>
        </nav>

        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
          Log In
        </Button>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="block">YOUR AI </span>
                <span className="block">BUTLER.</span>
                <span className="block text-cyan-400">IN YOUR POCKET.</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                OffMode keeps your day moving—without you lifting a finger.
              </p>

              <div className="flex items-center space-x-4 text-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <span className="font-semibold">Saves You Hours a DAY.</span>
                </div>
              </div>

              <p className="text-gray-400">
                This isn't an exaggeration. Our early users report saving 3–5+ hours every single day—without
                sacrificing quality, context, or control.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#007AFF] hover:bg-[#007AFF]/90 text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Install OffMode Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <p className="text-sm text-gray-500">No mess. No maintenance. Just magic.</p>
          </div>

          {/* Hero Video Section */}
          <div className="relative">
            <div className="relative z-10 flex justify-center">
              {/* Wistia Embed Code */}
              <style
                dangerouslySetInnerHTML={{
                  __html: `wistia-player[media-id='2r1nnjoxu9']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/2r1nnjoxu9/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`,
                }}
              />
              <wistia-player
                media-id="2r1nnjoxu9"
                aspect="1.7777777777777777"
                className="w-full max-w-xs sm:max-w-sm rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              ></wistia-player>
              {/* Next.js Script components for Wistia */}
              <Script src="https://fast.wistia.com/player.js" async strategy="afterInteractive" />
            </div>

            {/* Floating elements - Hidden on mobile, simplified on tablet */}
            <div className="hidden sm:block absolute top-10 -left-10 animate-float">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>
            </div>

            <div className="hidden sm:block absolute bottom-20 -right-10 animate-float-delayed">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Users className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* NEW: JARVIS AI Assistant Introduction Section */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-500/30 to-purple-600/30 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-blue-900/50 via-cyan-800/50 to-purple-900/50 rounded-3xl p-12 backdrop-blur-sm border border-cyan-500/30">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                  <div className="space-y-4 lg:space-y-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                      <span className="block text-gray-300">MEET YOUR</span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        PERSONAL AI
                      </span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        ASSISTANT
                      </span>
                    </h2>

                    <div className="space-y-4">
                      <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-semibold">
                        Ever Wish You Had a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 font-black">
                          JARVIS?
                        </span>
                      </p>

                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-md"></div>
                        <p className="relative text-lg sm:text-xl lg:text-2xl text-white font-bold px-4 sm:px-6 py-3 sm:py-4 border border-cyan-400/50 rounded-2xl backdrop-blur-sm">
                          You do Now...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AI Capabilities List - Simplified for mobile */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3 sm:space-x-4 group hover:scale-105 transition-transform duration-300">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                        <Brain className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm sm:text-base">Thinks Like You</p>
                        <p className="text-gray-400 text-xs sm:text-sm">Learns your communication style</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 sm:space-x-4 group hover:scale-105 transition-transform duration-300">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse delay-300">
                        <Volume2 className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm sm:text-base">Speaks Like You</p>
                        <p className="text-gray-400 text-xs sm:text-sm">Responds in your voice and tone</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 sm:space-x-4 group hover:scale-105 transition-transform duration-300">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse delay-500">
                        <Eye className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm sm:text-base">Sees Everything</p>
                        <p className="text-gray-400 text-xs sm:text-sm">Monitors communications 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative order-1 lg:order-2">
                  {/* Simplified AI Brain for mobile */}
                  <div className="relative flex justify-center">
                    <div className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 relative">
                      {/* Simplified rings for mobile */}
                      <div className="absolute inset-0 border-2 sm:border-4 border-cyan-400/30 rounded-full animate-spin-slow"></div>
                      <div className="absolute inset-2 sm:inset-4 border-2 sm:border-4 border-blue-500/40 rounded-full animate-spin-reverse"></div>

                      {/* Core */}
                      <div className="absolute inset-6 sm:inset-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                        <div className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <Brain className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 text-white animate-pulse" />
                        </div>
                      </div>

                      {/* Simplified floating data points - hidden on mobile */}
                      <div className="hidden sm:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 animate-float">
                        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                          <MessageSquare className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                        </div>
                      </div>

                      <div className="hidden sm:block absolute top-1/4 right-0 transform translate-x-4 animate-float-delayed">
                        <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                          <Mic className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Simplified Holographic UI Elements - hidden on mobile */}
                  <div className="hidden md:block absolute top-8 left-8 animate-float">
                    <div className="bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/50 rounded-lg p-2 sm:p-3 shadow-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-300 text-xs font-semibold">ACTIVE</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1 bg-cyan-400/60 rounded-full w-12 sm:w-16"></div>
                        <div className="h-1 bg-cyan-400/40 rounded-full w-8 sm:w-12"></div>
                        <div className="h-1 bg-cyan-400/60 rounded-full w-10 sm:w-14"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Features Section - Make Your Messages Smart */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Enhanced Feature Block - Make Your Messages Smart with Animated Phone */}
          <div className="relative mb-32">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-purple-900/40 via-pink-800/40 to-blue-900/40 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  {/* Animated Phone Mockup with Floating Apps */}
                  <div className="relative flex justify-center">
                    {/* Central Phone */}
                    <div className="relative z-10">
                      <div className="w-64 sm:w-72 h-[480px] sm:h-[580px] bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-2xl border-2 sm:border-4 border-gray-700">
                        {/* Phone Screen */}
                        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                          {/* Status Bar */}
                          <div className="flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3 text-white text-xs sm:text-sm">
                            <span className="font-semibold">9:41</span>
                            <div className="flex space-x-1">
                              <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-white rounded-sm"></div>
                              <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-white rounded-sm"></div>
                              <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-white rounded-sm"></div>
                            </div>
                          </div>

                          {/* OffMode Interface */}
                          <div className="px-3 sm:px-4 py-2">
                            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4">
                              <h3 className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2">OffMode Active</h3>
                              <p className="text-cyan-100 text-xs sm:text-sm">Managing 8 conversations</p>
                              <div className="flex items-center mt-2 sm:mt-3 space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-white text-xs">AI Assistant Online</span>
                              </div>
                            </div>

                            {/* Simplified Message List for mobile */}
                            <div className="space-y-2 sm:space-y-3">
                              <div className="bg-slate-700/50 rounded-lg sm:rounded-xl p-2 sm:p-3 border-l-2 sm:border-l-4 border-green-400">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-white font-medium text-xs sm:text-sm">Sarah Chen</span>
                                  <div className="flex items-center space-x-1">
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-green-400 text-xs">Auto-replied</span>
                                  </div>
                                </div>
                                <p className="text-gray-300 text-xs">"Thanks for reaching out..."</p>
                              </div>

                              <div className="bg-slate-700/50 rounded-lg sm:rounded-xl p-2 sm:p-3 border-l-2 sm:border-l-4 border-yellow-400">
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-white font-medium text-xs sm:text-sm">Mike Rodriguez</span>
                                  <div className="flex items-center space-x-1">
                                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                    <span className="text-yellow-400 text-xs">Processing...</span>
                                  </div>
                                </div>
                                <p className="text-gray-300 text-xs">"Can we reschedule?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Simplified Floating App Icons - Only show on larger screens */}
                    <div className="hidden lg:block">
                      {/* WhatsApp - Top Left */}
                      <div className="absolute top-8 -left-16 animate-float">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                            <MessageSquare className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                            <Zap className="w-3 h-3 text-white" />
                          </div>
                          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
                            12
                          </div>
                        </div>
                      </div>

                      {/* Telegram - Top Right */}
                      <div className="absolute top-16 -right-12 animate-float-delayed">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                              <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                            </div>
                          </div>
                          {/* Processing indicator */}
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                          </div>
                          {/* AI brain indicator */}
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
                            <Brain className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Email - Bottom Left */}
                      <div className="absolute bottom-20 -left-12 animate-float delay-700">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                            <div className="w-8 h-6 bg-white rounded-sm flex items-center justify-center">
                              <div className="w-6 h-1 bg-red-500"></div>
                            </div>
                          </div>
                          {/* Smart compose indicator */}
                          <div className="absolute -top-2 -left-2 w-7 h-7 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                            <Sparkles className="w-3 h-3 text-white" />
                          </div>
                          {/* Draft count */}
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            3
                          </div>
                        </div>
                      </div>

                      {/* Slack - Bottom Right */}
                      <div className="absolute bottom-8 -right-16 animate-float delay-1000">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                              <div className="w-6 h-6 bg-purple-500 rounded-md"></div>
                            </div>
                          </div>
                          {/* Status update indicator */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          {/* Automation indicator */}
                          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-3 h-3 border-2 border-white rounded-full animate-spin"></div>
                          </div>
                        </div>
                      </div>

                      {/* Discord - Middle Left */}
                      <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 animate-float delay-500">
                        <div className="relative">
                          <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                            <Users className="w-7 h-7 text-white" />
                          </div>
                          {/* Voice channel indicator */}
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                            <Mic className="w-2 h-2 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Teams - Middle Right */}
                      <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 animate-float-delayed delay-300">
                        <div className="relative">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                            <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center">
                              <div className="w-5 h-5 bg-blue-600 rounded-sm"></div>
                            </div>
                          </div>
                          {/* Meeting auto-join indicator */}
                          <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                            <Volume2 className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Connection Lines */}
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Animated connection lines from apps to phone */}
                        <svg className="w-full h-full">
                          <defs>
                            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="#007AFF" stopOpacity="0.2" />
                            </linearGradient>
                          </defs>

                          {/* WhatsApp to Phone */}
                          <path
                            d="M 60 80 Q 120 120 180 200"
                            stroke="url(#connectionGradient)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            className="animate-pulse"
                          />

                          {/* Telegram to Phone */}
                          <path
                            d="M 320 90 Q 280 130 240 180"
                            stroke="url(#connectionGradient)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            className="animate-pulse delay-300"
                          />

                          {/* Email to Phone */}
                          <path
                            d="M 70 400 Q 120 350 180 320"
                            stroke="url(#connectionGradient)"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            className="animate-pulse delay-500"
                          />
                        </svg>
                      </div>

                      {/* Data Flow Particles */}
                      <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                      <div className="absolute top-32 right-24 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-300"></div>
                      <div className="absolute bottom-32 left-16 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-700"></div>
                      <div className="absolute bottom-20 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000"></div>
                    </div>

                    {/* Mobile-friendly app indicators */}
                    <div className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg">
                        <div className="w-4 h-3 bg-white rounded-sm"></div>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                    MAKE YOUR
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      MESSAGES SMART
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    OffMode learns your communication style and handles responses with 98% accuracy. Wake up to
                    perfectly crafted replies that sound exactly like you.
                  </p>

                  {/* Feature highlights */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Auto-replies across all platforms</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                      <span>Smart message prioritization</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                      <span>Context-aware responses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Feature Block - Platform Style */}
          <div className="relative mb-32">
            <div className="absolute inset-0 bg-gradient-to-l from-blue-600/20 via-cyan-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-l from-blue-900/40 via-cyan-800/40 to-purple-900/40 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                    WHEREVER YOU
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      WORK, WE'RE THERE
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Email, Slack, WhatsApp, Teams, or any platform you use. OffMode seamlessly integrates everywhere you
                    communicate.
                  </p>
                </div>

                <div className="relative order-1 lg:order-2">
                  {/* Central platform icon */}
                  <div className="relative flex justify-center">
                    <div className="w-48 h-48 bg-white rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-500">
                      <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                        OM
                      </span>
                    </div>
                  </div>

                  {/* Floating platform icons */}
                  <div className="absolute top-0 left-0 animate-float">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="absolute top-8 right-0 animate-float-delayed">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-8 animate-float delay-700">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-8 animate-float delay-1000">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See OffMode in Action</h2>
          <p className="text-gray-400">Watch how OffMode transforms your daily workflow</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-500">
          <video controls className="w-full h-auto" poster="/images/phone-mockup-2.jpeg">
            <source src="/videos/marketing-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Animated Testimonials Section - Discord Style */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-cyan-900/40 via-blue-800/40 to-purple-900/40 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  {/* Animated testimonial cards */}
                  <div className="relative space-y-4">
                    {/* Floating testimonial bubbles */}
                    <div className="absolute -top-8 -left-8 animate-float">
                      <div className="bg-white rounded-2xl p-4 shadow-xl max-w-xs transform hover:scale-105 transition-all duration-300">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-800 text-sm font-medium">"This AI is literally JARVIS"</p>
                        <p className="text-gray-600 text-xs mt-1">— Gabriel</p>
                      </div>
                    </div>

                    <div className="absolute top-12 -right-12 animate-float-delayed">
                      <div className="bg-white rounded-2xl p-4 shadow-xl max-w-xs transform hover:scale-105 transition-all duration-300">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-800 text-sm font-medium">"I replaced my VA"</p>
                        <p className="text-gray-600 text-xs mt-1">— Sophie M.</p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-4 animate-float delay-700">
                      <div className="bg-white rounded-2xl p-4 shadow-xl max-w-xs transform hover:scale-105 transition-all duration-300">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-800 text-sm font-medium">"Freaky good"</p>
                        <p className="text-gray-600 text-xs mt-1">— Danny T.</p>
                      </div>
                    </div>

                    {/* Central rating display */}
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl p-8 text-center shadow-2xl transform hover:scale-105 transition-all duration-500">
                        <div className="text-4xl font-black text-white mb-2">4.9</div>
                        <div className="flex justify-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-white text-white" />
                          ))}
                        </div>
                        <div className="text-white/80 text-sm">1,247+ Reviews</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 animate-pulse">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-yellow-800" />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                    REAL PEOPLE,
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      REAL RESULTS
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    See what our users are saying about OffMode. Join thousands who've already transformed their daily
                    workflow and reclaimed their time.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span>"Cut my daily management time in half"</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                      <span>"Like having an executive assistant"</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                      <span>"Answers exactly how I would"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated "Who's OffMode For?" Section */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-blue-900/40 via-purple-800/40 to-cyan-900/40 rounded-3xl p-12 backdrop-blur-sm border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-black mb-4">
                  WHO'S{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    OFFMODE
                  </span>{" "}
                  FOR?
                </h2>
                <p className="text-xl text-gray-300">Built for people who want their time back.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Avatar 1: Drowning in messages */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-6">
                      <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center animate-float">
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                          99+
                        </div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse delay-300">
                          50+
                        </div>
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3">Message Overload</h3>
                    <p className="text-gray-300 text-center">
                      Anyone drowning in messages, meetings, or mental clutter
                    </p>
                  </div>
                </div>

                {/* Avatar 2: Parents and professionals */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-6">
                      <div className="relative w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center animate-float-delayed">
                        <div className="absolute -top-3 -right-1 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center animate-float">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full"></div>
                        </div>
                        <div className="absolute -bottom-1 -left-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center animate-float-delayed">
                          <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-400 rounded-full"></div>
                        </div>
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3">Busy Multitaskers</h3>
                    <p className="text-gray-300 text-center">Parents, partners, and professionals juggling it all</p>
                  </div>
                </div>

                {/* Avatar 3: Deep work seekers */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-green-500/30 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-6">
                      <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-500 to-green-400 rounded-2xl flex items-center justify-center animate-float">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-green-400 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse delay-500"></div>
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Brain className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3">Focus Seekers</h3>
                    <p className="text-gray-300 text-center">
                      People who want more time for deep work—not just busywork
                    </p>
                  </div>
                </div>

                {/* Avatar 4: Entrepreneurs */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-6">
                      <div className="relative w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-400 rounded-2xl flex items-center justify-center animate-float-delayed">
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-300 rounded-full flex items-center justify-center animate-spin-slow">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3">Go-Getters</h3>
                    <p className="text-gray-300 text-center">Solopreneurs, team leads, and side-hustlers</p>
                  </div>
                </div>

                {/* Avatar 5: Procrastinators */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-6">
                      <div className="relative w-24 h-24 bg-gradient-to-br from-red-500 to-orange-400 rounded-2xl flex items-center justify-center animate-float">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 border-4 border-white/30 rounded-full flex items-center justify-center animate-spin-slow">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                              <Clock className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3">Procrastinators</h3>
                    <p className="text-gray-300 text-center">
                      Anyone who's ever said, "I'll get to that later…" and didn't
                    </p>
                  </div>
                </div>

                {/* Avatar 6: Digital Minimalists */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-6">
                      <div className="relative w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center animate-float-delayed">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                              <div className="relative">
                                <MessageSquare className="w-8 h-8 text-white/50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-10 h-1 bg-red-500 rotate-45 animate-pulse"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3">Digital Minimalists</h3>
                    <p className="text-gray-300 text-center">Anyone who'd rather live than scroll through messages</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <div className="inline-block relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-md"></div>
                  <p className="relative text-xl text-white font-semibold px-8 py-4 border border-white/20 rounded-full backdrop-blur-sm">
                    If your time is worth more than $10/hour, OffMode pays for itself on day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Animated Final CTA Section */}
      <section className="relative z-10 py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 via-blue-500/30 to-purple-600/30 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-cyan-900/50 via-blue-800/50 to-purple-900/50 rounded-3xl p-16 backdrop-blur-sm border border-white/20">
              {/* Floating Download Elements */}
              <div className="absolute top-8 left-8 animate-float">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <Download className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="absolute top-12 right-12 animate-float-delayed">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="absolute bottom-8 left-16 animate-float delay-700">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
              </div>

              <div className="absolute bottom-12 right-8 animate-float delay-1000">
                <div className="w-18 h-18 bg-gradient-to-br from-amber-500 to-orange-400 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center space-y-8 sm:space-y-12">
                {/* Animated Header */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="inline-block">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                      <span className="block animate-slide-up">DOWNLOAD</span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-slide-up delay-300">
                        OFFMODE
                      </span>
                      <span className="block animate-slide-up delay-500">NOW</span>
                    </h2>
                  </div>

                  {/* Simplified taglines for mobile */}
                  <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
                    <div className="flex items-center justify-center space-x-3 sm:space-x-4 group hover:scale-105 transition-transform duration-300">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium">
                        Stop drowning in notifications.
                      </p>
                    </div>
                    <div className="flex items-center justify-center space-x-3 sm:space-x-4 group hover:scale-105 transition-transform duration-300">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium">
                        Start saving time—and energy.
                      </p>
                    </div>
                    <div className="flex items-center justify-center space-x-3 sm:space-x-4 group hover:scale-105 transition-transform duration-300">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-pulse delay-500"></div>
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium">
                        Let OffMode do the heavy lifting.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Responsive Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
                  <div className="text-center group hover:scale-110 transition-all duration-300">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-2xl group-hover:shadow-cyan-500/50">
                      <span className="text-xl sm:text-2xl font-black text-white">3-5</span>
                    </div>
                    <p className="text-gray-300 font-semibold text-sm sm:text-base">Hours Saved Daily</p>
                  </div>

                  <div className="text-center group hover:scale-110 transition-all duration-300">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-2xl group-hover:shadow-purple-500/50">
                      <span className="text-xl sm:text-2xl font-black text-white">98%</span>
                    </div>
                    <p className="text-gray-300 font-semibold text-sm sm:text-base">Accuracy Rate</p>
                  </div>

                  <div className="text-center group hover:scale-110 transition-all duration-300 sm:col-span-1 col-span-1">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-2xl group-hover:shadow-green-500/50">
                      <span className="text-xl sm:text-2xl font-black text-white">1K+</span>
                    </div>
                    <p className="text-gray-300 font-semibold text-sm sm:text-base">Happy Users</p>
                  </div>
                </div>

                {/* Responsive Download Button */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-[#007AFF] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#007AFF] text-white px-8 sm:px-16 py-6 sm:py-8 text-lg sm:text-2xl font-black rounded-full transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/50 border-2 border-white/20"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-4">
                      <div className="relative">
                        <Download className="w-6 sm:w-8 h-6 sm:h-8 animate-bounce" />
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                      </div>
                      <span>Install OffMode Now</span>
                      <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                        <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />
                      </div>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Platform Icons */}
              <div className="flex justify-center items-center space-x-8 pt-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">iOS</span>
                  </div>
                  <p className="text-gray-400 text-sm">iPhone & iPad</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">AND</span>
                  </div>
                  <p className="text-gray-400 text-sm">Android</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">WEB</span>
                  </div>
                  <p className="text-gray-400 text-sm">Browser</p>
                </div>
              </div>

              {/* Animated Tagline */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-lg"></div>
                <p className="relative text-gray-400 text-lg font-medium px-8 py-4 border border-white/10 rounded-full backdrop-blur-sm">
                  <span className="animate-pulse">✨</span> No mess. No maintenance. Just magic.{" "}
                  <span className="animate-pulse">✨</span>
                </p>
              </div>

              {/* Urgency Element */}
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-500/30 backdrop-blur-sm max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <p className="text-red-300 font-semibold">Limited Time Offer</p>
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-gray-300 text-sm">
                  Join the first 10,000 users and get premium features free for life!
                </p>
              </div>
            </div>

            {/* Floating Phone Mockup */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="relative animate-float-slow">
                <div className="w-32 h-56 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white text-xs font-semibold">OffMode</p>
                      <p className="text-white/70 text-xs">Active</p>
                    </div>
                  </div>

                  {/* Floating notification */}
                  <div className="absolute -top-4 -left-4 animate-bounce">
                    <div className="bg-green-500 text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg">
                      37 handled
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src="/images/logo.png" alt="OffMode" width={100} height={32} className="h-6 w-auto" />
            </div>

            <div className="flex space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8">© 2024 OffMode. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
