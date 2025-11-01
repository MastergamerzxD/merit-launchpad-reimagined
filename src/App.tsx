import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import FeeStructure from "./pages/FeeStructure";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CLAT from "./pages/courses/CLAT";
import CTET1 from "./pages/courses/CTET1";
import CTET2 from "./pages/courses/CTET2";
import DSSSB from "./pages/courses/DSSSB";
import CUET from "./pages/courses/CUET";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/clat" element={<CLAT />} />
          <Route path="/courses/ctet-1" element={<CTET1 />} />
          <Route path="/courses/ctet-2" element={<CTET2 />} />
          <Route path="/courses/dsssb" element={<DSSSB />} />
          <Route path="/courses/cuet" element={<CUET />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
