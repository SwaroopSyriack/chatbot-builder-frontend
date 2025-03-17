import React from 'react';
import '../styles/Home.css';
import Sidebar from '../components/SideBar';
import ChatbotConfig from '../components/CreateFaq';
import DropDown from '../components/DropDown';

const FaqPage = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="home-content">
      <ChatbotConfig />
      </div>
    </div>
  );
};

export default FaqPage;