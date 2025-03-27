export const NavbarBrand = ({ brand }) => {
  return (
    <div className="text-2xl font-bold">
      <a href="/" className="brand  text-xl">
        {brand}
      </a>
    </div>
  );
};
