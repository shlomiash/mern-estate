import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <header className="shadow-lg shadow-[#0a0a0a] p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="text-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-[#ff5c2c]">Real</span>
            <span className="text-slate-200">Estate</span>
          </h1>
        </Link>

        <form className="bg-[#0a0a0a] p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="text-slate-200 bg-transparent placeholder:text-gray-500 focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-200 cursor-pointer" />
        </form>
        <nav>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="hidden sm:inline text-slate-200 cursor-pointer hover:underline hover:text-[#ff5c2c]">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline text-slate-200 cursor-pointer hover:underline hover:text-[#ff5c2c] ">
                About
              </li>
            </Link>
            <Link to="/sign-in">
              <li className="text-slate-200 cursor-pointer hover:underline hover:text-[#ff5c2c]">
                SignIn
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
