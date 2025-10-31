import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Users, Award, Heart, TrendingUp, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Merit Launchers</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Empowering students across India to achieve their academic dreams through affordable, 
                high-quality mock tests and comprehensive exam preparation.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Mission Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Target className="h-10 w-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted and accessible platform for competitive exam preparation, 
                  bridging the gap between quality education and affordability.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-10 w-10 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide every student with access to premium-quality mock tests and analytics, 
                  regardless of their economic background or geographic location.
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Award className="h-10 w-10 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Excellence, affordability, innovation, and student success. We believe in creating 
                  opportunities for everyone to launch their merit and achieve greatness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Students Trust Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Students <span className="bg-gradient-primary bg-clip-text text-transparent">Trust Us</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card hover:shadow-premium transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our questions are crafted by experienced educators and subject matter experts 
                      who understand exam patterns inside-out.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card hover:shadow-premium transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                    <p className="text-muted-foreground">
                      Over 50,000 students have improved their scores and achieved their goals using 
                      Merit Launchers' comprehensive test series.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card hover:shadow-premium transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
                    <p className="text-muted-foreground">
                      We constantly update our question bank, improve our analytics, and enhance user 
                      experience based on student feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Message (Optional) */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-primary p-1 rounded-lg">
                <div className="bg-background p-8 rounded-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Message from Our Founders</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    "We started Merit Launchers with a simple belief: every student deserves access to 
                    quality exam preparation tools, regardless of their financial situation. Having 
                    experienced the challenges of competitive exams firsthand, we understood the importance 
                    of practice and the burden of expensive test series."
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    "Today, we're proud to serve thousands of students across India, helping them identify 
                    their strengths, work on their weaknesses, and ultimately launch their merit. Your 
                    success is our success, and we're committed to making this journey as smooth and 
                    affordable as possible."
                  </p>
                  <div className="mt-6 text-right">
                    <p className="font-semibold">- The Merit Launchers Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
