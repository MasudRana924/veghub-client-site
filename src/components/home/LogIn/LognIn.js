import React from 'react';
import { Container, Row ,Col,Button,Form} from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './LognIn.css'
import useAuth from './../../../hooks/useAuth';

const LognIn = () => {
    const { setLoading, error, handleEmail, handlePass, setError, logInUser, email, pass } = useAuth()
    const location = useLocation();
    const navigate = useNavigate()
    return (
        <Container fluid className="mt-3">
        <Row xs={1} md={3}>
            <Col md={4}></Col>
            <Col md={4}>
                <div className="login-card">
                    <Button type="submit" className="w-75 mx-auto text-center fs-6 mt-3" size="sm" variant="dark">
                        Google Login
                    </Button>
                    <Button type="submit" className="w-75 mx-auto text-center fs-6 mt-3" size="sm" variant="dark">
                        Facebook Login
                    </Button>
                    <p>-----OR----</p>
                    <Form className="w-75 mx-auto mt-3" onSubmit={(e) => {
                        e.preventDefault()

                       logInUser(email, pass)
                            .then(result => {
                                const destination = location?.state?.from || '/';
                                navigate(destination);
                                setError('')
                            })
                            .catch(error => {
                                setError('Email or Password is not valid')
                            })
                            .finally(() =>
                                setLoading(false)
                            );

                    }}>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <p className="text-start text-white">Email </p>
                            <Form.Control type="email" placeholder="Enter your email" onBlur={handleEmail}/>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicPassword">
                            <p className="text-start text-white">Password</p>
                            <Form.Control type="password" placeholder="Enter your password" onBlur={handlePass}/>
                            <p className="text-start text-danger"> {error}</p>
                        </Form.Group>
                        <p className="text-start text-white">Already have an account ? <Link to="/signup" className="text-decoration-none text-white">SignUp </Link></p>
                        <div className=" pb-3">

                            <Button type="submit" className="w-100 text-center fs-6 mt-3 " size="sm" variant="dark">
                                Log-in
                            </Button>
                        </div>
                    </Form>
                </div>

            </Col>
            <Col md={4}></Col>
        </Row>
    </Container>
    );
};

export default LognIn;