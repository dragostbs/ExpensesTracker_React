import CostItem from "./CostItem";
import "./CostList.css";

const CostList = ({ costs }) => {
  if (costs.length === 0) {
    return (
      <h2 className="cost-list__fallback">No expenses in this year !!!</h2>
    );
  }
  return (
    <ul className="cost-list">
      {costs.map((cost) => {
        return <CostItem key={cost.id} {...cost} />;
      })}
    </ul>
  );
};

export default CostList;
