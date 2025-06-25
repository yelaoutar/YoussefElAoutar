
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/yelaoutar", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/youssef-el-aoutar-1a896733a", label: "LinkedIn" },
    { icon: Mail, href: "mailto:youssefotar@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Got a project in mind?</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. I'm always excited to take on new challenges.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's start a conversation</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Mail className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">youssefotar@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-300">Morocco</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Phone className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Available for</p>
                  <p className="text-gray-300">Freelance & Full-time</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-700 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <social.icon size={18} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <Input 
                placeholder="Email" 
                type="email" 
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
              />
              <Input 
                placeholder="Subject" 
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
              />
              <Textarea 
                placeholder="Your message..." 
                rows={5}
                className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                Send Message
              </Button>
            </CardContent>
          </Card> */}
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2024 Youssef El Aoutar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
