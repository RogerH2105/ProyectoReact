import "../App.css";
import banner from "../imgs/www.myclothes.com.png"
function Home() {
    return (
        <div className="contenido">
            <div className="filtros">
                <ul>
                    <li><a className="active" href="#">Aplicar filtros</a></li>
                    <li><a href="#">Tipo de prenda</a></li>
                    <li><a href="#">Talla</a></li>
                    <li><a href="#">Otros</a></li>
                </ul>
                <img src={banner} alt="oferta"></img>
            </div>
            <div className="Productos">
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
                <div>
                    <a href="#">Añadir al carrito</a>
                </div>
            </div>
        </div>
    )
}
export default Home;