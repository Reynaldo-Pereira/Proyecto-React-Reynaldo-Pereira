export const ItemDetail = ({ item }) => {

    return (
        <article key={item.modelo} className="tarjeta">
            <div className="tarjetita">
                <img src={item.url} alt={item.modelo} />
            </div>
            <div className="tarjetita-body">
                <h4>{item.modelo}</h4>
                <p>{item.description}</p>
                <b>{item.valor}$</b>
                <button>Agregar al carrito</button>
            </div>
        </article>
    )
}