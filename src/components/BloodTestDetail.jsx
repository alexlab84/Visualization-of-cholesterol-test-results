

function BloodTestDetail({ selectedTest }) {
  if (!selectedTest) {
    return <p>Selecciona un análisis para ver detalles.</p>;
  }

  return (
    <div>
      <h3>Detalles de {selectedTest.testName}</h3>
      <p><strong>Resultado:</strong> {selectedTest.value} {selectedTest.unit}</p>
      <p><strong>Rango Normal:</strong> {selectedTest.normalRange}</p>
      <p><strong>Fecha:</strong> {selectedTest.date}</p>
      <p><strong>Notas:</strong> {selectedTest.notes || "Sin notas"}</p>
    </div>
  );
}

export default BloodTestDetail;
