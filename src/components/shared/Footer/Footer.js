import React, { useState } from 'react';
import { Col, Container, Row, Nav, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faYoutube, faApple, faGooglePlay, faFacebookMessenger, } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faEnvelope, faComment, faHome, faSignInAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
import { HashLink } from 'react-router-hash-link';




const Footer = () => {
    const apple = <FontAwesomeIcon icon={faApple} className="apple-icon " />
    const playstore = <FontAwesomeIcon icon={faGooglePlay}
        className="play-icon " />
    const map = <FontAwesomeIcon icon={faMapMarkerAlt}
        className="map-icon" />
    const mail = <FontAwesomeIcon icon={faEnvelope}
        className="mail-icon" />
    const home = <FontAwesomeIcon icon={faHome}
        className="home-icon" />
    const signin = <FontAwesomeIcon icon={faSignInAlt}
        className="home-icon" />
    const usericon = <FontAwesomeIcon icon={faUserAlt}
        className="home-icon" />

  

    return (
        <Container fluid className="mt-5 pt-5 footer pb-5">


            <Container fluid className="footer-header">
                <Row xs="1" md="3">
                    <Col xs="12" className="contact-details mt-1">
                        <h4 className="text-white text-start">Contact Us</h4>
                        <p className="text-secondary text-start join">{map}  dhanmondhi 32,Dhaka,Bangladesh</p>
                        <p className="text-secondary text-start join">Shop no 12, floor 2nd ,Basundhara Shopping ComplexDhaka,Bangladesh</p>
                        <p className="text-secondary text-start join">{mail} eyesshades@420.com</p>
                    </Col>
                    <Col xs="12" className="mt-1">
                        <div className=" user-details">
                            <h4 className="text-start text-white">My Account</h4>
                            <p className="text-start text-secondary">My account</p>
                            <p className="text-start text-secondary">My address</p>

                            <p className="text-start text-secondary">Helps & Support</p>
                            <p className="text-start text-secondary">LogOut</p>
                        </div>
                    </Col>

                    <Col xs="12" className="contact-details mt-1">
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
                <div className="google-apple">
                    <span> <button className="btn-app"> <span>{apple}</span> <span>Apple Store</span></button> </span>
                    <span> <button className="btn-app"> <span>{playstore}</span> <span>Google Play</span></button> </span>
                </div>
                <Nav.Link as={HashLink} to="/home#top">
                    <button className="top-btn me-5">Back to Top</button>
                </Nav.Link>
                <p className="copyright-text w-100 text-secondary mt-3 ">copyright © design in 2021 by
                    <a href="https://github.com/MasudRana924" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white"> Masud Rana </a>
                </p>
            </Container>

            <Container fluid className="footer-section">
                <Row xs="4" >
                    <Col>
                        <Nav.Link href="/">
                            <span>{home}</span>
                            <p className="footer-text">Home</p>
                        </Nav.Link>
                    </Col>
                    <Col>
                        <Nav.Link href="/signup">
                            <span>{signin}</span>
                            <p className="footer-text">SignUp</p>
                        </Nav.Link>
                    </Col>
                    <Col>

                        <Nav.Link href="/login">
                            <span>{signin}</span>

                            <p className="footer-text">Login</p>
                        </Nav.Link>
                    </Col>
                    <Col>

                        <span>{usericon}</span>
                        <p className="footer-text" >Account</p>

                    </Col>
                </Row>

            </Container>

           

        </Container>

    );
};

export default Footer;