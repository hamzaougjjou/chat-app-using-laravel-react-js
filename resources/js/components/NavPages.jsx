import React from 'react';

import Home from './Home'
import About from './About'

import { Routes, Route } from "react-router-dom";
import Index from './chats/Index';
import Users from './users/Users';
import Login from './auth/login/Login';
import Friends from './friends/Friends';
import Main from './Main';
import Error404 from './Errors/Error404';
import Register from './auth/register/Register';





function NavPages() {



    return (
        <>
            <Routes>

                <Route path="/*" element={<Error404 /> } />

                <Route path="/" element={<Main /> }>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/chats/:id" element={<Index />} />
                    <Route path="/chats" element={<Index />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/profile" element={<Home />} />
                </Route>

                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />

            </Routes>


        </>
    )
}

export default NavPages