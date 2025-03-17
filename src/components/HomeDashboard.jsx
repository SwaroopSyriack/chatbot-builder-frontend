// Dashboard.js - Main dashboard component (without sidebar)
import React from 'react';
import '../styles/HomeDashboard.css';
import DashboardHeader from './DashboardHeader';
import AssistantsCard from './AssistantsCard';
import FeatureCard from './FeatureCard';
import AssistantDisplayCard from './AssistantDisplayCard';

function Dashboard() {

  // AI Assistants data
  const assistants = [
    { id: 1, name: 'FAQs', icon: 'faq', color: '#4ecdc4' },
    { id: 2, name: 'Lead Gen', icon: 'lead', color: '#6b7280' },
    { id: 3, name: 'Appointments', icon: 'calendar', color: '#4ade80' },
  ];

  // Feature cards data
  const features = [
    {
      id: 1,
      title: 'Let Landbot AI build your chatbot >',
      imagePath: '/images/ai-chatbot.jpg',
      bgGradient: 'linear-gradient(135deg, #1a2980 0%, #26d0ce 100%)',
    },
    {
      id: 2,
      title: 'Create a WhatsApp campaign >',
      imagePath: '/images/whatsapp-campaign.jpg',
      bgGradient: 'linear-gradient(135deg, #009688 0%, #4CAF50 100%)',
    },
    {
      id: 3,
      title: 'Get your team on board >',
      imagePath: '/images/team-onboard.jpg',
      bgGradient: 'linear-gradient(135deg, #4776E6 0%, #8E54E9 100%)',
    },
  ];

  // Recent bots data
  const recentAssistants = [
    {
      id: 1,
      name: 'New Bot',
      type: 'FAQs',
      createdAt: '1 day ago',
      updatedAt: '1 day ago',
      author: 'syriack',
      chats: 0,
      finished: 0,
    },
      {
      id: 2,
      name: 'Second Bot',
      type: 'FAQs',
      createdAt: '1 day ago',
      updatedAt: '1 day ago',
      author: 'syriack',
      chats: 0,
      finished: 0,
    }
  ];


  // Render icon for AI assistants
  const renderAssistantIcon = (assistant) => {
    switch(assistant.name) {
      case 'FAQs':
        return (
          <div className="assistant-icon" style={{ backgroundColor: '#4ecdc4' }}>
            <span>FAQ</span>
          </div>
        );
      case 'Lead Gen':
        return (
          <div className="assistant-icon" style={{ backgroundColor: '#6b7280' }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 7v6M12 13l-2-2M12 13l2-2M8 16h8" stroke="white" strokeWidth="1.5" />
              <circle cx="15" cy="11" r="3" fill="#4ade80" stroke="white" />
              <text x="15" y="13" fill="white" fontSize="8" textAnchor="middle">$</text>
            </svg>
          </div>
        );
      case 'Appointments':
        return (
          <div className="assistant-icon" style={{ backgroundColor: '#4ade80' }}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="8" width="12" height="10" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
              <path d="M8 6v3M16 6v3M7 12h10M7 15h10" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      {/* Header Section */}
      <DashboardHeader />

      {/* Main content with two columns layout */}
      <div className="dashboard-content">
        <div className="main-sections">

          {/* AI Assistants section */}
          <div className="section ai-assistants-section">
            <h2 className="section-title">Try our new AI assistants!</h2>
            <div className="assistants-container">
            {assistants.map((assistant) => (
              <AssistantsCard key={assistant.id} assistant={assistant} renderAssistant={renderAssistantIcon} />
            ))}
            </div>

          </div>

          {/* Discover section */}
          <div className="section discover-section">
            <h2 className="section-title">Discover how to</h2>
            <div className="features-container">
              {features.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} /> 
              ))}
            </div>
          </div>

          {/* Recent Bots section */}
          <div className="section recent-bots-section">
            <h2 className="section-title">Last updated chatbots</h2>
            <div className="recent-bots-list">
              {recentAssistants.map((assistant) => (
                <AssistantDisplayCard key={assistant.id} assistant={assistant} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;