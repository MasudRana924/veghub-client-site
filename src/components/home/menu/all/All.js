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
    const {cart,setCart,products}=useAuth()
    const handleAddToCart = () => {
        const exists = cart.find(pd => pd._id === props.product._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id!== props.product._id);
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
                <img src={`data:image/png;base64,${img}`}alt="" className="card-img" />
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

export default All;