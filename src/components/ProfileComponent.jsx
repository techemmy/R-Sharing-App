import images from "../assets/assets";

const ProfilePage = () => {
  const details = [
    { id: 1, param: "Name", actual: "Oloyede Emmanuel" },
    { id: 2, param: "Username", actual: "Techemmmy" },
    { id: 3, param: "School", actual: "Redeemers" },
    { id: 4, param: "Email", actual: "mrBeast@gmail.com" },
  ];

  return (
    <div className="pl-35 flex gap-7 pt-4 border-gray-300 border-3">
      <div className="w-10 basis-auto aspect-square rounded-full">
        <img
          className="w-full object-cover aspect-square rounded-full"
          src={images.signinImage}
          alt=""
        />
      </div>

      <div className="grid grid-cols-2 w-50  gap-3 grid-rows-2">
        {details.map((detail) => {
          return (
            <div>
              <p className="">{detail.param}</p>
              <div className="border-b-0.1 border-gray-300 mt-0.5 text-gray-400 py-0.4  pl-0.1">
                {detail.actual}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // <div className="pl-35">
    //   <div className="w-max flex text-[1.4rem] p-1 border-0.4 gap-7">
    //     <div className="w-10 basis-auto  rounded-full">
    //       <img
    //         className="w-full aspect-square rounded-full"
    //         src={images.signinImage}
    //         alt=""
    //       />
    //     </div>
    //     <div className="flex w-15  flex-col gap-2">
    //       <div>
    //         <p className="">Your Name</p>
    //         <div className="border-b-0.1 border-gray-300 mt-0.5 text-gray-400 py-0.4  pl-0.1">
    //           Harper Kim
    //         </div>
    //       </div>
    //       <div>
    //         <p className="">Your Name</p>
    //         <div className="border-b-0.1 border-gray-300 mt-0.5 text-gray-400 py-0.4  pl-0.1">
    //           Harper Kim
    //         </div>
    //       </div>
    //       <div>
    //         <p className="">Your Name</p>
    //         <div className="border-b-0.1 border-gray-300 mt-0.5 text-gray-400 py-0.4  pl-0.1">
    //           Harper Kim
    //         </div>
    //       </div>
    //       <div>
    //         <p className="">Your Name</p>
    //         <div className="border-b-0.1 border-gray-300 mt-0.5 text-gray-400 py-0.4  pl-0.1">
    //           Harper Kim
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex w-15  flex-col gap-2">
    //       <div>
    //         <p className="">Your Name</p>
    //         <div className="border-b-0.1 border-gray-300 mt-0.5 text-gray-400 py-0.4  pl-0.1">
    //           Harper Kim
    //         </div>
    //       </div>
    //       <div>
    //         <p className="">Your Name</p>
    //         <div className="border-b-0.1 border-gray-300 mt-0.5 text-gray-400 py-0.4  pl-0.1">
    //           Harper Kim
    //         </div>
    //       </div>
    //       <div>
    //         <p className="">Your Name</p>
    //         <div className="border-b-0.1 border-gray-300 mt-0.5 text-gray-400 py-0.4  pl-0.1">
    //           Harper Kim
    //         </div>
    //       </div>
    //       <div>
    //         <p className="">Your Name</p>
    //         <div className="border-b-0.1 border-gray-300 mt-0.5 text-gray-400 py-0.4  pl-0.1">
    //           Harper Kim
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProfilePage;
