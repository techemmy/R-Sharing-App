import { useState } from "react";
// import axios from "axios";
import InputComponent from "./inputField";
import Button from "./button";
import images from "../assets/assets";

const Registration = () => {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <div className="grid place-items-center h-screen">
      <div className=" overflow-hidden shadow-2xl items-center flex w-max justify-center border border-gray-300 rounded-xl">
        <div className="flex gap-3 p-3  ">
          <div className="flex flex-col gap-3 place-items-center">
            <h1 className="text-[3rem] ">Goat Note</h1>
            <h3 className="">
              Welcome, Literally Go the Extra Mile in Your studies
            </h3>
            <div className="">
              <form className="flex flex-col gap-1">
                <InputComponent
                  type="text"
                  id="fullname"
                  name="fullName"
                  label="fullName"
                />
                <InputComponent
                  type="email"
                  id="email"
                  label="Email"
                  name="email"
                />
                <InputComponent
                  type="password"
                  id="password"
                  label="Password"
                  name="password"
                />
                <button className="bg-black  w-max px-5 py-1  text-3xl text-white self-center">
                  Register
                </button>
              </form>
            </div>
          </div>
          <div className="h-35 w-40 p-1">
            <img className="w-full h-full" src={images.signinImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

//
//
//
//
//
//
//

// <label htmlFor="full name">Full Name:</label>
// <input
//   type="text"
//   id="fullname"
//   name="fullName"
//   value={formData.fullName}
//   onChange={handleChange}
//   placeholder="Abhinav Bisht"
// />

// <label htmlFor="email">Email:</label>
// <input
// type="email"
// id="email"
// name="email"
//   value={formData.email}
//   onChange={handleChange}
//   placeholder="Bishtabhi02@gmail.com"
// />

// <label htmlFor="password">Password: </label>
// <input
// type="password"
// id="password"
// name="password"
//   value={formData.password}
//   onChange={handleChange}
//   placeholder="***********"
// />
