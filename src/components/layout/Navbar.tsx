
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Set active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-40 transition-all duration-300",
      isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-portfolio-purple hover:scale-105 transition-transform duration-300">Portfolio</a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "nav-link", 
                activeSection === item.href.replace('#', '') && "active",
                "transition-all duration-300 hover:text-portfolio-purple transform hover:translate-y-[-2px]"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white hover:text-portfolio-purple hover:bg-transparent hover:rotate-12 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-black/95 flex flex-col pt-20 px-6 md:hidden transition-all duration-500 ease-in-out z-30",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-medium text-white hover:text-portfolio-purple transition-all duration-300 transform hover:scale-110"
              style={{ 
                opacity: isOpen ? 1 : 0, 
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s` 
              }}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
