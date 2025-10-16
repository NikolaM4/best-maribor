import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import AboutBest from "./pages/about/AboutBest";
import AboutMaribor from "./pages/about/AboutMaribor";
import Courses from "./pages/events/Courses";
import BSE from "./pages/events/BSE";
import TechnicalDays from "./pages/events/TechnicalDays";
import Hackathons from "./pages/events/Hackathons";
import OtherEvents from "./pages/events/OtherEvents";
import News from "./pages/News";
import Contact from "./pages/Contact";
import BecomeMember from "./pages/BecomeMember";
import Gallery from "./pages/Gallery";
import BeginnersGuide from "./pages/BeginnersGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/best" element={<AboutBest />} />
                <Route path="/about/maribor" element={<AboutMaribor />} />
                <Route path="/events/courses" element={<Courses />} />
                <Route path="/events/bse" element={<BSE />} />
                <Route path="/events/technical-days" element={<TechnicalDays />} />
                <Route path="/events/hackathons" element={<Hackathons />} />
                <Route path="/events/other" element={<OtherEvents />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/become-member" element={<BecomeMember />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/beginners-guide" element={<BeginnersGuide />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
