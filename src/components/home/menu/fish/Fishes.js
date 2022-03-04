import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import Fish from './Fish';

const Fishes = () => {
    const {fishes}=useAuth()
    return (
        <Container>
        <Row xs="2" md="4">
           {
               fishes.map(fish=><Fish
               fish={fish}
               ></Fish>)
           }
       </Row>
    </Container>
    );
};

export default Fishes;