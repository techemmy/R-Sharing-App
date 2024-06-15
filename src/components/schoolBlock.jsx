import SortBySchool from "./sortBySchool";
import Button from "./button";

const SchoolBlock = () => {
  return (
    <div className="relative  flex justify-between place-items-center gap-2">
      <Button
        label={`Highest Stars`}
        className={`bg-black  w-max px-5 py-1 text-white`}
      />
      <SortBySchool />
    </div>
  );
};

export default SchoolBlock;
