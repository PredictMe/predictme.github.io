import React, {Component , PureComponent} from 'react'
import { LineChart, Line, Area , XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,ComposedChart } from 'recharts';
import { TokenItems } from '../../TokenItems';

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
        <svg x={cx - 50} y={cy - 34} width={50} height={37} fill="Green" viewBox="0 0 50 37">
          <path d="M0 8C0 3.58172 3.58172 0 8 0H42C46.4183 0 50 3.58172 50 8V16C50 20.4183 46.4183 24 42 24H8C3.58172 24 0 20.4183 0 16V8Z" fill="#D9D9D9"/>
<path d="M12.2202 5.83105H14.6772V12.4219C14.6772 13.4678 14.7077 14.1457 14.7686 14.4556C14.8737 14.9536 15.1227 15.3548 15.5156 15.6592C15.9141 15.958 16.4564 16.1074 17.1426 16.1074C17.8398 16.1074 18.3656 15.9663 18.7197 15.6841C19.0739 15.3963 19.2869 15.0449 19.3589 14.6299C19.4308 14.2148 19.4668 13.5259 19.4668 12.563V5.83105H21.9238V12.2227C21.9238 13.6836 21.8574 14.7157 21.7246 15.3188C21.5918 15.922 21.3455 16.4312 20.9858 16.8462C20.6317 17.2612 20.1558 17.5933 19.5581 17.8423C18.9604 18.0858 18.1802 18.2075 17.2173 18.2075C16.0552 18.2075 15.1725 18.0747 14.5693 17.8091C13.9717 17.5379 13.4985 17.1893 13.1499 16.7632C12.8013 16.3315 12.5716 15.8805 12.4609 15.4102C12.3005 14.7129 12.2202 13.6836 12.2202 12.3223V5.83105Z" fill="black"/>
<path d="M24.522 18V5.83105H28.4648C29.959 5.83105 30.9329 5.89193 31.3867 6.01367C32.084 6.19629 32.6678 6.59473 33.1382 7.20898C33.6086 7.81771 33.8438 8.60628 33.8438 9.57471C33.8438 10.3218 33.7082 10.9499 33.437 11.459C33.1659 11.9681 32.82 12.3693 32.3994 12.6626C31.9844 12.9504 31.561 13.1413 31.1294 13.2354C30.5428 13.3516 29.6934 13.4097 28.5811 13.4097H26.979V18H24.522ZM26.979 7.88965V11.3428H28.3237C29.2922 11.3428 29.9396 11.2791 30.2661 11.1519C30.5926 11.0246 30.8472 10.8254 31.0298 10.5542C31.2179 10.283 31.312 9.96761 31.312 9.60791C31.312 9.1652 31.182 8.79997 30.9219 8.51221C30.6618 8.22445 30.3325 8.0446 29.9341 7.97266C29.6408 7.91732 29.0514 7.88965 28.166 7.88965H26.979Z" fill="black"/>
<path d="M45 12C45 14.2091 43.2091 16 41 16C38.7909 16 37 14.2091 37 12C37 9.79086 38.7909 8 41 8C43.2091 8 45 9.79086 45 12Z" fill="#00FF29"/>
<path d="M31 37L37.9282 22H24.0718L31 37Z" fill="#D9D9D9"/>
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
  constructor(props){
    super(props)

    let isDemo
    if(props.isDemo){
      isDemo = isDemo
    }else{
      isDemo = false
    }
    this.state = {
      color1 : props.selectedToken.color1,
      isDemo : isDemo,
    }
    
  }


    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
            
            data={data}
            margin={{
              top: 20,
              right: -3,
              bottom: 20,
              left: -65,
            }}
          >
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                  <stop stopColor={this.state.color1} />
                  <stop offset="1" stopColor={this.state.color1} />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={this.state.color1} stopOpacity={0.8} />
                <stop offset="95%" stopColor={this.state.color1} stopOpacity={0.0} />
              </linearGradient>
              </defs>
              
  
              <CartesianGrid horizontal={false} strokeWidth="6" stroke="#252525" />
              <XAxis dataKey="name" axisLine={false}  tick={false}  tickLine={false} tickMargin={0}/>
              <YAxis tickLine={false} tick={false} axisLine={false}/>
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="pv" fill="url(#paint1_linear)" legendType="none" stroke="none" animationBegin={80} />
              <Line type="monotone" dataKey="pv" stroke="url(#paint0_linear)" strokeWidth="4" dot={this.state.isDemo ? null : <CustomizedDot/>} legendType="none"/>
            </ComposedChart>
          </ResponsiveContainer>
        )
      }
      
}

