import react from "react";
import { ResponsiveContainer, LineChart, Line,XAxis,YAxis, Legend, Tooltip, BarChart, CartesianGrid, Bar, AreaChart, Area } from "recharts";
const Examdata=[
    {
      name:'Java',
      attend:13,
      total:20,
      absent:7
    },
    {
      name:'C++',
      attend:10,
      total:20,
      absent:10
    },
    {
      name:'Python',
      attend:33,
      total:35,
      absent:2
    }
  ]
  


const Examchart =()=>
{
    return(
        <>
        <h1 className="chart-heading">Line Chart</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={Examdata} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
            <Legend />
            <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
  
        <h1 className="chart-heading">Area Chart</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart
            width={500}
            height={300}
            data={Examdata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
  
        <h1 className="chart-heading">Bar Chart</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={Examdata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="student" fill="#8884d8" />
            <Bar dataKey="fees" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </>


    );
};
export default Examchart;