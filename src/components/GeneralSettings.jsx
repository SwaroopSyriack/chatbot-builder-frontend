import React, { useState, useRef, useEffect } from 'react';
import Dropdown from './DropDown';
import '../styles/GeneralSettings.css';
import { Bot, RefreshCw } from 'lucide-react';

const GeneralSettings = () => {
  const [generalIsOpen, setGeneralIsOpen] = useState(false);
  const [streamResponse, setStreamResponse] = useState(false);
  const [botName, setBotName] = useState('');
  const [logoImage, setLogoImage] = useState(null);
   const [fileName, setFileName] = useState('No file chosen');
  const fileInputRef = useRef(null);
  
  return (
    <div className="settings-card">
      <Dropdown 
        title="General Settings" 
        isOpen={generalIsOpen}
        onToggle={setGeneralIsOpen}
      >
        <div className="p-6 bg-white border-t border-gray-200">
                <div className="flex flex-col gap-4">
                  {/* Logo and Chatbot Name Section */}
                  <div className="flex items-start gap-12">
                    <div className="w-24">
                      <h3 className="text-gray-700 font-medium mb-2">Logo</h3>
                      <div className="bg-orange-500 w-16 h-16 rounded-md flex items-center justify-center mb-2">
                        <Bot className="text-white h-8 w-8" />
                      </div>
                      <button className="px-3 py-1 bg-gray-200 rounded-md text-sm flex items-center">
                        <RefreshCw size={14} className="mr-1" /> Reset
                      </button>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-gray-700 font-medium mb-2">Chatbot Name</h3>
                      <input 
                        type="text" 
                        placeholder="Name" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  {/* Stream AI Response Section */}
                  <div className="mt-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-gray-700 font-medium mb-1">Stream AI Response</h3>
                        <p className="text-gray-500 text-sm">Enable streaming text in AI response.</p>
                      </div>
                      <div className="relative inline-flex items-center">
                        <input 
                          type="checkbox" 
                          className="sr-only"
                          checked={streamResponse}
                          onChange={() => setStreamResponse(!streamResponse)}
                          id="stream-toggle"
                        />
                        <label 
                          htmlFor="stream-toggle" 
                          className={`w-12 h-6 rounded-full transition-colors ${streamResponse ? 'bg-blue-500' : 'bg-gray-300'} block cursor-pointer`}
                        >
                          <span 
                            className={`absolute w-5 h-5 rounded-full bg-white transition-transform transform ${streamResponse ? 'translate-x-6' : 'translate-x-1'} top-0.5`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </Dropdown>
    </div>
  );
};

export default GeneralSettings;