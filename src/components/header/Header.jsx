import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { BiSolidCoupon } from "react-icons/bi";
import { ImFolderUpload } from "react-icons/im";
import { PiBagSimpleFill } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { RiMicrosoftFill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (

    /* Header start from here */
    <div className="bg-white z-50 md:mx-20 lg:mx-40 shadow-sm fixed top-0 left-0 right-0 flex items-center justify-between p-5 ">
      <div className="image">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt=""
        />
      </div>
      <div className="search hidden lg:flex items-center ">
        <button className="bg-slate-100 text-slate-700 rounded-l-lg p-3">
          {" "}
          <LuSearch></LuSearch>
        </button>

        <input
          type="text"
          className="bg-slate-100 py-2  rounded-r-lg w-[100%] outline-none"
          placeholder="search for products"
        />
      </div>

      <span className="hidden lg:flex items-center ">
        <FaRegUserCircle></FaRegUserCircle>
        Login
      </span>
      <NavLink to={"/cart"} className={"hidden lg:flex"}>
        <span className="flex items-center">
          <IoCartOutline></IoCartOutline>Cart
        </span>{" "}
      </NavLink>
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

{/* toggle Menu start from here */}
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r bg-white shadow-sm ease-in-out duration-500 text-slate-500"
            : " duration-500 fixed left-[-100%] bottom-0 top-0"
        }
      >
        <li className="text-white bg-blue-500 p-4 flex items-center"><div className="image w-10 mr-2"  ><img className="rounded-3xl w-[100%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3k5V6PJM89IHsgss16z-20sj4TrBkAE0fw&s" alt="" /></div><span>Login & Signup</span></li>
        <li className="flex items-center p-4 "><span className="mr-2"><AiFillThunderbolt/></span>SuperCoin Zone</li>
        <li className="flex items-center p-4 border-b border-gray-400"><span className="mr-2"><FaPlus/></span>Flipkart Plus Zone</li>
        <li className="flex items-center p-4 "><span className="mr-2"><RiMicrosoftFill/></span>All Categories</li>
        <li className="flex items-center p-4 border-b border-gray-400"><span className="mr-2 p-1 rounded-2xl bg-slate-500 text-white text-[10px]"><RiMicrosoftFill/></span>More on Flipkart</li>
        <li className="flex items-center p-4 border-b border-gray-400"><span className="mr-2"><GrLanguage/></span>Choose Language</li>
        <li className="flex items-center p-4 "><span className="pr-2"><BiSolidCoupon/></span>Offer Zone</li>
        <li className="flex items-center p-4 border-b border-gray-400"><span className="mr-2"><PiBagSimpleFill/></span>Sell on Flipkart</li>
        <li className="flex items-center p-4 "><span className="mr-2"><ImFolderUpload/></span>My Orders</li>
        <li className="flex items-center p-4 "><span className="mr-2"><BiSolidCoupon/></span> Coupons</li>
        <li className="flex items-center p-4 "><span className="mr-2"><IoCartOutline/></span>My Cart</li>
        <li className="flex items-center p-4 "><span className="mr-2"><FaHeart/></span>My Whishlist</li>
        <li className="flex items-center p-4 "><span className="mr-2"><FaUserLarge/></span>My Account</li>
        <li className="flex items-center p-4 border-b border-gray-400 "><span className="mr-2"><IoMdNotifications/></span>My Notifications</li>
      </ul>


    </div>
  );
};

export default Header;
