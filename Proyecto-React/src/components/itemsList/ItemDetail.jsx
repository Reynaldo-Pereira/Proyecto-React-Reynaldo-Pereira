import { useContext } from "react"
import { Context } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"

export const ItemDetail = ({ item }) => {

    const { addCart, inCart} = useContext(Context)
    const navigate = useNavigate()

    const agregar = () => {
        addCart(item)
    }

    const volver = () => {
        navigate(-1)
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
                    <b>{item.valor}$</b>
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