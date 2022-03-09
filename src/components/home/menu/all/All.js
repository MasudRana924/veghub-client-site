import React from 'react';
import { Col } from 'react-bootstrap';
import './All.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import useAuth from './../../../../hooks/useAuth';
import { addToDb } from '../../../../hooks/fakeDB';

const All = (props) => {
    const { name, img, price } = props.product
    const heart = <FontAwesomeIcon icon={faHeart} className="cart-icon" />
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
    const { cart, setCart, products } = useAuth()
    const handleAddToCart = () => {
        const exists = cart.find(pd => pd._id === props.product._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== props.product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, props.product];
        }
        else {
            products.quantity = 1;
            newCart = [...cart, props.product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(props.product._id);
        console.log(products)

    }
    return (
        <Col className="mt-3">
            <div className="product-card">
                {/* <img src={`data:image/png;base64,${img}`}alt="" className="card-img" /> */}
                <img src={img} alt="" className="card-img" />
                <h6>{name}</h6>
                <p className="price">Cost {price}tk/kg</p>
                <div className="w-50 mx-auto d-flex">
                    <button className="btn-add-heart">{heart}</button>
                    <button className="btn-add-cart" onClick={handleAddToCart}>{Cart} </button>
                </div>
            </div>

        </Col>
    );
};

export default All;