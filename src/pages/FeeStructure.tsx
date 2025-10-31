import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Zap, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    course: "CUET",
    price: "₹499",
    original: "₹999",
    tests: "20 Full Tests",
    validity: "6 Months",
    features: [
      "20 Full-length mock tests",
      "Detailed performance analytics",
      "Section-wise & topic-wise analysis",
      "All India rank & percentile",
      "Solutions by experts",
      "Mobile app access",
    ],
  },
  {
    course: "CLAT",
    price: "₹599",
    original: "₹1,199",
    tests: "25 Full Tests",
    validity: "6 Months",
    features: [
      "25 Full-length mock tests",
      "Legal reasoning practice",
      "Detailed performance analytics",
      "All India rank & percentile",
      "Expert solutions",
      "Mobile app access",
    ],
  },
  {
    course: "JEE",
    price: "₹699",
    original: "₹1,499",
    tests: "30 Full Tests",
    validity: "1 Year",
    features: [
      "30 Full-length mock tests",
      "Physics, Chemistry, Maths",
      "Difficulty-wise analysis",
      "All India rank & percentile",
      "Step-by-step solutions",
      "Mobile app access",
    ],
  },
  {
    course: "NEET",
    price: "₹699",
    original: "₹1,499",
    tests: "30 Full Tests",
    validity: "1 Year",
    features: [
      "30 Full-length mock tests",
      "Biology, Chemistry, Physics",
      "NCERT-focused questions",
      "All India rank & percentile",
      "Detailed explanations",
      "Mobile app access",
    ],
  },
  {
    course: "SSC",
    price: "₹399",
    original: "₹799",
    tests: "15 Full Tests",
    validity: "6 Months",
    features: [
      "15 Full-length mock tests",
      "CGL, CHSL, MTS coverage",
      "Detailed performance analytics",
      "All India rank comparison",
      "Expert solutions",
      "Mobile app access",
    ],
  },
  {
    course: "DSSSB",
    price: "₹399",
    original: "₹799",
    tests: "15 Full Tests",
    validity: "6 Months",
    features: [
      "15 Full-length mock tests",
      "Teaching & non-teaching posts",
      "Detailed analytics",
      "All India rank comparison",
      "Expert solutions",
      "Mobile app access",
    ],
  },
  {
    course: "IPMAT",
    price: "₹599",
    original: "₹1,199",
    tests: "20 Full Tests",
    validity: "6 Months",
    features: [
      "20 Full-length mock tests",
      "Quantitative & verbal aptitude",
      "Detailed performance analytics",
      "All India rank & percentile",
      "Expert solutions",
      "Mobile app access",
    ],
  },
];

export default function FeeStructure() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Affordable</span> Fee Structure
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Premium quality mock tests at prices that won't break the bank. 
                Plus, get one free mock test for every course!
              </p>
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
                <Zap className="h-5 w-5" />
                <span className="font-semibold">Limited Time Offer - Up to 50% OFF!</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={plan.course}
                  className="relative overflow-hidden group hover:shadow-premium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-warm text-white text-xs font-bold px-3 py-1 rounded-full">
                    50% OFF
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.course}</CardTitle>
                    <CardDescription>{plan.tests} • {plan.validity}</CardDescription>
                    <div className="mt-4">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-primary">{plan.price}</span>
                        <span className="text-lg text-muted-foreground line-through">{plan.original}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="flex flex-col space-y-2">
                    <Button className="w-full shadow-glow hover:shadow-premium transition-all duration-300">
                      Get Started
                    </Button>
                    <Button variant="ghost" className="w-full text-xs">
                      Try 1 Free Test First
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Simple <span className="bg-gradient-primary bg-clip-text text-transparent">Payment Process</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 text-2xl font-bold text-primary">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Choose Your Course</h3>
                  <p className="text-muted-foreground">
                    Select the exam you're preparing for from our course list
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 text-2xl font-bold text-primary">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Complete Payment</h3>
                  <p className="text-muted-foreground">
                    Pay securely via UPI, card, or net banking
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 text-2xl font-bold text-primary">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Start Practicing</h3>
                  <p className="text-muted-foreground">
                    Get instant access to all mock tests in your package
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex items-start space-x-3">
                  <IndianRupee className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">100% Money-Back Guarantee</h3>
                    <p className="text-muted-foreground">
                      Not satisfied? Get a full refund within 7 days, no questions asked. 
                      We're confident you'll love our mock tests!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Mock Test Section */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Zap className="h-16 w-16 mx-auto mb-6 animate-pulse-glow" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Not Sure Yet? Try One Free Mock Test!
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Experience the quality and depth of our mock tests absolutely free. 
                No payment, no credit card required. Just sign up and start practicing!
              </p>
              <Button size="lg" variant="secondary" className="shadow-premium hover:shadow-glow transition-all duration-300 text-lg px-8 py-6">
                Get Your Free Test Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
