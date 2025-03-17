import React, { useState, useRef} from 'react';
import '../styles/DropDown.css';

const DropDown = ({ 
  title, 
  children, 
  isOpen: controlledIsOpen, 
  onToggle: controlledOnToggle,
  className = '',
  chevronPosition = 'right',
  defaultOpen = false
}) => {
  // Allow for both controlled and uncontrolled usage
  const isControlled = controlledIsOpen !== undefined;
  const [isOpenState, setIsOpenState] = useState(defaultOpen);
  const isOpen = isControlled ? controlledIsOpen : isOpenState;
  
  const dropdownRef = useRef(null);
  
  const handleToggle = () => {
    if (isControlled) {
      controlledOnToggle(!controlledIsOpen);
    } else {
      setIsOpenState(!isOpen);
    }
  };
  
  
  return (
    <div className={`dropdown-container ${className}`} ref={dropdownRef}>
      <div 
        className={`dropdown-header ${isOpen ? 'dropdown-header-active' : ''}`}
        onClick={handleToggle}
      >
        {chevronPosition === 'left' && (
          <span className={`dropdown-chevron ${isOpen ? 'dropdown-chevron-up' : 'dropdown-chevron-down'}`}>
            ▼
          </span>
        )}
        
        <span className="dropdown-title">{title}</span>
        
        {chevronPosition === 'right' && (
          <span className={`dropdown-chevron ${isOpen ? 'dropdown-chevron-up' : 'dropdown-chevron-down'}`}>
            ▼
          </span>
        )}
      </div>
      
      {isOpen && (
        <div className="dropdown-content">
          {children}
        </div>
      )} 
    </div>
  );
};

export default DropDown;