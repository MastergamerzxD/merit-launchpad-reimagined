import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">One Free Mock Test for Every Course</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Practice Smart.</span>
            <br />
            <span className="text-foreground">Perform Better.</span>
            <br />
            <span className="text-secondary">Launch Your Merit.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            India's most affordable mock test platform for CUET, CLAT, JEE, NEET, SSC, DSSSB & more. 
            Get instant results, detailed analytics, and expert guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="shadow-glow hover:shadow-premium transition-all duration-300 text-lg px-8 py-6 animate-pulse-glow"
              asChild
            >
              <Link to="/courses/cuet">
                <Zap className="mr-2 h-5 w-5" />
                Take Free Mock Test
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:border-primary hover:bg-primary/5"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Our App
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 shadow-card hover:shadow-premium transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-1">50,000+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 shadow-card hover:shadow-premium transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-1">10,000+</div>
              <div className="text-sm text-muted-foreground">Mock Tests</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 shadow-card hover:shadow-premium transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 shadow-card hover:shadow-premium transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-1">7+</div>
              <div className="text-sm text-muted-foreground">Exam Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
