import './navbar.css'

export function NavBar() {

    return (
        <header>
            <img src="/react.svg" alt="logo" />

            <nav>
                <ul>
                    <li><a href="">Camisetas</a></li>
                    <li><a href="">Buzos</a></li>
                    <li><a href="">Pantalones</a></li>
                    <li><a href="">Shorts</a></li>
                </ul>
                <a className= "carrito" href="">🛒</a>
            </nav>
        </header>
    )
}