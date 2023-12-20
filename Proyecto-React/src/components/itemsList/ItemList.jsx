import { Link } from "react-router-dom";

export const Items = ({ marca, datos }) => {
    return (
        <>
            <div className="titulo">
                <h2>{marca}</h2>
                <hr />
            </div>
        
            <section className="container">
                {datos.map((i) => (
                    <article key={i.id} className="box-container">
                        <div className="box-image">
                            <img src={i.url} alt={i.modelo} />
                        </div>
                        <div className="box-body">
                            <p>{i.modelo}</p>
                            <b>{i.valor}$</b>
                            <button>
                                <Link to={`/item/${i.id}`}>Ver mas</Link>
                            </button>
                        </div>
                    </article>
                ))}
            </section>
        </>
    )
}
