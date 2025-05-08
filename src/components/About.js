import React from 'react';
import { Lightbulb, Handshake, Rocket, Globe, Icon } from 'lucide-react';
import './About.css';
import IconCard from './IconCard';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <section className="about-section">
        <h2 className="about-subtitle">Who We Are</h2>
        <p>
          Consult Park is more than just an outsourcing company—we’re your growth partner. Our
          mission is to bridge businesses with skilled professionals, helping them scale faster, work
          smarter, and achieve more. <br /> <br />
          With a network of highly trained professionals, cutting-edge tools, and a client-first approach,
          we deliver solutions that enhance productivity, efficiency, and profitability.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Our Mission & Vision</h2>
        <p>
          Our mission is simple: Empower businesses with seamless outsourcing solutions that
          drive success.
        <br /> <br />
          We envision a world where businesses of all sizes can access high-quality, cost-effective talent
          without the constraints of location or infrastructure.
        <br /> <br />
          <strong>Mission:</strong> Empower businesses globally by connecting them with skilled virtual teams, driving
          efficiency, collaboration, and growth, while creating impactful career opportunities for
          professionals.
        <br /> <br />
          <strong>Vision:</strong> To become the premier outsourcing partner, transforming global workforce solutions and
          fostering sustainable growth and innovation for businesses and communities worldwide.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Our Values</h2>
        <div className="values-grid">
          <IconCard 
          icon={<Lightbulb size={48} className="value-icon yellow hover-scale" />} 
          title={"Excellence"} 
          description={"We uphold the highest standards in everything we do, committed to delivering quality outsourcing solutions and ensuring client satisfaction."} />

          <IconCard 
          icon={<Handshake size={48} className="value-icon blue hover-scale" />} 
          title={"Integrity"} 
          description={"Transparency and trust are at the core of our partnerships, operating with transparency, honesty, and ethical standards in every interaction."} />

          <IconCard 
          icon={<Rocket size={48} className="value-icon red hover-scale" />} 
          title={"Innovation"} 
          description={"We embrace technology and smart solutions to improve efficiency, providing creative and effective strategies for our clients."} />

          <IconCard 
          icon={<Globe size={48} className="value-icon green hover-scale" />} 
          title={"Global Reach"} 
          description={"We connect businesses with top professionals worldwide, helping develop economies through career opportunities internationally"} />
        </div>
      </section>
    </div>
  );
};

export default About;
