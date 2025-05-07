import React from 'react';
import { Lightbulb, Handshake, Rocket, Globe } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <section className="about-section">
        <h2 className="about-subtitle">Who We Are</h2>
        <p>
          Consult Park is more than just an outsourcing company—we’re your growth partner. Our
          mission is to bridge businesses with skilled professionals, helping them scale faster, work
          smarter, and achieve more.
        </p>
        <p>
          With a network of highly trained professionals, cutting-edge tools, and a client-first approach,
          we deliver solutions that enhance productivity, efficiency, and profitability.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Our Mission & Vision</h2>
        <p>
          Our mission is simple: Empower businesses with seamless outsourcing solutions that
          drive success.
        </p>
        <p>
          We envision a world where businesses of all sizes can access high-quality, cost-effective talent
          without the constraints of location or infrastructure.
        </p>
        <p>
          <strong>Mission:</strong> Empower businesses globally by connecting them with skilled virtual teams, driving
          efficiency, collaboration, and growth, while creating impactful career opportunities for
          professionals.
        </p>
        <p>
          <strong>Vision:</strong> To become the premier outsourcing partner, transforming global workforce solutions and
          fostering sustainable growth and innovation for businesses and communities worldwide.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <Lightbulb size={48} className="value-icon yellow hover-scale" />
            <div>
              <div className="value-title">Excellence</div>
              <p>
                We uphold the highest standards in everything we do, committed to delivering high-quality outsourcing solutions and ensuring client satisfaction.
              </p>
            </div>
          </div>

          <div className="value-card">
            <Handshake size={48} className="value-icon blue hover-scale" />
            <div>
              <div className="value-title">Integrity</div>
              <p>
                Transparency and trust are at the core of our partnerships, operating with transparency, honesty, and ethical standards in every interaction.
              </p>
            </div>
          </div>

          <div className="value-card">
            <Rocket size={48} className="value-icon red hover-scale" />
            <div>
              <div className="value-title">Innovation</div>
              <p>
                We embrace technology and smart solutions to improve efficiency, providing creative and effective strategies for our clients.
              </p>
            </div>
          </div>

          <div className="value-card">
            <Globe size={48} className="value-icon green hover-scale" />
            <div>
              <div className="value-title">Global Reach</div>
              <p>
                We connect businesses with top-tier professionals worldwide, contributing to economic development through career opportunities and international collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
