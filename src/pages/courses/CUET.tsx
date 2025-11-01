import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Download, FileText, CheckCircle2, Users, GraduationCap, Target, TrendingUp, Award, BarChart } from "lucide-react";

const CUET = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold">National Testing Agency (NTA)</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
              CUET Preparation
            </h1>
            <p className="text-xl text-muted-foreground">
              Common University Entrance Test
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your Gateway to 250+ Central, State, Deemed, and Private Universities Across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download App
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/fee-structure">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">About CUET</h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Common University Entrance Test (CUET-UG) is a national-level computer-based test conducted by the National Testing Agency (NTA) for admission to undergraduate programs offered by Central, State, Deemed, and Private Universities across India.
              </p>
              <p>
                The CUET brings all universities under a single platform, ensuring equal opportunities for every student through one standardized exam.
              </p>
              <p>
                For official details and latest updates, visit the official website:{" "}
                <a href="https://cuet.nta.nic.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                  cuet.nta.nic.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            CUET 2025 — Key Highlights
          </h2>
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden border-primary/20 shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="px-6 py-4 font-semibold text-primary">Conducting Body</td>
                      <td className="px-6 py-4 text-muted-foreground">National Testing Agency (NTA)</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="px-6 py-4 font-semibold text-primary">Mode of Exam</td>
                      <td className="px-6 py-4 text-muted-foreground">Computer Based Test (CBT)</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="px-6 py-4 font-semibold text-primary">Tentative Exam Dates (2025)</td>
                      <td className="px-6 py-4 text-muted-foreground">May 13 – June 3, 2025</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="px-6 py-4 font-semibold text-primary">Eligibility</td>
                      <td className="px-6 py-4 text-muted-foreground">Class 12 passed / appearing from a recognized board</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="px-6 py-4 font-semibold text-primary">Subjects / Sections</td>
                      <td className="px-6 py-4 text-muted-foreground">Languages, Domain-specific subjects, and General Test</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="px-6 py-4 font-semibold text-primary">Question Type</td>
                      <td className="px-6 py-4 text-muted-foreground">Multiple Choice Questions (MCQs)</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="px-6 py-4 font-semibold text-primary">Marking Scheme</td>
                      <td className="px-6 py-4 text-muted-foreground">+5 for correct, –1 for incorrect, 0 for unattempted</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="px-6 py-4 font-semibold text-primary">Duration</td>
                      <td className="px-6 py-4 text-muted-foreground">60 minutes per subject paper</td>
                    </tr>
                    <tr className="hover:bg-accent/5 transition-colors">
                      <td className="px-6 py-4 font-semibold text-primary">Participating Universities</td>
                      <td className="px-6 py-4 text-muted-foreground">250+ (Central, State, Deemed, and Private)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
                <p className="text-sm text-muted-foreground">
                  Students who have passed or are appearing in Class 12 (or equivalent) are eligible.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Registration</h3>
                <p className="text-sm text-muted-foreground">
                  Completely online via cuet.nta.nic.in. Students may choose up to 6 subjects.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Frequency</h3>
                <p className="text-sm text-muted-foreground">
                  Conducted once every year, usually between May–June.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Practice Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Practice CUET with Merit Launchers?
              </h2>
              <p className="text-lg text-muted-foreground">
                Preparing yourself with the Merit Launchers App ensures you experience CUET exactly the way it is conducted by NTA — and much more
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">10+ Full-Length Mock Tests</h3>
                <p className="text-muted-foreground">
                  Minimum 10 mock tests per subject following the latest NTA patterns.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Results & Analytics</h3>
                <p className="text-muted-foreground">
                  Know your exact score/percentile and weak areas immediately after test submission.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">All-India Ranking System</h3>
                <p className="text-muted-foreground">
                  Compare your performance with other aspirants nationwide.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Affordable Plans</h3>
                <p className="text-muted-foreground">
                  High-quality preparation at a nominal online fee.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Solution Review Mode</h3>
                <p className="text-muted-foreground">
                  See detailed answers after each test to learn from mistakes.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real Test Interface</h3>
                <p className="text-muted-foreground">
                  Experience CUET exactly as conducted by NTA.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Free Mock Test Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
              <span className="text-primary font-semibold">Try Before You Decide</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Get One Free Mock Test!</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take one full CUET mock test absolutely free on the Merit Launchers App. Experience the real test interface, scoring pattern, and analytics — without paying a rupee.
            </p>
            <div className="pt-6">
              <Button size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Start Your Free Test
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How does it work?</h2>
            <div className="space-y-6">
              {[
                { step: "1", text: "Download and install the Merit Launchers App" },
                { step: "2", text: "Register using your email or phone number" },
                { step: "3", text: "Choose the CUET Course" },
                { step: "4", text: "Attempt your Free Mock Test instantly" },
                { step: "5", text: "View your score, solution, and national ranking" },
                { step: "6", text: "Upgrade to access a minimum of 10 full subject-wise test papers and continue your preparation journey" }
              ].map((item) => (
                <Card key={item.step} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    <p className="text-lg">{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Official Resources Section */}
      <section className="py-20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Official CUET Resources</h2>
            <p className="text-lg text-muted-foreground">
              For official exam notifications, syllabus, sample papers, and bulletins, visit the National Testing Agency's official CUET portal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" variant="outline" asChild>
                <a href="https://cuet.nta.nic.in" target="_blank" rel="noopener noreferrer">
                  Visit Official Website
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/fee-structure">View Fee Structure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Start Now
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't wait for the exam announcement — start preparing today with India's smartest online test series.
            </p>
            <p className="text-lg text-muted-foreground font-semibold">
              Evaluate. Improve. Excel.
            </p>
            <div className="pt-6">
              <Button size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download the Merit Launchers App
              </Button>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Begin your journey. Experience smart preparation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CUET;
