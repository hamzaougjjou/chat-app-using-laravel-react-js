import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';


const UserItem = ({ user }) => {

    const [accountDisabled, setAccountDisbled] = useState(user.disabled_at ? true : false);
    const [loading, setLoading] = useState(false);

    const Auth = useSelector(state => state.Auth);
    const enableDisbleUserAccount = async () => {

        setLoading(true);

        await axios({
            url: import.meta.env.VITE_API_URL + "/user/toggle-status/" + user.id,
            method: "PUT",

            headers: {
                Authorization: "Bearer " + Auth.token, // Pass token here
                "Content-Type": "application/json"
            },
            data: null // Send form data in request body

        }).then(res => {
            setAccountDisbled(!accountDisabled);
        })
            .catch(err => {


            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div class="rounded-lg border bg-white text-card-foreground shadow-sm pt-2 pb-4">
            <div class="flex items-center justify-between mb-2" >


                <div class="flex align-center gap-2 mt-4">
                    <img
                        src="https://picsum.photos/200"
                        alt={user.name}
                        class="w-12 h-12"
                        width="40"
                        height="40"
                        className='rounded-full'
                    />

                    <h3 class="text-lg font-semibold">
                        {
                            user.name
                        }
                    </h3>

                </div>

                <div
                    class="inline-flex w-fit items-center whitespace-nowrap
            rounded-full border px-2.5 py-0.5 text-xs font-semibold 
            transition-colors focus:outline-none focus:ring-2 focus:ring-ring
            focus:ring-offset-2 border-transparent bg-primary text-primary-foreground 
            hover:bg-primary/80"
                >

                    {
                        accountDisabled ?
                            "Desactive"
                            :
                            "Active"
                    }
                </div>
            </div>

            {
                user.email_verified_at
                    ?
                    <div className="flex items-center px-2">
                        <span className="text-green-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <span className="ml-2 text-sm font-medium text-gray-700">البريد الإلكتروني مُفعل</span>
                    </div>
                    :
                    <div className="flex items-center px-2">
                        <span className="text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <span className="ml-2 text-sm font-medium text-gray-700">البريد الإلكتروني غير مُفعل</span>
                    </div>
            }


            <div class="flex align-center justify-between gap-2 mt-4 px-2">
                <p class="text-sm text-gray-600">
                    {
                        " " + user.joined_at
                    }
                </p>


                {
                    accountDisabled ?
                        <button
                            onClick={enableDisbleUserAccount}
                            className='bg-green-500 flex items-center gap-1
                                          text-white px-2 py-1
                                          rounded 
                                          '>
                            تفعيل الحساب
                            {
                                loading && <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
                            }
                        </button>
                        :
                        <button
                            onClick={enableDisbleUserAccount}
                            className='bg-yellow-500 flex items-center gap-1
                              text-white px-2 py-1
                              rounded 
                              '>
                            تعطيل الحساب
                            {
                                loading && <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
                            }
                        </button>
                }


            </div>
        </div>
    )
}
export default UserItem