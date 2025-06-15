
import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: Linkedin, href: "https://linkedin.com/in/sumit-kumar-70a6a1259", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/sumitraj02", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Navbar: React.FC = () => (
  <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
    <nav className="flex items-center justify-between max-w-screen-2xl mx-auto px-8 py-3">
      <a href="#home" className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/d929bc44-15ce-4aa8-b642-70be8b649f7b.png" 
          alt="Sumit Kumar Headshot"
          className="h-9 w-9 rounded-full border border-gray-300 object-cover"
        />
        <span className="font-bold text-lg text-navy hidden sm:inline">Sumit Kumar</span>
      </a>
      <ul className="hidden md:flex gap-8 text-base font-medium text-gray-700">
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-teal transition-colors">{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <a 
          href="/lovable-uploads/resume.pdf" 
          download 
          className="hidden md:inline px-4 py-2 mr-2 rounded bg-teal text-white font-semibold shadow-sm hover:bg-navy transition-colors"
        >View Resume</a>
        {SOCIALS.map(({icon: Icon, href, label}) => (
          <a 
            key={label}
            href={href}
            className="inline-block hover:scale-110 transition"
            target="_blank" rel="noopener noreferrer" aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </nav>
  </header>
);

export default Navbar;
