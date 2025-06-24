
import { Code, Globe, Smartphone, Zap, Star, Award, Coffee } from "lucide-react";

export const About = () => {
  const skills = [
    { icon: Code, title: "Clean Code", description: "Writing maintainable and scalable code", color: "from-cyan-400 to-blue-500" },
    { icon: Globe, title: "Web Development", description: "Modern web technologies and frameworks", color: "from-purple-400 to-pink-500" },
    { icon: Smartphone, title: "Responsive Design", description: "Mobile-first approach to development", color: "from-green-400 to-emerald-500" },
    { icon: Zap, title: "Performance", description: "Optimized and fast loading applications", color: "from-yellow-400 to-orange-500" },
  ];

  const stats = [
    { icon: Star, number: "15+", label: "Projects Completed" },
    { icon: Award, number: "1+", label: "Years Experience" },
    { icon: Coffee, number: "∞", label: "Cups of Coffee" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Star className="text-cyan-400" size={20} />
            <span className="text-cyan-400 font-medium">About Me</span>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-cyan-400 to-purple-600 bg-clip-text text-transparent mb-10">
            Crafting Digital Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Passionate Developer from 🇲🇦 Morocco
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    At 20 years old, I bring fresh perspectives and innovative solutions to web development. 
                    My journey started with curiosity and evolved into a passion for creating beautiful, 
                    functional digital experiences.
                  </p>
                  <p>
                    I specialize in modern front-end technologies including React, TypeScript, and Tailwind CSS. 
                    Every project is an opportunity to push boundaries and learn something new.
                  </p>
                  <p>
                    Based in the vibrant culture of Morocco, I blend traditional creativity with 
                    cutting-edge technology to deliver exceptional web solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <stat.icon className="text-cyan-400" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.title} 
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-300" 
                     style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-300 transform group-hover:-translate-y-2`}>
                  <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{skill.title}</h4>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
