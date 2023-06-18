import Card from "../../components/Card";
import cavalo from "../../assets/icons/cavalo.png"
import pen from "../../assets/icons/pen.png"
import festa from "../../assets/icons/festa.png"
import link from "../../assets/icons/link.png"
import grafico from "../../assets/icons/grafico.png"
import monitor from "../../assets/icons/monitor.png"
import "./servicos.scss";

function Ajuda() {
  return (
    <section className='servicos d-flex'>
      <div className="container">
        <div className="content d-flex">
        <h2>Afinal, em que eu posso te ajudar?</h2>
        <div className="cards">
          <Card icone={cavalo} texto="Carrosséis"/>
          <Card icone={pen} texto="Criativos"/>
          <Card icone={festa} texto="Flyers"/>
          <Card icone={link} texto="Página de links"/>
          <Card icone={grafico} texto="Landing pages"/>
          <Card icone={monitor} texto="Implementação"/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Ajuda