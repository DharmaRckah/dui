import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import React from 'react';

const TotalRewardsCard = ({ title, amount, highlight = false }) => {
  return (
    <div className={`p-4 rounded-xl shadow-md h-fit ${highlight ? 'bg-blue-500 text-white' : 'bg-white'}`}>
      <h2 className="text-md font-semibold">{title} <InfoOutlineIcon/></h2>
      <p className={`text-3xl font-bold mt-2 ${highlight ? '' : 'text-blue-600'}`}>{amount}</p>
    </div>
  );
};

export default TotalRewardsCard;