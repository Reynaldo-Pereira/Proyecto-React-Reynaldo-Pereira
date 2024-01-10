import { useEffect, useState } from "react"
import { usePedirDatos } from "../hooks/usePedirDatos.jsx"
import { useParams } from "react-router-dom"
import { Items } from '../components/itemsList/ItemList.jsx'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        usePedirDatos()
            .then((data) => {

                const items = categoryId 
                                    ? data.filter(x => x.category === categoryId)
                                    : data
                
                
                setProductos(items)
            })
            .finally(() => setLoading( false ))
        }, [categoryId])

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