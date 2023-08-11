import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RadioButtonGroup from "../components/RadioButton";
import CardSelection from "../components/CardSelection";
import BillingTable from "../components/BillingTable";

const Settings = () => {
  const [active, setActive] = useState("Billing");

  const buttons = [
    "My details",
    "Profile",
    "Password",
    "Team",
    "Plan",
    "Billing",
    "Notifications",
    "Integrations",
    "API",
  ];

  return (
    <div className="flex">
      <aside className="">
        <Navbar />
      </aside>

      <main className="bg-[#F9FAFB] pt-28 sm:pt-24 md:pt-8 md:pl-80 w-full h-full sm:p-8">
        <div className="px-4 sm:px-0">
          <h1 className="font-medium text-3xl text-dark">Settings</h1>
          <p className="text-secondary mt-1">
            Manage your team and preferences here.
          </p>
        </div>

        <div className="flex">
          <div className="overflow-x-scroll whitespace-nowrap w-ful py-4">
            {buttons.map((button, idx) => (
              <button
                key={button}
                className={`border py-2 px-4 text-sm ${
                  active === button
                    ? "bg-[#F9FAFB] text-dark"
                    : "bg-white text-primary"
                }  ${idx === 0 ? "rounded-l-lg" : ""}
              ${idx === buttons.length - 1 ? "rounded-r-lg" : ""}`}
                onClick={() => setActive(button)}
              >
                {button}
              </button>
            ))}
          </div>
        </div>

        <section className="my-8 px-4 sm:px-0">
          <h3 className="font-medium text-lg text-dark">Payment method</h3>
          <p className="text-secondary text-sm mb-5 mt-1">
            Update your billing details and address.
          </p>
          <hr />
          <div className="grid grid-cols-12 gap-4 text-sm py-5">
            <div className="col-span-12 sm:col-span-3">
              <p className="font-medium text-dark">Contact email</p>
              <p className="text-secondary mb-5 ">
                Where should invoices be sent?
              </p>
            </div>
            <div className="col-span-12 sm:col-span-9">
              <RadioButtonGroup />
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-12 gap-4 text-sm py-5">
            <div className="col-span-12 sm:col-span-3">
              <p className="font-medium text-dark">Card details</p>
              <p className="text-secondary mb-5 ">
                Select default payment method.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-9">
              <CardSelection />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-0">
          <BillingTable />
        </section>
      </main>
    </div>
  );
};

export default Settings;
