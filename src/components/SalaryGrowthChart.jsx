import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const SalaryGrowthChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const salaryData = [5000, 5200, 5400, 5800, 6000, 6300];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Average Salary Growth</h2>
      <div className="flex justify-center">
        <LineChart
          xAxis={[
            {
              id: 'months',
              data: months,
              scaleType: 'point',
              label: 'Month',
              position: 'bottom',
            },
          ]}
          yAxis={[
            {
              label: 'Salary ($)',
              position: 'left',
            },
          ]}
          series={[
            {
              data: salaryData,
              label: 'Salary Growth',
              color: '#3b82f6',
              showMark: true,
            },
          ]}
          width={500}
          height={300}
        />
      </div>
      <div className="text-right text-sm mt-2 text-gray-600">
        Average Actual Bonus / LTI
      </div>
    </div>
  );
};

export default SalaryGrowthChart;
