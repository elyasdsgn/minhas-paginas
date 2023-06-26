import Perguntas from "../../components/Perguntas";
import "./faq.scss";

function Faq() {
  return (
    <section className="faq d-flex">
      <div className="container">
        <div className="content">
          <div className="title">
            <h2>F.A.Q</h2>
            <p>Perguntas frequentes</p>
          </div>

          <div className="perguntas">
            <Perguntas
              pergunta="Quais serviços você oferece?"
              resposta="Sou especialista em carrosséis, criativos de alto padrão e também faço Landing Pages"
            />
            <Perguntas
              pergunta="Qual o tipo de página que você faz?"
              resposta="As principais páginas para lançamento (página de vendas, página de captura, página de obrigado), mas caso você queira outro tipo de página podemos combinar pelo whatsApp."
            />
            <Perguntas
              pergunta="Você faz a copy das páginas ou criativos?"
              resposta="Não. É essencial que você tenha um copywriter qualificado para que sua produto alcance o sucesso desejado."
            />
            <Perguntas
              pergunta="Qual o prazo para entrega?"
              resposta="O prazo será estipulado de acordo com a demanda e urgência, já que cada projeto tem suas caracteristicas e dificuldades distintas."
            />
            <Perguntas
              pergunta="Se eu não gostar do projeto, posso pedir alteração?"
              resposta="Claro. Antes da entrega não terá limite de alterações, desde que o bom senso permaneça e não fuja do briefing."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
