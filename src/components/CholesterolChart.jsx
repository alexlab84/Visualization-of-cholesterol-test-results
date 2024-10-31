
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

function CholesterolChart({ results }) {
  // Ordenamos los resultados por fecha para asegurarnos de que el gráfico los muestre en el orden correcto
  const sortedResults = [...results].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h3>Evolución de los Niveles de Colesterol</h3>
      <ResponsiveContainer>
        <LineChart data={sortedResults} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={(date) => new Date(date).toLocaleDateString()} />
          <YAxis label={{ value: "mg/dL", angle: -90, position: "insideLeft" }} />
          <Tooltip labelFormatter={(date) => `Fecha: ${new Date(date).toLocaleDateString()}`} />
          <Legend />

          {/* Líneas para cada tipo de colesterol */}
          <Line type="monotone" dataKey="totalCholesterol" stroke="#8884d8" name="Colesterol Total" />
          <Line type="monotone" dataKey="hdlCholesterol" stroke="#82ca9d" name="Colesterol HDL" />
          <Line type="monotone" dataKey="ldlCholesterol" stroke="#ffc658" name="Colesterol LDL" />
          <Line type="monotone" dataKey="triglycerides" stroke="#d88484" name="Triglicéridos" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CholesterolChart;
