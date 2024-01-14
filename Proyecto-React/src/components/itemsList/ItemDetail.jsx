import { useContext, useState } from "react"
import { Context } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"

export const ItemDetail = ({ item }) => {

    //Context
    const { cart, addCart, inCart} = useContext(Context)

    //Navigate
    const navigate = useNavigate()

    const volver = () => {
        navigate(-1)
    }

    //Estados
    const [size , setSize] = useState(34)

    const [quantity, setQuantity] = useState(1)

    //Funcion
    const addSize = () => {
        size < 47 && setSize(size + 1)
    }

    const subtractSize = () => {
        size > 34 && setSize(size - 1)
    }

    const addQuantity = () => {
        quantity < 10 && setQuantity(quantity + 1)
    }

    const subtractQuantity = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }

    const agregar = () => {
        const addToCart = {
            ...item,
            quantity,
            size
        }

        addCart(addToCart)
    }

    return (
        <>
            <button onClick={volver}>Volver</button>

            <article key={item.modelo} className="tarjeta">
                <div className="tarjetita">
                    <img src={item.url} alt={item.modelo} />
                </div>
                <div className="tarjetita-body">
                    <h4>{item.modelo}</h4>
                    <p>{item.description}</p>
                    <button onClick={subtractSize}>-</button>
                    <p>{size}</p>
                    <button onClick={addSize}>+</button>
                    <button onClick={subtractQuantity}>-</button>
                    <p>{quantity}</p>
                    <button onClick={addQuantity}>+</button>
                    <b>{item.valor * quantity}$</b>
                    {
                        inCart(item.id)
                            ? <button><Link to={'/cart'}>Finalizar compra</Link></button>
                            : <button onClick={agregar}>Agregar al carrito</button>
                    }
                </div>
            </article>
        </>
    )
}