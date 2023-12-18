import { useEffect, useState } from "react"
import { usePedirDatos } from "./usePedirDatos"

const useProductos = (data) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        usePedirDatos(data)
            .then((res) => {
                setProductos(res)
            })
            .finally(() => setLoading( false ))
        }, [])

    return {
        productos,
        loading
    }    
}

export default useProductos