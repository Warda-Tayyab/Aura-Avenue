import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import './CSS/About.css'


const About = () => {
  return (
    <div className="about-container">
      <section className="intro">
        <h1>Welcome to Aura Avenue</h1>
        <p>
          Aura Avenue is where passion meets fashion. We offer carefully curated collections to 
          bring style and comfort to your doorstep.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To provide our customers with unique and trendy products, while ensuring quality, 
          comfort, and affordability.
        </p>
      </section>

      <section className="story">
        <h2>Our Story</h2>
        <p>
          What started as a small local store has now become an online platform that reaches 
          customers all over the world. From humble beginnings to becoming a loved brand, 
          we are proud of the journey that has shaped us into who we are today.
        </p>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="path/to/image1.jpg" alt="Founder" />
            <h3>Baskin Robin</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="member">
            <img src="path/to/image2.jpg" alt="Co-Founder" />
            <h3>John Doe</h3>
            <p>Co-Founder</p>
          </div>
          {/* Add more team members here */}
        </div>
      </section>

     
    </div>
  );
};

export default About;
