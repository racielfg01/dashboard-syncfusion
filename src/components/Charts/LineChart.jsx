import React from 'react'
import { ChartComponent,SeriesCollectionDirective,
SeriesDirective,Inject,DateTime,Legend,Tooltip, LineSeries
 } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const LineChart = () => {
  const {currentMode}=  useStateContext();
  return (
    <ChartComponent
    id='chart-line'
    height='420px'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    background={currentMode==="Dark"?"#33373E":"#fff"}
    legendSettings={
      currentMode==="Dark"
      ?{background:'#33373E', textStyle: {  color: 'white' } }
      :{background:'#fff', textStyle: {  color: 'black' }  }
      }
    >
      <Inject services={[LineSeries,DateTime,
        Legend,Tooltip]}/>
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item,i)=>
            <SeriesDirective key={i} {...item}/>
          )}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart