import images from "../assets/assets";
import InputComponent from "../components/inputField";
import Button from "../components/button";
import { useAuth } from "../provider/authProvider";
import React from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { setToken } = useAuth();
  const emailOrUsernameRef = React.useRef();
  const passwordRef = React.useRef();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailOrUsername = emailOrUsernameRef.current.value;
    const password = passwordRef.current.value;

    if (!emailOrUsername || !password) {
      return alert("Make sure all fields are filled");
    }

    try {
      const resp = await api.post('/auth/login', { emailOrUsername, password })
      if (resp.status === 200) {
        alert('Login successful!')
      }
      setToken(resp.data.access_token)
      navigate('/home')
    } catch (error) {
      const { response: { data } } = error;
      alert(data.message)
      console.log("Error Type:", data.error)
      console.log("Error Message:", data.message)
      console.log("Error Status:", data.statusCode)
    }
    // setToken("hello there")
  }
  return (
    <div className="grid place-items-center h-screen">
      <div className=" overflow-hidden shadow-2xl items-center flex w-max justify-center border border-gray-300 rounded-xl">
        <div className="flex flex-col gap-3 place-items-center gap-1 p-3  ">
          <h1 className="text-[3rem]">Goat Note</h1>
          <h3>Welcome, Literally Go the Extra Mile in Your studies</h3>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <InputComponent
              id="email"
              name="email"
              label="Email"
              type="text"
              placeholder="abshikah jemmel"
              className=""
              compRef={emailOrUsernameRef}
            />

            <InputComponent
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="***************"
              className=""
              compRef={passwordRef}
            />
            <Button
              label={`Log In`}
              className={`bg-black self-center w-max px-5 py-1 text-white`}
            />
          </form>
        </div>
        <div className="h-35 w-40 p-1">
          <img className="w-full h-full" src={images.signinImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
