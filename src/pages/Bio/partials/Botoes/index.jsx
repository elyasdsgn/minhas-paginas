import insta from "../../assets/instagram.jpg"
import behas from "../../assets/behas.jpg"
import zap from "../../assets/zap.jpg"
import {Link} from "react-router-dom"
import "./botoes.scss"


function Botoes() {
  return (
    <section className="botoes d-flex">
      <Link to="https://wa.me/98988149744?text=Olá, vim pelo seu site e preciso de ajuda!!">
        <img src={zap} alt="zap"  className="cardBio"/>
      </Link>
      <Link to="https://www.behance.net/elyasdsgn" target={"_blank"}>
        <img src={behas} alt="behance" className="cardBio"/>
      </Link>
      <Link to="https://www.instagram.com/dsgn.elyas/" target={"_blank"}>
        <img src={insta} alt="instagram"  className="cardBio"/>
      </Link>
     
    </section>
  )
}

export default Botoes