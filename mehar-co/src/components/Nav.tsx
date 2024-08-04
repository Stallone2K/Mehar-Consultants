import Mehar from "../assets/MeharCo.jpeg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className=" bg-white sticky top-0 shadow-md z-20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src={Mehar} alt="Mehar Consultant" className="h-11 w-32" />
            </Link>
          </div>
          <ul className="flex space-x-6 text-lg text-gray-600">
            <li>
              <Link to="/" className="hover:text-red-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-red-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/Services" className="hover:text-red-600">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Clients" className="hover:text-red-500">
                Clients
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-red-600">
                Contact
              </Link>
            </li>
          </ul>
          <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
            <Link to="/Contact">Contact Us</Link>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Nav;
