import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Download, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Start Your Free Test Today
          </h2>

          <p className="text-lg md:text-xl mb-10 text-white/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            No credit card required. Get instant access to one complete mock test for any exam of your choice. 
            Experience the Merit Launchers difference for free!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              variant="secondary"
              className="shadow-premium hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
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
              className="text-lg px-8 py-6 border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/80">Free Test</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-1">0₹</div>
              <div className="text-sm text-white/80">To Start</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80">Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
