import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 6000, 2000, 2780, 1890, 2390, 3490, 5390, 3490];
let xLabels = [];
for(let i=1;i<=15;i++){
  xLabels.push(`Day ${i}`)
}

export default function SimpleBarChart() {
  return (
    <BarChart
      width={700}
      height={300}
      series={[
        { data: uData, label: 'Watt', id: 'pvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}