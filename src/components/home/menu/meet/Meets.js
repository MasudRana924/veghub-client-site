import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Meet from './Meet';
import useAuth from './../../../../hooks/useAuth';

const Meets = () => {
    const {meats}=useAuth()
    return (
        <Container>
           <Row xs="2" md="4">
               {
                   meats.map(meat=><Meet
                   meat={meat}
                   ></Meet>)
               }
           </Row>
        </Container>
    );
};

export default Meets;