import React, { useState } from "react";
import "./Contact.css"; // We'll define the CSS below
import { Container, Col, Row } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const name =e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Container className="contact-us-container">
      <Row>
        <Col md={4} className="contact-columns">
        <div className="contact-us-message">
          <h1 className="contact-title">Consult With Us</h1>
          <h4 className="contact-description">
            We'd love to hear from you! Reach out to us for any inquiries or
            support.
          </h4>
        </div>
        <div className="social-media-icons">

        </div>
        </Col>
        <Col md={{ span: 6, offset: 1 }} className="contact-columns">
          <div className="contact-container">
            <div className="contact-card">
              <h1>Contact Us</h1>
              <p>
                Email us at{" "}
                <a href="mailto:support@fictionalco.com">
                  support@fictionalco.com
                </a>{" "}
                or call <strong>+1 (555) 123-4567</strong>
              </p>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>

              {submitted && (
                <div className="success-message">
                  Thank you! Your message has been submitted.
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
