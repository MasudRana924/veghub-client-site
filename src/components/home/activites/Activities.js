import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Activities.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faDollarSign,faHeadset } from '@fortawesome/free-solid-svg-icons'

const Activities = () => {
    const shipping = <FontAwesomeIcon icon={faShippingFast} className="shipping-icon" />
    const dollar = <FontAwesomeIcon icon={faDollarSign} className="dollar-icon" />
    const head = <FontAwesomeIcon icon={faHeadset} className="dollar-icon" />
    return (
        <Container fluid  className="mt-5 pt-5 pb-5">
            <h3 className="text-dark text-center fw-bold ">Our Services </h3>
            <Row xs="1" md="3" className="mt-5 pt-5">
                <Col className="mt-3">
                   <div className="activities-card">
                      <p className="shipping ">{shipping}</p> 
                       <h4>Free Shipping</h4>
                       <p>Shipping on orders over 1000Tk</p>

                   </div>
                </Col>
                <Col className="mt-3">
                <div className="activities-card-two">
                <p className="shipping ">{head}</p> 
                       <h4>Special Rate & Support</h4>
                       <p>get extra 5% every month</p>

                   </div>
                </Col>
                <Col className="mt-3">
                <div className="activities-card-three">
                <p className="shipping ">{dollar}</p> 
                       <h4>Money Back</h4>
                       <p>within 1 day if products are not fresh</p>

                   </div></Col>
            </Row>
        </Container>
    );
};

export default Activities;