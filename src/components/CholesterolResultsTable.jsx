

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
    <table className="table">
      <thead>
        <tr className="table-header">
          <th className="table-header-cell">Fecha</th>
          <th className="table-header-cell">Colesterol Total</th>
          <th className="table-header-cell">Colesterol HDL</th>
          <th className="table-header-cell">Colesterol LDL</th>
          <th className="table-header-cell">Triglicéridos</th>
          <th className="table-header-cell">Colesterol VLDL</th>
          <th className="table-header-cell">Notas</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.id} className="table-row">
            <td className="table-cell" data-label="Fecha">{result.date}</td>
            <td className={`table-cell ${isOutOfRange(result.totalCholesterol, "totalCholesterol")}`} data-label="Colesterol Total">
              {result.totalCholesterol} mg/dL
            </td>
            <td className={`table-cell ${isOutOfRange(result.hdlCholesterol, "hdlCholesterol")}`} data-label="Colesterol HDL">
              {result.hdlCholesterol} mg/dL
            </td>
            <td className={`table-cell ${isOutOfRange(result.ldlCholesterol, "ldlCholesterol")}`} data-label="Colesterol LDL">
              {result.ldlCholesterol} mg/dL
            </td>
            <td className={`table-cell ${isOutOfRange(result.triglycerides, "triglycerides")}`} data-label="Triglicéridos">
              {result.triglycerides} mg/dL
            </td>
            <td className="table-cell" data-label="Colesterol VLDL">{result.vldlCholesterol} mg/dL</td>
            <td className="table-cell" data-label="Notas">{result.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CholesterolResultsTable;
