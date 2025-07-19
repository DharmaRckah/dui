
import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 67410, label: 'Base Salary' },
  { id: 1, value: 10000, label: 'Bonus' },
  { id: 2, value: 5000, label: 'Incentives' },
];

const CashCompensationChart = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Total Cash Compensation</h2>
    <div className="flex justify-center">
      <PieChart
        series={[{
          arcLabel: (item) => `$${item.value.toLocaleString()}`,
          data,
          innerRadius: 80,
          outerRadius: 120,
          paddingAngle: 3,
          cornerRadius: 4,
        }]}
        sx={{ [`& .${pieArcLabelClasses.root}`]: { fontSize: 12, fill: '#fff' } }}
        width={400}
        height={300}
      />
    </div>
    <div className="text-center font-bold text-lg -mt-8">Total: $67,410</div>
    <div className="flex justify-between text-sm mt-4">
      <span>Internal Comp. Positioning: 2.89</span>
      <span>External Comp. Positioning: 0.78</span>
    </div>
  </div>
);

export default CashCompensationChart;