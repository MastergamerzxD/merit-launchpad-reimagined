import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.2),transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,146,60,0.2),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Floating Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-8 animate-float shadow-premium">
              <Sparkles className="h-10 w-10 text-white animate-pulse-glow" />
            </div>
            
            {/* Coming Soon Text */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
              Something amazing is on the way
            </p>
            
            {/* Decorative Line */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
