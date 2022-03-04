import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import useAuth from './../../../hooks/useAuth';

const Carts = (props) => {
    const { _id, name, img, quantity, price } = props.product
    const { cart } = useAuth()
    const { handleRemove } = props;
    const del = <FontAwesomeIcon icon={faTrashAlt} className="delete-icon" />
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const pricee = price * quantity

    return (
        <>
            <div className="cart-card d-flex mt-3 me-3">
                <div className="w-25 mx-auto ">
                    <img src={`data:image/png;base64,${img}`} className="cart-image" alt="" />

                </div>
                <div className="w-75 mx-auto">
                    <div className="price-rating ">
                        <h5 className="text-start ms-5">{name}</h5>
                        <button onClick={() => handleRemove(_id)} className=" del-button">{del}</button>
                    </div>

                    <div className="price-rating ms-5 me-1 mt-3 ">
                        <p >Quantity : {quantity}</p>
                        <p >Price : ${pricee.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Carts;