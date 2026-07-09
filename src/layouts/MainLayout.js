import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ScrollToTop } from '../components/layout/ScrollToTop';
import './MainLayout.css';

export const MainLayout = () => {
  return (
    <div className="app-layout-shell">
      <ScrollToTop />
      <Navbar />
      <main className="main-content-layout">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
