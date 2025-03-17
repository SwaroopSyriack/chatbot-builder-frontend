import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X, RefreshCw, Bot, MessageSquare, Book } from 'lucide-react';
import '../styles/CreateFaq.css';
import GeneralSettings from './GeneralSettings';

const ChatbotConfig = () => {
  const [botName, setBotName] = useState('');
  const [selectedTheme, setSelectedTheme] = useState({ theme: 'light-navy' });
  const [selectedLayout, setSelectedLayout] = useState('chat');
  const [streamAI, setStreamAI] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true);
  

const themes = {
    light: [
      { id: 'light-purple', color: '#7C3AED', name: 'Purple' },
      { id: 'light-black', color: '#000000', name: 'Black' },
      { id: 'light-navy', color: '#1E3A8A', name: 'Navy' },
      { id: 'light-blue', color: '#2563EB', name: 'Blue' },
      { id: 'light-green', color: '#059669', name: 'Green' },
      { id: 'light-orange', color: '#EA580C', name: 'Orange' },
      { id: 'light-yellow', color: '#FFA500', name: 'Yellow' }
    ],
    dark: [
      { id: 'dark-purple', color: '#7C3AED', name: 'Purple' },
      { id: 'dark-violet', color: '#6D28D9', name: 'Violet' },
      { id: 'dark-slate', color: '#475569', name: 'Slate' },
      { id: 'dark-gray', color: '#4B5563', name: 'Gray' },
      { id: 'dark-green', color: '#059669', name: 'Green' },
      { id: 'dark-blue', color: '#2563EB', name: 'Blue' }
    ]
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleThemeChange = (themeid) => {
    console.log(themeid);
    setSelectedTheme(prevTheme => ({...prevTheme , theme : themeid}));
    setTimeout(() => console.log("Updated state:", selectedTheme), 0);
  }

  return (
    <div className="dashboard-container">

      <div className="main-content">
        {/* Left Column - Settings */}
        <div className="settings-column">
          <h1 className="page-title">Create your chatbot</h1>
          
          {/* Widget Themes */}
          <div className="settings-section">
            <h2 className="section-title">Widget Themes</h2>
            
            <div className="theme-group">
              <h3 className="theme-type">Light</h3>
              <div className="color-options">
                {themes.light.map((theme) => (
                  <button
                    key={theme.name}
                    className={`color-option ${selectedTheme === theme.name ? 'selected' : ''}`}
                    style={{ backgroundColor: theme.color }}
                    onClick={() => handleThemeChange(theme.id)}
                  />
                ))}
              </div>
            </div>
            
            <div className="theme-group">
              <h3 className="theme-type">Dark</h3>
              <div className="color-options">
                {themes.dark.map((theme) => (
                  <button
                    key={theme.name}
                    className={`color-option ${selectedTheme === theme.name ? 'selected' : ''}`}
                    style={{ backgroundColor: theme.color }}
                    onClick={() => handleThemeChange(theme.id)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Layout */}
          <div className="settings-section">
            <h2 className="section-title">Layout</h2>
            
            <div className="layout-options">
              <div 
                className={`layout-option ${selectedLayout === 'tabs' ? 'selected' : ''}`}
                onClick={() => setSelectedLayout('tabs')}
              >
                <div className="layout-icon tabs-icon">
                  <i className="fas fa-columns"></i>
                </div>
                <h3 className="layout-title">Tabs Layout</h3>
                <p className="layout-description">Create a personalised homepage for your visitors.</p>
              </div>
              
              <div 
                className={`layout-option ${selectedLayout === 'chat' ? 'selected' : ''}`}
                onClick={() => setSelectedLayout('chat')}
              >
                <div className="layout-icon chat-icon">
                  <i className="fas fa-comment"></i>
                </div>
                <h3 className="layout-title">Chat layout</h3>
                <p className="layout-description">Quick chat system with minimal elements</p>
              </div>
            </div>
          </div>
          
          {/* General Settings */}
          <div className="settings-card">
            <div className="card-header">
              <h2 className="section-title">General Settings</h2>
              <button className="toggle-button">
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
            
            <div className="card-content">
              <div className="settings-grid">
                <div className="logo-section">
                  <h3 className="setting-label">Logo</h3>
                  <div className="logo-preview">
                    <i className="fas fa-robot"></i>
                  </div>
                  <button className="reset-button">Reset</button>
                </div>
                
                <div className="input-section">
                  <h3 className="setting-label">Chatbot Name</h3>
                  <input
                    type="text"
                    className="chatbot-name-input"
                    placeholder="Name"
                    value={botName}
                    onChange={(e) => setBotName(e.target.value)}
                  />
                  
                  <div className="toggle-setting">
                    <div className="toggle-header">
                      <h3 className="setting-label">Stream AI Response</h3>
                      <label className="toggle-switch">
                        <input 
                          type="checkbox" 
                          checked={streamAI}
                          onChange={() => setStreamAI(!streamAI)}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                    </div>
                    <p className="setting-description">Enable streaming text in AI response.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        <div>
          <GeneralSettings />
        </div>
          
        

        </div>

        
        
        {/* Right Column - Preview */}
        <div className="preview-column">
           {/* Floating Bot Button */}
      <div className="bot-button-container">
          <button className="bot-button" onClick={toggleChat} style={{ 
  backgroundColor: 
    selectedTheme.theme 
      ? (themes[selectedTheme.theme.split('-')[0]]?.find(
          t => t.id === selectedTheme.theme
        )?.color || '#1E3A8A')
      : '#1E3A8A'
}}>
            <i className="fas fa-robot"></i>
          </button>
      </div>

          {isChatOpen && (<div className="floating-chatbot-preview"
          >
            <div className="chatbot-header"
            style={{ 
  backgroundColor: 
    selectedTheme.theme 
      ? (themes[selectedTheme.theme.split('-')[0]]?.find(
          t => t.id === selectedTheme.theme
        )?.color || '#1E3A8A')
      : '#1E3A8A'
}}>
              <div className="header-left">
                <div className="chatbot-icon">
                  <i className="fas fa-robot"></i>
                </div>
              </div>
              <div className="header-right">
                <button className="header-button trash-button">
                  <i className="fas fa-trash"></i>
                </button>
                <button className="header-button close-button" onClick={toggleChat}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            
            <div className="chatbot-content">
              <div className="bot-avatar" style={{ 
  backgroundColor: 
    selectedTheme.theme 
      ? (themes[selectedTheme.theme.split('-')[0]]?.find(
          t => t.id === selectedTheme.theme
        )?.color || '#1E3A8A')
      : '#1E3A8A'
}}>
                <i className="fas fa-robot"></i>
              </div>
              
              <div className="message-bubble" style={{ 
  backgroundColor: 
    selectedTheme.theme 
      ? (themes[selectedTheme.theme.split('-')[0]]?.find(
          t => t.id === selectedTheme.theme
        )?.color || '#1E3A8A')
      : '#1E3A8A'
}}>
                <p>👋 Hi There!</p>
                <p>How can I assist you today</p>
              </div>
            </div>
            
            <div className="chatbot-input-area">
              <input
                type="text"
                className="query-input"
                placeholder="Ask your query..."
              />
              <button className="send-button">
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default ChatbotConfig;