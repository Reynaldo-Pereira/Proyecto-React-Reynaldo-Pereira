export function Items( {marca, datos} ) {

    return (
        <section>
            <h2>{marca}</h2>
            <hr />

            {
                datos.map((i) => {
                    <article class="box-container">
                    <div class="box-image">
                        <img src={i.url} alt={i.modelo} />
                    </div>
                    <div class="box-body">
                        <p>{i.modelo}</p>
                        <b>{i.valor}</b>
                        <button>Agregar al carrito</button>
                    </div>
                </article>
                })
            }
        </section>
    )
}