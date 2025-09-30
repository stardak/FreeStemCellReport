import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import Home from "@/pages/home";
import AboutDoctor from "@/pages/about-doctor";
import StemCellsColombia from "@/pages/stem-cells-colombia";
import CelulasMadreColombia from "@/pages/es/celulas-madre-colombia";
import BlogIndex from "@/pages/blog/index";
import StemCellTourismColombia from "@/pages/blog/stem-cell-tourism-colombia-what-you-need-to-know";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import MedicalDisclaimer from "@/pages/medical-disclaimer";
import CookiePolicy from "@/pages/cookie-policy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-doctor" component={AboutDoctor} />
      <Route path="/stem-cells-colombia" component={StemCellsColombia} />
      <Route path="/es/celulas-madre-colombia" component={CelulasMadreColombia} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/stem-cell-tourism-colombia-what-you-need-to-know" component={StemCellTourismColombia} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/medical-disclaimer" component={MedicalDisclaimer} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ChatWidget />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
