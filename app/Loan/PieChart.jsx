import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Principle' },
            { id: 1, value: 15, label: 'Interest' },
          ],
        },
      ]}
      width={600}
      height={400}
    />
  );
}