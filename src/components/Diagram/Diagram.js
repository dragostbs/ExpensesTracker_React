import DiagramBar from "./DiagramBar";
import Card from "../UI/Card";
import "./Diagram.css";

const Diagram = ({ dataSets }) => {
  // Get data from diagramDataSets array
  const dataSetsValues = dataSets.map((data) => {
    return data.value;
  });
  // Identify the max value from dataSetsValues
  const maxMonthCost = Math.max(...dataSetsValues);

  return (
    // using map function to not write <DiagramBar />, <DiagramBar /> multiple times, dataSets is made here not imported
    <Card className="diagram">
      {dataSets.map((dataset) => (
        <DiagramBar
          key={dataset.label}
          value={dataset.value}
          maxValue={maxMonthCost}
          label={dataset.label}
        />
      ))}
    </Card>
  );
};

export default Diagram;
