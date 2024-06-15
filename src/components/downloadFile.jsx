import images from "../assets/assets";

const Download = () => {
  return (
    <div className="w-70 gap-4 h-20 bg-gray-400 justify-center flex">
      <img className="w-30 opacity-40" src={images.book} alt="" />
      <div className="flex flex-col gap-3 justify-between py-2">
        <img className="w-10" src={images.logo} alt="" />
        <button className="text-white rounded-md px-4 py-1 bg-black">
          Download
        </button>
      </div>
    </div>
  );
};

export default Download;
