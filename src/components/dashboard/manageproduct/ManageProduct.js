import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import './ManageProduct.css'
import { Link } from 'react-router-dom';

const ManageProduct = (props) => {
    const { _id, name, img, price } = props.product
    const dlt = <FontAwesomeIcon icon={faTrashAlt} className="delete-icon" />
    const edit = <FontAwesomeIcon icon={faEdit} className="edit-icon" />



    return (
        <Col className="mt-3">
            <div className="product-card">
                {/* <img src={`data:image/png;base64,${img}`} alt="" className="card-img" /> */}
                <img src={img}alt="" className="card-img" />
                <div className="cart-heart w-50 mx-auto">
                    <div className="cart-style">
                        <div className="cart-div">
                            <Link to={`${_id}`}>
                                <button className="del-button">{edit} </button>
                            </Link>
                        </div>
                        <div className="cart-div">
                            <button onClick={() => props.handleDelete(props.product._id)} className="del-button" > {dlt}</button>
                        </div>
                    </div>
                </div>
                <h6>{name}</h6>
                <p className="price">{price}tk/kg</p>
            </div>
        </Col>
    );
};

export default ManageProduct;