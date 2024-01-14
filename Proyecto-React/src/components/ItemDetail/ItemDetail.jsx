export const ItemDetail = ({ item }) => {

    return (
        <article key={item.name} className="tarjeta">
            <div className="tarjetita">
                <img src={item.url} alt={item.name} />
            </div>
            <div className="tarjetita-body">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <b>{item.price}$</b>
                <button>Agregar al carrito</button>
            </div>
        </article>
    )
}