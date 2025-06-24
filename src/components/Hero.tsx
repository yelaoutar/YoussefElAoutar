
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Sparkles, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-cyan-400/20 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-12" data-aos="fade-right" data-aos-duration="1000">
            <div className="space-y-8">
              <div className="flex items-center space-x-2 text-cyan-400" data-aos="fade-up" data-aos-delay="200">
                <Sparkles size={20} />
                <span className="text-sm font-medium tracking-widest uppercase">Creative Developer</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white block mb-2" data-aos="fade-up" data-aos-delay="400">Hello, I'm</span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block mb-2" data-aos="fade-up" data-aos-delay="600">
                  Youssef
                </span>
                <span className="text-white block" data-aos="fade-up" data-aos-delay="800">El Aoutar</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed" data-aos="fade-up" data-aos-delay="1000">
                A 20-year-old front-end developer from Morocco, crafting digital experiences 
                that blend creativity with cutting-edge technology.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6" data-aos="fade-up" data-aos-delay="1200">
              <Button size="lg" onClick={()=>window.location.href='#portfolio'} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200">
                <Code className="mr-2" size={20} />
                View My Work
              </Button>
             <Button
  size="lg"
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/Resume_youssef_el_aoutar.pdf'; 
    link.download = 'Youssef_El_Aoutar_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  variant="outline"
  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-200"
>
  <Zap className="mr-2" size={20} />
  Download My Cv
</Button>
            </div>

            
          </div>

          {/* Right side - Professional geometric design */}
          <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
            <div className="relative w-96 h-96 mx-auto">
              {/* Main geometric shape */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 backdrop-blur-sm rounded-3xl transform rotate-12 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl transform -rotate-6"></div>
              <div className="absolute inset-8 bg-slate-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    YA
                  </div>
                  <div className="text-cyan-400 text-lg font-medium">Frontend Developer</div>
                </div>
              </div>

              {/* Floating icons around the main shape */}
              {[
                { icon: Code, position: 'top-0 left-16', delay: 0 },
                { icon: Sparkles, position: 'top-16 right-0', delay: 0.5 },
                { icon: Zap, position: 'bottom-0 right-16', delay: 1 },
              ].map(({ icon: Icon, position, delay }, index) => (
                <div
                  key={index}
                  className={`absolute ${position} w-14 h-14 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 backdrop-blur-sm rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200`}
                  data-aos="zoom-in"
                  data-aos-delay={1000 + delay * 200}
                >
                  <Icon className="text-cyan-400" size={24} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="1600">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-cyan-400 text-sm">Scroll to explore</span>
          <ArrowDown className="text-cyan-400" size={24} />
        </div>
      </div>
    </section>
  );
};
