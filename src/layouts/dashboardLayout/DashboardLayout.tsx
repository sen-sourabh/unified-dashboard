import { Outlet } from 'react-router-dom';
import { MainLayout } from '../mainLayout/MainLayout';
import { SecondaryLayout } from '../secondaryLayout/SecondaryLayout';
import { Sidebar } from '../sidebar/Sidebar';
import './DashboardLayout.css'
// import { Routes } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <div>
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="main-layout">
        <MainLayout />
      </div>
      <div id="secondary-main-layout">
        <SecondaryLayout />
      </div>
      <div id="main-pages">
        <Outlet />
      </div>
    </div>
  );
};
