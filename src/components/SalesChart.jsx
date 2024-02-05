import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

function SalesChart() {

    const data = [{name: 'Noviembre', uv: 40000, pv: 20000, amt: 2400},{name: 'Diciembre', uv: 60000, pv: 45000, amt: 2400},{name: 'Enero', uv: 15000, pv: 5000, amt: 2400},{name: 'Febrero', uv: 30000, pv: 14000, amt: 2400},{name: 'Marzo', uv: 40000, pv: 23000, amt: 2400}];

    return (
      <>
        <BarChart width={450} height={250} data={data} margin={{ top: 20 }}>
            <CartesianGrid stroke="#ececec" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }}/>
            <YAxis tick={{ fontSize: 12 }}/>
            <Tooltip />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </>
    );
  }
  
  export default SalesChart;