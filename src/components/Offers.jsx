import React from "react";

function Offers() {
  return (
    <div className="w-100%" id="events">
      <div className="max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between">
        <p className="text-lg font-bold text-gray-400 mx-1 hover:-translate-y-1 cursor-pointer transition-all ease-in duration-300">
          Booking Incentives
        </p>
        <p className="text-lg font-bold text-gray-400 mx-1 hover:-translate-y-1 cursor-pointer transition-all ease-in duration-300">
          Competitive Rates
        </p>
        <p className="text-lg font-bold text-gray-400 mx-1 hover:-translate-y-1 cursor-pointer transition-all ease-in duration-300">
          Book Whit Flexibility
        </p>
        <p className="text-lg font-bold text-gray-400 mx-1 hover:-translate-y-1 cursor-pointer transition-all ease-in duration-300">Trip Insurance</p>
      </div>
    </div>
  );
}

export default Offers;
