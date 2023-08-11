import React from "react";
import { LuArrowDown, LuCheck, LuDownloadCloud } from "react-icons/lu";
import Img1 from "../assets/img/img1.png";
import Img2 from "../assets/img/img2.png";
import Img3 from "../assets/img/img3.png";
import Img4 from "../assets/img/img4.png";
import Img5 from "../assets/img/img5.png";

const BillingTable = () => {
  const Billings = [
    {
      invoice: "Basic Plan – Dec 2022",
      amount: "USD $10.00",
      date: "Dec 1, 2022",
      status: "Paid",
      users: [Img1, Img2, Img3, Img4, Img5, Img2, Img2],
    },
    {
      invoice: "Basic Plan – Nov 2022",
      amount: "USD $10.00",
      date: "Dec 1, 2022",
      status: "Paid",
      users: [Img1, Img2, Img3, Img4, Img5, Img2],
    },
    {
      invoice: "Basic Plan – Oct 2022",
      amount: "USD $10.00",
      date: "Dec 1, 2022",
      status: "Paid",
      users: [Img1, Img2, Img3, Img4, Img5],
    },
    {
      invoice: "Basic Plan – Sep 2022",
      amount: "USD $10.00",
      date: "Dec 1, 2022",
      status: "Paid",
      users: [Img1, Img2, Img3],
    },
    {
      invoice: "Basic Plan – Aug 2022",
      amount: "USD $10.00",
      date: "Dec 1, 2022",
      status: "Paid",
      users: [Img1, Img2, Img3, Img4],
    },
    {
      invoice: "Basic Plan – Jul 2022",
      amount: "USD $10.00",
      date: "Dec 1, 2022",
      status: "Paid",
      users: [Img1, Img2, Img3, Img4],
    },
    {
      invoice: "Basic Plan – Jun 2022",
      amount: "USD $10.00",
      date: "Dec 1, 2022",
      status: "Paid",
      users: [Img1, Img2, Img3, Img4],
    },
  ];

  const tableHeaders = ["Invoice", "Amount", "Date", "Status", "Users on plan"];

  const toggleCheckboxes = (event) => {
    const isChecked = event.target.checked;
    const checkboxes = document.querySelectorAll(".check-item");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  };

  return (
    <>
      <div className="sm:flex justify-between items-center">
        <h2 className="text-lg font-medium mb-4 sm:mb-0">Billing history</h2>
        <button className="border text-sm text-primary rounded-lg bg-white py-2 px-4 flex items-center">
          <LuDownloadCloud size={20} className="mr-2" /> Download all
        </button>
      </div>

      <div>
        <div className="flex flex-col my-8">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 whitespace-nowrap font-medium text-xs text-left text-secondary tracking-wider">
                    <tr>
                      {tableHeaders.map((header, idx) => {
                        if (header === "Invoice") {
                          return (
                            <th
                              key={idx}
                              scope="col"
                              className="px-6 py-4 flex items-center"
                            >
                              <input id="check-all" type="checkbox" className="mr-2" onClick={toggleCheckboxes}/>
                              {header}{" "}
                              <LuArrowDown size={14} className="ml-1" />
                            </th>
                          );
                        }
                        return (
                          <th key={idx} scope="col" className="px-6 sm:py-3 items-center">
                            {header}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-secondary">
                    {Billings.map((bill, Idx) => (
                      <tr key={Idx}>
                        <td className="pl-6 py-4 pr-16 sm:pr-60 whitespace-nowrap text-sm font-medium text-primary">
                          <input
                            type="checkbox"
                            name={`bills${Idx}`}
                            id={`bills${Idx}`}
                            className="mr-2 check-item"
                          />
                          {bill.invoice}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {bill.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {bill.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs text-[#027A48]">
                          <span className="bg-[#ECFDF3] py-1 px-2 rounded-2xl flex">
                            <LuCheck size={12} className="mr-1" />
                            {bill.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap flex -space-x-2">
                          {bill.users.slice(0, 5).map((img, idx) => (
                            <span
                              key={idx}
                              className="rounded-full border-1 border-white"
                            >
                              <img src={img} alt="" width={24} />
                            </span>
                          ))}
                          {bill.users.length > 5 ? (
                            <span className="rounded-full border-1 border-white bg-gray-100 w-6 h-6 m-auto pt-1 text-center item text-xs font-medium">
                              +{bill.users.length - 5}
                            </span>
                          ) : (
                            ""
                          )}
                        </td>
                        <td className="px-4 py-4">
                          <button>
                            <LuDownloadCloud size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingTable;
