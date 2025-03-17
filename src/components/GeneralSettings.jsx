import React, { useState, useRef, useEffect } from 'react';
import Dropdown from './DropDown';
import '../styles/GeneralSettings.css';

const GeneralSettings = () => {
  const [generalIsOpen, setGeneralIsOpen] = useState(true); 
  return (
    <div className="settings-card">
      <Dropdown 
        title="General Settings" 
        isOpen={generalIsOpen}
        onToggle={setGeneralIsOpen}
      >
        <div>
          <h4>Application Settings</h4>
          <div className="form-group">
            <label>App Name</label>
            <input type="text" placeholder="My Awesome App" />
          </div>
          <div className="form-group">
            <label>Language</label>
            <select>
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default GeneralSettings;