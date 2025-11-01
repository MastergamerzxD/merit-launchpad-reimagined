import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, CreditCard, Clock, Shield, TrendingUp } from "lucide-react";

export default function FeeStructure() {
  const appLink = "https://play.google.com/store/apps/details?id=co.robin.qibrw&hl=en";

  const feeData = [
    { course: "CUET (UG) per subject", tests: "10 Full Tests", fee: "₹99 plus Taxes per Subject", freeMock: "Yes" },
    { course: "CLAT (Law)", tests: "10 Full Tests", fee: "₹299 plus Taxes", freeMock: "Yes" },
    { course: "CTET -I", tests: "10 Full Tests each", fee: "₹299 plus Taxes each", freeMock: "Yes" },
    { course: "CTET-II", tests: "10 Full Tests each", fee: "₹299 plus Taxes each", freeMock: "Yes" },
    { course: "JEE (Engineering) per subject", tests: "10 Full Tests", fee: "₹149 plus Taxes", freeMock: "No" },
    { course: "IPMAT (IIMs)", tests: "10 Full Tests", fee: "₹299 plus Taxes", freeMock: "No" },
    { course: "NEET (Medical) per subject", tests: "10 Full Tests", fee: "₹149 plus Taxes", freeMock: "No" },
    { course: "SSC (CGL, CHSL, CPO, etc.)", tests: "10 Full Tests", fee: "₹249 plus Taxes", freeMock: "Yes" },
  ];

  const trustReasons = [
    { icon: Shield, title: "Transparent Pricing", description: "No hidden costs" },
    { icon: CheckCircle, title: "Same Quality Content", description: "For every student" },
    { icon: TrendingUp, title: "Affordable Access", description: "Across all exam categories" },
    { icon: Clock, title: "Regular Updates", description: "Aligned with NTA, SSC, and DSSSB notifications" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                Fee Structure
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Affordable Excellence in Test Preparation
              </p>
              <p className="text-lg text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                At Merit Launchers, our mission is to make high-quality test preparation accessible to every student at the most affordable price.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Each course includes <span className="font-semibold text-foreground">minimum 10 full-length mock tests</span> prepared by expert educators following the latest exam pattern and syllabus.
              </p>
              <p className="text-lg text-muted-foreground">
                Every test simulates real exam conditions — giving you the confidence to perform your best.
              </p>
            </div>
          </div>
        </section>

        {/* Fee Structure Table */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="px-6 py-4 text-left font-semibold">Course</th>
                      <th className="px-6 py-4 text-left font-semibold">Total Mock Tests</th>
                      <th className="px-6 py-4 text-left font-semibold">Fee (₹)</th>
                      <th className="px-6 py-4 text-left font-semibold">Free Mock Test Available</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeData.map((item, index) => (
                      <tr key={index} className="border-b border-border hover:bg-accent/50 transition-colors">
                        <td className="px-6 py-4 font-medium">{item.course}</td>
                        <td className="px-6 py-4">{item.tests}</td>
                        <td className="px-6 py-4 font-semibold text-primary">{item.fee}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            item.freeMock === "Yes" 
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                          }`}>
                            {item.freeMock}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                <span className="font-semibold">Note:</span> Each plan includes unlimited test access, detailed analytics, and full explanations for every question.
              </p>
            </div>
          </div>
        </section>

        {/* Payment & Access */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Payment & Access</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                  <CreditCard className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Secure Online Payments</h3>
                  <p className="text-muted-foreground">UPI, Debit/Credit Card, and Net Banking accepted.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Instant Activation</h3>
                  <p className="text-muted-foreground">Mock tests unlock automatically after payment confirmation.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">E-Receipt</h3>
                  <p className="text-muted-foreground">Automatically generated and sent to your registered email.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                  <Clock className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Access Validity</h3>
                  <p className="text-muted-foreground">Until the end of the ongoing academic/exam cycle.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Mock Test */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Free Mock Test for Every Course</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Before purchasing, attempt one free full-length mock test for any course — experience the interface, instant scoring, and analytics firsthand.
              </p>
              <Button size="lg" variant="default" className="shadow-glow" asChild>
                <a href={appLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Take Free Mock Test
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Refund & Cancellation Policy */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Refund & Cancellation Policy</h2>
              <p className="text-center text-muted-foreground mb-8">
                We value transparency and fairness in all financial transactions. Please review our policy carefully before making a purchase:
              </p>
              <div className="bg-card p-8 rounded-lg shadow-md border border-border space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-sm font-bold">•</span>
                  </div>
                  <p className="text-muted-foreground">Once the test series is activated, no cancellations or refunds can be processed.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-sm font-bold">•</span>
                  </div>
                  <p className="text-muted-foreground">Refunds are allowed only in limited cases, such as duplicate payments or technical issues.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-sm font-bold">•</span>
                  </div>
                  <p className="text-muted-foreground">All refund requests must be made in writing to <a href="mailto:meritlaunchers3@gmail.com" className="text-primary hover:underline font-medium">meritlaunchers3@gmail.com</a> within 7 working days of the transaction.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-sm font-bold">•</span>
                  </div>
                  <p className="text-muted-foreground">Approved refunds are processed within 7–10 working days via the original payment method.</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-6">
                For complete details, please read our full <Link to="/return-policy" className="text-primary hover:underline font-medium">Refund & Cancellation Policy</Link>. We encourage all users to try the free mock test before purchasing any paid series.
              </p>
            </div>
          </div>
        </section>

        {/* Why Students Trust */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Students Trust Our Fee Model</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {trustReasons.map((reason, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <reason.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Smart — Learn Smarter</h2>
              <p className="text-lg md:text-xl mb-10 text-white/90">
                Join thousands of students preparing confidently through the Merit Launchers App. Affordable, accurate, and analytics-driven — your success is just one test away!
              </p>
              <Button size="lg" variant="secondary" className="shadow-premium text-lg px-8 py-6" asChild>
                <a href={appLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Begin Your Journey
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
