import { Items } from './ItemList.jsx'
import useProductos from '../../hooks/useProductos.jsx'
import { shorts } from '../js/shorts.js'

export const CardsShorts = () => {

    const { productos, loading } = useProductos(shorts)

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