import { TbMathGreater } from "react-icons/tb";

import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { AiTwotonePrinter } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import cam from "../img/cam.jpg";
const Footer = () => {
  return (
    <div className="bg-[#273044] mt-36">
      <div className=" gap-4 grid grid-cols-4 p-16 text-white h-[380px]">
        <div>
          <p className="font-bold text-xl">ABOUT</p>
          <p className="pt-6 pb-4 text-sm">
            {" "}
            <span className="text-blue-600">Masterstudy</span> is Education
            WordPress theme featured by Learning Management System (LMS) for
            online education. Developed by <span></span>
            <span className="text-blue-600">StylemixThemes</span>. Lorem ipsum
            dolor sit amet, onsectetur adipiscing elit. Morbi at egestas magna.
          </p>
          <button className="border-2 border-white h-10 w-36 text-sm">
            LEARNING NOW
          </button>
        </div>

        <div>
          <p className="font-bold text-xl">POPULAR COURSES</p>
          <div className="grid grid-cols-2 gap-y-4 grid-rows-3 pt-6">
            <p className="h-14 w-14 bg-yellow-300">
              <img src={cam} alt="cam" className="w-full h-full" />
            </p>
            <div className="relative right-20 text-sm">
              <p className="hover:text-[#3755AB] hover:cursor-pointer">
                How to be a DJ? Make Electronic Music
              </p>
              <p className="text-gray-400">BY DEMO INSTRUCTOR</p>
            </div>

            <p className="h-14 w-14 bg-yellow-300 mt">
              <img src={cam} alt="cam" className="w-full h-full" />
            </p>
            <div className="relative right-20 text-sm">
              <p className="hover:text-[#3755AB] hover:cursor-pointer">
                How to be a DJ? Make Electronic Music
              </p>
              <p className="text-gray-400">BY DEMO INSTRUCTOR</p>
            </div>

            <p className="h-14 w-14 bg-yellow-300">
              <img src={cam} alt="cam" className="w-full h-full" />
            </p>
            <div className="relative right-20 text-sm">
              <p className="hover:text-[#3755AB] hover:cursor-pointer">
                How to be a DJ? Make Electronic Music
              </p>
              <p className="text-gray-400">BY DEMO INSTRUCTOR</p>
            </div>
          </div>
        </div>

        <div>
          <p className="font-bold text-xl">PAGES</p>
          <div className="pt-6">
            <ul className="flex flex-col gap-y-4 text-sm">
              <li className="hover:text-[#E8953D] hover:cursor-pointer border-b border-blue-300 flex items-center gap-1">
                <TbMathGreater />
                ABOUT US
              </li>
              <li className="hover:text-[#E8953D] hover:cursor-pointer border-b border-blue-300 flex items-center gap-1">
                <TbMathGreater />
                BLOG
              </li>
              <li className="hover:text-[#E8953D] hover:cursor-pointer border-b border-blue-300 flex items-center gap-1">
                <TbMathGreater />
                CONTACT US
              </li>
              <li className="hover:text-[#E8953D] hover:cursor-pointer border-b border-blue-300 flex items-center gap-1">
                <TbMathGreater />
                SHOP
              </li>
              <li className="hover:text-[#E8953D] hover:cursor-pointer flex items-center gap-1">
                <TbMathGreater />
                MEMBERSHIP PLANS
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl">CONTACT</p>
          <div className="pt-6">
            <ul className="flex flex-col gap-y-4 text-sm">
              <li className="flex items-center gap-4">
                <CiLocationOn size={26} />
                USA, Callifornia 20, First Avenue, Callifornia
              </li>
              <li className=" flex items-center gap-4">
                <FaPhone size={26} />
                Tel.: +1 212 458 300 32
              </li>
              <li className=" flex items-center gap-4">
                <AiTwotonePrinter size={26} />
                Fax: +1 212 375 24 14
              </li>
              <li className=" flex items-center gap-4">
                <CiMail size={26} />
                info@masterstudy.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pb-12 text-white flex justify-center">
        <p>&copy; 2024 GC Ethio Education. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
