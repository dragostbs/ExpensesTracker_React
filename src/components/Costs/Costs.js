import Card from "../UI/Card";
import CostList from "./CostList";
import CostFilter from "./CostsFilter";
import "./Costs.css";
import "./CostsFilter.css";
import React, { useState } from "react";
import CostsDiagram from "./CostsDiagram";

function Costs({ costs }) {
  const [selectedYear, setSelectedYear] = useState("2022");

  // Get data from CostsFilter
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  // Filter data by year
  const filteredCosts = costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostFilter
          changeYear={yearChangeHandler}
          templateYear={selectedYear}
        />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;

/* ------------- One Method Ternary Operator ----------------
{filteredCosts.length === 0 && (
  <h1 className="no-cost">No expenses in this year !!!</h1>
)}
{filteredCosts.length > 0 &&
  filteredCosts.map((cost) => {
    return <CostItem key={cost.id} {...cost} />;
  })}
  */
