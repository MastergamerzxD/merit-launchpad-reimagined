import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, TrendingUp, Users, Bell, Mail, ArrowRight, Sparkles, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const blogPosts = [
  {
    id: 1,
    title: "How to Prepare for CUET 2025 – The Complete Strategy Guide",
    excerpt: "Get detailed insights into CUET's structure, subject priorities, and smart revision techniques to maximize your NTA score. Learn how our mock tests replicate the real exam and boost your percentile.",
    category: "CUET",
    color: "primary"
  },
  {
    id: 2,
    title: "Top 10 Tips to Crack CLAT on the First Attempt",
    excerpt: "Master comprehension, current affairs, and legal reasoning with time management hacks from toppers. See how consistent mock testing through the Merit Launchers App can turn average attempts into excellence.",
    category: "CLAT",
    color: "accent"
  },
  {
    id: 3,
    title: "CTET Paper I & II – Strategy to Qualify Both with Confidence",
    excerpt: "Understand the difference between Paper I and Paper II, their structures, and pedagogy-based preparation methods. Learn how our app's mock tests cover both primary (I–V) and upper-primary (VI–VIII) teaching exams with real-time analysis.",
    category: "CTET",
    color: "secondary"
  },
  {
    id: 4,
    title: "JEE 2025 – Balancing Speed and Accuracy",
    excerpt: "Analyze your JEE performance using smart data insights. Discover question-selection techniques and download our free JEE study planner.",
    category: "JEE",
    color: "primary"
  },
  {
    id: 5,
    title: "NEET 2025 – The Smart Way to Revise Biology & Chemistry",
    excerpt: "Memorizing facts isn't enough — learn how conceptual clarity and repetition through mock testing improve accuracy.",
    category: "NEET",
    color: "accent"
  },
  {
    id: 6,
    title: "IPMAT – The Gateway to IIMs After Class 12",
    excerpt: "Explore IPMAT Indore & Rohtak: exam difficulty, common mistakes, and percentile-boosting strategies.",
    category: "IPMAT",
    color: "secondary"
  },
  {
    id: 7,
    title: "SSC & DSSSB – Government Jobs with Stability & Prestige",
    excerpt: "Why SSC and DSSSB remain top career choices — and how structured practice through Merit Launchers helps you clear Tier I confidently.",
    category: "SSC",
    color: "primary"
  }
];

const categories = ["All", "CUET", "CLAT", "JEE", "NEET", "SSC", "Motivation", "Strategy"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive our weekly updates and tips.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,146,60,0.15),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-primary p-1 rounded-full mb-6 animate-float">
                <div className="bg-background px-6 py-2 rounded-full flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold bg-gradient-primary bg-clip-text text-transparent">
                    Expert Articles & Insights
                  </span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Merit Launchers <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
              </h1>
              
              <p className="text-2xl font-semibold mb-4 text-primary">
                Learn. Prepare. Succeed.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We believe that true preparation isn't only about taking tests — it's about learning smarter, staying informed, and continuously improving your strategy. Get expert-written insights, preparation tips, and the latest updates from the world of entrance and recruitment exams.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-background border-b sticky top-16 z-40 backdrop-blur-sm bg-background/95">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "shadow-glow" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Articles</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Authentic guidance from experienced educators and subject mentors
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                  <article 
                    key={post.id}
                    className="group bg-card rounded-xl shadow-card hover:shadow-premium transition-all duration-300 overflow-hidden border border-transparent hover:border-primary/20"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-2 bg-gradient-primary"></div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-${post.color}/10 text-${post.color}`}>
                          {post.category}
                        </span>
                        <Sparkles className="h-4 w-4 text-primary animate-pulse-glow" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <Button variant="ghost" className="group-hover:text-primary transition-colors p-0" asChild>
                        <Link to="#" className="flex items-center gap-2">
                          Read More
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Read Our Blog */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Why Read <span className="bg-gradient-primary bg-clip-text text-transparent">Our Blog</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-premium transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Authentic Guidance</h3>
                    <p className="text-muted-foreground text-sm">
                      Written by experienced educators and subject mentors
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-premium transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Bell className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Exam Updates</h3>
                    <p className="text-muted-foreground text-sm">
                      Stay informed about notifications, pattern changes, and results
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-premium transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Toppers' Insights</h3>
                    <p className="text-muted-foreground text-sm">
                      Learn strategies that worked for successful aspirants
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-premium transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Performance Tips</h3>
                    <p className="text-muted-foreground text-sm">
                      Apply analytical tools to sharpen speed and accuracy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-premium transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Community Learning</h3>
                    <p className="text-muted-foreground text-sm">
                      Comment, ask questions, and connect with fellow learners
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-premium transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Continuous Updates</h3>
                    <p className="text-muted-foreground text-sm">
                      Fresh content added regularly to keep you ahead
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 animate-pulse-glow">
                <Mail className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold mb-4">
                Stay <span className="bg-gradient-primary bg-clip-text text-transparent">Updated</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Never miss our weekly tips, updates, and motivational posts! Subscribe to our newsletter for the latest articles and preparation resources — delivered straight to your inbox.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" size="lg" className="shadow-glow hover:shadow-premium transition-all duration-300">
                  Subscribe Now
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Write for Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-primary p-1 rounded-2xl">
                <div className="bg-background p-10 rounded-2xl text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Write for <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Are you a student, teacher, or education blogger passionate about exam preparation? Join our <strong>Merit Launchers Writing Community</strong> — share your stories, insights, and learning experiences.
                  </p>
                  
                  <Button size="lg" variant="default" className="shadow-glow hover:shadow-premium transition-all duration-300" asChild>
                    <a href="mailto:meritlaunchers3@gmail.com" className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      meritlaunchers3@gmail.com
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">
                Prepare. Perform. <span className="bg-gradient-primary bg-clip-text text-transparent">Progress.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Learning is continuous — and so is growth. Explore our blogs, follow expert strategies, and prepare smarter with the Merit Launchers App.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-glow hover:shadow-premium transition-all duration-300" asChild>
                  <Link to="/fee-structure">Start Free Test</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
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
