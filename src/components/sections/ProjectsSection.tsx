
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Image Recognition",
    description: "A machine learning project that identifies and categorizes objects in images using TensorFlow and Python.",
    image: "bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3')] bg-cover bg-center",
    tags: ["Python", "TensorFlow", "Computer Vision", "ML"],
    liveUrl: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment processing.",
    image: "bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3')] bg-cover bg-center",
    tags: ["Django", "React", "PostgreSQL", "Redux"],
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    description: "Interactive dashboard for visualizing financial data and market trends with real-time updates.",
    image: "bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3')] bg-cover bg-center",
    tags: ["D3.js", "Vue.js", "Express", "MongoDB"],
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Smart Home IoT System",
    description: "IoT solution for home automation with a web interface to control connected devices.",
    image: "bg-[url('https://images.unsplash.com/photo-1558002038-2c603124ee4e?ixlib=rb-4.0.3')] bg-cover bg-center",
    tags: ["IoT", "Python", "MQTT", "React"],
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Natural Language Processing API",
    description: "API for text analysis, sentiment detection, and language processing tasks.",
    image: "bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3')] bg-cover bg-center",
    tags: ["NLP", "FastAPI", "Docker", "AWS"],
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Social Media Analytics Tool",
    description: "Tool for analyzing social media engagement and providing actionable insights for marketing teams.",
    image: "bg-[url('https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3')] bg-cover bg-center",
    tags: ["Data Analysis", "Python", "React", "Graph Algorithms"],
    liveUrl: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-portfolio-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My <span className="text-portfolio-purple">Projects</span></h2>
        <div className="h-1 w-20 bg-portfolio-purple mx-auto mb-10 rounded-full"></div>
        
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each project reflects my passion for creating efficient, 
          user-friendly applications and my skills in various technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-portfolio-dark-gray border-portfolio-purple/20 hover:border-portfolio-purple/80 transition-all duration-300 overflow-hidden h-full flex flex-col group animate-fade-in" 
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className={`h-48 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-portfolio-purple transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-black px-2 py-1 rounded-full text-xs border border-portfolio-purple/30 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full border-portfolio-purple/70 text-white hover:bg-portfolio-purple hover:text-white"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Visit Site
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

export default ProjectsSection;
