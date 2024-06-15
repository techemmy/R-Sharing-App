import { useState } from "react";
import images from "../assets/assets";

const Sidebar = ({ layout }) => {
  const menus = [{ title: "View Resource" }, { title: "Summary" }];

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
