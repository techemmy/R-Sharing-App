import images from "../assets/assets";
import InputComponent from "../components/inputField";
import Button from "../components/button";

const Signin = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className=" overflow-hidden shadow-2xl items-center flex w-max justify-center border border-gray-300 rounded-xl">
        <div className="flex flex-col gap-3 place-items-center gap-1 p-3  ">
          <h1 className="text-[3rem]">Goat Note</h1>
          <h3>Welcome, Literally Go the Extra Mile in Your studies</h3>
          <form className="flex flex-col gap-2" action="">
            <InputComponent
              id="email"
              name="email"
              label="Email"
              type="text"
              placeholder="abshikah jemmel"
              className=""
            />

            <InputComponent
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="***************"
              className=""
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
