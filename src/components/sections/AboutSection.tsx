
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => (
  <Card className="bg-portfolio-dark-gray border-portfolio-purple/20 hover:border-portfolio-purple/80 transition-colors">
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold mb-4 text-portfolio-purple">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-black px-3 py-1 rounded-full text-sm border border-portfolio-purple/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

const AboutSection = () => {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    backend: ["Python", "Django", "Flask", "Node.js", "Express", "REST API"],
    database: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    ml: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Data Analysis"],
    tools: ["Git", "Docker", "AWS", "CI/CD", "Agile", "Linux"]
  };

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About <span className="text-portfolio-purple">Me</span></h2>
        <div className="h-1 w-20 bg-portfolio-purple mx-auto mb-10 rounded-full"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I'm a Full Stack Python Developer with a passion for Machine Learning. With several years of experience, I've worked on a variety of projects from web applications to data science solutions.
            </p>
            <p className="text-gray-300 mb-4">
              I enjoy solving complex problems and creating efficient, user-friendly applications. My background in both technical development and business gives me a unique perspective on projects.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you might find me exploring new technologies, contributing to open-source, or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <h3 className="text-2xl font-semibold mb-4">My Experience</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-portfolio-purple pl-4 pb-4">
                <h4 className="text-xl font-medium">Senior Python Developer</h4>
                <p className="text-portfolio-purple">TechCorp Inc. (2021 - Present)</p>
                <p className="text-gray-300 mt-2">Leading development of ML-powered web applications and mentoring junior developers.</p>
              </div>
              
              <div className="border-l-2 border-portfolio-purple pl-4 pb-4">
                <h4 className="text-xl font-medium">Full Stack Developer</h4>
                <p className="text-portfolio-purple">DataSystems LLC (2018 - 2021)</p>
                <p className="text-gray-300 mt-2">Built and maintained scalable web applications using Python, Django and React.</p>
              </div>
              
              <div className="border-l-2 border-portfolio-purple pl-4">
                <h4 className="text-xl font-medium">Junior Developer</h4>
                <p className="text-portfolio-purple">StartUp Studio (2016 - 2018)</p>
                <p className="text-gray-300 mt-2">Developed frontend solutions and collaborated on backend services for various clients.</p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-6 text-center">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <SkillCard title="Frontend" skills={skills.frontend} />
          <SkillCard title="Backend" skills={skills.backend} />
          <SkillCard title="Database" skills={skills.database} />
          <SkillCard title="Machine Learning" skills={skills.ml} />
          <SkillCard title="Tools & Others" skills={skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
