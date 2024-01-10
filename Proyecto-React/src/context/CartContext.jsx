import { createContext, useState } from "react";

export const Context = createContext()

export const CartContext = ({children}) => {
    const [cart , setCart] = useState([])

    const addCart = (item) => {
        setCart([...cart, item])
    }
    const inCart = (id) => {
        return cart.some(item => item.id === id)
    }
    const clearCart = () => {
        setCart([])
    }
    const deleteItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }


    return (
        <Context.Provider value={{cart, addCart, inCart, clearCart, deleteItem}}>
            {children}
        </Context.Provider>
    )
}