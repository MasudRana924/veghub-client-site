import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus, faCarrot, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Header = () => {
    const { user, products, setDisplayProducts, cart, logOut } = useAuth()
    const carrot = <FontAwesomeIcon icon={faCarrot} className="carrot" />
    const heart = <FontAwesomeIcon icon={faHeart} className="cart" />
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cart" />
    const arrow = <FontAwesomeIcon icon={faArrowCircleDown} className="cart" />
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
    return (
        <div id="top">
            <Container fluid>
                {/* <Navbar bg="white"  className="nav">
                <Container>
                    <Navbar.Brand href="#home" className="text-success fw-bold fs-4"> VegHub{carrot} </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-white ms-5 ">
                            <Nav.Link href="#home" className="text-dark fw-bold ms-5 ">Home</Nav.Link>
                            <Nav.Link href="#home" className="text-dark fw-bold">Shop</Nav.Link>
                            <Nav.Link href="#home" className="text-dark fw-bold">Blog</Nav.Link>
                            <Nav.Link href="#home" className="text-dark fw-bold">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#action1" className="text-dark fw-bold"> {heart} </Nav.Link>
                            <Nav.Link href="#action2" className="text-dark fw-bold">{cart} </Nav.Link>
                            <Nav.Link href="#action2" className="mt-1 email text-dark ">item :  </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
                <Row xs="1" md="4">
                    <Col md="2">
                        <div>
                            <h1 className="text-success fw-bold fs-1">VegHub{carrot}</h1>
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
                                    {/* <span className="text-dark">{user.email}</span> */}
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
                                {/* <Link to="/login">
                                    <button className="iconbtn-logOut " onClick={logOut}>
                                        LogOut <span className="cart-item"></span>
                                    </button>
                                </Link> */}

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
        </div>
    );
};

export default Header;