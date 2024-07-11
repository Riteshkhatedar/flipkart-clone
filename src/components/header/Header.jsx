import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-white z-50 mx-40 shadow-sm fixed top-0 left-0 right-0 flex items-center justify-between p-5 ">
        <div className="image">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt=""
          />
        </div>
        <div className="search flex items-center ">
          <button className="bg-slate-100 text-slate-700 rounded-l-lg p-3">
            {" "}
            <LuSearch></LuSearch>
          </button>

          <input
            type="text"
            className="bg-slate-100 py-2  rounded-r-lg w-[1000px] outline-none"
            placeholder="search for products"
          />
        </div>

        <span className="flex items-center">
          <FaRegUserCircle></FaRegUserCircle>
          Login
        </span>
        <NavLink to={"/cart"}>
          <span className="flex items-center">
            <IoCartOutline></IoCartOutline>Cart
          </span>{" "}
        </NavLink>
      </div>
    </>
  );
};

export default Header;
