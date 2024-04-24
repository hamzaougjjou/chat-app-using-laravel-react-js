import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {


    return (
        <header className="bg-sky-100 sticky">
            <nav className="flex items-center justify-between py-6" aria-label="Global">

                <div className="flex flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 text-black no-underline font-bold">
                        logo
                    </Link>
                </div>

                <div className="flex gap-x-12">
                    <Link to="/" className="text-sm leading-6 text-black no-underline font-bold">Home</Link>
                    <Link to="/chats" className="text-sm leading-6 text-black no-underline font-bold">Chats</Link>
                    <Link to="/friends" className="text-sm leading-6 text-black no-underline font-bold">Friends</Link>
                    <Link to="/users" className="text-sm leading-6 text-black no-underline font-bold">Users</Link>
                    <Link to="/about" className="text-sm leading-6 text-black no-underline font-bold">About</Link>
                </div>

                <div className="flex flex-1 justify-end">
                    <Link to="/login" className="text-sm leading-6 text-black no-underline font-bold">Log in <span
                        aria-hidden="true">&rarr;</span></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header