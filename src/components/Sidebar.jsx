// Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { 
  BsChatDots, 
  BsRobot, 
  BsStars, 
  BsDownload,  
  BsBarChartLine, 
  BsPlug, 
  BsCreditCard, 
  BsQuestionCircle,
  BsPerson
} from 'react-icons/bs';
import '../styles/Sidebar.css';

const Sidebar = ({ onPageChange }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = React.useState(location.pathname);
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    setActiveItem(path);
    if (onPageChange) {
      onPageChange(path);
    }
  };

  const menuItems = [
    { path: '/Agents', icon: <BsStars />, tooltip: 'Agents' },
    { path: '/bot', icon: <BsRobot />, tooltip: 'Allbots' },
    { path: '/inbox', icon: <BsDownload />, tooltip: 'Inbox' },
    { path: '/analytics', icon: <BsBarChartLine />, tooltip: 'Analytics' },
    { path: '/integrations', icon: <BsPlug />, tooltip: 'Integrations' },
    { path: '/billing', icon: <BsCreditCard />, tooltip: 'Billing' },
    { path: '/help', icon: <BsQuestionCircle />, tooltip: 'Help' }
  ];

  return (
    <div className="sidebar" onClick={() => navigate(`/`)}>
      {/* Top chat icon */}
      <div className="sidebar-logo">
        <BsChatDots />
      </div>
      
      {/* Menu items in the middle */}
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`sidebar-item ${activeItem === item.path ? 'active' : ''} ${item.path === '/integrations' ? 'with-space-after' : ''}`}
            onClick={() => handleItemClick(item.path)}
            title={item.tooltip}
          >
            <div className="icon-container">
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
      
      {/* Bottom chat icon */}
      <div className="sidebar-footer">
        <div className="icon-container">
          <BsPerson />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;