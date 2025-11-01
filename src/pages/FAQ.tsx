import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, HelpCircle, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const appLink = "https://play.google.com/store/apps/details?id=co.robin.qibrw&hl=en";

  const faqs = [
    {
      question: "Is there really a free mock test?",
      answer: "Yes, one full mock for each course is free in the app.",
    },
    {
      question: "How do I pay and get access?",
      answer: "Pay online via UPI/cards; tests unlock instantly.",
    },
    {
      question: "Can I get a refund?",
      answer: "Only in limited cases (duplicate/technical). See policy.",
    },
    {
      question: "Will the tests change if NTA/SSC/DSSSB updates pattern?",
      answer: "Yes, we review and update regularly.",
    },
    {
      question: "Do I get solutions and ranking?",
      answer: "Yes, correct answers and all-India ranking are included.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <HelpCircle className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Find answers to common questions about Merit Launchers
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                      Q{index + 1}: {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2">
                      A: {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                You may ask through our e-mail: <a href="mailto:meritlaunchers3@gmail.com" className="text-primary hover:underline font-medium">meritlaunchers3@gmail.com</a>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="default" asChild>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/fee-structure">
                    View Fee Structure
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Begin Your Journey</h2>
              <p className="text-lg md:text-xl mb-10 text-white/90">
                Experience smart preparation with Merit Launchers
              </p>
              <Button size="lg" variant="secondary" className="shadow-premium text-lg px-8 py-6" asChild>
                <a href={appLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download the Merit Launchers App
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
