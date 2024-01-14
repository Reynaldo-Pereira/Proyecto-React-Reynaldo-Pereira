import { useContext } from "react"
import { Context } from "../../context/CartContext"

export const Cart = () => {
    const {itemsCart} = useContext(Context)
    
    return (
        <div className="cart-icon">
            <img src="/carrito.jpg" alt="carrito" />
            <span>{itemsCart()}</span>
        </div>
    )
}