import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const AddProducts = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState([]);
    const [image, setImage] = useState(null);



    const handleAddProduct = (e) => {
        if (!image) {
            alert('enter iamage')
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price',price)
        formData.append('image', image)

        fetch('https://obscure-badlands-58635.herokuapp.com/addproduct', {
            method: 'POST',
            body: formData
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
                            <Form onSubmit={handleAddProduct}>

                                <Row className="mb-3 text-start ">
                                    <Form.Group as={Col} >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control onChange={e => setName(e.target.value)} type="name" placeholder="Enter name" />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3 text-start">
                                    <Form.Group as={Col} >
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control onChange={e => setPrice(e.target.value)} type="number" placeholder="Enter Price" />
                                    </Form.Group>

                                    <Form.Group as={Col} >
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control
                                            onChange={e => setImage(e.target.files[0])} type="file" placeholder="Image"
                                            accept="image/*" />
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

export default AddProducts;