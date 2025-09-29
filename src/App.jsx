import { useState } from "react";
import "./App.css";
import { IoSearch } from "react-icons/io5";

function App() {
  return (
    <>
      <div>
        <div className="pt-[200px]">
          <div className="px-8 py-8 customBg max-w-[480px] mx-auto rounded-2xl">
            <div className="flex items-center justify-between">
              <input
                type="text"
                spellCheck="false"
                className="py-4 outline-none text-[17px] text-[#5b548a] font-medium px-5 bg-white rounded-full w-[85%]"
                placeholder="Enter City Name"
              />
              <button className="px-[15.5px] py-[15.5px] bg-white rounded-full text-2xl cursor-pointer text-[#5b548a]">
                <IoSearch />
              </button>
            </div>
            <div>
              <img src="/mist.png" className="mx-auto w-[30%] mt-8" alt="" />
            </div>
            <div className="">
              <h1 className="text-center text-7xl font-medium text-white mt-4">
                22°c
              </h1>
              <h2 className="text-center font-medium text-4xl text-white mt-1">
                New York
              </h2>
            </div>
            <div className="flex items-center justify-between text-white mt-20">
              <div className="flex items-center gap-2">
                <img src="/humidity.png" className="w-[30%]" alt="" />
                <div>
                  <p className="text-[25px] font-normal mt-1 leading-8">64%</p>
                  <p className="text-[15px]">Humidity</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src="/wind.png" className="w-[25%]" alt="" />
                <div>
                  <p className="text-[25px] font-normal mt-1 leading-8">18 km/h</p>
                  <p className="text-[15px] font-normal">Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
