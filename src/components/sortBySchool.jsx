import { useState } from "react";
import schools from "../apiResources/schoolList";

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

  return (
    <div>
      {/* search input and search button */}
      <div className="w-10 flex">
        <input
          className="w-10 h-5 border
           border-red-300"
          type="text"
          onChange={handleChange}
          placeholder="Search"
          value={value}
        />

        <button
          onClick={() => {
            handleSearch(value);
          }}
          className="border border-red-500 rounded-sm"
        >
          Search
        </button>
      </div>
      {/* dropdown onType */}
      <ul>
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
            <div
              key={item.school}
              className="cursor-pointer mt-0.5 p-1 border rounded-sm w-25"
              onClick={() => {
                handlePersist(item.school);
              }}
            >
              {item.school}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default SortBySchool;
