import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import banner from '../../../images/bnner.webp'
import './Banner.css'
const Banner = () => {
    return (
        
        <Container fluid className="" >
            <Row xs={1} md={2} className="banner-section ">
                <Col md={4} >
                    <div className="mt-5 pt-5">
                        
                        <h4 className="text-start text-dark fw-bold mt-3">Vegetable 100% Organic</h4>
                        <p className="text-dark text-start">Free Pickup and Delivery Available</p>
                        <Nav.Link as={HashLink} to="/home#menu">
                            <button className="banner-btn">Our Menu</button> </Nav.Link>
                    </div>
                </Col>
                <Col md={8}>
                    <img src={banner} className="banner-image" alt="" />
                </Col>
            </Row>
        </Container>
       
    );
};

export default Banner;