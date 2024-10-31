

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
        <tr>
          <th className="table-header table-header-cell">Fecha</th>
          <th className="table-header table-header-cell">Colesterol Total</th>
          <th className="table-header table-header-cell">Colesterol HDL</th>
          <th className="table-header table-header-cell">Colesterol LDL</th>
          <th className="table-header table-header-cell">Triglicéridos</th>
          <th className="table-header table-header-cell">Colesterol VLDL</th>
          <th className="table-header table-header-cell">Notas</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.id}>
            <td className="table-cell">{result.date}</td>
            <td className={`table-cell ${isOutOfRange(result.totalCholesterol, "totalCholesterol")}`}>
              {result.totalCholesterol} mg/dL
            </td>
            <td className={`table-cell ${isOutOfRange(result.hdlCholesterol, "hdlCholesterol")}`}>
              {result.hdlCholesterol} mg/dL
            </td>
            <td className={`table-cell ${isOutOfRange(result.ldlCholesterol, "ldlCholesterol")}`}>
              {result.ldlCholesterol} mg/dL
            </td>
            <td className={`table-cell ${isOutOfRange(result.triglycerides, "triglycerides")}`}>
              {result.triglycerides} mg/dL
            </td>
            <td className="table-cell">{result.vldlCholesterol} mg/dL</td>
            <td className="table-cell">{result.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CholesterolResultsTable;
