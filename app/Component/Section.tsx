import { TiTick } from 'react-icons/ti';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">Sell Your Car on PakWheels and Get the Best Price</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-blue-800 font-semibold mb-4 text-left">Post your Ad on PakWheels</h2>
            <ul className="text-left mb-6">
              <li className="flex items-center mb-2">
                <TiTick className="text-green-500 mr-2" />
                <span>Post your Ad for Free in 3 Easy Steps</span>
              </li>
              <li className="flex items-center mb-2">
                <TiTick className="text-green-500 mr-2" />
                <span>Get Genuine offers from Verified Buyers</span>
              </li>
              <li className="flex items-center mb-2">
                <TiTick className="text-green-500 mr-2" />
                <span>Sell your car Fast at the Best Price</span>
              </li>
            </ul>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Post Your Ad</button>
          </div>
          {/* Right Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-800 mb-4 text-left">Try PakWheels Sell It For Me</h2>
            <ul className="text-left mb-6">
              <li className="flex items-center mb-2">
                <TiTick className="text-green-500 mr-2" />
                <span>Dedicated Sales Expert to Sell your Car</span>
              </li>
              <li className="flex items-center mb-2">
                <TiTick className="text-green-500 mr-2" />
                <span>We Bargain for you and share the Best Offer</span>
              </li>
              <li className="flex items-center mb-2">
                <TiTick className="text-green-500 mr-2" />
                <span>We ensure Safe & Secure Transaction</span>
              </li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Register Your Car</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;