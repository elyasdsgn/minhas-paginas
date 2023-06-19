import Criativos from "../../components/Criativos"
import Paginas from "../../components/Paginas"
import "./portfolio.scss"

function Portfolio() {
  return (
    <section className="portfolio d-flex a">
      <div className="container">
        <div className="content">
          <h2>Conheça meu trabalho</h2>
          <div className="redes-sociais">
            <a href="#">insta</a>
            <a href="#">behas</a>
          </div>
          <Paginas/>
          <Criativos/>
        </div>
      </div>
    </section>
  )
}

export default Portfolio