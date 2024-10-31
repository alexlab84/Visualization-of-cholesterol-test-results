

function isOutOfRange(value, parameter) {
  switch (parameter) {
    case "totalCholesterol":
      return value > 200;
    case "hdlCholesterol":
      return value < 45 ? "Riesgo elevado" : value <= 65 ? "Riesgo moderado" : "Sin riesgo";
    case "ldlCholesterol":
      return value > 190 ? "Riesgo" : "Normalidad";
    case "triglycerides":
      return value >= 150 ? "Riesgo" : "Normal";
    default:
      return false;
  }
}

function CholesterolResultsTable({ results }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Colesterol Total</th>
          <th>Colesterol HDL</th>
          <th>Colesterol LDL</th>
          <th>Triglicéridos</th>
          <th>VLDL</th>
          <th>Notas</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.id}>
            <td>{result.date}</td>
            <td style={{ color: result.totalCholesterol > 200 ? "red" : "black" }}>
              {result.totalCholesterol} mg/dL
            </td>
            <td style={{ color: isOutOfRange(result.hdlCholesterol, "hdlCholesterol") === "Riesgo elevado" ? "red" : "black" }}>
              {result.hdlCholesterol} mg/dL ({isOutOfRange(result.hdlCholesterol, "hdlCholesterol")})
            </td>
            <td style={{ color: isOutOfRange(result.ldlCholesterol, "ldlCholesterol") === "Riesgo" ? "red" : "black" }}>
              {result.ldlCholesterol} mg/dL ({isOutOfRange(result.ldlCholesterol, "ldlCholesterol")})
            </td>
            <td style={{ color: result.triglycerides >= 150 ? "red" : "black" }}>
              {result.triglycerides} mg/dL ({isOutOfRange(result.triglycerides, "triglycerides")})
            </td>
            <td>{result.vldlCholesterol} mg/dL</td>
            <td>{result.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CholesterolResultsTable;
