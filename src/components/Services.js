import './Services.css';
import { Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import virtualStaff from '../assets/images/VirtualStaff.jpg';
import bookkeeping from '../assets/images/Bookkeeping.jpg';
import sales from '../assets/images/Sales.jpg';
import admin from '../assets/images/Admin.jpg';
import Carousel from 'react-bootstrap/Carousel';

const Services = () => {
    return (
        <div className='services-container'>
            <h2 className="service-title">Our Professional Services</h2>

            <div className='services-carousel-container'>
                <Carousel className='services-carousel' indicators={false}>
                  <Carousel.Item className='service-item'>
                    <img src={virtualStaff} />
                    <div className='services-caption'>
                        <div className='service-title-container'>
                            <h2>Virtual Staffing Solutions</h2>
                        </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item className='service-item'>
                    <img src={admin} />
                    <div className='services-caption'>
                        <div className='service-title-container'>
                            <h2>Admin Support</h2>
                        </div>
                    </div>
                  </Carousel.Item>
                  
                  <Carousel.Item className='service-item'>
                    <img src={sales} />
                    <div className='services-caption'>
                        <div className='service-title-container'>
                            <h2>Sales & Lead Generation</h2>
                        </div>
                    </div>
                  </Carousel.Item>
                  
                  <Carousel.Item className='service-item'>
                    <img src={bookkeeping} />
                    <div className='services-caption'>
                        <div className='service-title-container'>
                            <h2>Accounting & Bookkeeping</h2>
                        </div>
                    </div>
                  </Carousel.Item>
                  
                  <Carousel.Item className='service-item'>
                    <img src={virtualStaff} />
                    <div className='services-caption'>
                        <div className='service-title-container'>
                            <h2>Social Media & Digital Marketing</h2>
                        </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
            </div>

            <Accordion className='services-accordion'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Virtual Staffing Solutions</Accordion.Header>
                <Accordion.Body>
                Hire top-tier virtual assistants tailored to your specific business needs. Whether you need someone part-time or full-time, our virtual staffing service connects you with skilled professionals who seamlessly integrate into your workflow. From administrative tasks to project coordination, we provide reliable talent to help you scale efficiently.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Admin Support</Accordion.Header>
                <Accordion.Body>
                Free up your time by letting our admin support team handle your day-to-day tasks. Services include calendar management, email handling, data entry, customer support, file organization, and more. Get the help you need to stay organized and focused on strategic goals.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Sales & Lead Generation</Accordion.Header>
                <Accordion.Body>
                Drive your business growth with targeted sales strategies and lead generation services. We help you identify high-potential leads, conduct outreach, set appointments, and manage customer pipelines—accelerating your conversion rate and increasing revenue opportunities.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Accounting & Bookkeeping</Accordion.Header>
                <Accordion.Body>
                Stay on top of your financials with our professional bookkeeping and accounting services. We offer expense tracking, invoicing, payroll, tax preparation support, and financial reporting. Our experts ensure your books are accurate and compliant, giving you peace of mind.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Social Media & Digital Marketing</Accordion.Header>
                <Accordion.Body>
                Grow your online presence with strategic digital marketing solutions. From content creation and social media management to paid ad campaigns and SEO optimization, we help you build a brand, attract followers, and convert engagement into real business results.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
        </div>
    );
}
    
export default Services;