import { Link } from "react-router-dom";

export const NavbarItem = ({ name, path }) => {
  return (
    <Link className="hidden md:flex space-x-6">
      <a
        to={path}
        className="block py-2 px-4 text-white hover:text-gray-300 transition duration-200"
      >
        {name}{" "}
      </a>
    </Link>
  );
};
