import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "MBA (PGP)",
      institute: "Indian Institute of Management – Bangalore (IIM B)",
      year: "2017",
      highlights: [
        "Grade Pt.- Competitive Marketing Strategy (3.73)",
        "Advertisement and Promotion for Customer Engagement (3.52)"
      ]
    },
    {
      degree: "Bachelor of Technology - IT",
      institute: "AKG Engineering College - Ghaziabad",
      year: "2012",
      highlights: []
    }
  ];

  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3>{edu.degree}</h3>
              <span className="year">{edu.year}</span>
            </div>
            <div className="institute">{edu.institute}</div>
            {edu.highlights.length > 0 && (
              <ul className="highlights">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 