import { useState } from "react";
import CostForm from "./CostForm";
import "./NewCosts.css";

const NewCosts = ({ addCosts }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Getting Cost Data from CostForm with inputCostData destruct
  const savedCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    // Sending Data to App through addCosts function from App
    addCosts(costData);

    // Auto close the form inputs once data is submitted
    setIsFormVisible(false);
  };

  // Add New Expense button to open the form
  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  // Close button on form
  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Add New Expense</button>
      )}
      {isFormVisible && (
        <CostForm
          savedCostData={savedCostDataHandler}
          onCancelForm={closeForm}
        />
      )}
    </div>
  );
};

export default NewCosts;
