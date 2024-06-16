import { useState } from "react";
import images from "../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = ({ layout }) => {
  // const [open, setOpen] = useState(true);

  const menus = [
    { id: 1, title: "ALL RESOURCES", path: "/feed" },
    { id: 2, title: "PAST QUESTIONS", path: "/blah" },
    { id: 3, title: "PDFS", path: "/pdfs" },
    { id: 4, title: "NOTES", path: "/handwritten-notes" },
    { id: 5, title: "Setting", path: "/settings" },
  ];

  return (
    <div
      className={` ${
        open ? "w-25" : "w-20 "
      } bg-black  p-5 min-h-screen pt-8  ${
        layout === "right" && "right-0"
      } fixed duration-300`}
    >
      <div className="flex gap-x-1 items-center">
        <img
          src={images.logo}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          ORORO NOTE
        </h1>
      </div>
      <ul className="pt-6">
        <li>
          <input
            type="text"
            placeholder="Search"
            className="w-full mb-1 sidebar-input bg-black border border-gray-300 p-1 rounded-sm"
          />
        </li>
        {menus.map((menu) => (
          <NavLink
            key={menu.id}
            to={menu.path}
            className={({ isActive }) =>
              `flex rounded-md py-1.5 cursor-pointer text-sm items-center gap-1 ${
                isActive ? "bg-light-white text-gray-900" : "text-gray-300"
              }`
            }
          >
            <img src={images.Setting} />
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
