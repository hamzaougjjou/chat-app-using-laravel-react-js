import React from 'react';

import Home from './Home'
import About from './About'

import { Routes, Route } from "react-router-dom";
import Index from './chats/Index';
import Users from './users/Users';
import Login from './auth/login/Login';
import Friends from './friends/Friends';





function NavPages() {



    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chats/:id" element={<Index />} />
            <Route path="/chats" element={<Index />} />
            <Route path="/users" element={<Users />} />

            <Route path="/friends" element={<Friends />} />


            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default NavPages