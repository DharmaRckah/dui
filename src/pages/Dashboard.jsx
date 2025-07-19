import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import TotalRewardsCard from '../components/TotalRevardsCard';
import SalaryGrowthChart from '../components/SalaryGrowthChart';
import CashCompensationChart from '../components/CashCompensationChart';
import BenefitsCard from '../components/BenefitsCard';
import Footer from '../components/Footer';

const Dashboard = () => {
 return (
    <div className="min-h-screen bg-[#f7faff] p-4 md:p-6">
      <DashboardHeader />

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
        {/* Left side: 3 reward cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <TotalRewardsCard title="Total Reward Statement" amount="$884,110" highlight />
          <TotalRewardsCard title="Cash Compensation" amount="$674,110" />
          <TotalRewardsCard title="Benefits" amount="$110,000" />
        </div>

        {/* Right side: Salary chart */}
        <div>
          <SalaryGrowthChart />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <CashCompensationChart />
        <BenefitsCard />
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
