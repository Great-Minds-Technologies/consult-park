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
            <h2 className="service-title">Service Page</h2>

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
                    With our hundreds or workers all across the globe we are able to provide and
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Admin Support</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Sales & Lead Generation</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Accounting & Bookkeeping</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Social Media & Digital Marketing</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            
        </div>
    );
}
    
export default Services;