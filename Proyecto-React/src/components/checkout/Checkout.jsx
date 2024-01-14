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

            <div className="data">
                <h2>Tu codigo de compra es: {dataOrders}</h2>
            </div>

        )
    }

    

    return (

        <div className="checkout">

            <h2>Ingresa tus datos</h2>

            <form onSubmit={submit} action="submit">

                <input 
                onChange={inputChange} 
                value={values.name} 
                name="name" 
                type="text" 
                placeholder="Nombre" 
                />

                <input 
                onChange={inputChange} 
                value={values.address} 
                name="address" 
                type="text" 
                placeholder="Dirección" 
                />

                <input 
                onChange={inputChange} 
                value={values.email} 
                name="email" 
                type="email" 
                placeholder="Email" 
                />

                <input 
                onChange={payChange}
                type="number"
                placeholder= {`Total a pagar ${totalCart()}$`}
                value={pay}
                />

                <button type="submit">Enviar</button>

            </form>

        </div>

    )
}