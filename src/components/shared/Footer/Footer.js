import React, { useState } from 'react';
import { Col, Container, Row, Nav, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faYoutube, faApple, faGooglePlay, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import { HashLink } from 'react-router-hash-link';
import { useForm } from 'react-hook-form';



const Footer = () => {
    const apple = <FontAwesomeIcon icon={faApple} className="apple-icon " />
    const playstore = <FontAwesomeIcon icon={faGooglePlay}
        className="play-icon " />
    const map = <FontAwesomeIcon icon={faMapMarkerAlt}
        className="map-icon" />
    const mail = <FontAwesomeIcon icon={faEnvelope}
        className="mail-icon" />
    const chat = <FontAwesomeIcon icon={faFacebookMessenger}
        className="chat-icon" />
    const text = <FontAwesomeIcon icon={faComment}
        className="text-icon" />
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit,  reset } = useForm();


    const onSubmit = data => {
        fetch('http://localhost:5000/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) { 
                    reset()
                }
            })
    };

    
    return (
        
        <div>
            <Container fluid className="mt-5 pt-5 footer pb-5">
                <div>
                    <Row xs={1} md={3}>
                        <Col className="mt-1">
                            <h4 className="text-white text-start">Contact Us</h4>
                            <p className="text-secondary text-start join">{map}  dhanmondhi 32,Dhaka,Bangladesh</p>
                            <p className="text-secondary text-start join">Shop no 12, floor 2nd ,Basundhara Shopping ComplexDhaka,Bangladesh</p>
                            <p className="text-secondary text-start join">{mail} eyesshades@420.com</p>
                        </Col>
                        <Col className="mt-1">
                            <div className=" user-details">
                                <h4 className="text-start text-white">My Account</h4>
                                <p className="text-start text-secondary">My account</p>
                                <p className="text-start text-secondary">My address</p>

                                <p className="text-start text-secondary">Helps & Support</p>
                                <p className="text-start text-secondary">LogOut</p>
                            </div>
                        </Col>

                        <Col className="mt-1">
                            <h4 className="text-start text-white">Join With Us</h4>

                            <p className="text-start text-secondary join">Get E-mail updates about our latest shop and special offers.</p>
                            <input type="text" placeholder="Enter Email" className="input-footer " />
                            <input type="submit" value="Subscribed" className="input-btn " />

                            <br />
                            <div className="footer-icon">
                                <FontAwesomeIcon icon={faFacebook} className="fb-icon mt-3" />
                                <FontAwesomeIcon icon={faInstagram} className="insta-icon ms-3 mt-3" />
                                <FontAwesomeIcon icon={faYoutube} className="youtube-icon ms-3 mt-3" />
                                <FontAwesomeIcon icon={faGoogle} className="google-icon ms-3 mt-3" />
                            </div>

                        </Col>
                    </Row>
                </div>
                <div className="">
                    <Row xs={1} md={2}>
                        <Col md={6} className="">
                        </Col>
                        <Col md={6} className="">
                            <div className="google-apple">
                                <span> <button className="btn-app"> <span>{apple}</span> <span>Apple Store</span></button> </span>
                                <span> <button className="btn-app"> <span>{playstore}</span> <span>Google Play</span></button> </span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Nav.Link as={HashLink} to="/home#top">
                    <button className="top-btn me-5">Back to Top</button>
                </Nav.Link>
                <p className="text-center w-100 text-secondary mt-3">copyright © design in 2021 by
                    <a href="https://github.com/MasudRana924" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white"> Masud Rana </a>
                </p>
                <button className="chat-btn" onClick={handleShow} >{chat}</button>
                <Offcanvas placement="end" show={show} onHide={handleClose} className="chat-section w-25" >
                    <Offcanvas.Header closeButton className="chat-header">
                        <Offcanvas.Title>{text} Start Chatting </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <form className="chat-form  " onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue="" {...register("name")} placeholder="Your name" />
                            <input placeholder="Your email" defaultValue="" {...register("email", { required: true })} />
                            <input defaultValue="" {...register("name")} placeholder="Your messages" className="message-field" />


                            <input type="submit" className="send-btn text-white" />
                        </form>
                        
                      
                    </Offcanvas.Body>
                </Offcanvas>


            </Container>
           
        </div>
    );
};

export default Footer;