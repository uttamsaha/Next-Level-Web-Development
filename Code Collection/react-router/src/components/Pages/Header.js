import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="w-full h-16 bg-indigo-800 text-white flex justify-around items-center">
        <div><h1 className="text-4xl font-bold ">Logo</h1></div>
        <ul className="">
          <li>
            <Link className="mr-4" to="/">Home</Link>
            <Link className="mr-4" to="/friends">Friends</Link>
            <Link className="mr-4" to="/posts">Posts</Link>
            
            {/* <Link>Home</Link> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
