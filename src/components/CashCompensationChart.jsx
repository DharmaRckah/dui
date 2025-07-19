import React from 'react';

const CashCompensationChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Total Cash Compensation</h2>
      <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
        {/* Placeholder for chart - replace with actual chart library (e.g., Chart.js) */}
        <p>Chart Placeholder ($67,410)</p>
      </div>
      <div className="flex justify-between text-sm mt-2">
        <span>Internal Comp. Positioning: 2.89</span>
        <span>External Comp. Positioning: 0.78</span>
      </div>
    </div>
  );
};

export default CashCompensationChart;