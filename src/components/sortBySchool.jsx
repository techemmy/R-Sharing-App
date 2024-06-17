import { useEffect, useState } from "react";
import schools from "../apiResources/schoolList";
import { Document } from "postcss";

const SortBySchool = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = (searchTerm) => {
    console.log("search", searchTerm);
  };

  const handlePersist = (selected) => {
    setValue(selected);
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the autosuggest component
    if (!event.target.closest(".dropdown")) {
      // console.log("other parts of the page clicked");
      setValue("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* search input and search button */}
      <div className="right-0 shrink  basis-full h-3.6 z-[10000]  flex flex-col">
        <input
          className="w-full h-full border p-1
           border-gray-500"
          type="text"
          onChange={handleChange}
          placeholder="SortBySchool"
          value={value}
        />
        <ul className="dropdown">
          {schools
            .filter((item) => {
              const searchItem = value.toLowerCase();
              const schoolName = item.school.toLowerCase();
              return (
                searchItem &&
                schoolName.startsWith(searchItem) &&
                schoolName !== searchItem
              );
            })

            .map((item) => (
              <li
                key={item.school}
                className="cursor-pointer bg-white mt-0.5 p-1 border rounded-sm w-25"
                onClick={() => {
                  handlePersist(item.school);
                }}
              >
                {item.school}
              </li>
            ))}
        </ul>
      </div>
      {/* dropdown onType */}
    </>
  );
};

export default SortBySchool;
