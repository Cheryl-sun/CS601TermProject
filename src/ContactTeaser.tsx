import React from 'react';
import './styles.css';

const ContactTeaser = () => {
  return (
    <section className="contact-teaser">
      <div className="teaser-text">
        <h2>Get in Touch!</h2>
        <p>
  My LinkedIn: <a href="https://linkedin.com/in/yixuan-sun-a34b9a307" target="_blank" rel="noopener noreferrer">
    linkedin.com/in/yixuan-sun-a34b9a307
  </a>
  <br /><br />
  My GitHub: <a href="https://github.com/Cheryl-sun" target="_blank" rel="noopener noreferrer">
    github.com/Cheryl-sun
  </a>
</p>


        {/* ✅ Resume download button */}
        <a
          href="/Yixuan_Resume.pdf"
          className="btn-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      <div className="teaser-image">
        <img src="/teaser.png" alt="Notebook and coffee" />
      </div>
    </section>
  );
};

export default ContactTeaser;
