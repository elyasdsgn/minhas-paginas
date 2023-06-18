import Servicos from "./partials/Servicos"
import Hero from "./partials/Hero"
import Converta from "./partials/Converta"
import Social from "./partials/Social"
import Bio from "./partials/Bio"
import Faq from "./partials/Faq"
import Portfolio from "./partials/Portfolio"

function Home() {
  return (
    <>
      <Hero/>
      <main>
        <Servicos/>
        <Converta/>
        <Social/>
        <Bio/>
        <Portfolio/>
        <Faq/>
      </main>
    </>
  )
}

export default Home