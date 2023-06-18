import setas from "../../assets/icons/setas.png";
import falante from "../../assets/icons/falante.png";
import conectar from "../../assets/icons/conectar.png";
import "./converta.scss";

function Converta() {
  return (
    <section className="converta d-flex">
      <div className="container">
        <div className="content">
          <h2>
            Se você quer que sua <span>página ou arte</span> converta, ela tem
            que:
          </h2>
          <div className="cards">
            <div className="item-converta">
              <img src={setas} alt="setas" />
              <p>se diferenciar das demais</p>
            </div>
            <div className="item-converta">
              <img src={falante} alt="auto-falante" />
              <p>captar a atenção do seu cliente</p>
            </div>
            <div className="item-converta">
              <img src={conectar} alt="conexão" />
              <p>se conectar com seu publico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Converta;
