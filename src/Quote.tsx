import React from 'react';
import './styles.css';

const Quote = () => {
  return (
    <section className="quote-section">
      <h2 className="quote-heading">What classmates/fellows are Saying</h2>
      <div className="quote-grid">
        <div className="quote-block">
          <p className="quote-text">
            “Yixuan is so patient and thoughtful. She helped me highlight my work in a way
            that makes me so proud of my unique approach to design.”
          </p>
          <p className="quote-author">Collette Noll, <em>Collette Noll Interior Design</em></p>
        </div>

        <div className="quote-block">
          <p className="quote-text">
            “Being an e-commerce entrepreneur isn’t easy, and Yixuan gave my products the design
            direction they needed to become bestsellers.”
          </p>
          <p className="quote-author">Sofia Pazari, <em>Sofia Pazari Home Goods</em></p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
