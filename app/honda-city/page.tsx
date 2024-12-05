import React from "react";

const hondacity = () => {
  return (
    <div className= " min-h-screen flex justify-center items-center">
      <div>
        <h1 className=" bg-blue-950 text-white font-extrabold text-xl sm:text-2xl text-center mb-4 px-4 py-4">
        Honda City 2024 Price in Pakistan,
        </h1>
        <div className="mb-4 flex justify-center items-center">
          <img
            src="https://www.honda.com.sg/images/cars/city/main-banner/City_2024/Home-Model-Image-SV.png"
            alt="Honda City 2024"
            width={400}
            height={400}
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Book a test drive
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Request Bank Finance
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Visit Place
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            Car Inspection
          </button>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-3">Vehicle Description</h2>
          <ul className="text-sm sm:text-base space-y-2">
            <li>
              <span className="font-bold">Number of Doors:</span> 4
            </li>
            <li>
              <span className="font-bold">Engine:</span> 800 CC
            </li>
            <li>
              <span className="font-bold">Condition:</span> 9.5 / 10
            </li>
            <li>
              <span className="font-bold">Driven:</span> 10,500 KM
            </li>
            <li>
              <span className="font-bold">Suspension Type:</span> air Suspension
            </li>
            <li>
              <span className="font-bold">Avg:</span> 9 Km per ltr
            </li>
            <li>
              <span className="font-bold">Transmission:</span> Automatic
            </li>
            <li>
              <span className="font-bold">Fuel Type:</span> High Octane
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg sm:text-xl font-bold text-green-600">PKR 35,00,000</p>
          <a href="payment">
          <button className="mt-4 m-16 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Make Payment
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default hondacity;
