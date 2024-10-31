

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
    <form onSubmit={handleSubmit}>
      <h3>Ingresar Resultados de Colesterol</h3>

      <label>
        Colesterol Total (mg/dL):
        <input
          type="number"
          value={totalCholesterol}
          onChange={(e) => setTotalCholesterol(e.target.value)}
          required
        />
      </label>

      <label>
        Colesterol HDL (mg/dL):
        <input
          type="number"
          value={hdlCholesterol}
          onChange={(e) => setHdlCholesterol(e.target.value)}
          required
        />
      </label>

      <label>
        Colesterol LDL (mg/dL):
        <input
          type="number"
          value={ldlCholesterol}
          onChange={(e) => setLdlCholesterol(e.target.value)}
          required
        />
      </label>

      <label>
        Triglicéridos (mg/dL):
        <input
          type="number"
          value={triglycerides}
          onChange={(e) => setTriglycerides(e.target.value)}
          required
        />
      </label>

      <label>
        Fecha:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>

      <label>
        Notas:
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notas adicionales"
        />
      </label>

      <button type="submit">Añadir Análisis</button>
    </form>
  );
}

export default CholesterolForm;
