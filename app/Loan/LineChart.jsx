import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars() {
  return (
    <BarChart
      xAxis={[{
         scaleType: 'band',
         data: [1,2,3,4,5,6,7,8,9,10,11,12] 
        }]}
      series={[{ data: [4,3,5,1,9,5,4,2,8,2,5,7] }, { data: [1,6,3,4,5,9,3,5,7,2,6,4] }]}
      className='w-full h-1/3'
    />
  );
}