import { useState } from "react";
import Header from './Header';
import Footer from "./Footer";
import CholesterolResultsTable from "./CholesterolResultsTable";
import CholesterolChart from "./CholesterolChart";
import CholesterolForm from "./CholesterolForm";

import '../styles/App.scss'

function App() {
  const [results, setResults] = useState([]);

  const addTest = (newTest) => {
    setResults((prevResults) => [...prevResults, newTest]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <CholesterolForm onAddTest={addTest} />
        <CholesterolResultsTable results={results} />
        <CholesterolChart results={results} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
