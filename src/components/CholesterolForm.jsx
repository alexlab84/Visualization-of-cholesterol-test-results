
import PropTypes from 'prop-types';
import { useState } from "react";

function CholesterolForm({ onAddTest }) {
  const [totalCholesterol, setTotalCholesterol] = useState("");
  const [hdlCholesterol, setHdlCholesterol] = useState("");
  const [ldlCholesterol, setLdlCholesterol] = useState("");
  const [triglycerides, setTriglycerides] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const vldlCholesterol = triglycerides ? triglycerides / 5 : 0;
    const newTest = {
      id: Date.now(),
      totalCholesterol: parseFloat(totalCholesterol),
      hdlCholesterol: parseFloat(hdlCholesterol),
      ldlCholesterol: parseFloat(ldlCholesterol),
      triglycerides: parseFloat(triglycerides),
      vldlCholesterol: parseFloat(vldlCholesterol.toFixed(2)),
      date,
      notes,
    };
    onAddTest(newTest);
    setTotalCholesterol("");
    setHdlCholesterol("");
    setLdlCholesterol("");
    setTriglycerides("");
    setDate("");
    setNotes("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3 className="form-title">Ingresar Resultados de Colesterol</h3>

        <label className="form-label">Colesterol Total (mg/dL):</label>
        <input type="number" className="form-input" value={totalCholesterol} onChange={(e) => setTotalCholesterol(e.target.value)} required />

        <label className="form-label">Colesterol HDL (mg/dL):</label>
        <input type="number" className="form-input" value={hdlCholesterol} onChange={(e) => setHdlCholesterol(e.target.value)} required />

        <label className="form-label">Colesterol LDL (mg/dL):</label>
        <input type="number" className="form-input" value={ldlCholesterol} onChange={(e) => setLdlCholesterol(e.target.value)} required />

        <label className="form-label">Triglicéridos (mg/dL):</label>
        <input type="number" className="form-input" value={triglycerides} onChange={(e) => setTriglycerides(e.target.value)} required />

        <label className="form-label">Fecha:</label>
        <input type="date" className="form-input" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label className="form-label">Notas:</label>
        <textarea className="form-textarea" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notas adicionales" />

        <button type="submit" className="form-button">Añadir Análisis</button>
      </form>
    </div>
  );
}

CholesterolForm.propTypes = {
  onAddTest: PropTypes.func.isRequired,
};


export default CholesterolForm;