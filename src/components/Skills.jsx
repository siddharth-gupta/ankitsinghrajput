import React from 'react';
import './Skills.css';

const Skills = () => {
  const categories = [
    "Category Management",
    "Program Management",
    "Revenue Management",
    "Process Excellence",
    "Customer Experience",
    "Partner Experience",
    "Operations Strategy",
    "Business Analytics",
    "Team Leadership",
    "Project Management"
  ];

  return (
    <section className="skills" id="skills">
      <h2>Core Competencies</h2>
      <div className="skills-container">
        {categories.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 