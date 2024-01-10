import { useContext } from "react"
import { Context } from "../../context/CartContext"


export const CartView = () => {
    const {cart, deleteItem} = useContext(Context)
    console.log(cart)

    return (
        <section className="cart">
            <h2>Cart</h2>
            <hr />


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
        </section>
    )
}