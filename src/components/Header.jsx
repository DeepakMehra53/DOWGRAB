import React from 'react'
import { Navbar } from './Navbar'

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Privacy", path: "/privacy" },
  { name: "Terms", path: "/terms" },
  { name: "Contact", path: "/contact" },
];
export const Header = () => {
  return (
    <>
   <Navbar brand="Mowaki" navItems={navItems} />
    
   
</>
  )
}
