import { totals } from './Page';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      colors={['darkgreen', 'darkred']}
      series={[
        {
          data: [
            { id: 0, value: totals[totals.length - 2],  label: 'Principle' },
            { id: 1, value: totals[totals.length - 1],  label: 'Interest' },
          ],
        },
      ]}
      width = {600}
      height = {300}
      
    />
  );
}