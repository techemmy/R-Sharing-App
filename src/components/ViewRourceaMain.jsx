import images from "../assets/assets";
import jsonData from "../apiResources/dummy-1.json";
// import { useNavigate } from "react-router-dom";

const ViewResourceMain = () => {
  const resourceInfo = [
    { id: 1, info: "Created By", icon: images.Folder },
    { id: 2, info: 2023, icon: images.calendar },
    { id: 3, info: "Database Systems", icon: images.Chat },
    { id: 4, info: "CSC 343", icon: images.Chart_fill },
    { id: 5, info: "PQ", icon: images.Chart_fill },
    { id: 6, info: "Redeemer's University", icon: images.User },
  ];

  // const navigate = useNavigate();

  // const handleNavigate = (id) => {
  //   if (id === 1) {
  //     console.log("id === 1");
  //     navigate("/profile-page"); // Specify the route you want to navigate to
  //   }
  //   return;
  // };

  return (
    // <div className="flex flex-col items-center">
    <div>
      <p>Additional Details</p>
      {resourceInfo.map((info) => {
        return (
          <div key={info.id} className=" flex gap-50 my-2 w-70 items-center">
            <div className=" border-0.1  rounded-2xl p-1">
              <img src={info.icon} alt="" />
            </div>
            <p
              // onClick={() => {
              //   handleNavigate(info.id);
              // }}
              className="cursor-pointer"
            >
              {info.info}
            </p>
          </div>
        );
      })}
    </div>
    // </div>
  );
};

export default ViewResourceMain;
