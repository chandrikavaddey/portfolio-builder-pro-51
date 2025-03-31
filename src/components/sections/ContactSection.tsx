
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SparkleEffect from '@/components/ui/sparkle-effect';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-portfolio-purple">Touch</span></h2>
        <div className="h-1 w-20 bg-portfolio-purple mx-auto mb-10 rounded-full"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="text-portfolio-purple mr-4" size={24} />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-300">San Francisco, CA, United States</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-portfolio-purple mr-4" size={24} />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-300">vaddey.sesha@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-portfolio-purple mr-4" size={24} />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-5">
              <SparkleEffect>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-portfolio-dark-gray p-3 rounded-full text-white hover:text-portfolio-purple transition-colors border border-portfolio-purple/30 hover:border-portfolio-purple">
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </a>
              </SparkleEffect>
              <SparkleEffect>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-portfolio-dark-gray p-3 rounded-full text-white hover:text-portfolio-purple transition-colors border border-portfolio-purple/30 hover:border-portfolio-purple">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </SparkleEffect>
              <SparkleEffect>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-portfolio-dark-gray p-3 rounded-full text-white hover:text-portfolio-purple transition-colors border border-portfolio-purple/30 hover:border-portfolio-purple">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
              </SparkleEffect>
              <SparkleEffect>
                <a href="mailto:vaddey.sesha@example.com" className="bg-portfolio-dark-gray p-3 rounded-full text-white hover:text-portfolio-purple transition-colors border border-portfolio-purple/30 hover:border-portfolio-purple">
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </a>
              </SparkleEffect>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <SparkleEffect>
              <Card className="bg-portfolio-dark-gray border-portfolio-purple/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <Input
                          id="name"
                          className="bg-black border-portfolio-purple/30 focus:border-portfolio-purple w-full"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <Input
                          id="email"
                          type="email"
                          className="bg-black border-portfolio-purple/30 focus:border-portfolio-purple w-full"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                      <Input
                        id="subject"
                        className="bg-black border-portfolio-purple/30 focus:border-portfolio-purple w-full"
                        placeholder="Subject"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <Textarea
                        id="message"
                        className="bg-black border-portfolio-purple/30 focus:border-portfolio-purple w-full min-h-[120px]"
                        placeholder="Your message"
                      />
                    </div>
                    
                    <SparkleEffect>
                      <Button className="w-full bg-portfolio-purple hover:bg-portfolio-light-purple text-white">
                        Send Message
                      </Button>
                    </SparkleEffect>
                  </form>
                </CardContent>
              </Card>
            </SparkleEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
