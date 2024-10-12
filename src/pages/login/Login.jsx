import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RedirectToStore from '../../components/RedirectToStore'
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import axios from 'axios';
import { api_url } from '../../utils/Vars';
import IsValidEmail from '../../utils/IsValidEmail';
import Loading from "./../../components/Loading";
import { useEffect } from 'react';
function Login() {

    const navigate = useNavigate();

    const signIn = useSignIn();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [authData, setAuthData] = useState({
        email: 'hamza@gmail.com',
        password: '12345678'
    })


    useEffect(() => {
        setError("");
    }, [authData])
    const handleLogin = (e) => {
        e.preventDefault();

        if (!IsValidEmail(authData.email)) {
            setError("invalid email")
            return 0;
        }
        if (authData.password.trim().length < 6) {
            setError("invalid password")
            return 0;
        }

        setLoading(true);
        axios.post(api_url + '/admin/login', authData)
            .then((res) => {

                if (res.status === 200) {
                    console.log(res.data.auth.token);
                    if (signIn(
                        // =======================
                        {
                            auth: {
                                token: res.data.auth.token,
                                type: 'Bearer'
                            },
                            userState: {
                                user: res.data.user,
                                uid: res.data.user.id
                            },
                            refresh: res.data.auth.token,
                            expiresIn: 3600 / 60, // expiresIn in minutes
                            refreshTokenExpireIn: 60, // refresh token expiration time in minutes
                        }
                        // =======================
                    )) { // Only if you are using refreshToken feature
                        // Redirect or do-something
                        navigate("/");
                    } else {
                        //Throw error
                        alert("inavlid credintials")
                    }
                }

            }).catch(err => {
                setError("email or password incorect")
            }).finally(() => {
                setLoading(false);
            })
    }
    return (

        <div className="flex items-center justify-center h-screen bg-green-900">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full 
            bg-white
            max-w-md" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                    <div className='flex align-center justify-between'>
                        <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl
                    text-green-500
                    ">Welcome back</h3>
                        <RedirectToStore />
                    </div>

                    <p className="text-sm text-muted-foreground">
                        Enter your email and password to access your account
                    </p>
                </div>
                <p className="text-sm text-muted-foreground text-center text-red-600">
                    {error}
                </p>
                <form method='post' onSubmit={e => handleLogin(e)}>
                    <div className="p-6 space-y-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="email"
                                placeholder="m@example.com"
                                required
                                type="email"
                                value={authData.email}
                                onChange={e => setAuthData({ ...authData, email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="password"
                                required
                                value={authData.password}
                                onChange={e => setAuthData({ ...authData, password: e.target.value })}
                                type="password"
                                placeholder='********'
                            />
                        </div>
                    </div>

                    <div className="p-6 flex items-center justify-between">
                        {/* <Link
                            className="text-sm text-muted-foreground hover:underline"
                            to="/forgot-password">
                            Forgot password?
                        </Link> */}
                        <p></p>
                        {
                            loading ?
                                <button
                                    className="inline-flex items-center
                                    justify-center whitespace-nowrap rounded-md text-sm font-medium 
                                    ring-offset-background transition-colors focus-visible:outline-none
                                    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                                    disabled:pointer-events-none disabled:opacity-50 bg-primary
                                    bg-green-500 opacity-50 flex gap-1 w-[120px]
                                    text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                    type="submit"
                                >
                                    <span>
                                        Sign in
                                    </span>
                                    <Loading width={5} height={5} text='' />
                                </button>
                                :
                                <button
                                    className="inline-flex items-center
                         justify-center whitespace-nowrap rounded-md text-sm font-medium 
                         ring-offset-background transition-colors focus-visible:outline-none
                          focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                           disabled:pointer-events-none disabled:opacity-50 bg-primary
                           bg-green-500 w-[120px]
                           text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                    type="submit"
                                >
                                    Sign in
                                </button>
                        }


                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login