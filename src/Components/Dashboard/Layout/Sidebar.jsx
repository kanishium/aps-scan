import React, { useContext } from 'react'
import {
  FiGrid,
  FiFolder,
  FiBarChart2,
  FiCalendar,
  FiBell,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../Context/ThemeContext';

const topMenu = [
  { name: "Dashboard", icon: FiGrid, path: "/dashboard" },
  { name: "Projects", icon: FiFolder, path: "/projects" },
  { name: "Scans", icon: FiBarChart2, path: "/scan" },
  { name: "Schedule", icon: FiCalendar, path: "/schedule" },
];

const bottomMenu = [
  { name: "Notifications", icon: FiBell },
  { name: "Settings", icon: FiSettings },
  { name: "Support", icon: FiHelpCircle },
];
const Sidebar = () => {
  const { dark } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  return (

    <aside
      className="
    w-64
    bg-white dark:bg-[#0A0F13]
    border-r border-gray-200 dark:border-gray-700
    flex flex-col justify-between
    min-h-screen py-6
    transition-colors
  "
    >

      {/* TOP AREA */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 mb-10">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <h1 className="text-xl font-semibold text-teal-600 dark:text-teal-400 dark:[#0E9E9E]" >aps</h1>
        </div>

        {/* MAIN MENU */}
        <nav className="space-y-2">
          {topMenu.map((item) => {
            const Icon = item.icon;

            const isActive = location.pathname.startsWith(item.path);

            return (
              <div
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`flex mx-6 items-center gap-3 p-3 rounded-full cursor-pointer transition
${isActive
                    ? "bg-[#DBF0F0] text-[#0E9E9E] dark:bg-[#0A2427] dark:text-teal-400"
                    : "text-gray-600 dark:text-[#64748A] hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
              >
                <Icon size={18} />
                <span className="text-sm font-bold">{item.name}</span>
              </div>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="w-full border-t border-gray-200 dark:border-gray-700 my-8"></div>

        {/* BOTTOM MENU */}
        <nav className="space-y-2">
          {bottomMenu.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="
flex items-center gap-3 mx-6 p-3 rounded-full
text-gray-600 
hover:bg-gray-100 dark:hover:bg-gray-800
cursor-pointer transition dark:text-[#64748A]
"
              >
                <Icon size={18} />
                <span className="text-sm font-bold">{item.name}</span>
              </div>
            );
          })}
        </nav>
      </div>

      {/* USER PROFILE */}
      <div className="flex border-t border-gray-200 dark:border-gray-700 pt-3 px-6 items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full"
        />

        <div>
          <p className="text-sm font-medium dark:text-gray-200">admin@edu.com</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Security Lead</p>
        </div>
      </div>

    </aside>

  )
}

export default Sidebar