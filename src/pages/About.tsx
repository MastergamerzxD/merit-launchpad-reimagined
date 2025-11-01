import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Target, Users, Award, Heart, TrendingUp, Shield, CheckCircle, Sparkles, Globe, Zap, BookOpen, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us - Merit Launchers | Expert Test Preparation Platform"
        description="Learn about Merit Launchers - India's leading mock test platform. Our mission is to make quality test preparation accessible and affordable for every student preparing for competitive exams."
        keywords="about merit launchers, test preparation platform, competitive exam preparation, online mock tests India"
      />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,146,60,0.1),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 animate-float">
                <div className="bg-gradient-primary p-1 rounded-full">
                  <div className="bg-background px-6 py-2 rounded-full">
                    <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">
                      India's Trusted Test Preparation Platform
                    </span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Merit Launchers</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in">
                An innovative online test preparation platform created to help students across India prepare confidently for their college entrance and recruitment examinations.
              </p>
              
              <div className="inline-block bg-gradient-primary p-1 rounded-lg animate-fade-in">
                <div className="bg-background px-8 py-4 rounded-lg">
                  <p className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    "Practice Well. Perform Better. Launch Your Future"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold">
                    What We <span className="bg-gradient-primary bg-clip-text text-transparent">Offer</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We specialize in offering high-quality, exam-specific mock tests, performance analytics, and real-time feedback through our user-friendly Merit Launchers App.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Whether you're aiming for <strong>CUET, CLAT, CTET (I & II), JEE, IPMAT, NEET, SSC, or DSSSB</strong>, we make sure you get everything you need to practice, analyze, and improve — all in one place.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <BookOpen className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Expert Content</h3>
                    <p className="text-sm text-muted-foreground">Curated by exam specialists</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 group mt-8">
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <BarChart className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Real-Time Analytics</h3>
                    <p className="text-sm text-muted-foreground">Instant performance insights</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 group">
                    <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                      <Zap className="h-7 w-7 text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Mobile-First</h3>
                    <p className="text-sm text-muted-foreground">Study anytime, anywhere</p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 group mt-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Globe className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">All-India Ranking</h3>
                    <p className="text-sm text-muted-foreground">Compete nationally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Vision */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl"></div>
                  <div className="relative bg-card p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 h-full">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Target className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-3xl font-bold pt-3">Our Vision</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To make quality exam preparation <strong>accessible, affordable, and intelligent</strong> for every learner in India — from metro cities to the remotest towns.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                      We want to empower students to achieve their academic and career goals through the power of technology, data analytics, and personalized learning.
                    </p>
                  </div>
                </div>

                {/* Mission */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl"></div>
                  <div className="relative bg-card p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 h-full">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <Heart className="h-8 w-8 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-3xl font-bold pt-3">Our Mission</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Provide authentic, exam-pattern-based mock tests curated by experts</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Deliver instant performance feedback for immediate improvement</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Promote affordable learning with nominal and transparent fees</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Encourage self-paced preparation using mobile-friendly tools</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Constantly update content based on latest exam trends</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Students Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Students Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Merit Launchers</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Join thousands of students who are learning smarter and performing better
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Real Exam Experience</h3>
                  <p className="text-muted-foreground">
                    Every mock test mirrors the actual exam format, pattern, and difficulty level
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Instant Scores & Analytics</h3>
                  <p className="text-muted-foreground">
                    See where you stand in real time — no waiting, no guessing
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Smart Learning</h3>
                  <p className="text-muted-foreground">
                    Detailed solutions and time analysis help you improve faster
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Affordable for All</h3>
                  <p className="text-muted-foreground">
                    Pay once and access multiple tests — no hidden fees
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Mobile-First Platform</h3>
                  <p className="text-muted-foreground">
                    Study and practice anytime, anywhere through our Merit Launchers App
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">All-India Ranking</h3>
                  <p className="text-muted-foreground">
                    Compete nationally and gauge your readiness before the real exam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 animate-pulse-glow">
                <Users className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Expert Team</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our content and technology teams include <strong>highly experienced educators, exam analysts, subject matter experts, and experienced educational administrators</strong> from reputed institutions who've helped thousands of students crack competitive exams.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every question, mock paper, and explanation is reviewed for accuracy, relevance, and difficulty balance to give you an edge.
              </p>
            </div>
          </div>
        </section>

        {/* What We Believe */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-3xl"></div>
                <div className="relative bg-gradient-primary p-1 rounded-2xl">
                  <div className="bg-background p-12 rounded-2xl text-center">
                    <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Believe</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                      We believe that <strong>every student deserves a fair chance to succeed</strong> — and that success comes from consistent practice and honest self-assessment.
                    </p>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      That's exactly what we deliver — a platform where <strong>effort meets guidance and learning becomes measurable</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get Started <span className="bg-gradient-primary bg-clip-text text-transparent">Today</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join thousands of students already learning smarter with Merit Launchers. Experience the new way of test preparation — <strong>practical, analytical, and rewarding</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 shadow-glow hover:shadow-premium transition-all duration-300" asChild>
                  <Link to="/fee-structure">Start Free Test Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
