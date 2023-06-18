import Servicos from "./partials/Servicos"
import Hero from "./partials/Hero"
import Converta from "./partials/Converta"
import Social from "./partials/Social"
import Bio from "./partials/Bio"

function Home() {
  return (
    <>
      <Hero/>
      <main>
        <Servicos/>
        <Converta/>
        <Social/>
        <Bio/>
      </main>
    </>
  )
}

export default Home