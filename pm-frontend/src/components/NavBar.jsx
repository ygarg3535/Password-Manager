import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-12">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        <button className="flex justify-center font-bold items-center bg-green-500 hover:bg-green-400 rounded-full gap-2 px-3 w-fit border-[2px] border-white">   
          <img width={29} src="icons/github.png" alt="" />
            GitHub
          </button>
      </div>
    </nav>
  );
};

export default NavBar;
