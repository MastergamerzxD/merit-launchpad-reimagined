import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/merit-launchers-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <img src={logo} alt="Merit Launchers" className="h-12 w-auto mb-4" />
            <p className="text-sm opacity-90 mb-4">
              Launch Your Future with India's most affordable and comprehensive mock test platform.
            </p>
            <div className="space-y-2">
              <Button variant="outline" className="bg-transparent border-white/30 hover:bg-white/10 w-full" asChild>
                <a href="#" className="flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download App
                </a>
              </Button>
              <Button variant="outline" className="bg-transparent border-white/30 hover:bg-white/10 w-full" asChild>
                <Link to="/fee-structure">Start Free Test</Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all">Home</Link></li>
              <li><Link to="/about" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all">About Us</Link></li>
              <li><Link to="/fee-structure" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all">Fee Structure</Link></li>
              <li><Link to="/blog" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all">Blog</Link></li>
              <li><Link to="/contact" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses/cuet" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all">CUET Mock Tests</Link></li>
              <li><Link to="/courses/clat" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all">CLAT Preparation</Link></li>
              <li><Link to="/courses/jee" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all">JEE Practice Tests</Link></li>
              <li><Link to="/courses/neet" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all">NEET Mock Series</Link></li>
              <li><Link to="/courses/ssc" className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all">SSC Exams</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm opacity-90">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contact@meritlaunchers.com" className="hover:text-primary transition-colors">
                  contact@meritlaunchers.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm opacity-90">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center space-x-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-75">
              © {currentYear} Merit Launchers. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm opacity-75">
              <Link to="/privacy" className="hover:opacity-100 hover:text-primary transition-all">Privacy Policy</Link>
              <Link to="/terms" className="hover:opacity-100 hover:text-primary transition-all">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
