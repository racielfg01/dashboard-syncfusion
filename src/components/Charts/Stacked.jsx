import React from 'react';
import { ChartComponent,SeriesCollectionDirective,
SeriesDirective,Inject,Legend,Category,
StackingColumnSeries,Tooltip } 
from '@syncfusion/ej2-react-charts';

import {stackedCustomSeries,
stackedPrimaryXAxis,stackedPrimaryYAxis} from '../../data/dummy'

const Stacked = ({width,height,currentMode}) => {
  return (
   <ChartComponent
   width={width}
   height={height}
   id="charts"
   primaryXAxis={stackedPrimaryXAxis}
   primaryYAxis={stackedPrimaryYAxis}
  chartArea={{border:{width:0}}}
  tooltip={{enable:true}}
  background={currentMode==="Dark"?"#33373E":"#fff"}
  legendSettings={
    currentMode==="Dark"
    ?{background:'#33373E', textStyle: {  color: 'white' } }
    :{background:'#fff', textStyle: {  color: 'black' }  }
    }
  
   >
    <Inject services={[Legend,Category,
    StackingColumnSeries,Tooltip]}/>
    <SeriesCollectionDirective>
      {stackedCustomSeries.map((item,i)=>
      <SeriesDirective 
      key={i}
      {...item}
      />
      )}
    </SeriesCollectionDirective>

   </ChartComponent>
  )
}

export default Stacked