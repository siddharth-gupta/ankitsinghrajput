import React from 'react';
import './ExtraCurricular.css';

const ExtraCurricular = () => {
  const sections = {
    positions: [
      "Captain, IIMB Carom team, led team of 15, Won Gold medal in Inter IIM sports meet Sangharsh vs IIMA, IIMC, IIML'17",
      "Convener, Scrolls- National level technical paper presentation compt.(780+ synopsis), co-organized by AKGEC & Ghaziabad Management Association, '11",
      "Technical Head (led 32 member team), Tech Trishna, State level Inter college technical festival, 2200+ footfall, AKGEC,'11",
      "Coordinator for ITBT-11, National Conference on IT for Business Transformation, 400+ footfall, conducted in AKGEC, '11"
    ],
    competitions: [
      "National Runners Up, out of 150+ teams, Aditya Birla Group Avant Garde 2.0 Competition; Awarded PPI",
      "Ist Prize, District Level, Market Marathon (quiz event), Tech Trishna, Technical festival, 20 teams, AKGEC, '11"
    ],
    social: [
      "Member, National Service Scheme(NSS); Department of Youth Affairs and Sports, Govt. of India, Jul '05-Mar'07",
      "Volunteer, 20/2000 employees, Organizational CSR activity, 20+ visits, 3 schools, conducted teaching sessions"
    ],
    sports: [
      "IIMB Cricket team member; Won gold medal in Inter IIM Sports Meet – Sangram against IIMK and IIMT, '16",
      "AKGEC Cricket team member; Won gold medal for IT branch in Intra College Sports Meet – Saksham, '11"
    ]
  };

  return (
    <section className="extra-curricular" id="extra-curricular">
      <h2>Additional Activities</h2>
      <div className="activities-container">
        <div className="activity-section">
          <h3>Leadership Positions</h3>
          <ul>
            {sections.positions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="activity-section">
          <h3>Competitions</h3>
          <ul>
            {sections.competitions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="activity-section">
          <h3>Social Activities</h3>
          <ul>
            {sections.social.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="activity-section">
          <h3>Sports Achievements</h3>
          <ul>
            {sections.sports.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular; 