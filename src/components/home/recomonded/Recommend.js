import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import useAuth from './../../../hooks/useAuth';
import { addToDb } from '../../../hooks/fakeDB';

const Recommend = (props) => {
    const { name, img, price } = props.food
    const heart = <FontAwesomeIcon icon={faHeart} className="cart-icon" />
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
    const { cart, setCart, dryFoods } = useAuth()
    const handleAddToCart = () => {
        const exists = cart.find(pd => pd._id === props.food._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== props.food._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, props.food];
        }
        else {
            dryFoods.quantity = 1;
            newCart = [...cart, props.food];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(props.food._id);


    }
    return (
        <Col className="mt-3">
            <div className="product-card">
                <img src={img} alt="" className="card-img" />
                <h6>{name}</h6>
                <p className="price">{price}tk/kg</p>
                <div className="d-flex w-50 mx-auto">
                    <button className="button-add-heart">{heart}</button>
                    <button className="button-add-cart" onClick={handleAddToCart}>{Cart} </button>
                </div>
            </div>

        </Col>
    );
};

export default Recommend;