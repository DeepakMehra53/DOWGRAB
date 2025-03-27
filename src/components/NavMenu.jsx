import { NavbarItem } from "./NavItem";

export const NavbarMenu = ({ navItems }) => {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-6 text-lg">
      {navItems.map((item, index) => (
        <NavbarItem key={index} name={item.name} path={item.path} />
      ))}
    </ul>
  );
};
