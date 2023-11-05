import { Link } from "react-router-dom";
import logo from "./../assets/images/ss-logo.svg";

const Logo = ({ className, logoClass }) => {
  return (
    <Link to="/" className={`flex gap-2 items-center text-4xl ${className}`}>
      <img className={`w-6 ${logoClass}`} src={logo} alt="Logo" />
      <span className="font-semibold">StudySync</span>
    </Link>
  );
};

export default Logo;
