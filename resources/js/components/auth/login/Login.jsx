import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
// import img_input from "./../../images/img_input.jpg"
// import icons8_bing_256 from "images/icons8_bing_256.png"

// import { mainUrl } from '../../API';
// import axios from "axios";


function Login() {

    const emailInpt = useRef();
    const passwordInpt = useRef();

    const [loginError, setLoginError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate('');



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // useEffect(() => {

    //     const email = "hamza2@gmail.com";
    //     const password = "123456";

    //     axios.post("/api/login", {
    //         email: email,
    //         password: password
    //     })
    //         .then((response) => {
    //             console.log('====================================');
    //             console.log( response.data );
    //             console.log('====================================');
    //         });
    // }, [])


    const handerLogin = async (e) => {
        e.preventDefault();
        setLoginError('');

        const body = {
            "email": email,
            "password": password
        };

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setLoginError('please insert a valid email');
            emailInpt.current.focus();
            return 0;
        }
        if (password.length < 6) {
            setLoginError('invalid password');
            passwordInpt.current.focus();
            return 0;
        }
        setLoading(true);
        await fetch(`api/login`,
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }
        )
            .then(res => res.json())
            .then(data => {

                // console.log('====================================');
                // console.log(data);
                // console.log('====================================');

                setLoading(false);
                if (data.success === true) {
                    localStorage.setItem('authInfo', JSON.stringify(body));
                    localStorage.setItem('auth', JSON.stringify(data.auth));
                    localStorage.setItem('user', JSON.stringify(data.user));
                    navigate('/');
                }
                if (data.code === 0) {
                    setLoginError('Email or password is wrong');
                }
            }
            ).catch(errors => {
                setLoginError('somthing went worng');
            }).finally(() => {
                setLoading(false);
            })

    }

    return (
        <section className="bg-sky-50 h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-5 mx-auto m:h-sdcreen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    CHATIFY
                </a>
                <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6"
                            onSubmit={e => handerLogin(e)}
                            action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email"
                                    ref={emailInpt}
                                    onChange={e => setEmail(e.target.value)}
                                    name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password"
                                    ref={passwordInpt}
                                    onChange={e => setPassword(e.target.value)}
                                    id="password" placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember"
                                            aria-describedby="remember" type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                                    focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600
                                     dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Forgot password?</a>
                            </div>

                            {
                                loading ?
                                    <button type="button" className="w-full text-white   bg-[#0284c7] hover:bg-primary-700 
                                    focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                    opacity-40 cursor-not-allowed cursor-default
                                    ">Sign in</button>
                                    :
                                    <button type="submit" className="w-full text-white  bg-[#0284c7] hover:bg-primary-700 
                                    focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                                    ">Sign in</button>
                            }


                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?
                                <a href="#"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login