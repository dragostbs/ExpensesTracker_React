const CostsFilter = ({ changeYear, templateYear }) => {
  const yearChangeHandler = (event) => {
    changeYear(event.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <h2>Choose Year</h2>
        <select value={templateYear} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
