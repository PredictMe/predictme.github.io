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
        <svg x={cx - 50} y={cy - 39} width={50} height={39} fill="Green" viewBox="0 0 50 39">
          <path d="M0 8C0 3.58172 3.58172 0 8 0H42C46.4183 0 50 3.58172 50 8V16C50 20.4183 46.4183 24 42 24H8C3.58172 24 0 20.4183 0 16V8Z" fill="white"/>
<path d="M32 39L38.9282 24H25.0718L32 39Z" fill="white"/>
<path d="M9.4082 5.83105H11.8652V12.4219C11.8652 13.4678 11.8957 14.1457 11.9565 14.4556C12.0617 14.9536 12.3107 15.3548 12.7036 15.6592C13.1021 15.958 13.6444 16.1074 14.3306 16.1074C15.0278 16.1074 15.5535 15.9663 15.9077 15.6841C16.2619 15.3963 16.4749 15.0449 16.5469 14.6299C16.6188 14.2148 16.6548 13.5259 16.6548 12.563V5.83105H19.1118V12.2227C19.1118 13.6836 19.0454 14.7157 18.9126 15.3188C18.7798 15.922 18.5335 16.4312 18.1738 16.8462C17.8197 17.2612 17.3438 17.5933 16.7461 17.8423C16.1484 18.0858 15.3682 18.2075 14.4053 18.2075C13.2432 18.2075 12.3605 18.0747 11.7573 17.8091C11.1597 17.5379 10.6865 17.1893 10.3379 16.7632C9.98926 16.3315 9.7596 15.8805 9.64893 15.4102C9.48844 14.7129 9.4082 13.6836 9.4082 12.3223V5.83105Z" fill="black"/>
<path d="M21.71 18V5.83105H25.6528C27.147 5.83105 28.1209 5.89193 28.5747 6.01367C29.272 6.19629 29.8558 6.59473 30.3262 7.20898C30.7965 7.81771 31.0317 8.60628 31.0317 9.57471C31.0317 10.3218 30.8962 10.9499 30.625 11.459C30.3538 11.9681 30.008 12.3693 29.5874 12.6626C29.1724 12.9504 28.749 13.1413 28.3174 13.2354C27.7308 13.3516 26.8813 13.4097 25.769 13.4097H24.167V18H21.71ZM24.167 7.88965V11.3428H25.5117C26.4801 11.3428 27.1276 11.2791 27.4541 11.1519C27.7806 11.0246 28.0352 10.8254 28.2178 10.5542C28.4059 10.283 28.5 9.96761 28.5 9.60791C28.5 9.1652 28.37 8.79997 28.1099 8.51221C27.8498 8.22445 27.5205 8.0446 27.1221 7.97266C26.8288 7.91732 26.2394 7.88965 25.354 7.88965H24.167Z" fill="black"/>
<path d="M44 12C44 14.2091 42.2091 16 40 16C37.7909 16 36 14.2091 36 12C36 9.79086 37.7909 8 40 8C42.2091 8 44 9.79086 44 12Z" fill="#00FF29"/>

</svg>
      );
    }else if(payload.prediction == "DOWN"){
      return (
        <svg x={cx - 60} y={cy - 39} width={60} height={39} fill="Green" viewBox="0 0 60 39">
          <path d="M0 8C0 3.58172 3.58172 0 8 0H52C56.4183 0 60 3.58172 60 8V16C60 20.4183 56.4183 24 52 24H8C3.58172 24 0 20.4183 0 16V8Z" fill="white"/>
          <path d="M40 39L46.9297 24H33.0836L40 39Z" fill="white"/>
          <path d="M6.34766 7.69434H9.78174C10.5562 7.69434 11.1465 7.75358 11.5527 7.87207C12.0986 8.03288 12.5662 8.31852 12.9556 8.729C13.3449 9.13949 13.6411 9.64307 13.8442 10.2397C14.0474 10.8322 14.1489 11.5643 14.1489 12.436C14.1489 13.202 14.0537 13.8621 13.8633 14.4165C13.6305 15.0936 13.2983 15.6416 12.8667 16.0605C12.5409 16.3779 12.1007 16.6255 11.5464 16.8032C11.1317 16.9344 10.5773 17 9.8833 17H6.34766V7.69434ZM8.22656 9.26855V15.4321H9.62939C10.1541 15.4321 10.5329 15.4025 10.7656 15.3433C11.0703 15.2671 11.3221 15.138 11.521 14.9561C11.7241 14.7741 11.8892 14.4757 12.0161 14.061C12.1431 13.6421 12.2065 13.0729 12.2065 12.3535C12.2065 11.6341 12.1431 11.0819 12.0161 10.6968C11.8892 10.3117 11.7114 10.0112 11.4829 9.79541C11.2544 9.57959 10.9645 9.43359 10.6133 9.35742C10.3509 9.29818 9.83675 9.26855 9.0708 9.26855H8.22656Z" fill="black"/>
          <path d="M15.3677 12.4043C15.3677 11.4564 15.5094 10.6608 15.793 10.0176C16.0046 9.54362 16.2923 9.11833 16.6562 8.7417C17.0244 8.36507 17.4264 8.08577 17.8623 7.90381C18.4421 7.65837 19.1107 7.53564 19.8682 7.53564C21.2393 7.53564 22.3353 7.96094 23.1562 8.81152C23.9814 9.66211 24.394 10.8449 24.394 12.3599C24.394 13.8621 23.9857 15.0386 23.1689 15.8892C22.3522 16.7355 21.2604 17.1587 19.8936 17.1587C18.5098 17.1587 17.4095 16.7376 16.5928 15.8955C15.776 15.0492 15.3677 13.8854 15.3677 12.4043ZM17.3037 12.3408C17.3037 13.3945 17.547 14.1943 18.0337 14.7402C18.5203 15.2819 19.1382 15.5527 19.8872 15.5527C20.6362 15.5527 21.2498 15.284 21.728 14.7466C22.2104 14.2049 22.4517 13.3945 22.4517 12.3154C22.4517 11.249 22.2168 10.4535 21.7471 9.92871C21.2816 9.40397 20.6616 9.1416 19.8872 9.1416C19.1128 9.1416 18.4886 9.4082 18.0146 9.94141C17.5407 10.4704 17.3037 11.2702 17.3037 12.3408Z" fill="black"/>
          <path d="M27.187 17L24.9653 7.69434H26.8887L28.2915 14.0864L29.9927 7.69434H32.2271L33.8584 14.1943L35.2866 7.69434H37.1782L34.9185 17H32.9253L31.0718 10.043L29.2246 17H27.187Z" fill="black"/>
          <path d="M38.1621 17V7.69434H39.9902L43.7988 13.9087V7.69434H45.5444V17H43.6592L39.9077 10.9316V17H38.1621Z" fill="black"/>
          <path d="M56 12C56 14.2091 54.2091 16 52 16C49.7909 16 48 14.2091 48 12C48 9.79086 49.7909 8 52 8C54.2091 8 56 9.79086 56 12Z" fill="#FF0000"/>
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

