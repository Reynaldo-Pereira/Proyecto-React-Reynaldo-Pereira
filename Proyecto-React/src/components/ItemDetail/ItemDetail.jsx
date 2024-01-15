import { useContext, useState } from "react"
import { Context } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"

export const ItemDetail = ({ item }) => {
    
    //Context
    const { addCart, inCart} = useContext(Context)

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
            <div className="volver">
                <button onClick={volver}>BACK</button>
            </div>

            <div className="item-body">
                <article key={item.name} className="tarjeta">

                    <div className="tarjetita">
                        <img src={item.url} alt={item.name} />
                    </div>

                    <div className="tarjetita-body">
                        <h2 className="t1">{item.name}</h2>
                        <p className="t2">{item.description}</p>
                        <button className="t3" onClick={subtractSize}>-</button>
                        <p className="t4">SIZE <b>{size}</b></p>
                        <button className="t5" onClick={addSize}>+</button>
                        <button className="t6" onClick={subtractQuantity}>-</button>
                        <p className="t7">QUANTITY <b>{quantity}</b></p>
                        <button className="t8" onClick={addQuantity}>+</button>
                    </div>

                </article>

            </div>

            <div className="tarjeta-total">
                <p className="t9">TOTAL <b>{item.price * quantity}$</b></p>

                {
                    inCart(item.id)
                        ? <Link to={'/cart'}><button>Finalize purchase</button></Link>
                        : <button className="t10" onClick={agregar}>Add to cart</button>
                }
            </div>
        </>
    )
}