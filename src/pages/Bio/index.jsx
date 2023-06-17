import Header from "./partials/Header";
import Hero from "./partials/Hero";
import Botoes from "./partials/Botoes";
import "./bio.scss";

function Bio() {
  return (
    <div className="bio d-flex">
      <Header/>
      <main>
        <Hero/>
        <Botoes/>
      </main>
    </div>
  )
}

export default Bio