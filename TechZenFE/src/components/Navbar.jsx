import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-blue-600">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link className="text-white text-lg font-bold" to="/">
            Full Stack Application
          </Link>
          <button
            className="text-white block lg:hidden"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition"
              to="/adduser"
            >
              Add User
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
