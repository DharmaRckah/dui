// import React from 'react';

// const BenefitsCard = () => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow">
//       <h2 className="text-lg font-semibold">My Benefits</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//         <div className="bg-blue-100 p-4 rounded-lg text-center">
//           <h3 className="font-semibold">Maternity Leave</h3>
//           <p className="text-green-600">$15,000</p>
//           <p>A 90-day maternity leave for female employees for each new born baby is provided by the company</p>
//           <button className="text-blue-500 mt-2">Download Policy</button>
//         </div>
//         <div className="bg-purple-100 p-4 rounded-lg text-center">
//           <h3 className="font-semibold">Parenting Classes</h3>
//           <p className="text-green-600">$15,000</p>
//           <p>A 90-day maternity leave for female employees for each new born baby is provided by the company</p>
//           <button className="text-blue-500 mt-2">Download Policy</button>
//         </div>
//         <div className="bg-yellow-100 p-4 rounded-lg text-center">
//           <h3 className="font-semibold">Cooking Classes</h3>
//           <p className="text-green-600">$15,000</p>
//           <p>A 90-day maternity leave for female employees for each new born baby is provided by the company</p>
//           <button className="text-blue-500 mt-2">Download Policy</button>
//         </div>
//         <div className="bg-blue-100 p-4 rounded-lg text-center">
//           <h3 className="font-semibold">Company Driver</h3>
//           <p className="text-green-600">$15,000</p>
//           <p>A 90-day maternity leave for female employees for each new born baby is provided by the company</p>
//           <button className="text-blue-500 mt-2">Download Policy</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BenefitsCard;

const benefits = [
  {
    title: 'Maternity Leave',
    amount: '$15,000',
    image: '/img/maternity.jpg', // you can replace with local or CDN
    bg: 'bg-blue-100',
  },
  {
    title: 'Parenting Classes',
    amount: '$15,000',
    image: '/img/parenting.jpg',
    bg: 'bg-purple-100',
  },
  {
    title: 'Cooking Classes',
    amount: '$15,000',
    image: '/img/cooking.jpg',
    bg: 'bg-yellow-100',
  },
  {
    title: 'Company Driver',
    amount: '$15,000',
    image: '/img/driver.jpg',
    bg: 'bg-sky-100',
  },
];

const BenefitsCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">My Benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className={`${benefit.bg} p-4 rounded-lg flex flex-col justify-between h-full`}
          >
            <img src={benefit.image} alt={benefit.title} className="w-full h-32 object-cover rounded-md mb-3" />
            <div>
              <h3 className="font-semibold text-lg">{benefit.title}</h3>
              <p className="text-green-700 font-medium mt-1">{benefit.amount}</p>
              <p className="text-sm mt-1 text-gray-700">A 90-day maternity leave for female employees for each new born baby is provided by the company</p>
              <button className="text-blue-600 mt-2 font-medium underline">Download Policy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsCard;
