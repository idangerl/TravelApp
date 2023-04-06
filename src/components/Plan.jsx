import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

function Plan() {



  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-2" id="plans">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img src={image1} alt="image" className="row-span-3 object-cover w-full h-full p-2 " />
        <img src={image2} alt="image" className="row-span-2 object-cover w-full h-full p-2 " />
        <img src={image3} alt="image" className="row-span-2 object-cover w-full h-full p-2 " />
        <img src={image4} alt="image" className="row-span-3 object-cover w-full h-full p-2 " />
        <img src={image5} alt="image" className="row-span-2 object-cover w-full h-full p-2 " />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
          culpa.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo
          rem, corrupti, modi aliquid minima quisquam facilis natus adipisci
          dicta mollitia earum laboriosam! Ipsum pariatur mollitia, deleniti
          rerum repudiandae dolorem.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl hover:scale-105">Learn More</button>
          <button className="bg-black text-white border-black hover:shadow-xl hover:scale-105">Book Your trip</button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
