import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions? Need help? We're here for you. Reach out and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information Cards */}
              <div className="space-y-6">
                <Card className="shadow-card hover:shadow-premium transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Email Us</CardTitle>
                    <CardDescription>Send us your queries anytime</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:contact@meritlaunchers.com" className="text-primary hover:underline font-medium">
                      contact@meritlaunchers.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      We typically respond within 24 hours
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-premium transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle>Call Us</CardTitle>
                    <CardDescription>Speak with our support team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+911234567890" className="text-primary hover:underline font-medium">
                      +91 123 456 7890
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Mon-Sat: 9:00 AM - 7:00 PM IST
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-premium transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle>Visit Us</CardTitle>
                    <CardDescription>Our office location</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      New Delhi, India<br />
                      Pin: 110001
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-premium transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Working Hours</CardTitle>
                    <CardDescription>When we're available</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>Monday - Saturday:</strong><br />
                      9:00 AM - 7:00 PM IST<br /><br />
                      <strong>Sunday:</strong><br />
                      Closed
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-premium">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Full Name *</label>
                          <Input placeholder="Enter your name" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email *</label>
                          <Input type="email" placeholder="your@email.com" required />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Phone Number</label>
                          <Input type="tel" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Subject *</label>
                          <Input placeholder="How can we help?" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Message *</label>
                        <Textarea 
                          placeholder="Tell us more about your query..." 
                          rows={6}
                          required 
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full shadow-glow hover:shadow-premium transition-all duration-300">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* App Help Note */}
                <Card className="mt-6 border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Need Immediate Help?</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Download our mobile app for instant support through in-app chat. 
                          Our team is available to help you with test-related queries, 
                          payment issues, or technical problems.
                        </p>
                        <Button variant="outline">Download App</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Connect With <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Follow us on social media for exam updates, preparation tips, and motivational content
              </p>
              <div className="flex justify-center items-center space-x-6">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-card hover:shadow-premium hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-card hover:shadow-premium hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-card hover:shadow-premium hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-card hover:shadow-premium hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
