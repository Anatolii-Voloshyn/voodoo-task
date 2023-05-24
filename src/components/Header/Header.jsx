import React from "react";

export const Header = () => {
  return (
    <div>
      <div className="flex justify-between border-b border-black">
        <div className="flex my-6 md:my-12 ml-6 md:ml-[62px]">
          <div className="w-6 md:w-11 mr-3">
            <img src={require('../../logo.png')} alt="logo"/>
          </div>
          <div>
            <img className="h-12 md:h-[98px]" src={require('../../VooDoo.png')} alt="VooDoo-logo"/>
          </div>
        </div>

        <div className="mt-4 md:mt-12">
          <button className="rounded-md font-bold text-xs md:text-xl mr-1 md:mr-9 p-3 transition duration-500 hover:bg-black hover:text-white">
            About us
          </button>
          <button className="rounded-md font-bold text-xs md:text-xl mr-6 md:mr-[120px] p-3 transition duration-500 hover:bg-black hover:text-white">
            Sign-up
          </button>
        </div>
      </div>
    </div>
  )
}