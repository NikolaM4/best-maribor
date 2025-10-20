import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./components/ThemeProvider";
import { StaggeredMenu } from "./components/reactbits/StaggeredMenu";

import { Footer } from "./components/Footer";
import HomePage from "./pages/Home";
import AboutBest from "./pages/about/AboutBest";
import AboutMaribor from "./pages/about/AboutMaribor";
import Courses from "./pages/events/Courses";
import BSE from "./pages/events/BSE";
import TechnicalDays from "./pages/events/TechnicalDays";
import Hackathons from "./pages/events/Hackathons";
import OtherEvents from "./pages/events/OtherEvents";
import EventGallery from "./pages/events/EventGallery";
import News from "./pages/News";
import NewsPost from "./pages/NewsPost";
import Contact from "./pages/Contact";
import BecomeMember from "./pages/BecomeMember";
import BeginnersGuide from "./pages/BeginnersGuide";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const dockItems = [
  { title: "Home", href: "/" },
  { 
    title: "About", 
    subItems: [
      { title: "About BEST", href: "/about/best" },
      { title: "About Maribor", href: "/about/maribor" },
    ]
  },
  { 
    title: "Events", 
    subItems: [
      { title: "Courses", href: "/events/courses" },
      { title: "BSE", href: "/events/bse" },
      { title: "Technical Days", href: "/events/technical-days" },
      { title: "Hackathons", href: "/events/hackathons" },
      { title: "Other Events", href: "/events/other" },
      { title: "Gallery", href: "/events/gallery" },
    ]
  },
  { title: "News", href: "/news" },
  { title: "Contact", href: "/contact" },
  { title: "Become Member", href: "/become-member", isCTA: true },
  { title: "Beginners Guide", href: "/beginners-guide", isCTA: true },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="flex min-h-screen flex-col">
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about/best" element={<AboutBest />} />
                  <Route path="/about/maribor" element={<AboutMaribor />} />
                  <Route path="/events/courses" element={<Courses />} />
                  <Route path="/events/bse" element={<BSE />} />
                  <Route path="/events/technical-days" element={<TechnicalDays />} />
                  <Route path="/events/hackathons" element={<Hackathons />} />
                  <Route path="/events/other" element={<OtherEvents />} />
                  <Route path="/events/gallery" element={<EventGallery />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/news/:slug" element={<NewsPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/become-member" element={<BecomeMember />} />
                  <Route path="/beginners-guide" element={<BeginnersGuide />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <StaggeredMenu items={dockItems} />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
