import React, { useState, useRef } from "react";
import Dropdown from "./DropDown";

import { Bot, RefreshCw, Image } from "lucide-react";

const GeneralSettings = ({ updateLogo, selectedLogo }) => {
  const [generalIsOpen, setGeneralIsOpen] = useState(true);
  const [streamResponse, setStreamResponse] = useState(false);
  const [botName, setBotName] = useState("");
  const [fileName, setFileName] = useState("No file chosen");
  const fileInputRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleFileSelect = () => {
    console.log("File selected");``
    const result = fileInputRef.current.click();
  };

  const handlefilechange = (event) => {
    const file = event.target.files[0];
    console.log("This is a ", file);
    if (file) {
      setFileName(file.name);
      const imageUrl = URL.createObjectURL(file);
      updateLogo(imageUrl);
      console.log(file.name);
    }
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleResetLogo = () => {
    updateLogo("../assets/bot.svg");
  };

  const handleBotName = (event) => {
    setBotName(event.target.value);
    console.log("Current input:", event.target.value);
  };

  return (
    <div>
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
                {/* Hidden file input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".png,.jpg,.jpeg,.svg"
                  className="hidden"
                  onChange={handlefilechange}
                />
                <h3 className="text-gray-700 font-medium mb-2">Logo</h3>
                {/* the change in logo */}
                <div
                  className="relative w-16 h-16 bg-indigo-600 rounded-md flex items-center justify-center cursor-pointer overflow-hidden"
                  onMouseEnter={() => handleMouseEnter(true)}
                  onMouseLeave={() => handleMouseLeave(false)}
                  onClick={handleFileSelect}
                >
                  {selectedLogo ? (
                    // Show uploaded logo if available
                    <img
                      src={selectedLogo}
                      alt="Selected Logo"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    // Show bot icon
                    <div className="flex items-center justify-center">
                      <Bot className="text-white h-10 w-10" />
                    </div>
                  )}

                  {/* Overlay that appears on hover */}
                  {isHovering && !selectedLogo && (
                    <div className="absolute inset-0 bg-indigo-700 bg-opacity-80 flex items-center justify-center">
                      <div className="bg-white p-1 rounded-md">
                        <Image className="text-indigo-600 h-6 w-6" />
                      </div>
                    </div>
                  )}

                  {/* Overlay that appears on hover when image is selected */}
                  {isHovering && selectedLogo && (
                    <div className="absolute inset-0 bg-indigo-700 bg-opacity-60 flex items-center justify-center">
                      <div className="bg-white p-1 rounded-md">
                        <Image className="text-indigo-600 h-6 w-6" />
                      </div>
                    </div>
                  )}
                </div>
                {/* end of the change in logo */}
                <button
                  onClick={handleResetLogo}
                  className="px-3 py-1 bg-gray-200 rounded-md text-sm flex items-center"
                >
                  <RefreshCw size={14} className="mr-1" /> Reset
                </button>
              </div>

              <div className="flex-1">
                <h3 className="text-gray-700 font-medium mb-2">Chatbot Name</h3>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  onChange={handleBotName}
                  value={botName}
                />
              </div>
            </div>

            {/* Stream AI Response Section */}
            <div className="mt-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-gray-700 font-medium mb-1">
                    Stream AI Response
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Enable streaming text in AI response.
                  </p>
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
                    className={`w-12 h-6 rounded-full transition-colors ${
                      streamResponse ? "bg-blue-500" : "bg-gray-300"
                    } block cursor-pointer`}
                  >
                    <span
                      className={`absolute w-5 h-5 rounded-full bg-white transition-transform transform ${
                        streamResponse ? "translate-x-6" : "translate-x-1"
                      } top-0.5`}
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
