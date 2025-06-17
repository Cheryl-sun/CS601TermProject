import React from 'react';
import { Link } from 'react-router-dom';

const Project2 = () => {
  return (
    <div style={{ padding: '4rem', backgroundColor: '#fffbe6', textAlign: 'center' }}>
      <h1>RESEARCH EXPERIENCE</h1>
      <p>Undergraduate Innovation and Entrepreneurship Training: Design and Research of Urban Air Quality Forecast
System Based on Machine Learning 06/2022-05/2023
Core Member; Supervisor: Prof. Yan Xiang (AHU)
• Dedicated to proposing a time series model based on machine learning for predicting urban air quality trends.
• Employed Python as the primary programming language, SQL Database for the storage of data, tableau for visualization
data.
• Implemented regression algorithms to construct air quality prediction models, including linear regression, logistic
regression, support vector regression (SVR), decision tree regression, etc.
• Applied deep learning algorithms like recurrent neural networks (RNN), convolutional neural networks (CNN), and
transformer models to solve complex time series and image data in the project.</p>

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

export default Project2;
