import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Items } from "../ItemList/ItemList.jsx"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config.js"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { marcaId } = useParams()

    useEffect(() => {
        
        setLoading(true)

        const productRef = collection(db, 'products')
        const q = marcaId 
                        ? query(productRef, where('brand', '==', marcaId))
                        : productRef
        
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })

                setProductos(docs)
            })
            .finally(() => setLoading(false))
        }, [marcaId])

    return (
        <>

            {
                loading
                    ? <div className="carga"> 
                        <h3>Cargando...</h3> 
                    </div>

                    : <div className='cards'>
                        <Items datos={productos} />
                    </div>
            }

        </>
    )
}