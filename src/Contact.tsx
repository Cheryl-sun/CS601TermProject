import React from 'react';
import './styles.css';
import SignatureCanvas from './SignatureCanvas';


const Contact = () => {
  return (
    
    <div className="contact-page" id="contact">
      <header className="navbar">
        <h1 className="logo">Yixuan Sun</h1>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>
      <main className="contact-content">
  {/* Left: form area (purple) */}
  <div className="right-half">
    <form>
      {/* ... your form fields ... */}
    </form>
  </div>

  {/* Right: beige section with heading and image */}
  <div className="left-half">
    <h2>Let’s Work Together</h2>
    <img
      src="/contact.JPG"
      alt="Decorative"
      className="left-image"
    />
  </div>



        {/* Right: form, purple */}
        <div className="right-half">
          <form>
            <label>
              Name (required)
              <div>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
            </label>
            <label>
              Email (required)
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              <input type="checkbox" />
              Sign up for news and updates
            </label>
            <label>
              I'm interested in:
              <select>
                <option value="">Choose one</option>
                <option value="consulting">Consulting</option>
                <option value="design">Design</option>
              </select>
            </label>
            <label>
              Subject (required)
              <input type="text" />
            </label>
            <label>
              Message
              <textarea />
              <SignatureCanvas />


            </label>
            <button type="submit" className="btn-dark">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
