import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Fruit from './Fruit';
import useAuth from './../../../../hooks/useAuth';

const Fruits = () => {
    const {fruits}=useAuth()
    return (
        <Container>
        <Row xs="2" md="4">
           {
               fruits.map(fruit=><Fruit
               fruit={fruit}
               ></Fruit>)
           }
       </Row>
    </Container>
    );
};

export default Fruits;