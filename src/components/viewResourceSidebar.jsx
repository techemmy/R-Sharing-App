import { useState } from "react";
import images from "../assets/assets";
import { useNavigate, NavLink } from "react-router-dom";

const Sidebar = ({ layout }) => {
  const menus = [
    {
      id: 1,
      title: "Resource-Details",
      path: "/resource-details/note-summary",
    },
    { id: 2, title: "Summary", path: "note-summary" },
    { id: 3, title: "Back to Home", path: "/feed" },
  ];

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    if (id === 1) {
      navigate("/resource-details/note-summary"); // Specify the route you want to navigate to
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
      <ul className="pt-6 flex flex-col gap-1">
        {menus.map((menu, index) => (
          <NavLink
            key={menu.id}
            to={menu.path}
            // key={index}
            onClick={() => {
              handleNavigate(menu.id);
            }}
            // className={`border-0.1 mb-2  rounded-md p-1.3 text-center cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
            className={({ isActive }) =>
              `flex rounded-md py-1.5 cursor-pointer text-sm items-center gap-1 ${
                isActive ? "bg-light-white text-gray-900" : "text-gray-300"
              }`
            }
          >
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {menu.title}
            </span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
