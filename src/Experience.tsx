import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">

      <h2 className="experience-heading">Experience</h2>
      <div className="experience-cards">
        <div className="experience-card">
          <h3>Job/Internship</h3>
          <p>
            Short description of the role, focus, or achievement during the job.
            What I worked on or how I contributed to the team.
          </p>
          <Link to="/project1" className="view-link">View Project</Link>

        </div>

        <div className="experience-card">
          <h3>Research</h3>
          <p>
          The ability to gather, analyze, and interpret information to answer questions,
           solve problems, or generate new knowledge
          </p>
          <Link to="/project2" className="view-link">View Project</Link>
        </div>

        <div className="experience-card">
          <h3>Publication</h3>
          <p>
          Lists of my published works, such as books, articles, or papers.
          </p>
          <Link to="/project3" className="view-link">View Project</Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
