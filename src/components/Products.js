// src/components/Product.js
import React from 'react';
import { useCart } from '../contexts/CartContext';

const Product = ({ product }) => {
    const { dispatch } = useCart();

    const addToCart = () => {
        dispatch({ type: 'ADD_ITEM', payload: product });
    };

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    );
};

export default Product;