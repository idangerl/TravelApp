import React from "react";
import heroImg from '../assets/heroImg.jpg'

function Hero() {
  return (
    <div className="w-full h-screen" id="home">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={heroImg}
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Parties & Entertainment
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            nihil numquam illum iure amet in deleniti sunt. Fuga, a possimus.
          </p>
          <button className="bg-white text-black border-2 hover:translate-x-1 font-semibold hover:border-blue-400">
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
