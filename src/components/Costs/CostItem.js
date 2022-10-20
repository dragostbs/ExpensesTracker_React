import Card from "../UI/Card";
import "./CostItem.css";

function CostItem({ date, description, amount }) {
  return (
    <li>
      <Card className="cost-item">
        <div className="cost-item__date">{date.toISOString().slice(0, 10)}</div>
        <div className="cost-item__description">
          <h2>{description}</h2>
          <div className="cost-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default CostItem;
