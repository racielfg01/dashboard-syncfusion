import React from 'react'
import { ChartComponent,SeriesCollectionDirective,
SeriesDirective,Inject,SplineAreaSeries,DateTime,Legend
,Tooltip
 } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const AreaChart = () => {
  const {currentMode}=  useStateContext();
  return (
    <ChartComponent
    id='chart-area'
    height='420px'
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    background={currentMode==="Dark"?"#33373E":"#fff"}
    legendSettings={
      currentMode==="Dark"
      ?{background:'#33373E', textStyle: {  color: 'white' } }
      :{background:'#fff', textStyle: {  color: 'black' }  }
      }
    >
      <Inject services={[SplineAreaSeries,DateTime,Legend,Tooltip]}/>
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item,i)=>
            <SeriesDirective key={i} {...item}/>
          )}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default AreaChart