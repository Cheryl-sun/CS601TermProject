import React from 'react';
import { Link } from 'react-router-dom';

const Project3 = () => {
  return (
    <div style={{ padding: '4rem', backgroundColor: '#fffbe6', textAlign: 'center' }}>
      <h1>PUBLICATION</h1>
      <p>Yixuan Sun, Weipeng Cao, Yuhao Wu, Haigang Zhang, "A Review on Multimodal Zero-Shot Learning," WIREs Data
Mining and Knowledge Discovery (WIREs DMKD), January 2023.
A comprehensive analysis of methodologies in multimodal zero-shot learning (ZSL). Explored domain shifts and bias in
generalized ZSL. Analyzed advanced machine learning models in the zero-shot learning domain, including embedding-
based approaches (e.g., Word2Vec, GloVe), generative models (GANs, VAEs), and pre-trained neural networks (ResNet,
VGG-19).</p>

      {/* ✅ Return button */}
      <Link to="/" className="btn-dark" style={{
        display: 'inline-block',
        marginTop: '2rem',
        padding: '0.8rem 1.5rem',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '2rem',
        textDecoration: 'none'
      }}>
        ← Return to Experience
      </Link>
    </div>
  );
};

export default Project3;
