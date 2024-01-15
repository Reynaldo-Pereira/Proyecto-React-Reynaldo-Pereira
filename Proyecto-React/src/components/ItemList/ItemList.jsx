import { Link } from "react-router-dom";

export const Items = ({ datos }) => {
    return (
        <section className="container">
                {datos.map((i) => (
                    <article key={i.id} className="box-container">
                        <div className="box-image">
                            <img src={i.url} alt={i.name} />
                        </div>
                        <div className="box-body">
                            <p>{i.name}</p>
                            <b>{i.price}$</b>
                            <Link to={`/item/${i.id}`}><button>SEE MORE</button></Link>
                        </div>
                    </article>
                ))}
        </section>
    )
}