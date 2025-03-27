import { NavbarBrand } from "./NavbarBrand";
import { NavbarMenu } from "./NavMenu";
import iconCart from "../assets/iconCart.png";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";

export const Navbar = ({ navItems }) => {
  const [totalQuantity,setTotalQuantity] = useState(0)
  const carts = useSelector(store => store.cart.items)
  useEffect (()=>{
    let total=0;
    carts.forEach(item => total += item.quantity)
    setTotalQuantity(total)
  },[carts])
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <NavbarBrand brand="DOWGRAB" />
          <button>
            <span></span>
          </button>
          <NavbarMenu navItems={navItems} />
          <div
            className="w-10 h-10 bg-gray-100 rounded-full
                  flex justify-center items-center relative"
          >
            <img src={iconCart} alt="" className="w-6" />
            <span
              className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
                      w-5 h-5 rounded-full flex justify-center items-center"
            >
              {totalQuantity}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
