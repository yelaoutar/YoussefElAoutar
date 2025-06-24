
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ImgQ from "../assets/img1.png";
import ImgE from "../assets/img2.png";
import ImgF from "../assets/im3.png";

export const Portfolio = () => {
  const projects = [
    {
      title: "Quiz App",
      description: "An interactive quiz application that allows users to test their knowledge across various topics. The app presents multiple-choice questions, tracks the user’s score, and provides feedback after each answer or at the end of the quiz.",
      image: ImgQ,
      technologies: ["React", "CSS"],
      githubUrl: "https://github.com/yelaoutar/QuizApp",
    },
    {
      title: "E-commers App",
      description: "A modern e-commerce clothing app where users can browse, search, and buy clothes online. Features include product listings, shopping cart, user login, and responsive design.Built entirely with React, offering a fast and interactive user experience.",

      image: ImgE,
      technologies: ["React", "Material-UI"],
     
      githubUrl: "https://github.com/yelaoutar/E-commers",
    },
    {
      title: "Voyage Planner",
      description: "Voyage Planner is a modern travel planning web application built with a React frontend and a Python backend Flask. It allows users to explore destinations, create personalized travel itineraries, manage bookings, and discover travel tips.",
      image: ImgF,
      technologies: ["React", "Material-UI", "Python"],
      githubUrl: "https://github.com/yelaoutar/FlightManagement",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Recent Works</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in front-end development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-colors duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-60"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" onClick={()=> window.location.href = project.githubUrl }  variant="outline" className="border-black-600 text-white-300 hover:bg-black-600">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
