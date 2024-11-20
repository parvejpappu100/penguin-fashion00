import React from 'react';
import logo from "../../assets/images/icons/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navOptions = <>


        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/allProducts">Products</Link>
        </li>
        <li>
            <Link to="/myCart">My Carts</Link>
        </li>
        <li><a>About Us</a></li>
        <li><a>Contact Us</a></li>
        <li>
            <Link to="/login">Login</Link>
        </li>

    </>

    return (
        <div className='bg-[#FFFBF0] font-semibold text-xl '>
            <div className="drawer max-w-[1240px] mx-auto px-4 pt-5">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <a href='' className="flex-1 pe-2 me-2 ">
                            <img className='w-[200px] lg:w-[250px]' src={logo} alt="" />
                        </a>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {navOptions}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side z-40">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-[#FFFBF0] font-semibold text-xl">
                        {/* Sidebar content here */}
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;