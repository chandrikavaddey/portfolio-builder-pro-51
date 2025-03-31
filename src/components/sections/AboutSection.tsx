
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SparkleEffect from '@/components/ui/sparkle-effect';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => (
  <SparkleEffect>
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
  </SparkleEffect>
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
            <p className="text-gray-300 mb-4">
              I'm a Full Stack Python Developer with a passion for Machine Learning. As a recent graduate, I'm excited to apply my knowledge and create innovative solutions.
            </p>
            <p className="text-gray-300">
              My focus is on developing efficient, user-friendly applications using modern web technologies. I'm always eager to learn new skills and explore emerging technologies in the field.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <h3 className="text-2xl font-semibold mb-4">My Experience</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-portfolio-purple pl-4 pb-4">
                <h4 className="text-xl font-medium">Junior Python Developer</h4>
                <p className="text-portfolio-purple">Freelance (2024 - Present)</p>
                <p className="text-gray-300 mt-2">Working on web development projects using Python, Django, and React.</p>
              </div>
              
              <div className="border-l-2 border-portfolio-purple pl-4 pb-4">
                <h4 className="text-xl font-medium">Computer Science Graduate</h4>
                <p className="text-portfolio-purple">University of Technology (2020 - 2024)</p>
                <p className="text-gray-300 mt-2">Bachelor of Science in Computer Science with focus on software development and machine learning.</p>
              </div>
              
              <div className="border-l-2 border-portfolio-purple pl-4">
                <h4 className="text-xl font-medium">Web Development Intern</h4>
                <p className="text-portfolio-purple">Tech Solutions (2023)</p>
                <p className="text-gray-300 mt-2">3-month internship focused on frontend development with React and TypeScript.</p>
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
