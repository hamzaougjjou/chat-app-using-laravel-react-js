import React from 'react'
import { useNavigate } from 'react-router-dom';

function logout() {

    let navigate = useNavigate();

    // localStorage.removeItem('authInfo');
    
    navigate('/login');

    console.log('====================================');
    console.log("log ou don");
    console.log('====================================');

    return null;
}

export default logout