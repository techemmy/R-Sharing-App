import { useState } from "react";
import images from "../assets/assets";
import { NavLink } from "react-router-dom";

const LeaderBoard = ({ layout }) => {
  const leaderBoard = [
    { id: 1, name: "Simmon Richards", stars: 122 },
    { id: 2, name: "Steven Gerald", stars: 1200 },
    { id: 3, name: "Cristiano Ronaldo", stars: "12.4k" },
    { id: 3, name: "Lionel Messi", stars: 12 },
    { id: 5, name: "Busayo Saka", stars: 122 },
  ];

  return (
    <div
      className={` bg-black  p-2 min-h-screen pt-8  ${
        layout === "right" && "right-0"
      } fixed`}
    >
      <h2 className="text-white">Top Contributors</h2>
      <ul className="">
        {leaderBoard.map((item, index) => (
          <li
            key={index}
            className="flex text-white rounded-md p-2 cursor-pointer text-sm justify-between  items-center  gap-x-4"
          >
            {item.name}
            <p className="px-1 flex">
              {item.stars} <span>+</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LeaderBoard;
