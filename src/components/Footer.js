import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-6">
      <div className="flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} GNCE Mercury</p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            Contact Us:
            <Link
              href="mailto:gncemercury@gmail.com"
              className="hover:underline"
            >
              gncemercury@gmail.com
            </Link>
          </div>
          <div className="flex space-x-4 justify-end">
            <a
              className="hover:text-gray-300"
              href="https://www.instagram.com/gnce_mercury/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
