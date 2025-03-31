
import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SparkleEffect from '@/components/ui/sparkle-effect';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-10 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Avatar and profile - moved to the left */}
          <div className="mb-8 lg:mb-0 lg:mr-12 flex flex-col items-center lg:items-start animate-fade-in">
            <SparkleEffect>
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-portfolio-purple bg-portfolio-dark-gray overflow-hidden animate-pulse-glow mb-2">
                <Avatar className="w-full h-full">
                  <AvatarImage src="/lovable-uploads/f87f069d-ed9c-4059-a8a1-4857f33fb1e8.png" alt="Vaddey Sesha" className="object-cover" />
                  <AvatarFallback className="w-full h-full flex items-center justify-center text-portfolio-light-gray text-xl">VS</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-white text-center font-medium mt-1">Profile</p>
            </SparkleEffect>
          </div>

          {/* Text content */}
          <div className="lg:flex-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hey All,
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              I am <span className="text-portfolio-purple">Vaddey Sesha</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-portfolio-purple mb-3">
              Full Stack Python Developer & ML Enthusiast
            </p>
            <p className="text-gray-300 max-w-2xl mb-8">
              A passionate Full-Stack Python Developer and Machine Learning Enthusiast with a fresh perspective as a recent graduate.
            </p>

            {/* Social links with sparkle effect */}
            <div className="flex space-x-6 mb-8">
              <SparkleEffect>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-portfolio-purple transition-colors">
                  <Github size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
              </SparkleEffect>
              <SparkleEffect>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-portfolio-purple transition-colors">
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </SparkleEffect>
              <SparkleEffect>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-portfolio-purple transition-colors">
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </a>
              </SparkleEffect>
              <SparkleEffect>
                <a href="mailto:vaddey.sesha@example.com" className="text-white hover:text-portfolio-purple transition-colors">
                  <Mail size={24} />
                  <span className="sr-only">Email</span>
                </a>
              </SparkleEffect>
            </div>

            {/* CTA Button with sparkle effect */}
            <SparkleEffect>
              <Button
                className="bg-portfolio-purple hover:bg-portfolio-light-purple text-white px-6 py-2 rounded-full"
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Know More
              </Button>
            </SparkleEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
