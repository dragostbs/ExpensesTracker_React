import "./Card.css";

function Card({ children, className }) {
  // Atributing .card from css the className, the same as className="card"
  const classes = "card " + className;
  // Children React component to use Card instead of a div, eliminate dublicated code
  return <div className={classes}>{children}</div>;
}

export default Card;
