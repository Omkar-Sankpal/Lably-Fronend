import React from 'react'
import { Link } from "react-router-dom";
import {  Settings } from "lucide-react";

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-2 absolute w-full z-50'>
        <div>
            <h1 className='font-bold text-secondary'>
                <Link to={'/'}>
                    Lably
                </Link>
            </h1>
        </div>

        <div>
            <Link
                to={"/settings"}
                className={`
                btn btn-sm gap-2 transition-colors
                    
                `}
            >
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">Settings</span>
            </Link>
        </div>
    </div>
  )
}

export default Navbar