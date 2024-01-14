import { useContext } from "react"
import { useState } from "react"
import { Context } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { addDoc, collection } from "firebase/firestore"


export const Checkout = () => {

    //Contexto
    const { cart, totalCart, clearCart } = useContext(Context)

    //Estados
    const [pay, setPay] = useState('')

    const [loading, setLoading] = useState(true)

    const [values, setValues] = useState({
        name: '',
        address: '',
        email: ''
    })

    const [dataOrders, setDataOrders] = useState(null)

    //Funciones
    const inputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const payChange = (e) => {
        setPay(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        if(pay == totalCart()) {

            setLoading(false)

            const order = {
                client: values,
                items: cart,
                total: Number(pay),
                fecha: new Date()
            }
    
            const orderRef = collection(db , 'orders')
            addDoc(orderRef, order)
                .then(doc => setDataOrders(doc.id))
        }
        else {
            alert('monto incorrecto')
        }
    }

    if(dataOrders) {

        clearCart()
        
        return (

            <section className="data">
                <div>

                    <h2>Thanks for shopping with us</h2>
                    <p>Tu codigo de compra es: {dataOrders}</p>
                    
                </div>
            </section>

        )
    }

    

    return (

        <div className="checkout">

            <h2>Enter your data</h2>

            <form onSubmit={submit} action="submit">

                <input
                className="f1" 
                onChange={inputChange} 
                value={values.name} 
                name="name" 
                type="text" 
                placeholder="Name"
                required
                />

                <input
                className="f2" 
                onChange={inputChange} 
                value={values.address} 
                name="address" 
                type="text" 
                placeholder="Address"
                required
                />

                <input 
                className="f3"
                onChange={inputChange} 
                value={values.email} 
                name="email" 
                type="email" 
                placeholder="Email"
                required
                />

                <input
                className="f4" 
                onChange={payChange}
                type="number"
                placeholder= {`Total to buy ${totalCart()}$`}
                value={pay}
                required
                />

                {
                    loading 
                        ? <button className="f5" type="submit">Send</button>
                        : <button className="f5">Sending..</button>
                }

            </form>

        </div>

    )
}