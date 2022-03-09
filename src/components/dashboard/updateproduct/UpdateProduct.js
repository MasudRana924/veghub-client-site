import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const UpdateProduct = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://obscure-badlands-58635.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })
    }, [])


    const nameRef = useRef()
    const priceRef = useRef()
    const imgRef = useRef()
    const handleUpdate = (e) => {
        const name = nameRef.current.value
        const price = priceRef.current.value
        const img = imgRef.current.value

        const updateproduct = { price, name, img, }
        const url = `https://obscure-badlands-58635.herokuapp.com/updateproduct/${productId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Product update succesfully')
                    setProduct(updateproduct)
                    e.target.reset()
                }
            })
        e.preventDefault()
    }
    return (
        <Container fluid className="mt-5">
            <div className=" w-75 mx-auto product-card">
                {/* <img src={`data:image/png;base64,${product.img}`} alt="" className="card-img" /> */}
                <img src={product.img} alt="" className="card-img" />
                <h6>{product.name}</h6>
                <p className="price">{product.price}tk/kg</p>
            </div>


            <div className="w-75 mx-auto mt-5 form">
                <Form onSubmit={handleUpdate}>

                    <Row className="mb-3 text-start">
                        <Form.Group as={Col} >
                            <Form.Label>Image</Form.Label>
                            <Form.Control ref={imgRef} type="text" placeholder="Image" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 text-start ">
                        <Form.Group as={Col} >
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={nameRef} type="name" placeholder="Enter name" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 text-start">
                        <Form.Group as={Col} >
                            <Form.Label>Price</Form.Label>
                            <Form.Control ref={priceRef} type="number" placeholder="Enter  even numbers price" />
                        </Form.Group>
                       
                    </Row>

                    <Button className="w-50 mx-auto " variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
        </Container>
    );
};

export default UpdateProduct;