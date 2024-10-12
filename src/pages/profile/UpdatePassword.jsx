import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Loading from '../../components/Loading';
import { api_url } from '../../utils/Vars';

function UpdatePassword() {

    const [editLoading, setEditLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [data, setData] = useState({
        current_password: '',
        new_password: '',
        confirm_new_password: ''
    })

    const authHeader = "sdoinfosidfbosidfnosidfiosdnfoi";

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        setError("");

        if (data.current_password.length < 6) {
            setError("Invalid current password");
            return 0;
        }
        if (data.new_password.length < 6) {
            setError("Invalid new password");
            return 0;
        }
        if (data.new_password != data.confirm_new_password) {
            setError("new password and confirm password not match");
            return 0;
        }
        try {
            setEditLoading(true);
            const response = await axios.put(`${api_url}/admin/profile/password`,
                {
                    "current_password": data.current_password,
                    "new_password": data.new_password
                },
                {
                    headers: {
                        'Authorization': authHeader, // Pass token here
                    },
                }
            );
            // Handle success
            setMessage("password updated fuccessfuly");
            setTimeout(() => {
                setMessage('');
            }, 5000);

            setData({
                current_password: '',
                new_password: '',
                confirm_new_password: ''
            })
        } catch (err) {
            // Handle error
            setError("Invalid current password");
        } finally {
            setEditLoading(false);
        }
    };

    return (
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full">

            <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Update Password</h3>
                <p class="text-sm text-muted-foreground">
                    Enter your current password and a new password to update your account.
                </p>
            </div>

            <form
                onSubmit={e => handleUpdatePassword(e)}
                method="PUT"
                class="p-6 space-y-4">
                {
                    message &&
                    <p className='text-center text-blue-500 font-bold'>
                        {
                            message
                        }
                    </p>
                }
                {
                    error &&
                    <p className='text-center text-red-700 font-bold'>
                        {
                            error
                        }
                    </p>
                }

                <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="currentPassword"
                    >
                        Current Password
                    </label>
                    <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="currentPassword"
                        required=""
                        value={data.current_password}
                        onChange={e => setData({ ...data, current_password: e.target.value.trim() })}
                        type="password"
                    />
                </div>
                <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="newPassword"
                    >
                        New Password
                    </label>
                    <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="newPassword"
                        required=""
                        value={data.new_password}
                        onChange={e => setData({ ...data, new_password: e.target.value.trim() })}
                        type="password"
                    />
                </div>
                <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="confirmPassword"
                    >
                        Confirm New Password
                    </label>
                    <input
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="confirmPassword"
                        required=""
                        value={data.confirm_new_password}
                        onChange={e => setData({ ...data, confirm_new_password: e.target.value.trim() })}
                        type="password"
                    />
                </div>




                <div className="flex items-center justify-end p-3">


                    {
                        editLoading ?
                            <button
                                class="inline-flex items-center
                                w-fit bg-green-500 opacity-50 flex gap-1 w-[120px]
                                justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                type="submit"
                            >
                                <span>
                                    Update Password
                                </span>
                                <Loading width={5} height={5} text='' />

                            </button>
                            :
                            <button
                                class="inline-flex items-center
                                w-fit bg-green-500
                                justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                type="submit"
                            >
                                Update Password
                            </button>
                    }

                </div>
            </form>

        </div>
    )
}

export default UpdatePassword