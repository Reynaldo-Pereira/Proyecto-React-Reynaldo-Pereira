import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config.js"


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then((res) => {
                const doc = {
                    ...res.data(),
                    id: res.id
                }

                setItem(doc)
            })
            .finally(() => setLoading( false ))
        }, [])

    return (
        <>

            {
                loading
                    ? <div className="carga"> 
                        <h3>Cargando...</h3> 
                    </div>

                    : <div className='card'>
                        <ItemDetail item={item} />
                    </div>
            }

        </>
    )
}