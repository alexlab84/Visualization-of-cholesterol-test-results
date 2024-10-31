

import { useState } from "react";
import CholesterolResultsTable from "./CholesterolResultsTable";
import CholesterolChart from "./CholesterolChart";
import CholesterolForm from "./CholesterolForm";

function App() {
  const [results, setResults] = useState([]);

  const addTest = (newTest) => {
    setResults((prevResults) => [...prevResults, newTest]);
  };

  return (
    <div>
      <h1>Resultados de Pruebas de Colesterol</h1>
      
      <CholesterolForm onAddTest={addTest} />
      <CholesterolResultsTable results={results} />
      <CholesterolChart results={results} /> {/* Agregamos el gráfico aquí */}
    </div>
  );
}

export default App;
