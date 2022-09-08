import "./Card.css";

const Card = ({ title, par, lesson, i }) => {
  console.log(i);
  return (
    <div className="Card">
      <h6>{title}</h6>
      ssss<b>{i}</b>
      <p>{par}</p>
      {lesson > 20 && <div>İleri düzey</div>}
      <button>Devamı</button>
    </div>
  );
};

export default Card;
