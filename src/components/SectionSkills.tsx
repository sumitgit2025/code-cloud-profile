
import React from "react";
import { Code, Database, Cloud, Zap, Bot, GitBranch } from "lucide-react";

const SKILLS = [
  {
    title: "Languages",
    items: ["Java", "C/C++", "Python", "JavaScript", "HTML", "CSS"],
    icon: Code
  },
  {
    title: "Backend",
    items: ["Spring Boot", "REST APIs", "MVC", "Spring Data JPA"],
    icon: Database
  },
  {
    title: "Frontend",
    items: ["ReactJS", "Responsive UI", "Bootstrap"],
    icon: Zap
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDB"],
    icon: Database
  },
  {
    title: "Cloud",
    items: ["AWS", "Google Cloud"],
    icon: Cloud
  },
  {
    title: "DSA & Problem Solving",
    items: ["LeetCode", "GFG", "CodeStudio"],
    icon: Bot
  },
  {
    title: "AI/ML Exposure",
    items: ["Google AI/ML Internship"],
    icon: Bot
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VSCode", "IntelliJ"],
    icon: GitBranch
  },
]

const SectionSkills: React.FC = () => (
  <section id="skills" className="max-w-6xl mx-auto py-20 px-4" style={{scrollMarginTop:70}}>
    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {SKILLS.map((group, j) => (
        <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2" key={group.title}>
          <div className="flex items-center gap-2 mb-2">
            <group.icon className="w-7 h-7 text-teal" />
            <span className="text-lg font-semibold">{group.title}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill, i) => (
              <span key={skill} className="bg-secondary rounded px-3 py-1 text-sm text-navy font-medium">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SectionSkills;
