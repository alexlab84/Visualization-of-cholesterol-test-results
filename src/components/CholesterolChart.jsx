import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

function CholesterolChart({ results }) {
  // Ordenamos los resultados por fecha para asegurarnos de que el gráfico los muestre en el orden correcto
  const sortedResults = [...results].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="chart"> {/* Aquí aplicamos la clase para estilos */}
      <h3 className="form-title">Evolución de los Niveles de Colesterol</h3>
      <ResponsiveContainer width="100%" height={400}> {/* Aseguramos que el contenedor sea responsive */}
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

CholesterolChart.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      totalCholesterol: PropTypes.number.isRequired,
      hdlCholesterol: PropTypes.number.isRequired,
      ldlCholesterol: PropTypes.number.isRequired,
      triglycerides: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CholesterolChart;
