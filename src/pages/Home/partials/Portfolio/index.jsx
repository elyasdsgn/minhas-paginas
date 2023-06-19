import Criativos from "../../components/Criativos"
import Paginas from "../../components/Paginas"
import insta from "../../assets/icons/instagram.png"
import behas from "../../assets/icons/behance.png"
import "./portfolio.scss"

function Portfolio() {
  return (
    <section className="portfolio d-flex a">
      <div className="container">
        <div className="content d-flex a">
          <h2>Conheça meu trabalho</h2>
          <div className="redes-sociais d-flex">
            <a href="https://www.instagram.com/dsgn.elyas/" target={"_blank"}>
              <img src={insta} alt="instagram icone"/>
            </a>
            <a href="https://behance.net/elyasdsgn" target={"_blank"}>
              <img src={behas} alt="behance icone"/>
            </a>
          </div>
          <Paginas/>
          <Criativos/>

          <a href="https://api.whatsapp.com/send?phone=5598988149744&text=Opa,%20vim%20pelo%20seu%20site%20e%20quero%20fazer%20um%20or%C3%A7amento!" className="button">QUERO IR AO PRÓXIMO NÍVEL</a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio