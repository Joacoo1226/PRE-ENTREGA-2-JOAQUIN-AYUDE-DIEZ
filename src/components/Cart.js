// src/components/Cart.js
import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
    const { state, dispatch } = useCart();

    const removeItem = (item) => {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {state.items.length === 0 ? (
                <p>El carrito