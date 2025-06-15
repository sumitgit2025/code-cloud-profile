
import React from "react";

const CERTS = [
  "AWS Academy Cloud Foundations (EduSkills & AICTE NEAT)",
  "Google for Developers AI/ML Virtual Internship",
  "Hackfest Hackathon Participation",
  "Core Member, CodeSpace Club"
];

const SectionCertifications: React.FC = () => (
  <section id="certifications" className="max-w-4xl mx-auto py-20 px-4" style={{scrollMarginTop:70}}>
    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Certifications & Achievements</h2>
    <ul className="space-y-4 text-lg">
      {CERTS.map(cert => (
        <li key={cert} className="flex items-center gap-3">
          <span className="w-4 h-4 bg-accent rounded-full inline-block"></span>
          <span>{cert}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default SectionCertifications;
