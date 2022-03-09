import React, { useState } from 'react';
import { Col, Container, Nav, Row, Offcanvas } from 'react-bootstrap';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus, faBars, faSearch, faSignOutAlt,faHome,faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import img from '../../../images/logo.jpg'

const Header = () => {
    const { user, admin, products, setDisplayProducts, cart, logOut } = useAuth()
    const heart = <FontAwesomeIcon icon={faHeart} className="cart" />
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
    const search = <FontAwesomeIcon icon={faSearch} className="cart" />
    const arrow = <FontAwesomeIcon icon={faArrowAltCircleDown} className="cart" />
    const bar = <FontAwesomeIcon icon={faBars} className="cart" />
    const signout = <FontAwesomeIcon icon={faSignOutAlt} className="cart" />
    const home = <FontAwesomeIcon icon={faHome} className="cart" />
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    




    return (
        <div id="top">

            <Container fluid className="header">
                <Row xs="1" md="4">
                    <Col md="2">
                        <div>
                            <h1 className="text-success fw-bold fs-1">VegHub</h1>
                        </div>
                    </Col>
                    <Col md="3" className="nav-section">
                        <Nav className="mt-1 pt-1 text-white">
                            <Nav.Link as={HashLink} to="/home" className="text-dark fw-bold  ">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#menu" className="text-dark fw-bold">Shop</Nav.Link>
                            <Nav.Link href="#home" className="text-dark fw-bold">Contact</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md="4" className=" search-section">
                        <div className=" mt-3">
                            <input type="text" placeholder="search" onChange={handleSearch} />

                        </div>
                        <Link to="/dashboard" className="icon-panel"> <button className="iconbtn">
                            {heart}</button>
                        </Link>
                        <Link to="/cart">
                            <button className="iconbtn ">
                                {Cart} <span className="cart-item"> {totalQuantity}</span>
                            </button>
                        </Link>
                    </Col>

                    <Col md="3" className="user-section">
                        {
                            user.email ? <div>

                                <div className="dropdown">

                                    <button class="dropbtn">
                                    {user.email} {arrow}
                                    </button>
                                    <div className="dropdown-content">
                                        <Link to="/dashboard" className=" text-decoration-none">
                                            Dashbord
                                        </Link>
                                        <br />
                                        <Link to="/myorders" className=" text-decoration-none">
                                            My Orders
                                        </Link>
                                        <br />
                                        <Link to="/login">
                                            <button className="iconbtn-logOut " onClick={logOut}>
                                                LogOut <span className="cart-item"></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                                : <div className="cart-section mt-3">
                                    <Nav className="me-5">
                                        <Link to="/signup" className="icon-panel"> <button className="iconbtn">
                                            Signup</button>
                                        </Link>
                                        <Link to="/login">
                                            <button className="iconbtn ">
                                                Login <span className="cart-item"></span>
                                            </button>
                                        </Link>


                                    </Nav>
                                </div>
                        }


                    </Col>
                </Row>

            </Container>
            <Container fluid className="header-section" >
                <Row className="header-section" xs="1">
                    <Col xs="12" className="d-flex">

                        <img src={img} className="fluid logo-image" alt="" />

                        <button className="search-btn" >
                            {search}
                        </button>
                        <Link to="/cart">
                            <button className=" cart-btn">
                                {Cart} <span className="item-cart"> {totalQuantity}</span>
                            </button>
                        </Link>

                        <button className="bar-btn" onClick={handleShow}>
                            {bar}
                        </button>
                        <Offcanvas placement="end" show={show} onHide={handleClose} className="w-50 mx-auto">
                            <Offcanvas.Header closeButton className="nav-header" >
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="mt-1">
                                {
                                    user.email ? <div>
                                        <Nav.Link href="getmyorders" >
                                            <p className="nav-text " onHide={handleClose}>My Orders</p>
                                        </Nav.Link>
                                        <Nav.Link href="postreview">
                                            <p className="nav-text" onHide={handleClose}>Review</p>
                                        </Nav.Link>
                                    </div>
                                        : <div>
                                            <Nav.Link href="/">
                                            <p className="nav-text" onHide={handleClose}>{home} Home</p>
                                            </Nav.Link>
                                            <Nav.Link href="/signup" >
                                                <p className="nav-text" onHide={handleClose}>{signout} SignUp</p>
                                            </Nav.Link>
                                            <Nav.Link href="/login">
                                            <p className="nav-text" onHide={handleClose}>{signout} Login</p>
                                            </Nav.Link>
                                        </div>
                                }
                                {
                                    admin ? <div>
                                        <Nav.Link href="/dashboard">
                                            <p className="nav-text" onHide={handleClose}>Add product</p>
                                        </Nav.Link>
                                        <Nav.Link href="/dashboard">
                                            <p className="nav-text" onHide={handleClose}>Manage Product</p>
                                        </Nav.Link>
                                        <Nav.Link href="/dashboard">
                                            <p className="nav-text" onHide={handleClose}>Manage Orders</p>
                                        </Nav.Link>
                                        <Nav.Link href="/dashboard">
                                            <p className="nav-text" onHide={handleClose}>Make Admin</p>
                                        </Nav.Link>
                                    </div>
                                        : null
                                }
                                {
                                    user.email ? <div>
                                        <Nav.Link>
                                            <p className="nav-text">{user.email}</p>
                                        </Nav.Link>
                                        <button onClick={logOut} className="btn-signOut" onHide={handleClose}> {signout} LogOut</button>
                                    </div>
                                        : null
                                }
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Col>
                    <div className="input-section">
                        <input type="text" placeholder="search" onChange={handleSearch} />
                    </div>
                </Row>
            </Container>
        </div >
    );
};

export default Header;