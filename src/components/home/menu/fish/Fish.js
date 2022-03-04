import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import useAuth from './../../../../hooks/useAuth';
import { addToDb } from '../../../../hooks/fakeDB';
const Fish = (props) => {
    const { name, img, price } = props.fish
    const heart = <FontAwesomeIcon icon={faHeart} className="cart-icon" />
    const Cart = <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
    const {cart,setCart,fishes}=useAuth()
    const handleAddToCart = () => {
        const exists = cart.find(pd => pd._id === props.fish._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id!== props.fish._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, props.fish];
        }
        else {
            fishes.quantity = 1;
            newCart = [...cart, props.fish];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(props.fish._id);
       

    }
    return (
        <Col className="mt-3">
        <div className="product-card">
            <img src={img} alt="" className="card-img" />
            <div className="cart-heart w-50 mx-auto">
                <div className="cart-style">
                    <div className="cart-div">
                        <button className="button">{heart}</button>
                    </div>
                    <div className="cart-div">
                      <button className="button" onClick={handleAddToCart}>{Cart} </button>
                    </div>
                </div>
            </div>
            <h6>{name}</h6>
            <p className="price">{price}tk/kg</p>
        </div>
    </Col>
    );
};

export default Fish;