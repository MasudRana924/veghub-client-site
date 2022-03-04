import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';
import './Dashboard.css'

const Dashboard = () => {
    const { admin, logOut } = useAuth()
    return (
        <Container fluid className="mt-5 pt-5 pb-5">
            <Row xs="1" md="2">
                <Col md="3" className="admin-panel">

                    <Link to="/dashboard" className="text-decoration-none">   <h2 className="text-primary dashboard">DashBoard</h2>
                    </Link>
                    <Link to="myorders" className="text-decoration-none">
                        <h6 className="text-start">My Orders</h6>
                    </Link>
                    <Link to="myreview" className="text-decoration-none">
                        <h6 className="text-start">Review</h6>
                    </Link>


                    {
                        admin && <div>
                            <Link to={`/dashboard/addproduct`}className="text-decoration-none">
                                <h6 className="text-start">Add Product</h6>
                            </Link>
                            <Link to={`/dashboard/manageproduct`}className="text-decoration-none">
                                <h6 className="text-start">Manage Products</h6>
                            </Link>
                            {/* <Link to={`/dashboard/updateproduct`}className="text-decoration-none">
                                <h6 className="text-start">Update Products</h6>
                            </Link> */}
                            <Link to={`/dashboard/manageorders`} className="text-decoration-none">
                                <h6 className="text-start">Manage Orders</h6>
                            </Link>
                            <Link to={`/dashboard/makeAdmin`}className="text-decoration-none">
                                <h6 className="text-start">Make Admin</h6>
                            </Link>
                        </div>
                    }

                    <button onClick={logOut} className="logOut-btn">LogOut</button>


                </Col>
                <Col md="9">
                <Outlet></Outlet>
                </Col>
            </Row>

        </Container>
    );
};

export default Dashboard;