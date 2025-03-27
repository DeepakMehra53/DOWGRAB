import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { CartTab } from './CartTab'
CartTab
export const Layout = () => {
  return (
    <div>
        <main>
            <Header/>
            <Outlet/>
        </main>
        <CartTab/>
    </div>
  )
}
