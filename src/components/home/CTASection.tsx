import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, CheckCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Animated Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">Start Your Journey Today</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.1s" }}>
            Ready to Launch Your Merit?
          </h2>

          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Join thousands of successful students who transformed their exam preparation 
            with Merit Launchers. Start with a completely free mock test today!
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-medium">No Credit Card Required</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-medium">Instant Access to Free Test</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm font-medium">Full Analytics & Solutions</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up mb-12" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              variant="secondary"
              className="shadow-premium hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 hover:scale-105"
              asChild
            >
              <Link to="/courses/cuet">
                <Zap className="mr-2 h-5 w-5" />
                Get Free Mock Test
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary transition-all duration-300"
              asChild
            >
              <Link to="/about">
                View All Courses
              </Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/80">Free to Start</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">1</div>
              <div className="text-sm text-white/80">Free Test</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80">Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">∞</div>
              <div className="text-sm text-white/80">Practice Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
