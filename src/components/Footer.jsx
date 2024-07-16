import { CiShop } from "react-icons/ci";
import { PiShootingStar } from "react-icons/pi";
import { GoGift } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="bg-slate-950 invisible md:visible">
        <div className="flex items-center justify-between mx-40 py-10 ">
          <ul className="text-white">
            <li>
              <span>ABOUT</span>
            </li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>FlipKart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
          <ul className="text-white">
            <li>
              <span>ABOUT</span>
            </li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>FlipKart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
          <ul className="text-white">
            <li>
              <span>ABOUT</span>
            </li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>FlipKart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
          <ul className="text-white">
            <li>
              <span>ABOUT</span>
            </li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>FlipKart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <ul className="text-white flex items-center justify-between mx-40 py-10">
          <li className="flex items-center font-light">
            <span className="text-yellow-500 pr-1">
              <CiShop />
            </span>
            Become a Seller
          </li>
          <li className="flex items-center font-light">
            <span className="text-yellow-500 pr-1">
              <PiShootingStar />
            </span>
            Advertise
          </li>
          <li className="flex items-center font-light">
            <span className="text-yellow-500 pr-1">
              <GoGift />
            </span>
            Gift Cards
          </li>
          <li className="flex items-center font-light">
            <span className="text-yellow-500 pr-1">
              <FaRegQuestionCircle />
            </span>
            Help Center
          </li>
          <li className="flex items-center font-light">
            <span className="text-yellow-500 pr-1">
              <FaRegCopyright />
            </span>
            2007-2024 Flipkart.com
          </li>
          <li className="flex items-center">
            <div className="image">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
