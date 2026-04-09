import React from 'react'
import { Link } from "react-router-dom";

function Menu() {
    return (
        <nav className="w-full bg-zinc-100 flex flex-wrap justify-between px-5 py-5 items-end">
            
            <Link 
                to='/' 
                className="font-bold text-5xl text-center"
            >
                <span className="font-black">B</span>log
            </Link>

            <Link 
                to='/add-blog' 
                className="font-light text-3xl tracking-tighter"
            >
                Add Blog
            </Link>

        </nav>
    )
}

export default Menu;