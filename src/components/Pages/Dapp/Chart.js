import React, {Component , PureComponent} from 'react'
import { LineChart, Line, Area , XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,ComposedChart } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const CustomizedDot = (props) => {
    const { cx, cy, stroke, payload, value } = props;
  
    if (value > 2500) {
      return (
        <svg x={cx - 10} y={cy - 10} width={50} height={50} fill="Green" viewBox="0 0 1024 1024">
          <path d="M85.5 0L170.803 147.75H0.196495L85.5 0Z"/>
        </svg>
      );
    }
  
    return (
      <svg></svg>
    );
  };


  class CustomizedLabel extends PureComponent {
    render() {
      const { x, y, stroke, value } = this.props;
  
      return (
        <text x={x} y={y} dy={-4} fill={stroke} fontSize={25} textAnchor="middle">
          {value}
        </text>
      );
    }
  }

  

export default class Chart extends Component{


    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
            
            data={data}
            margin={{
              top: 20,
              right: -0,
              bottom: 20,
              left: -65,
            }}
          >
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor="#6B8DE3" />
                  <stop offset="1" stopColor="#7D1C8D" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.0} />
              </linearGradient>
              </defs>
              
  
              <CartesianGrid horizontal={false} strokeWidth="6" stroke="#252525" />
              <XAxis dataKey="name" axisLine={false}  tick={false}  tickLine={false} tickMargin={0}/>
              <YAxis tickLine={false} tick={false} axisLine={false}/>
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="pv" fill="url(#paint1_linear)" legendType="none" stroke="url(#paint0_linear)" />
              <Line type="monotone" dataKey="pv" stroke="url(#paint0_linear)" strokeWidth="4" dot={<CustomizedDot />} legendType="none" label={<CustomizedLabel />}  />
            </ComposedChart>
          </ResponsiveContainer>
        )
      }
      
}

