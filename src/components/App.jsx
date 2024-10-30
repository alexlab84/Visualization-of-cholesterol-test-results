// src/App.js

import { useState } from "react";
import BloodTestResultsTable from "./BloodTestResultsTable";
import BloodTestDetail from "./BloodTestDetail";
import BloodTestChart from "./BloodTestChart";
import BloodTestForm from "./BloodTestForm";

function App() {
  const [results, setResults] = useState([
    { id: 1, testName: "Hemoglobina", value: 13.5, unit: "g/dL", normalRange: "12-16 g/dL", date: "2023-09-10", notes: "Dentro del rango normal" },
    { id: 2, testName: "Glucosa", value: 92, unit: "mg/dL", normalRange: "70-99 mg/dL", date: "2023-09-10", notes: "" },
    // Otros resultados iniciales...
  ]);

  const [selectedTest, setSelectedTest] = useState(null);
  const [filter, setFilter] = useState("All");

  // Función para añadir un nuevo análisis
  const addTest = (newTest) => {
    setResults((prevResults) => [...prevResults, newTest]);
  };

  // Filtrar los resultados de acuerdo al tipo de análisis seleccionado
  const filteredResults = filter === "All" ? results : results.filter(result => result.testName === filter);

  // Crear opciones de tipo de análisis únicas para el selector
  const testTypes = ["All", ...new Set(results.map(result => result.testName))];

  return (
    <div>
      <h1>Visualización de Resultados de Análisis de Sangre</h1>

      {/* Formulario para añadir nuevos análisis */}
      <BloodTestForm onAddTest={addTest} />

      <label htmlFor="filter">Filtrar por Tipo de Análisis:</label>
      <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
        {testTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>

      <BloodTestResultsTable results={filteredResults} onSelectTest={setSelectedTest} />
      <BloodTestDetail selectedTest={selectedTest} />
      {selectedTest && <BloodTestChart data={filteredResults.filter(test => test.testName === selectedTest.testName)} />}
    </div>
  );
}

export default App;
