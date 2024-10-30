
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

function BloodTestChart({ data }) {
    // Agrupar datos por tipo de análisis para graficar cada uno de forma separada
    const groupedData = data.reduce((acc, test) => {
      if (!acc[test.testName]) acc[test.testName] = [];
      acc[test.testName].push(test);
      return acc;
    }, {});
  
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
  
          {Object.keys(groupedData).map((testName, index) => (
            <Line
              key={index}
              type="monotone"
              data={groupedData[testName]}
              dataKey="value"
              name={testName}
              stroke={index % 2 === 0 ? "#8884d8" : "#82ca9d"}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  }
  

export default BloodTestChart;
