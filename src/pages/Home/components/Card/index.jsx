import "./card.scss";

function Card({icone, texto}) {
  return (
    <div className="card d-flex a">
      <img src={icone} alt="icone" />
      <p>{texto}</p>
    </div>
  )
}

export default Card