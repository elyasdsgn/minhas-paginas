import "./social.scss";

function Social() {
  return (
    <section className="social d-flex a">
      <div className="container">
        <div className="content">
          <div className="pablo d-flex a">
            <p>“66% dos cliques são norteados por design”</p>
            <p>- Pablo Maçal</p>
            <span className="test"></span>
          </div>
          <div className="ctaPablo d-flex a">
            <h2>
              então, pare de <span>queimar dinheiro</span> com um design fraco e
              vamos para o próximo nível!!
            </h2>
            <a href="https://api.whatsapp.com/send?phone=5598988149744&text=Opa,%20vim%20pelo%20seu%20site%20e%20quero%20fazer%20um%20or%C3%A7amento!" className="button">
              QUERO IR AO PRÓXIMO NÍVEL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
