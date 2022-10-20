import React from 'react'
import { useCartContext } from '../context/CartContext'

const ItemCart = ({ product }) => {
    const { sacarCarrito } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.img} />
            <div>
                <p>Titulo: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => sacarCarrito(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart