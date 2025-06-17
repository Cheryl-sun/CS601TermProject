import React, { useState } from 'react';
import './styles.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-left">
        <h2 className="faq-title">FAQ</h2>

        <div className="faq-item" onClick={() => toggle(0)}>
          <h3>When can I start working?</h3>
          <span>{openIndex === 0 ? '-' : '+'}</span>
          {openIndex === 0 && (
            <p>
             I can start working sooner from this October, after getting the ead card. Also, I don't need sponsorship in the future. 
            </p>
          )}
        </div>

        <div className="faq-item" onClick={() => toggle(1)}>
          <h3>What Are My skills?</h3>
          <span>{openIndex === 1 ? '-' : '+'}</span>
          {openIndex === 1 && <p>I am skilled at collaborating with cross-functional teams to tackle complex problems, 
            leveraging my expertise in data analysis, software development, and multilingual communication. 
            I have hands-on experience optimizing scripts in R, Python, Java, JavaScript, C/C++, and SQL for efficient 
            data processing and automation. My strengths include data aggregation, cleaning, visualization, and applying 
            machine learning techniques to extract actionable insights. Additionally, I am fluent in Chinese and Japanese, 
            with experience in technical and professional translation.
</p>}
        </div>

        <div className="faq-item" onClick={() => toggle(2)}>
          <h3>Can you accept relocate?</h3>
          <span>{openIndex === 2 ? '-' : '+'}</span>
          {openIndex === 2 && <p>To be honestly, I prefer to stay in New York but if the opportunity is really precise, 
            I would like to relocate. </p>}
        </div>
      </div>

      <div className="faq-right">
        <img src="/faq.png" alt="Typing on a laptop" className="faq-image" />
      </div>
    </section>
  );
};

export default FAQ;
