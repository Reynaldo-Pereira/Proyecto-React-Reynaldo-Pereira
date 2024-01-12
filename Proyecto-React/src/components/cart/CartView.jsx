import { useContext } from "react"
import { Context } from "../../context/CartContext"
import { Link } from "react-router-dom"


export const CartView = () => {
    const {cart, totalCart ,deleteItem} = useContext(Context)

    return (
        <section className="cart">

            <div>
                <h2>Cart</h2>
                <hr />
            </div>

            {
                cart.length < 1
                    
                    ? 
                    <h2>Carrito Vacio</h2>

                    :
                    <>
                        <div className="cart-container">

                            {
                                cart.map((product) => (

                                    <article className="box-cart">

                                        <img src={product.url} alt="cart image" />

                                        <div className="cart-body">

                                            <p className="c1">{product.modelo}</p>
                                            <p className="c2">Talla {product.talla}</p>
                                            <button className="c3"> - </button>
                                            <p className="c4">{product.unidades}</p>
                                            <button className="c5"> + </button>
                                            <b className="c6">Costo: {product.valor}$</b>
                                            <button onClick={() => deleteItem(product.id)} className="c7">Borrar</button>

                                        </div>

                                    </article>

                                ))
                            }

                        </div>

                        <div className="cart-total">

                            <h2>Total a pagar {totalCart()}$</h2>

                            <div>
                                <button>Vaciar Carrito</button>
                                <button><Link to={'/checkout'}>Comprar</Link></button>
                            </div>

                        </div>

                    </>

            }

        </section>
    )
}