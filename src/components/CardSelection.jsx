import React, { useState } from "react";
import Visa from "../assets/img/visa.png";
import MasterCard from "../assets/img/mastercard.png";
import { LuPlus } from "react-icons/lu";

const CardRadioGroup = (props) => {
  const [selectedCard, setSelectedCard] = useState("");

  const handleChange = (event) => {
    setSelectedCard(event.target.value);
  };

  const cardInfo = [
    {
      logo: Visa,
      name: "Visa ending in 1234",
      expiry: "06/2024",
      value: "visa",
    },
    {
      logo: MasterCard,
      name: "Mastercard ending in 1234",
      expiry: "06/2024",
      value: "mastercard",
    },
  ];

  return (
    <div className="p- space-y-4">
      {cardInfo.map((card, idx) => (
        <label
          key={idx}
          className={`block p-4 cursor-pointer border rounded-lg ${
            selectedCard === card.value
              ? "border-blue-300 bg-[#F9F5FF]"
              : "border-gray-300"
          }`}
        >
          <input
            type="radio"
            className="sr-only"
            name="card-options"
            value={card.value}
            checked={selectedCard === card.value}
            onChange={handleChange}
          />
          <div
            className={`flex justify-between ${
              selectedCard === card.value ? "text-[#53389E]" : "text-primary"
            }`}
          >
            <div className="flex content-start">
              <img className="w-11 h-8 " src={card.logo} alt="" />
              <div className="ml-3 text-sm">
                <p className="font-medium">{card.name}</p>
                <p className="opacity-70">Expiry {card.expiry}</p>
                <div className="mt-2 flex font-medium ">
                  <button className="opacity-70">Set as default</button>
                  <button className="opacity-90 ml-3 text-[#6941C6]">
                    Edit
                  </button>
                </div>
              </div>
            </div>

            {selectedCard === card.value ? (
              <svg
                className="h-5 w-5 text-white bg-blue-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <polyline
                  points="20 6 9 17 4 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                ></polyline>
              </svg>
            ) : (
              <span className="h-5 w-5 border border-gray-400 rounded-full"></span>
            )}
          </div>
        </label>
      ))}
      <button className="text-secondary font-medium flex">
        <LuPlus size={20} /> Add new payment method
      </button>
    </div>
  );
};

export default CardRadioGroup;
