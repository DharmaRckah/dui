
import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import TotalRewardsCard from '../components/TotalRevardsCard';
import SalaryGrowthChart from '../components/SalaryGrowthChart';
import CashCompensationChart from '../components/CashCompensationChart';
import BenefitsCard from '../components/BenefitsCard';
import Footer from '../components/Footer';

const Dashboard = () => (
  <div className="min-h-screen bg-[#f7faff] p-4 md:p-6">
    <DashboardHeader />

    {/* Top 2-column section */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
      
      {/* LEFT column */}
      <div className="flex flex-col gap-4">
        {/* 3 Reward Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <TotalRewardsCard title="Total Reward Statement" amount="$884,110" highlight />
          <TotalRewardsCard title="Cash Compensation" amount="$674,110" />
          <TotalRewardsCard title="Benefits" amount="$110,000" />
        </div>

        {/* Cash Compensation Chart */}
        <CashCompensationChart />
      </div>

      {/* RIGHT column */}
      <div className="flex flex-col gap-4">
        {/* Salary Growth Chart */}
        <SalaryGrowthChart />
      </div>
    </div>

    {/* Bottom full-width Benefits */}
 <div className="max-w-7xl mx-auto mt-6">
  <BenefitsCard />
</div>


    <Footer />
  </div>
);

export default Dashboard;