import React, { useState } from "react";
import "./CostForm.css";

const CostForm = ({ savedCostData, onCancelForm }) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    // On submit the form we will not load again the page
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    // Sending data to CostForm then App to display them on App component, Get savedCostData function from NewCosts
    savedCostData(costData);
    // Clear the inputs after submiting, important to put value={inputName} to input
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input
            value={inputAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label>Data</label>
          <input
            value={inputDate}
            onChange={dateChangeHandler}
            type="date"
            min="2022-01-01"
            step="2022-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={onCancelForm}>
            Close Form
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;

/* ---------- Other method --------------
 const [userInput, setUserInput] = useState({
    inputName: "",
    inputAmount: "",
    inputDate: "",
  });

  const nameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputName: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputAmount: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputDate: event.target.value,
      };
    });
  };
*/
