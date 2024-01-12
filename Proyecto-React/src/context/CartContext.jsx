import { createContext, useState } from "react";

export const Context = createContext()

export const CartContext = ({children}) => {

    //Estados
    const [cart , setCart] = useState([])

    //Funciones
    const totalCart = () => {
        return cart.reduce((acc, x) => acc + (x.valor * x.unidades), 0)
    }

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
        <Context.Provider value={{
            cart,
            totalCart,
            addCart, 
            inCart, 
            clearCart, 
            deleteItem
            }}>

            {children}
        </Context.Provider>
    )
}