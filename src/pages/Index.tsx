
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </SmoothScroll>
  );
};

export default Index;
