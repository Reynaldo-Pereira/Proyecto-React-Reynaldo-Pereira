import { Items } from './ItemList.jsx'
import useProductos from '../../hooks/useProductos.jsx'
import { camisetas } from '../js/camisetas.js'

export const CardsCamisetas = () => {

    const { productos, loading } = useProductos(camisetas)

    return (
        <>

            {
                loading
                ? <h2>cargando...</h2>
                : <div className='cards'>
                    <Items marca= 'Adidas' datos={productos} />
                </div>
            }

        </>
    )
}