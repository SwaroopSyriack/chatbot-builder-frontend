import React, { useState, useRef } from "react";
import Dropdown from "./DropDown";

const ChatInput = ({ chatInput, handleChatInput }) => {
  const [generalIsOpen, setGeneralIsOpen] = useState(false);
  return (
    <div>
      <Dropdown
        title="Chat Input"
        isOpen={generalIsOpen}
        onToggle={setGeneralIsOpen}
      >
        <div className="flex-1">
          <input
            type="text"
            placeholder="Ask your query..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => handleChatInput(e.target.value)}
            value={chatInput}
          />
        </div>
      </Dropdown>
    </div>
  );
};

export default ChatInput;
