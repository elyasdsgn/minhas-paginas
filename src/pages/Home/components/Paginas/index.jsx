import CardScroll from "../../components/CardScroll"

import cloudflare from "../../assets/trabalhos/paginas/cloudflare.webp"
import projetoDom from "../../assets/trabalhos/paginas/projetoDom.webp"
import osegredodasvendas from "../../assets/trabalhos/paginas/o-segredo-das-vendas.webp"
import advogada from "../../assets/trabalhos/paginas/lp-advogada.webp"
import comunidadeCafa from "../../assets/trabalhos/paginas/comunidadeCafa.webp"
import mainstreet from "../../assets/trabalhos/paginas/mainstreet.webp"

import "./paginas.scss";

function Paginas() {
  return (
    <div className="paginas">
      <p>Páginas</p>
      <div className="cards-paginas">
        <CardScroll img={cloudflare}/>
        <CardScroll img={osegredodasvendas}/>
        <CardScroll img={advogada} />
        <CardScroll img={projetoDom}/>
        <CardScroll img={comunidadeCafa}/>
        <CardScroll img={mainstreet}/>
      </div>
    </div>
  )
}

export default Paginas