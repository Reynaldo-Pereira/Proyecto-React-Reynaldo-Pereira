import { useEffect, useState } from "react"
import { usePedirDatos } from "../hooks/usePedirDatos.jsx"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../components/itemsList/ItemDetail.jsx"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        usePedirDatos()
            .then((data) => {

                const filtro = data.find(x => x.id === Number(itemId))

                setItem(filtro)
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