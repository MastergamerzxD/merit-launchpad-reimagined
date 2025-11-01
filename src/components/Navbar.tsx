import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/merit-launchers-logo.png";

const courses = [
  { name: "CUET", path: "/courses/cuet", description: "Common University Entrance Test" },
  { name: "CLAT", path: "/courses/clat", description: "Common Law Admission Test" },
  { name: "JEE", path: "/courses/jee", description: "Joint Entrance Examination" },
  { name: "NEET", path: "/courses/neet", description: "National Eligibility Entrance Test" },
  { name: "SSC", path: "/courses/ssc", description: "Staff Selection Commission" },
  { name: "DSSSB", path: "/courses/dsssb", description: "Delhi Subordinate Services" },
  { name: "IPMAT", path: "/courses/ipmat", description: "IIM Indore Aptitude Test" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img src={logo} alt="Merit Launchers" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}>
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Courses</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-popover">
                      {courses.map((course) => (
                        <li key={course.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={course.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-semibold leading-none">{course.name}</div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {course.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/fee-structure" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/fee-structure") ? "text-primary" : "text-foreground"}`}>
                    Fee Structure
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-foreground"}`}>
                    About Us
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-foreground"}`}>
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="shadow-sm hover:shadow-md transition-all duration-300" asChild>
                <a href="#" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download App
                </a>
              </Button>
              <Button variant="default" className="shadow-glow hover:shadow-premium transition-all duration-300" asChild>
                <Link to="/fee-structure">Start Free Test</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in border-t">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/") ? "bg-primary/10 text-primary" : "hover:bg-accent"}`}
            >
              Home
            </Link>

            <div className="space-y-2">
              <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">Courses</div>
              {courses.map((course) => (
                <Link
                  key={course.path}
                  to={course.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                >
                  {course.name}
                </Link>
              ))}
            </div>

            <Link
              to="/fee-structure"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/fee-structure") ? "bg-primary/10 text-primary" : "hover:bg-accent"}`}
            >
              Fee Structure
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/about") ? "bg-primary/10 text-primary" : "hover:bg-accent"}`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive("/contact") ? "bg-primary/10 text-primary" : "hover:bg-accent"}`}
            >
              Contact
            </Link>

            <div className="space-y-3">
              <Button variant="outline" className="w-full" asChild>
                <a href="#" className="flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download App
                </a>
              </Button>
              <Button className="w-full shadow-glow" asChild>
                <Link to="/fee-structure">Start Free Test</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
