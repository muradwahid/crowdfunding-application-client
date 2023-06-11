import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavBar from '../../pages/Dashboard/DashboardNavBar/DashboardNavBar';
import DashboardResponsiveSideBar from '../../pages/Dashboard/DashboardSideBar/DashboardResponsiveSideBar/DashboardResponsiveSideBar';
import DashboardSideBar from "../../pages/Dashboard/DashboardSideBar/DashboardSideBar"

const DashboardLayout = () => {
  const [dashboardToggle, setDashboardToggle] = useState(false);
  return (
    <div className=' h-[100vh]'>
      <div className='overflow-hidden bg-gray-300 h-[100vh] rounded-md'>
        <DashboardNavBar dashboardToggle={dashboardToggle} setDashboardToggle={setDashboardToggle} />
        <div className='flex h-full relative'>
          <DashboardSideBar dashboardToggle={dashboardToggle} setDashboardToggle={setDashboardToggle} />
            <DashboardResponsiveSideBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
