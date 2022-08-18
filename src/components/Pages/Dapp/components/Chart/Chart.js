import React, {Component , PureComponent} from 'react'
import { LineChart, Line, Area , XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,ComposedChart } from 'recharts';
import { TokenItems } from '../../TokenItems';

  

  const CustomizedDot = (props) => {
    const { cx, cy, stroke, payload, value } = props;
    //let isPredicted = false
    //if(payload.prediction){ isPredicted = true}
    if (payload.prediction) {
      if(payload.prediction == "UP"){
      return (
        <svg x={cx - 50} y={cy - 39} width={50} height={39} fill="Green" viewBox="175.112 213.684 50 39">
          <path d="M0 8C0 3.58172 3.58172 0 8 0H42C46.4183 0 50 3.58172 50 8V16C50 20.4183 46.4183 24 42 24H8C3.58172 24 0 20.4183 0 16V8Z" fill="#0D6EFD" transform="matrix(1, 0, 0, 1, 175.112122, 213.683868)"/>
          <path d="M 207.112 252.684 L 214.04 237.322 L 200.184 237.322 L 207.112 252.684 Z" fill="#0D6EFD"/>
          <path d="M9.4082 5.83105H11.8652V12.4219C11.8652 13.4678 11.8957 14.1457 11.9565 14.4556C12.0617 14.9536 12.3107 15.3548 12.7036 15.6592C13.1021 15.958 13.6444 16.1074 14.3306 16.1074C15.0278 16.1074 15.5535 15.9663 15.9077 15.6841C16.2619 15.3963 16.4749 15.0449 16.5469 14.6299C16.6188 14.2148 16.6548 13.5259 16.6548 12.563V5.83105H19.1118V12.2227C19.1118 13.6836 19.0454 14.7157 18.9126 15.3188C18.7798 15.922 18.5335 16.4312 18.1738 16.8462C17.8197 17.2612 17.3438 17.5933 16.7461 17.8423C16.1484 18.0858 15.3682 18.2075 14.4053 18.2075C13.2432 18.2075 12.3605 18.0747 11.7573 17.8091C11.1597 17.5379 10.6865 17.1893 10.3379 16.7632C9.98926 16.3315 9.7596 15.8805 9.64893 15.4102C9.48844 14.7129 9.4082 13.6836 9.4082 12.3223V5.83105Z" fill="white" transform="matrix(1, 0, 0, 1, 175.112122, 213.683868)"/>
          <path d="M21.71 18V5.83105H25.6528C27.147 5.83105 28.1209 5.89193 28.5747 6.01367C29.272 6.19629 29.8558 6.59473 30.3262 7.20898C30.7965 7.81771 31.0317 8.60628 31.0317 9.57471C31.0317 10.3218 30.8962 10.9499 30.625 11.459C30.3538 11.9681 30.008 12.3693 29.5874 12.6626C29.1724 12.9504 28.749 13.1413 28.3174 13.2354C27.7308 13.3516 26.8813 13.4097 25.769 13.4097H24.167V18H21.71ZM24.167 7.88965V11.3428H25.5117C26.4801 11.3428 27.1276 11.2791 27.4541 11.1519C27.7806 11.0246 28.0352 10.8254 28.2178 10.5542C28.4059 10.283 28.5 9.96761 28.5 9.60791C28.5 9.1652 28.37 8.79997 28.1099 8.51221C27.8498 8.22445 27.5205 8.0446 27.1221 7.97266C26.8288 7.91732 26.2394 7.88965 25.354 7.88965H24.167Z" fill="white" transform="matrix(1, 0, 0, 1, 175.112122, 213.683868)"/>
          <path d="M44 12C44 14.2091 42.2091 16 40 16C37.7909 16 36 14.2091 36 12C36 9.79086 37.7909 8 40 8C42.2091 8 44 9.79086 44 12Z" fill="#00FF29" transform="matrix(1, 0, 0, 1, 175.112122, 213.683868)"/>
        </svg>
      );
    }else if(payload.prediction == "DOWN"){
      return (
        <svg x={cx - 60} y={cy - 39} width={60} height={39} fill="Green" viewBox="242.482 213.869 60 39">
          <path d="M 242.482 221.869 C 242.482 217.451 246.064 213.869 250.482 213.869 L 294.482 213.869 C 298.901 213.869 302.482 217.451 302.482 221.869 L 302.482 229.869 C 302.482 234.288 298.901 237.869 294.482 237.869 L 250.482 237.869 C 246.064 237.869 242.482 234.288 242.482 229.869 L 242.482 221.869 Z" fill="#0D6EFD"/>
          <path d="M 282.482 252.869 L 289.411 237.362 L 275.554 237.362 L 282.482 252.869 Z" fill="#0D6EFD"/>
          <path d="M 250.342 221.279 L 253.512 221.279 C 254.227 221.279 254.772 221.334 255.147 221.444 C 255.65 221.592 256.082 221.856 256.441 222.235 C 256.801 222.613 257.074 223.078 257.262 223.629 C 257.449 224.176 257.543 224.852 257.543 225.656 C 257.543 226.363 257.455 226.973 257.279 227.485 C 257.064 228.11 256.758 228.615 256.359 229.002 C 256.059 229.295 255.652 229.524 255.141 229.688 C 254.758 229.809 254.246 229.869 253.605 229.869 L 250.342 229.869 L 250.342 221.279 Z M 252.076 222.733 L 252.076 228.422 L 253.371 228.422 C 253.855 228.422 254.205 228.395 254.42 228.34 C 254.701 228.27 254.934 228.151 255.117 227.983 C 255.305 227.815 255.457 227.539 255.574 227.156 C 255.691 226.77 255.75 226.244 255.75 225.58 C 255.75 224.916 255.691 224.406 255.574 224.051 C 255.457 223.695 255.293 223.418 255.082 223.219 C 254.871 223.02 254.604 222.885 254.279 222.815 C 254.037 222.76 253.563 222.733 252.855 222.733 L 252.076 222.733 Z" fill="white"/>
          <path d="M 258.668 225.627 C 258.668 224.752 258.799 224.018 259.061 223.424 C 259.256 222.987 259.522 222.594 259.857 222.246 C 260.197 221.899 260.568 221.641 260.971 221.473 C 261.506 221.246 262.123 221.133 262.822 221.133 C 264.088 221.133 265.1 221.526 265.857 222.311 C 266.619 223.096 267 224.188 267 225.586 C 267 226.973 266.623 228.059 265.869 228.844 C 265.115 229.625 264.107 230.016 262.846 230.016 C 261.568 230.016 260.553 229.627 259.799 228.85 C 259.045 228.069 258.668 226.994 258.668 225.627 Z M 260.455 225.569 C 260.455 226.541 260.68 227.28 261.129 227.783 C 261.578 228.283 262.148 228.533 262.84 228.533 C 263.531 228.533 264.098 228.285 264.539 227.789 C 264.984 227.289 265.207 226.541 265.207 225.545 C 265.207 224.561 264.99 223.826 264.557 223.342 C 264.127 222.858 263.555 222.615 262.84 222.615 C 262.125 222.615 261.549 222.862 261.111 223.354 C 260.674 223.842 260.455 224.58 260.455 225.569 Z" fill="white"/>
          <path d="M 269.578 229.869 L 267.527 221.279 L 269.303 221.279 L 270.598 227.18 L 272.168 221.279 L 274.23 221.279 L 275.736 227.28 L 277.055 221.279 L 278.801 221.279 L 276.715 229.869 L 274.875 229.869 L 273.164 223.447 L 271.459 229.869 L 269.578 229.869 Z" fill="white"/>
          <path d="M 279.709 229.869 L 279.709 221.279 L 281.397 221.279 L 284.912 227.016 L 284.912 221.279 L 286.523 221.279 L 286.523 229.869 L 284.783 229.869 L 281.32 224.268 L 281.32 229.869 L 279.709 229.869 Z" fill="white"/>
          <path d="M 298.482 225.869 C 298.482 228.078 296.692 229.869 294.482 229.869 C 292.273 229.869 290.482 228.078 290.482 225.869 C 290.482 223.66 292.273 221.869 294.482 221.869 C 296.692 221.869 298.482 223.66 298.482 225.869 Z" fill="#FF0000"/>
        </svg>
      );
    }
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
      data : [],
      isChartReady : false,
    }
    try {
      if(props.prediction){
        this.state.prediction = props.prediction
      }
    } catch (error) {
      this.state.prediction = null
    }
    
    this.getData(props.selectedToken.symbol_base, props.selectedToken.symbol_quote )
  }

   normalize = (data) => {
    let normalizedData = []
    let smallestValue = 10*1000000

    for(let e of data){
      if(smallestValue > e.price){
        smallestValue = e.price
      }
    }
    for(let e of data){
      e.price = e.price - smallestValue
      normalizedData.push({time : e.time, price : e.price, prediction : false})
    }
    //console.log("normalizedData",normalizedData)
    return normalizedData
  }

   btcData = async (symbol_base, symbol_quote) => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym='+symbol_base+'&tsym='+symbol_quote+'&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146');
    const json = await response.json();
    const data = json.Data.Data
    let marketData =[]

    for(let e of data){
      marketData.push({time : e.time, price : e.high})
    }
    //console.log("marketData",marketData)
    return marketData;
  }

  async getData(symbol_base, symbol_quote) {
    let marketData = await this.btcData(symbol_base,symbol_quote)
    let normalized = this.normalize(marketData)
    if(this.state.prediction){
      normalized[(normalized.length-5)].prediction = this.state.prediction
    }
    this.setState({data : normalized})
    this.setState({isChartReady : true})
  }


    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
            
            data={this.state.data}
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
              {this.state.isChartReady ? <Area type="monotone" dataKey="price" fill="url(#paint1_linear)" legendType="none" stroke="none" animationBegin={0}/> : null}
              {this.state.isChartReady ? <Line type="monotone" dataKey="price" stroke="url(#paint0_linear)" strokeWidth="4" animationBegin={40} dot={this.state.isDemo ? null : <CustomizedDot/>} legendType="none"/> : null}
              
            </ComposedChart>
          </ResponsiveContainer>
        )
      }
      
}

