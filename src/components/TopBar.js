import {
  FaAngleDown,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
  FaUser,
  FaPhone,
  FaRegClock,
} from "react-icons/fa";
import { FaSquareGit, FaLocationDot } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="flex items-center justify-center gap-8 h-50px py-2 bg-blue-500">
      <ul className="flex items-center text-white mx-4">
        <li>English</li>
        <FaAngleDown />
      </ul>
      <div className="hidden sm:flex items-center gap-4 text-white">
        <span className="flex items-center gap-2">
          <FaPhone /> +123-123-321
        </span>
        <span className="flex items-center gap-2">
          <FaLocationDot /> 110 china st, Addis ababa Et.
        </span>
        <span className="flex items-center gap-2">
          <FaRegClock /> Mon 12:29 pm
        </span>
      </div>
      <div className="flex text-white gap-3">
        <FaFacebook />
        <FaTwitter />
        <FaInstagramSquare />
        <FaLinkedin />
        <FaSquareGit />
      </div>
      <div className="flex gap-2 text-white">
        <span className="flex items-center gap-1">
          <FaUser /> Login
        </span>
        |<span className="flex">Register</span>
      </div>
    </div>
  );
};

export default TopBar;
