import { useEffect, useState } from "react"

const useProductos = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {

        fetch('/components/js/productos.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error ('error al cargar los datos');
                }
    
                return res.json();
            })
            .then((data) => {
                setProductos(data)
            })
        }, [])

    return {
        productos
    }    
}

export default useProductos