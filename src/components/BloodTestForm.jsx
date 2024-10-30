// src/components/BloodTestForm.js

import  { useState } from "react";

function BloodTestForm({ onAddTest }) {
  const [testName, setTestName] = useState("");
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("");
  const [normalRange, setNormalRange] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!testName || !value || !unit || !normalRange || !date) {
      alert("Por favor completa todos los campos requeridos.");
      return;
    }

    // Crear un nuevo objeto de resultado
    const newTest = {
      id: Date.now(),
      testName,
      value: parseFloat(value),
      unit,
      normalRange,
      date,
      notes,
    };

    // Pasar el nuevo análisis al componente padre
    onAddTest(newTest);

    // Limpiar el formulario
    setTestName("");
    setValue("");
    setUnit("");
    setNormalRange("");
    setDate("");
    setNotes("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Añadir Nuevo Análisis de Sangre</h3>

      <label>
        Nombre del Análisis:
        <input type="text" value={testName} onChange={(e) => setTestName(e.target.value)} required />
      </label>

      <label>
        Resultado:
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} required />
      </label>

      <label>
        Unidad:
        <input type="text" value={unit} onChange={(e) => setUnit(e.target.value)} required />
      </label>

      <label>
        Rango Normal:
        <input type="text" value={normalRange} onChange={(e) => setNormalRange(e.target.value)} placeholder="Ejemplo: 12-16 g/dL" required />
      </label>

      <label>
        Fecha:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>

      <label>
        Notas:
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notas adicionales" />
      </label>

      <button type="submit">Añadir Análisis</button>
    </form>
  );
}

export default BloodTestForm;
