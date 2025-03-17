import React from 'react';
import Sidebar from '../components/SideBar';
import HomeDashboard from '../components/HomeDashboard';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="home-content">
      <HomeDashboard />
      </div>
    </div>
  );
};

export default Home;