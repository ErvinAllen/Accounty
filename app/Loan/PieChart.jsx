
import { avgs } from './page';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      colors={['darkgreen', 'darkred']}
      series={[
        {
          data: [
            { id: 0, value: avgs[avgs.length - 2],  label: 'Principle' },
            { id: 1, value: avgs[avgs.length - 1],  label: 'Interest' },
          ],
        },
      ]}
      width = {600}
      height = {400}
      
    />
  );
}