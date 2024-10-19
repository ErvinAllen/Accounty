import { BarChart } from '@mui/x-charts/BarChart';
import { eachMonthData } from './Page';

export default function BasicBars() {
  return (
    <BarChart
    colors={['darkgreen', 'darkred']}
    axisHighlight={{ 
      x: 'band',
      y: 'none'
     }}
      xAxis={[{
         scaleType: 'band',
         data: eachMonthData.amortizationSchedule.map(object => {
          return object.month
          }) 
        }]}
      series={[{ data: eachMonthData.amortizationSchedule.map(object => object.principal) }, { data: eachMonthData.amortizationSchedule.map(object => object.interest) }]}
    />
  );
}