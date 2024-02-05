import { PieChart, Pie, Legend, Tooltip } from 'recharts';

function OverviewChart() {

    const data = [{ name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },];

    return (
      <>
        <PieChart width={230} height={250}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
      </>
    );
  }
  
  export default OverviewChart;