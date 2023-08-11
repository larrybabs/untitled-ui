import React, { useState } from "react";
import { LuMail } from "react-icons/lu";

const RadioButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="space-y-2">
      <div>
        <label className="inline-flex items-start mb-2">
          <input
            type="radio"
            className="form-radio mt-1"
            name="options"
            value="mail"
            checked={selectedOption === "mail"}
            onChange={handleChange}
          />
          <span className="ml-2 ">
            <p className="font-medium text-dark">Send to my account email</p>
            <p className="text-secondary ">olivia@untitledui.com</p>
          </span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-start w-full">
          <input
            type="radio"
            className="form-radio mt-1"
            name="mail-options"
            value="other-mail"
            checked={selectedOption === "other-mail"}
            onChange={handleChange}
          />
          <span className="ml-2 w-full">
            <p className="font-medium text-dark">Send to an alternative email</p>
            <div className="mt-2 mb-4 relative">
              <LuMail size={20} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"/>
              <input
                type="text"
                placeholder="billing@untitledui.com"
                className="border py-2 pl-10 pr-4 w-full sm:w-4/5 md:w-2/3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </span>
        </label>
      </div>
    </div>
  );
};

export default RadioButtonGroup;
