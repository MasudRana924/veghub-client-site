import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Recommonded.css'
import Recommend from './Recommend';
import useAuth from './../../../hooks/useAuth';

const Recommonded = () => {
    const {dryFoods}=useAuth()
   

    return (
        <Container className="mt-5 pt-5 pb-5">
            
            <Row xs="1" md="3">
                <Col className="mt-1">
                <button className="btn-feature">Featured</button>
                </Col>
                <Col className="mt-1">
                <button className="btn-feature">Best Seller</button>
                </Col>
                <Col className="mt-1">
                <button className="btn-feature">New Products</button>
                </Col>
            </Row>
           <Row xs="2" md="3">
               {
                   dryFoods.map(food=><Recommend
                   food={food}
                   ></Recommend>)
               }
           </Row>
        </Container>
    );
};

export default Recommonded;