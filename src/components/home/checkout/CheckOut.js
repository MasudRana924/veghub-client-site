import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './CheckOut.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcPaypal, faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from './../../../hooks/useAuth';
import { clearTheCart} from '../../../hooks/fakeDB';

const CheckOut = () => {
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();
    const { user,cart } = useAuth()
    const pay = <FontAwesomeIcon icon={faCcPaypal} className="pay-icon" />
    const visa = <FontAwesomeIcon icon={faCcVisa} className="visa-icon" />
    const master = <FontAwesomeIcon icon={faCcMastercard} className="master-icon" />
    const navigate = useNavigate()
    const onSubmit = data => {
        data.info= cart
        data.status='pending'
        fetch('https://obscure-badlands-58635.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    swal({
                        title: "Orders Done",
                        text: "You can pay now or later",
                        icon: "success",
                        button: "Ok",
                    }); 
                   
                    window.location.reload();
                    clearTheCart()
                    reset() 
                     
                        
                }
            })
    };
    return (
        <Container fluid className="mt-3">
            <Row xs={1} md={2}>
                <Col xs={12} className="mt-1">
                    <div className="order-section">
                        <h4 className=" contact-info">Contact Information</h4>
                        <form className="shipping-form " onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name")} placeholder="your name" />
                            <input defaultValue={user.email} {...register("email", { required: true })} />

                            {errors.email && <span className="error">This field is required</span>}
                            <input defaultValue="" {...register("phone")} placeholder="your phone number" />
                            <input defaultValue="" {...register("address")} placeholder="your present address" />
                            <input defaultValue="" {...register("city")} placeholder="your city " />
                            <input type="submit" className="bg-danger text-white" />
                        </form>
                    </div>
                </Col>
                <Col className="mt-3">
                    <div className="order-section">
                        <h4 className="payment-info">Payment</h4>
                        <Link to="/payment">
                            <button className="pay-btn mt-5">bKash</button>
                        </Link>
                        <br />
                        <Link to="/payment">
                            <button className="visa-btn mt-1">Rocket</button>
                        </Link>
                        <br />
                        <Link to="/payment">
                            <button className="master-btn mt-1 mb-3">Nagad</button>
                        </Link>
                        <br />
                        <Link to="/payment">
                            {pay}
                        </Link>
                        <Link to="/payment" className="me-3 ms-3 ">
                            {visa}
                        </Link>
                        <Link to="/payment">
                            {master}
                        </Link>
                       <br /> 
                       <h6 className="mt-3 fw-bold fs-3">You can pay later </h6>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckOut