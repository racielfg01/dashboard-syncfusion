import React from 'react'
import { ChartComponent,SeriesCollectionDirective,
SeriesDirective,Inject,BarSeries,Legend
,Tooltip,
Category
 } from '@syncfusion/ej2-react-charts';
import { barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const BarChart = () => {
  const {currentMode}=  useStateContext();

  console.log({barCustomSeries});
  return (
    <ChartComponent
    id='chart-bar'
    height='420px'
    primaryXAxis={barPrimaryXAxis}
    primaryYAxis={barPrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    background={currentMode==="Dark"?"#33373E":"#fff"}
    legendSettings={
      currentMode==="Dark"
      ?{background:'#33373E', textStyle: {  color: 'white' } }
      :{background:'#fff', textStyle: {  color: 'black' }  }
      }
    >
      <Inject services={[BarSeries,Category,Legend,Tooltip]}/>
        <SeriesCollectionDirective>
          {barCustomSeries.map((item,i)=>
            <SeriesDirective key={i} {...item} />
          )}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default BarChart