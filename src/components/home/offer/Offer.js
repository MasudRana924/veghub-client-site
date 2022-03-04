import React from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import img1 from '../../../images/offer.webp'
import img2 from '../../../images/offer2.webp'
import './Offer.css'


const Offer = () => {
   
    return (
       <Container fluid className=" mx-auto mt-5 pt-5">
                 <Row xs="1" md="2">
                     <Col  className="mt-3">
                     <div  className="offer-card">
                         <img src={img1} className="img-offer" alt="" />
                     </div>
                     </Col>
                     <Col className="mt-3">
                     <div className="offer-card"  >
                         <img src={img2}className="img-offer" alt="" />
                     </div>
                     </Col>
                 </Row>
       </Container>
    );
};

export default Offer;