import React from 'react';
import { Container } from 'react-bootstrap';
import Alls from './../menu/all/Alls';


const ToDays = () => {
    return (
        <Container fluid className="mt-5 pt-5">
            <h4 className="text-center fw-bold">Pick's ToDay</h4>
           <Alls></Alls>
    

    </Container>
    );
};

export default ToDays;