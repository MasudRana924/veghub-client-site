import { Modal } from 'bootstrap';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img1 from '../../../images/offer.webp'
import img2 from '../../../images/offer2.webp'
import './Offer.css'


const Offer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid className=" mx-auto mt-5 pt-5">
            <Row xs="1" md="2">
                <Col xs="12" className="mt-3">
                    <div className="offer-card">
                        <img src={img1} className="img-offer" alt="" />
                    </div>
                </Col>
                <Col xs="12" className="mt-3">
                    <div className="offer-card"  >
                        <img src={img2} className="img-offer" alt="" />
                    </div>
                </Col>
            </Row>
            
        </Container>
    );
};

export default Offer;