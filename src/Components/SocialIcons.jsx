import {
  FaFacebookF,
  FaSquareInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

const SocialIcons = ({ className }) => {
  return (
    <ul className={`flex gap-2 ${className}`}>
      <li className="text-inherit hover:text-primary">
        <a href="#" target="_blank">
          <FaFacebookF />
        </a>
      </li>
      <li className="text-inherit hover:text-primary">
        <a href="#" target="_blank">
          <FaSquareInstagram />
        </a>
      </li>
      <li className="text-inherit hover:text-primary">
        <a href="#" target="_blank">
          <FaWhatsapp />
        </a>
      </li>
      <li className="text-inherit hover:text-primary">
        <a href="#" target="_blank">
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
