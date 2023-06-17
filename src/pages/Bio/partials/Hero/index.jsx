import eu from '../../assets/eu.png'
import "./hero.scss"

function Hero() {
  return (
    <section className="heroBio d-flex">
      <span>Eleve o padrão da sua marca! 🔥🚀</span>
      <div className="eu">
        <div className="conteudo">
          <img src={eu} alt="" />
        </div>
      </div>
      <h1>Elyas Rodrigues</h1>
      <p>Alguns links que podem te ajudar!</p>
    </section>
  )
}

export default Hero