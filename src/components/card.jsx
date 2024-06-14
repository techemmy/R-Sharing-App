const Card = ({ label, image, id }) => {
  return (
    <>
      <div className="shadow-3xl flex items-center border-0.3 border-gray-400 rounded-3xl gap-2  w-80">
        <img src={image} alt="" className="bg-black" />
        <div>
          <p>
            <small>{id}</small>
          </p>
          <h1 className="">{label}</h1>
        </div>
      </div>
    </>
  );
};

export default Card;
