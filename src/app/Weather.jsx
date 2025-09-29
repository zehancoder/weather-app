import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

function Weather() {
  const apiKey = "47f8b4225b50e94350fc25069dafb448";
  const [data, setData] = useState(null);
  const [inputs, setInput] = useState("");
  const [error, setError] = useState(null);
  console.log(inputs);

  const dataHandle = async () => {
    if (!inputs) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputs}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error("city not found");
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (error) {
      setError(error.message);
      setData(null);
    }
  };

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
                onChange={(e) => setInput(e.target.value)}
                value={inputs}
              />
              <button
                className="px-[15.5px] py-[15.5px] bg-white rounded-full text-2xl cursor-pointer text-[#5b548a]"
                onClick={dataHandle}
              >
                <IoSearch />
              </button>
            </div>

            {error && (
              <div>
                <p className="text-red-500 text-center mt-4 font-medium">
                  {error}
                </p>
              </div>
            )}

            {data && (
              <div>
                <div>
                  <img
                    src="/mist.png"
                    className="mx-auto w-[30%] mt-8"
                    alt=""
                  />
                </div>
                <div className="">
                  <h1 className="text-center text-7xl font-medium text-white mt-4">
                    {
                        Math.round(data.main.temp)
                    }°c
                  </h1>
                  <h2 className="text-center font-medium text-4xl text-white mt-1">
                    {data.name}, {data.sys.country}
                  </h2>
                </div>
                <div className="flex items-center justify-between text-white mt-20">
                  <div className="flex items-center gap-2">
                    <img src="/humidity.png" className="w-[30%]" alt="" />
                    <div>
                      <p className="text-[25px] font-normal mt-1 leading-8">
                        {
                            data.main.humidity
                        }%
                      </p>
                      <p className="text-[15px]">Humidity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/wind.png" className="w-[25%]" alt="" />
                    <div>
                      <p className="text-[25px] font-normal mt-1 leading-8">
                        {
                            data.wind.speed
                        }km/h
                      </p>
                      <p className="text-[15px] font-normal">Wind Speed</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
