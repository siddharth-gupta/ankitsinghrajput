import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Category Manager",
      company: "Amazon",
      period: "Feb 2024 – Present",
      description: [
        "Managing PC Accessories gaming and non-gaming portfolio of INR 1.4k crore whilst driving category growth initiatives, improved profitability, customer experience and seller experience",
        "Drove 11% YoY growth for PC Accessories (2x v/s industry), improved profitability by 48bps, achieved 33% market share",
        "Collaborated with Account Management, Finance, Product, Marketing, Advertising & Cataloging teams to deliver best in class selection and experience for customers",
        "Leading selection charter for PC category to add high speed meaningful selection; achieved 13% selection efficiency YoY",
        "Designed programs with account management team to accelerate sellers' growth & improve experience with category insights"
      ]
    },
    {
      title: "Senior Program Manager (Services Category)",
      company: "Amazon",
      period: "Aug 2022 – Feb 2024",
      description: [
        "Head of customer experience for services in 35+ categories with INR 95bn+ of product GMS",
        "Conceptualized and executed customer experience improvement plan for 2023 achieving 20% reduction in customer contacts, 35% reduction in time-to-service, and 0.27star improvement in ratings",
        "Presented business case for Live Promoter Support capability driving 6.7% uplift in conversions",
        "Managed launch of new supply chain partner for in-warranty spare part management"
      ]
    },
    {
      title: "Revenue Management - Route",
      company: "AirAsia India (Air India Express)",
      period: "Oct 2021 – Aug 2022",
      description: [
        "Managed Passenger Revenue Strategy for India network (INR 4Bn, 17 stations, 52 markets)",
        "Handled revenue products; collaborating with Sales and Marketing functions",
        "Led team of 8 analysts; worked with Network planning and Operations teams"
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <div className="company-info">
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
            </div>
            <ul className="responsibilities">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 