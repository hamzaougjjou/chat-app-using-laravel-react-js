import React from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
    return (

        <div className="flex items-center justify-center h-screen bg-green-900">

            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full 
            bg-white p-6
            max-w-md" data-v0-t="card">

                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Forgot Password</h1>
                    <p className="text-muted-foreground">Enter your email below to receive a password reset code.</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="email"
                        >
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="email"
                            placeholder="m@example.com"
                            required=""
                            type="email"
                        />
                    </div>
                    <button
                        className="inline-flex items-center justify-center 
                        whitespace-nowrap rounded-md text-sm font-medium
                         ring-offset-background transition-colors 
                         focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-ring focus-visible:ring-offset-2 
                         disabled:pointer-events-none disabled:opacity-50 bg-green-500
                          text-primary-foreground hover:bg-green-600 h-10
                           px-4 py-2 w-full"
                        type="submit"
                    >
                        Send Code
                    </button>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="code"
                        >
                            Reset Code
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="code"
                            placeholder="Enter code"
                            required=""
                            type="text"
                        />
                    </div>
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-500 text-primary-foreground hover:bg-green-600 h-10 px-4 py-2 w-full"
                        type="submit"
                    >
                        Change Password
                    </button>
                </div>


                <div className="p-6 flex items-center justify-between">
                
                    <Link
                        className="text-sm text-muted-foreground hover:underline"
                        to="/login">
                        Return To Login
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ForgotPassword