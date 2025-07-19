
import React from 'react';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';

const TotalRewardsCard = ({ title, amount, highlight }) => (
  <div
    className={`p-4 rounded-lg shadow-md flex flex-col justify-center text-center h-32 min-w-[200px] ${
      highlight ? 'bg-blue-100' : 'bg-gray-50'
    }`}
  >
    <div className="flex items-center justify-between">
      <h3 className="text-sm text-gray-700">{title}</h3>
      <InfoOutlineIcon fontSize="small" className="text-gray-500" />
    </div>
    <p className="text-2xl mt-4">{amount}</p>
  </div>
);

export default TotalRewardsCard;