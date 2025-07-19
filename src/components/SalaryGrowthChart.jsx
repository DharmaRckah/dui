import React from 'react';

const SalaryGrowthChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Average Salary Growth</h2>
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
        {/* Placeholder for chart - replace with actual chart library (e.g., Chart.js) */}
        <p>Chart Placeholder</p>
      </div>
      <div className="text-right text-sm mt-2">Average Actual Bonus / LTI</div>
    </div>
  );
};

export default SalaryGrowthChart;