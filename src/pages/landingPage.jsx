import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <header className="relative h-screen flex justify-center items-center">
      <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg" alt="" className="absolute -z-10 inline-block h-full w-full object-cover" />
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-indigo-400 to-purple-800 bg-clip-text mb-6 pb-4 text-4xl font-bold text-transparent md:text-6xl">Compass, Literally Go The Extra Miles in your Studies</h1>
          <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">Your Study Navigator</p>
          <Link to={'/signup'} className="inline-block rounded-full bg-indigo-500 px-8 py-4 text-center font-bold text-white hover:text-indigo-500 transition hover:border-black hover:bg-white">Get Started</Link>
          <Link to={'/home'} className="ml-2 inline-block rounded-full  px-8 py-4 text-center font-bold text-white transition border-white bg-transparent hover:text-black hover:bg-white">Continue</Link>
        </div>
      </div>
    </header>
  );
};
