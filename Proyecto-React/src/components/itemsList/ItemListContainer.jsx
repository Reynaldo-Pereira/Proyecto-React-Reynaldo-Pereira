import '../../App.css'
import { Items } from './Items.jsx'
import useProductos from '../../hooks/useProductos.jsx'

export const Desarrollo = () => {

    const { productos, loading } = useProductos()

    return (
        <>

            {
                loading
                ? <h2>cargando...</h2>
                : <div className='cards'>
                    <Items marca= 'Jordan' datos={productos} />
                    <Items marca= 'UnderArmour' datos={productos} />
                    <Items marca= 'Puma' datos={productos} />
                    <Items marca= 'Nike' datos={productos} />
                    <Items marca= 'Adidas' datos={productos} />
                </div>
            }

        </>
    )
}