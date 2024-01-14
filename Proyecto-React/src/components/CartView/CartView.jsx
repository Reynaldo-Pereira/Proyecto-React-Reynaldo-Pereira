import { useContext, useState } from "react"
import { Context } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"


export const CartView = () => {

    //Context
    const {cart, totalCart ,deleteItem, clearCart,} = useContext(Context)

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
                                            <p className="c2">{product.size}</p>
                                            <p className="c4">{product.quantity}</p>
                                            <b className="c6">Total {product.valor * product.quantity}$</b>
                                            <button onClick={() => deleteItem(product.id)} className="c7">Borrar</button>

                                        </div>

                                    </article>

                                ))
                            }

                        </div>

                        <div className="cart-total">

                            <h2>Total a pagar {totalCart()}$</h2>

                            <div>
                                <button onClick={clearCart}>Vaciar Carrito</button>
                                <button><Link to={'/checkout'}>Comprar</Link></button>
                            </div>

                        </div>

                    </>

            }

        </section>
    )
}