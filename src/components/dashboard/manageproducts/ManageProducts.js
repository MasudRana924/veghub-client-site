import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ManageProduct from '../manageproduct/ManageProduct';


const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)

            })
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure that you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product delete successfully')
                        const remaining = products.filter(product =>product._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }
    return (
        <Container>

            <Row xs="2" md="4">
                {
                    products.length === 0 ? <div className="w-50 mx-auto">
                        <Spinner animation="border" className="mt-3" variant="primary" />
                    </div>
                        :
                        products.map(product => <ManageProduct
                            product={product}
                            handleDelete={handleDelete}
                        ></ManageProduct>)
                }
            </Row>
        </Container>
    );
};

export default ManageProducts;