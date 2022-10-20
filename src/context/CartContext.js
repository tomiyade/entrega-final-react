import React, { useContext, useState } from 'react'

const CartContext = React.createContext([]);


export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        if (estaEnCarrito(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity }])
        }
    }
    console.log(cart)

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCart([]);

    const estaEnCarrito = (id) => cart.find(product => product.id) ? true : false;

    const sacarCarrito = (id) => setCart(cart.filter(product => product.id !== id));




    return (
        <CartContext.Provider value={{
            clearCart,
            estaEnCarrito,
            sacarCarrito,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider