import { useState } from "react";
import { Line, LineChart } from "recharts";

const ChartComponent = () => {
    const [data] = useState([{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]);
    
    return (<LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>);
};

export default ChartComponent;
