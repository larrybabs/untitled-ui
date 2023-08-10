import React, { useState } from "react";
import Logo from "../assets/img/Logomark.svg";
import Lady from "../assets/img/smilinglady.png";
import Avatar from "../assets/img/Avatar.png";
import {
  LuBarChart2,
  LuCheckSquare,
  LuFlag,
  LuHome,
  LuLayers,
  LuLifeBuoy,
  LuLogOut,
  LuSearch,
  LuSettings,
  LuUsers,
} from "react-icons/lu";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("settings");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const linkItems = [
    { name: "home", icon: <LuHome size={23} />, link: "#" },
    {
      name: "dashboard",
      icon: <LuBarChart2 size={23} />,
      link: "#",
      badge: 10,
    },
    { name: "project", icon: <LuLayers size={23} />, link: "#" },
    { name: "tasks", icon: <LuCheckSquare size={23} />, link: "#" },
    { name: "reporting", icon: <LuFlag size={23} />, link: "#" },
    { name: "users", icon: <LuUsers size={23} />, link: "#" },
    { name: "support", icon: <LuLifeBuoy size={23} />, link: "#" },
    { name: "settings", icon: <LuSettings size={23} />, link: "#" },
  ];

  return (
    <div>

      {/* Desktop sidebar */}

      <div className="overflow-y-scroll h-full w-72 fixed hidden sm:block">
        <div className="container px-4 py-8 border bg-white">
          <div className="items-center hidden sm:flex">
            <img src={Logo} alt="logo" />
            <p className="pl-2 text-xl">Untitled UI</p>
          </div>
          <div className="sm:mt-6 mb-4 mx-2 relative">
            <LuSearch
              size={20}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="search"
              placeholder="Search"
              className="border py-2 pl-10 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <ul className="space-y-1 capitalize font-medium text-primary text-base">
              {linkItems.map((item) => (
                <li key={item.name} onClick={() => setActiveTab(item.name)}>
                  <div
                    className={`flex justify-between py-2 px-3 ${
                      item.name === "support" ? "mt-5" : ""
                    } ${
                      activeTab === item.name ? "bg-[#F9FAFB] rounded-lg" : ""
                    }`}
                  >
                    <div>
                      <span className="h-5 inline-block mr-3 text-gray-500">
                        {item.icon}
                      </span>
                      <a href={item.link}>{item.name}</a>
                    </div>
                    {item.badge ? (
                      <p className="bg-[#F2F4F7] text-xs px-3 py-1 rounded-2xl">
                        {item.badge}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm p-4 bg-[#F9FAFB] rounded-md my-6">
            <p className="text-dark font-medium">New features available!</p>
            <p className="text-secondary mt-1">
              Check out the new dashboard view. Pages now load faster.{" "}
            </p>
            <img src={Lady} alt="" className="rounded my-4" loading="lazy" />
            <div className="font-medium flex">
              <a href="/" className="text-secondary mr-3">
                Dismiss
              </a>
              <a href="/" className="text-blue-600">
                What's new?
              </a>
            </div>
          </div>
          <hr />

          <div className="flex justify-between items-start mt-5 px-1">
            <img src={Avatar} alt="/" />
            <div className="text-xs">
              <p className="text-dark font-medium">Olivia Rhye</p>
              <p className="text-secondary">olivia@untitledui.com</p>
            </div>
            <a href="/">
              <LuLogOut />
            </a>
          </div>
        </div>
      </div>

      {/* mobile nav*/}

      <div className="items-center justify-between p-4 bg-white flex sm:hidden w-full fixed z-20">
        <div className="items-center flex w-full">
          <img src={Logo} alt="logo" />
          <p className="pl-2 text-xl">Untitled UI</p>
        </div>

        <div onClick={handleClick} className="cursor-pointer md:hidden ">
          {!isOpen ? <CgMenuLeftAlt size="30" /> : <MdClose size="30" />}
        </div>
      </div>

      <div
        className={
          !isOpen
            ? "hidden"
            : "fixed bg-dark bg-opacity-25 w-full h-full shadow-md flex flex-col z-10 sm:hidden"
        }
        
      >
        <div className="container px-4 py-8 h-screen border bg-white w-3/4">
          <div className="mb-4 mx-2 mt-16 relative">
            <LuSearch
              size={20}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="search"
              placeholder="Search"
              className="border py-2 pl-10 pr-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <ul className="space-y-2 capitalize font-medium text-primary pb-4 text-base">
              {linkItems.map((item) => (
                <li key={item.name} onClick={() => setActiveTab(item.name)}>
                  <div
                    className={`flex justify-between py-2 px-3 ${
                      item.name === "support" ? "mt-44" : ""
                    } ${
                      activeTab === item.name ? "bg-[#F9FAFB] rounded-lg" : ""
                    }`}
                  >
                    <div>
                      <span className="h-5 inline-block mr-3 text-gray-500">
                        {item.icon}
                      </span>
                      <a href={item.link}>{item.name}</a>
                    </div>
                    {item.badge ? (
                      <p className="bg-[#F2F4F7] text-xs px-3 py-1 rounded-2xl">
                        {item.badge}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <hr />

          <div className="flex justify-between items-start mt-5 px-1">
            <img src={Avatar} alt="/" />
            <div className="text-sm">
              <p className="text-dark font-medium">Olivia Rhye</p>
              <p className="text-secondary">olivia@untitledui.com</p>
            </div>
            <a href="/">
              <LuLogOut />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
