import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function Page1(props) {

    let data = useSelector(state => state.RegisterReducer)
    console.log(data);
    let name = '';
    let email = '';
    let password = '';
    let confirmPassword = '';
    useEffect(() => {
        name = data.fullName === null ? '' : data.fullName;
        email = data.email === null ? '' : data.email;
        password = data.password === null ? '' : data.password;
        confirmPassword = data.confirmPassword === null ? '' : data.confirmPassword;
    }, [])

    return (
        <div className='sub-reg-c'>
            <input
                value={name}
                onChange={(e) => props.setFullName(e.target.value.trim())}
                type="text" placeholder="Full Name" />
            <input
                value={email}
                onChange={(e) => props.setEmail(e.target.value.trim())}
                type="email" placeholder="Email" />
            <input
                value={password}
                onChange={(e) => props.setPassword(e.target.value.trim())}
                type="password" placeholder="Password" />
            <input
                value={confirmPassword}
                onChange={(e) => props.setConfirmPassword(e.target.value.trim())}
                type="password" placeholder="Confirm Password" />
            <div className='frgt-pss-reg-c'>
                <Link to="/auth/forget-password">Forgot Password ?</Link>
            </div>
        </div>
    )
}

export default Page1