import React from 'react';

import { Routes, Route } from "react-router-dom";
import Login from './auth/login/Login';
import Error404 from './Errors/Error404';
import Main from '../Main';
import Home from '../pages/home/Home';
import Analytics from '../pages/analytics/Analytics';
import General from '../pages/settings/General';
import Profile from '../pages/profile/Profile';
import Payments from '../pages/payments/Payments';
import Inbox from '../pages/messages/Inbox';
import Customers from '../pages/customers/Customers';
import Products from '../pages/products/Products';
import OrdersDeails from '../pages/ordersDetails/OrdersDetails';





function NavPages() {



    return (

        <Routes>

            <Route path="/*" element={<Error404 />} />

            <Route path="/" element={<Main />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/analytics" element={<Analytics />}></Route>
                <Route path="/settings/general" element={<General />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/payments" element={<Payments />}></Route>
                <Route path="/inbox" element={<Inbox />}></Route>
                <Route path="/inbox/:id" element={<Inbox />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/customers" element={<Customers />}></Route>
                <Route path="/orders/:id/details" element={<OrdersDeails />}></Route>
            </Route>

            <Route exact path="/login" element={<Login />} />
            {/* <Route exact path="/register" element={<Register />} /> */}

        </Routes>
    )
}

export default NavPages