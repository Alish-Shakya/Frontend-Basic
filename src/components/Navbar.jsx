import { NavLink } from "react-router"; // Use 'react-router-dom' for browser routing

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 flex space-x-6 text-2xl">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white font-bold border-b-2 border-white"
            : "text-gray-300 hover:text-white"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-white font-bold border-b-2 border-white"
            : "text-gray-300 hover:text-white"
        }
      >
        About
      </NavLink>

      <NavLink to="/contact"> Contact </NavLink>
    </div>
  );
};

export default Navbar;
