import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  X,
  RefreshCw,
  Bot,
  MessageSquare,
  Book,
} from "lucide-react";
import "../styles/CreateFaq.css";
import GeneralSettings from "./GeneralSettings";
import ColorChange from "./colorChange";
import WelcomeMessage from "./WelcomeMessage";
import ChatInput from "./ChatInput";

const ChatbotConfig = () => {
  const [botName, setBotName] = useState("");
  const [selectedLogo, setselectedLogo] = useState("../assets/bot.svg");
  const [selectedTheme, setSelectedTheme] = useState({ theme: "light-navy" });
  const [selectedLayout, setSelectedLayout] = useState("chat");
  const [streamAI, setStreamAI] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [messageText, setMessageText] = useState(
    "👋 Hi There!\nHow can i assist you today"
  );
  const [chatInput, setChatInput] = useState("Ask your query...");

  const themes = {
    light: [
      { id: "light-purple", color: "#7C3AED", name: "Purple" },
      { id: "light-black", color: "#000000", name: "Black" },
      { id: "light-navy", color: "#1E3A8A", name: "Navy" },
      { id: "light-blue", color: "#2563EB", name: "Blue" },
      { id: "light-green", color: "#059669", name: "Green" },
      { id: "light-orange", color: "#EA580C", name: "Orange" },
      { id: "light-yellow", color: "#FFA500", name: "Yellow" },
    ],
    dark: [
      { id: "dark-purple", color: "#7C3AED", name: "Purple" },
      { id: "dark-violet", color: "#6D28D9", name: "Violet" },
      { id: "dark-slate", color: "#475569", name: "Slate" },
      { id: "dark-gray", color: "#4B5563", name: "Gray" },
      { id: "dark-green", color: "#059669", name: "Green" },
      { id: "dark-blue", color: "#2563EB", name: "Blue" },
    ],
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleThemeChange = (themeid) => {
    console.log(themeid);
    setSelectedTheme((prevTheme) => ({ ...prevTheme, theme: themeid }));
    setTimeout(() => console.log("Updated state:", selectedTheme), 0);
  };

  const updateLogo = (newlogo) => {
    setselectedLogo(newlogo);
  };

  const handleChatInput = (input) => {
    setChatInput(input);
  };

  const handleMessageText = (text) => {
    setMessageText(text);
  };

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
                    className={`color-option ${
                      selectedTheme === theme.name ? "selected" : ""
                    }`}
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
                    className={`color-option ${
                      selectedTheme === theme.name ? "selected" : ""
                    }`}
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
                className={`layout-option ${
                  selectedLayout === "tabs" ? "selected" : ""
                }`}
                onClick={() => setSelectedLayout("tabs")}
              >
                <div className="layout-icon tabs-icon">
                  <i className="fas fa-columns"></i>
                </div>
                <h3 className="layout-title">Tabs Layout</h3>
                <p className="layout-description">
                  Create a personalised homepage for your visitors.
                </p>
              </div>

              <div
                className={`layout-option ${
                  selectedLayout === "chat" ? "selected" : ""
                }`}
                onClick={() => setSelectedLayout("chat")}
              >
                <div className="layout-icon chat-icon">
                  <i className="fas fa-comment"></i>
                </div>
                <h3 className="layout-title">Chat layout</h3>
                <p className="layout-description">
                  Quick chat system with minimal elements
                </p>
              </div>
            </div>
          </div>

          <div className="settings-card">
            <div>
              <GeneralSettings
                updateLogo={updateLogo}
                selectedLogo={selectedLogo}
              />
            </div>

            <div>
              <ColorChange />
            </div>

            <div>
              <WelcomeMessage
                messageText={messageText}
                handleMessageText={handleMessageText}
              />
            </div>

            <div>
              <ChatInput
                chatInput={chatInput}
                handleChatInput={handleChatInput}
              />
            </div>
          </div>

          <div className="flex justify-center mt-50 mb-2">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] ring-2 ring-white/20"
              onClick={() => alert("Chatbot Created!")}
            >
              Create Chatbot ✨
            </button>
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="preview-column">
          {/* Floating Bot Button */}
          <div className="bot-button-container">
            <button
              className="bot-button"
              onClick={toggleChat}
              style={{
                backgroundColor: selectedTheme.theme
                  ? themes[selectedTheme.theme.split("-")[0]]?.find(
                      (t) => t.id === selectedTheme.theme
                    )?.color || "#1E3A8A"
                  : "#1E3A8A",
              }}
            >
              <img
                src={selectedLogo}
                alt="Selected Logo"
                className="w-full h-full object-contain"
              />
            </button>
          </div>

          {isChatOpen && (
            <div className="floating-chatbot-preview">
              <div
                className="chatbot-header"
                style={{
                  backgroundColor: selectedTheme.theme
                    ? themes[selectedTheme.theme.split("-")[0]]?.find(
                        (t) => t.id === selectedTheme.theme
                      )?.color || "#1E3A8A"
                    : "#1E3A8A",
                }}
              >
                <div className="header-left">
                  <div className="chatbot-icon">
                    <img
                      src={selectedLogo}
                      alt="Selected Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="header-right">
                  <button className="header-button trash-button">
                    <i className="fas fa-trash"></i>
                  </button>
                  <button
                    className="header-button close-button"
                    onClick={toggleChat}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <div className="chatbot-content">
                <div
                  className="bot-avatar"
                  style={{
                    backgroundColor: selectedTheme.theme
                      ? themes[selectedTheme.theme.split("-")[0]]?.find(
                          (t) => t.id === selectedTheme.theme
                        )?.color || "#1E3A8A"
                      : "#1E3A8A",
                  }}
                >
                  <img
                    src={selectedLogo}
                    alt="Selected Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div
                  className="message-bubble"
                  style={{
                    backgroundColor: selectedTheme.theme
                      ? themes[selectedTheme.theme.split("-")[0]]?.find(
                          (t) => t.id === selectedTheme.theme
                        )?.color || "#1E3A8A"
                      : "#1E3A8A",
                  }}
                >
                  {messageText}
                </div>
              </div>

              <div className="chatbot-input-area">
                <input
                  type="text"
                  className="query-input"
                  placeholder={chatInput}
                />
                <button className="send-button">
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatbotConfig;
