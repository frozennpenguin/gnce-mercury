import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="p-6 flex justify-center">
      <div className="flex justify-between w-full max-w-5xl">
        <p>&copy; {new Date().getFullYear()} GNCE Mercury</p>
        <div className="flex space-x-4 justify-end">
          <a
            className="hover:text-gray-300"
            href="https://www.instagram.com/gnce_mercury/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram className="h-6 w-6" />
          </a>
          <a
            className="hover:text-gray-300"
            href="mailto:gncemercury@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
