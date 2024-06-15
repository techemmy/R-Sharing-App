import { useNavigate } from "react-router-dom";

const Card = ({ label, image, id }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/resource-details");
  };

  return (
    <>
      <div className="shadow-3xl flex items-center border-0.3 border-gray-400 rounded-3xl gap-2 ">
        <img src={image} alt="" className="w-20" />
        <div className="flex flex-col gap-2">
          <p>
            <small>{id}</small>
          </p>
          <h1 className="">{label}</h1>
          <div className="flex gap-1">
            <button
              onClick={handleNavigate}
              className="bg-black  w-max px-5 py-1 text-white"
            >
              View Resource
            </button>
            <button className="bg-black  w-max px-2 py-1 text-white">
              Star
            </button>
            <button className="bg-black  w-max px-2 py-1 text-white">
              Unstar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
