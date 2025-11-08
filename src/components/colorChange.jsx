import React, { useState, useRef } from "react";
import Dropdown from "./DropDown";

const ColorChange = () => {
  const [generalIsOpen, setGeneralIsOpen] = useState(false);
  const [colors, setColors] = useState({
    primary: "#403f49",
    textOnPrimary: "#9013fe",
  });

  const handleColorChange = (type, value) => {
    setColors((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div>
      <Dropdown
        title="Colors"
        isOpen={generalIsOpen}
        onToggle={setGeneralIsOpen}
      >
        <div className="font-sans">
          <div className="flex flex-wrap gap-8">
            {/* Primary Color */}
            <div className="mb-4">
              <label
                htmlFor="primary-color"
                className="block mb-2 text-sm font-medium"
              >
                Primary Color
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="primary-color"
                  value={colors.primary}
                  onChange={(e) => handleColorChange("primary", e.target.value)}
                  className="border border-gray-300 rounded-l-md px-3 py-2 w-32"
                />
                <div
                  className="w-8 h-8 rounded-r-md border border-l-0 border-gray-300"
                  style={{ backgroundColor: colors.primary }}
                />
              </div>
            </div>

            {/* Text on Primary color */}
            <div className="mb-4">
              <label
                htmlFor="text-on-primary"
                className="block mb-2 text-sm font-medium"
              >
                Text on Primary color
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="text-on-primary"
                  value={colors.textOnPrimary}
                  onChange={(e) =>
                    handleColorChange("textOnPrimary", e.target.value)
                  }
                  className="border border-gray-300 rounded-l-md px-3 py-2 w-32"
                />
                <div
                  className="w-8 h-8 rounded-r-md border border-l-0 border-gray-300"
                  style={{ backgroundColor: colors.textOnPrimary }}
                />
              </div>
            </div>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

export default ColorChange;
