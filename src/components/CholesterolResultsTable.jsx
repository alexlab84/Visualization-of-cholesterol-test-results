import PropTypes from 'prop-types';

function isOutOfRange(value, parameter) {
  switch (parameter) {
    case "totalCholesterol":
      return value > 200 ? "warning" : "normal";
    case "hdlCholesterol":
      return value < 45 ? "warning" : "normal";
    case "ldlCholesterol":
      return value > 190 ? "warning" : "normal";
    case "triglycerides":
      return value >= 150 ? "warning" : "normal";
    default:
      return "";
  }
}

function CholesterolResultsTable({ results }) {
  return (
    <div className="cholesterol-results-table">
      <div className="table-wrapper">
        {results.map((result) => (
          <div key={result.id} className="table-row">
            <div className="table-cell" data-label="Fecha">{result.date}</div>
            <div className={`table-cell ${isOutOfRange(result.totalCholesterol, "totalCholesterol")}`} data-label="Colesterol Total">
              {result.totalCholesterol} mg/dL
            </div>
            <div className={`table-cell ${isOutOfRange(result.hdlCholesterol, "hdlCholesterol")}`} data-label="Colesterol HDL">
              {result.hdlCholesterol} mg/dL
            </div>
            <div className={`table-cell ${isOutOfRange(result.ldlCholesterol, "ldlCholesterol")}`} data-label="Colesterol LDL">
              {result.ldlCholesterol} mg/dL
            </div>
            <div className={`table-cell ${isOutOfRange(result.triglycerides, "triglycerides")}`} data-label="Triglicéridos">
              {result.triglycerides} mg/dL
            </div>
            <div className="table-cell" data-label="Colesterol VLDL">{result.vldlCholesterol} mg/dL</div>
            <div className="table-cell" data-label="Notas">{result.notes}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

CholesterolResultsTable.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      totalCholesterol: PropTypes.number.isRequired,
      hdlCholesterol: PropTypes.number.isRequired,
      ldlCholesterol: PropTypes.number.isRequired,
      triglycerides: PropTypes.number.isRequired,
      vldlCholesterol: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      notes: PropTypes.string,
    })
  ).isRequired,
};

export default CholesterolResultsTable;
