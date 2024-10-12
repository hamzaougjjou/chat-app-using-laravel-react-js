import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Loading from '../../components/Loading';
import { api_url } from "./../../utils/Vars";

function UpdateName() {

    const [editLoading, setEditLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState('');

    const authHeader = "useAuthHeader";

    const handleUpdateName = async (e) => {
        e.preventDefault();

        if ( userName.length < 2) {
            setError("Invalid current password");
            return 0;
        }
        try {
            setEditLoading(true);
            const response = await axios.put(`${api_url}/admin/profile/name`,
                {
                    "name": userName
                },
                {
                    headers: {
                        'Authorization': authHeader, // Pass token here
                    },
                }
            );
            // Handle success
            setMessage("Name updated fuccessfuly");
            setUserName('');
            
            setTimeout(() => {
                setMessage('');
            }, 5000);

        } catch (err) {
            // Handle error
            alert(err)
        } finally {
            setEditLoading(false);
        }

    };

    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-5">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Update Name</h3>
            </div>


            <form
                onSubmit={e => handleUpdateName(e)}
                className="p-6 space-y-4">
                {
                    message &&
                    <p className='text-center text-blue-700 font-bold'>
                        {
                            message
                        }
                    </p>
                }
                <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="name"
                        value={userName}
                        onChange = { e => setUserName(e.target.value.trim() )}
                        name="name"
                        placeholder="Enter your name"
                    />
                </div>


                <div className="flex items-center p-6">

                    {
                        editLoading ?
                            <button
                                type='button'
                                className="inline-flex items-center 
                                justify-center whitespace-nowrap rounded-md text-sm 
                                font-medium ring-offset-background transition-colors 
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
                                focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
                                bg-green-500 opacity-50 flex gap-1 w-[120px]
                                text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto">
                                <span>
                                    Save
                                </span>
                                <Loading width={5} height={5} text='' />
                            </button>
                            :
                            <button
                                type='submit'
                                className="inline-flex items-center 
                                justify-center whitespace-nowrap rounded-md text-sm 
                                font-medium ring-offset-background transition-colors 
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
                                focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
                                bg-green-500 w-[120px]
                                text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto">
                                Save
                            </button>
                    }

                </div>

            </form>

        </div>
    )
}

export default UpdateName