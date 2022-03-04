import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useRef } from 'react';
const AddProduct = () => {
    
    const nameRef = useRef()
    const priceRef = useRef()
    const imgRef = useRef()

    const handleAddPlace = (e) => {
       
        const name = nameRef.current.value
        const cost = priceRef.current.value
        const img = imgRef.current.value
       
        const product = {  cost, name, img }
        fetch('http://localhost:5000/addproduct', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added succesfully')
                    e.target.reset()
                }
            })
        e.preventDefault()
    }

    return (
        <Container fluid className="" >
            <h2 className="text-start dashboard">Add  Product</h2>
            <div>
                <Row xs={1} md={1}>

                    <Col md={8}>
                        <div className="form">
                            <Form onSubmit={handleAddPlace}>

                                <Row className="mb-3 text-start ">
                                    <Form.Group as={Col} >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control ref={nameRef} type="name" placeholder="Enter name" />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 text-start">
                                    <Form.Group as={Col} >
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control ref={imgRef} type="text" placeholder="Image" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3 text-start">
                                    <Form.Group as={Col} >
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control ref={priceRef} type="number" placeholder="Enter even numbers price" />
                                    </Form.Group>
                                </Row>
                                <Button className="w-50 mx-auto " variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </div>

                    </Col>

                </Row>
            </div>
        </Container>
    );
};

export default AddProduct;