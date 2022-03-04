import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import useAuth from './../../../hooks/useAuth';

const SignUp = () => {
    const {registerUser,error,handleName,handleEmail,handlePass, setUserName,setUser,name,email,pass,setError,setLoading }=useAuth()
    const navigate = useNavigate()
    // user save in database 
    const saveUser = (email, diaplayName) => {
        const user = { email, diaplayName }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)

        })
    }
    return (
        <Container fluid className="mt-3">
            <Row xs="1" md="3">
                <Col></Col>
                <Col xs="">
                    <div className="signup-card">
                        <div className="d-flex">
                            <button className="google-btn me-1 ms-1">Google</button>
                            <button className="facebook-btn me-1">Facebook</button>
                        </div>
                        <Form className="w-75 mx-auto mt-3" onSubmit={(event) => {
                            event.preventDefault()
                            registerUser(email, pass)
                                .then(result => {
                                    navigate('/');
                                    setError('')
                                    const newUser={email,displayName:name}
                                    setUser(newUser)
                                    saveUser(email,name)
                                    setUserName()
                                    alert('Done')
                                }) 
                                .catch(error => {
                                    setError('Enter a valid email')
                                })
                                .finally(() =>
                                    setLoading(false)
                                );

                        }} >
                            <Form.Group className="mb-1">
                                <p className="text-start text-white" >Name </p>
                                <Form.Control type="text" placeholder="Enter Your Name" onBlur={handleName}  />
                            </Form.Group>
                            <Form.Group className="mb-1" >
                                <p className="text-start text-white">Email </p>
                                <Form.Control type="email" placeholder="Enter Your Email"onBlur={handleEmail}  />
                            </Form.Group>
                            <Form.Group className="mb-1" >
                                <p className="text-start text-white">Password </p>
                                <Form.Control type="password" placeholder="Enter a Password" onBlur={handlePass} />
                                <p className="text-start text-white"> Password should be more than 6 characters</p>
                                <p className="text-start text-danger">{error}</p>
                            </Form.Group>
                            <Button type="submit" className="w-100 text-center fs-6 mt-3 " size="sm" variant="dark">
                                Sign-up
                            </Button> <br />
                            <p className="text-start text-white">Already have an account ? <Link to="/login" className="text-decoration-none text-white">Log-in  </Link></p>
                            <br />
                        </Form>
                    </div>

                </Col>
                <Col></Col>
            </Row>

        </Container>
    );
};

export default SignUp;