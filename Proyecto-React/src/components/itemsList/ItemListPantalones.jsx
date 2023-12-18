import { Items } from './ItemList.jsx'
import useProductos from '../../hooks/useProductos.jsx'
import { pantalones } from '../js/pantalones.js'

export const CardsPantalones = () => {

    const { productos, loading } = useProductos(pantalones)

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