

function BloodTestResultsTable({ results, onSelectTest }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre del Análisis</th>
          <th>Resultado</th>
          <th>Rango Normal</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.id} onClick={() => onSelectTest(result)}>
            <td>{result.testName}</td>
            <td>{result.value} {result.unit}</td>
            <td>{result.normalRange}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BloodTestResultsTable;
