import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Food from './Food';
import useAuth from './../../../../hooks/useAuth';

const Foods = () => {
    const {dryFoods}=useAuth()
    return (
        <Container>
            <Row xs="2" md="4">
               {
                   dryFoods.map(food=><Food
                   food={food}
                   ></Food>)
               }
           </Row>
        </Container>
    );
};

export default Foods;