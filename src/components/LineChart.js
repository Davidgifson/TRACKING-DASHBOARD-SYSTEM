import react from "react";
import { ResponsiveContainer, LineChart, Line,XAxis,YAxis, Legend, Tooltip, CartesianGrid } from "recharts";
const chartdata=[
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
  


const Lchart =()=>
{
    return(
        <ResponsiveContainer width="100%" aspect={4}>
            <LineChart data={chartdata} width={500} height={300} margin={{
                top:5 ,bottom:50,left:50,right:700
            }}>
                <XAxis dataKey="name" interval={'preserveStartEnd'}/>
                <CartesianGrid/>
                <YAxis/> 
                <Line dataKey="total" />
                <Line dataKey="absent" stroke="red"/>
                <Line dataKey="attend" stroke="green"/>
                <Tooltip/>
                <Legend/>
            </LineChart>
        </ResponsiveContainer>


    );
};
export default Lchart;