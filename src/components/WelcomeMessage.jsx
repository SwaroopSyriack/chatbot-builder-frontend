import React, { useState, useRef } from "react";
import Dropdown from "./DropDown";

const WelcomeMessage = ({ messageText, handleMessageText }) => {
  const [generalIsOpen, setGeneralIsOpen] = useState(false);
  return (
    <div>
      <Dropdown
        title="Welcome Message"
        isOpen={generalIsOpen}
        onToggle={setGeneralIsOpen}
      >
        <div>
          <textarea
            placeholder="👋 Hi There How can I assist you today"
            className="w-full max-w-xl p-1 bg-gray-100 rounded-xl resize-none outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
            onChange={(e) => handleMessageText(e.target.value)}
            value={messageText}
          />
        </div>
      </Dropdown>
    </div>
  );
};

export default WelcomeMessage;
