import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCosts from "./components/NewCosts/NewCosts";
import "./index.css";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2022, 2, 10),
    description: "Car",
    amount: 12000.75,
  },
  {
    id: "c2",
    date: new Date(2022, 1, 15),
    description: "Laptop",
    amount: 2700.99,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  // Pushing user data to our initial costs and display them all, prevCost is Costs from useState, Get data from NewCosts
  const addCostHandler = (cost) => {
    setCosts((prevCost) => {
      return [cost, ...prevCost];
    });
  };

  return (
    <div className="main">
      <hr />
      <div className="main-components">
        <NewCosts addCosts={addCostHandler} />
        <Costs costs={costs} />
      </div>
    </div>
  );
}

export default App;
