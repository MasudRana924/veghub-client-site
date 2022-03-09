import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import All from './All';
import useAuth from './../../../../hooks/useAuth';

const Alls = () => {

    const { displayProducts } = useAuth()
    return (
        <Container fluid className="">
            <Row xs="2" md="4">
                {displayProducts.length === 0 ? < div className="w-25 mx-auto spinner"> <Spinner animation="border" className="spinner" />
                </div>

                    :
                    displayProducts.map(product => <All
                        product={product}
                    ></All>)
                }
            </Row>
        </Container>
    );
};

export default Alls;