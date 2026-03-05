import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CLAT from "./pages/courses/CLAT";
import CTET1 from "./pages/courses/CTET1";
import CTET2 from "./pages/courses/CTET2";
import DSSSB from "./pages/courses/DSSSB";
import CUET from "./pages/courses/CUET";
import SSC from "./pages/courses/SSC";
import NEET from "./pages/courses/NEET";
import JEE from "./pages/courses/JEE";
import IPMAT from "./pages/courses/IPMAT";
import ReturnPolicy from "./pages/ReturnPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import OurTeam from "./pages/OurTeam";
import ImportantTips from "./pages/ImportantTips";
import FeeStructure from "./pages/FeeStructure";
import FAQ from "./pages/FAQ";
import ExternalLinks from "./pages/ExternalLinks";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateBlog from "./pages/admin/CreateBlog";
import ManageBlogs from "./pages/admin/ManageBlogs";
import BlogAnalytics from "./pages/admin/BlogAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses/clat" element={<CLAT />} />
            <Route path="/courses/ctet-1" element={<CTET1 />} />
            <Route path="/courses/ctet-2" element={<CTET2 />} />
            <Route path="/courses/dsssb" element={<DSSSB />} />
            <Route path="/courses/cuet" element={<CUET />} />
            <Route path="/courses/ssc" element={<SSC />} />
            <Route path="/courses/neet" element={<NEET />} />
            <Route path="/courses/jee" element={<JEE />} />
            <Route path="/courses/ipmat" element={<IPMAT />} />
            <Route path="/return-policy" element={<ReturnPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/important-tips" element={<ImportantTips />} />
            <Route path="/fee-structure" element={<FeeStructure />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/external-links" element={<ExternalLinks />} />
            <Route path="/videos" element={<Videos />} />
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="create" element={<CreateBlog />} />
              <Route path="manage" element={<ManageBlogs />} />
              <Route path="analytics" element={<BlogAnalytics />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
