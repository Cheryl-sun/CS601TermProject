import React from 'react';
import { Link } from 'react-router-dom';
import Introduction from './Education';

const Home = () => {
  return (
    <div className="page">
      <header className="navbar">
        <h1 className="logo">Yixuan Sun</h1>
        <nav>
          <Link to="/contact">Projects</Link>
          <a href="#contact" className="btn-dark">Book Consultation</a>

        </nav>
      </header>

      <main className="main-content">
        <div className="text-section">
          <h2>Hey, I’m Yixuan Sun.</h2>
          <p>
          <p>
   I’m a student with a passion for design, development, and technology.
  I enjoy creating clean, purposeful digital experiences that help others express their brand.
</p>

          </p>
          <a href="#experience" className="btn-light">Work with Me</a>

        </div>
        <div className="image-section">
          <img
            src="/Portrait.jpg"
            alt="Portrait"
            className="portrait"
          />
        </div>
      </main>

      {/* ✅ Add this below the homepage content */}
      <Introduction />
    </div>
  );
};

<Link to="/experience" className="btn-light">See Experience</Link>

export default Home;
