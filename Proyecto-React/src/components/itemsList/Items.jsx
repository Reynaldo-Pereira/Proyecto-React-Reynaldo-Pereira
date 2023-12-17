export const Items = ({ marca, datos }) => {
    console.log(datos);

    return (
        <section>
            <h2>{marca}</h2>
            <hr />

            {datos.map((i) => (
                <article key={i.id} className="box-container">
                    <div className="box-image">
                        <img src={i.url} alt={i.modelo} />
                    </div>
                    <div className="box-body">
                        <p>{i.modelo}</p>
                        <b>{i.valor}</b>
                        <button>Agregar al carrito</button>
                    </div>
                </article>
            ))}
        </section>
    );
};
