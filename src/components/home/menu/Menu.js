import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <div id="menu">
            <Container fluid className="">
                <Row xs={1} md={3} className="mb-5">
                    <Col md={2}></Col>
                    <Col xs={12} md={8}>
                        <div className="menubar-section">
                            <div>
                                <Link to="/" className="text-decoration-none"><button className="menu-btn">All</button>
                                </Link>
                                <Link to="/vegetable" className="text-decoration-none"><button className="menu-btn ms-3">Vegetable</button>
                                </Link>
                                <Link to="/meet" className="text-decoration-none"><button className="menu-btn ms-3">Meat</button>
                                </Link>
                            </div>


                            <div className="meanu-list">
                                <Link to="/fish" className="text-decoration-none"><button className="menu-btn ms-3">Fish</button>
                                </Link>
                                <Link to="/fruits" className="text-decoration-none"><button className="menu-btn ms-3">Fruits</button>
                                </Link>
                                <Link to="/food" className="text-decoration-none"><button className="menu-btn ms-3">Dry Fruits</button>
                                </Link>
                            </div>

                        </div>

                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
                <Outlet />
            </Container>
        </div>
    );
};

export default Menu;