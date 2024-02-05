import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function DailyChart() {

    const data = [{name: 'Noviembre', uv: 40000, pv: 20000, amt: 2400},{name: 'Diciembre', uv: 60000, pv: 45000, amt: 2400},{name: 'Enero', uv: 15000, pv: 5000, amt: 2400},{name: 'Febrero', uv: 30000, pv: 14000, amt: 2400},{name: 'Marzo', uv: 40000, pv: 23000, amt: 2400}];

    return (
      <>
        <AreaChart width={500} height={220} data={data} margin={{ left: 0, right: 0, bottom: 0 }} >
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </>
    );
  }
  
  export default DailyChart;