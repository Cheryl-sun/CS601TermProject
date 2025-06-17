import React from 'react';
import './styles.css';

const Education = () => {
  return (
    <section className="education-section">
      <div className="education-image">
        <img src="/pic1.png" alt="Graduation cap" />
      </div>

      <div className="education-text">
        <h2>Education</h2>

        <h3>Bachelor</h3>
        <p>
          1.Anhui University (AHU), China 09/2020-07/2023
          • Bachelor of Science (B.S.) in Digital Media  <br/>
          2.Stony Brook University (SBU), USA 07/2023-07/2024
          • Bachelor of Science (B.S.) in Information Systems
        </p>

        <h3>Master</h3>
        <p>
        Boston University (BU), USA 09/2024-08/2025
        • Master of Science (M.S.) in Information Systems
        </p>
      </div>
    </section>
  );
};

export default Education;
