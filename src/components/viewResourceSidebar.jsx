import { useState } from "react";
import images from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ layout }) => {
  const menus = [
    { id: 1, title: "View Resource" },
    { id: 2, title: "Summary" },
    { id: 3, title: "Back to Home" },
  ];

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    if (id === 3) {
      navigate("/feed"); // Specify the route you want to navigate to
    } else {
      // Handle other navigation or actions based on id
      console.log(`Clicked item with id: ${id}`);
    }
  };
  return (
    <div
      className={` ${
        open ? "w-25" : "w-20 "
      } bg-black  p-5 min-h-screen pt-8  ${
        layout === "right" && "right-0"
      } fixed duration-300`}
    >
      <ul className="pt-6">
        {menus.map((menu, index) => (
          <li
            key={index}
            onClick={() => {
              handleNavigate(menu.id);
            }}
            className={`border-0.1 mb-2  rounded-md p-1.3 text-center cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}
          >
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
