import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Reviews from './Reviews'
import AddReview from './AddReview'
import Offers from './Offers'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Videos from './Videos'

function Profile() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Token to be sent with the request
    const Auth = useSelector(state => state.Auth);


    useEffect(() => {
        getUser();
    }, [])

    const { id } = useParams()

    const getUser = async () => {
        // Configuring Axios to send the token with the request
        const axiosConfig = {
            headers: {
                'Authorization': `Bearer ${Auth.token}` // Assuming Bearer token authentication
                // Adjust the header name and format according to your API requirements
            }
        };
        // Making a GET request using Axios with the token
        setLoading(true);
        await axios.get(`/api/users/${id}`, axiosConfig)
            .then(result => {
                console.log(result.data);
                setUser(result.data.user);
            }).catch(errors => {
                //something went worng
                console.log(errors);
            }).finally(() => {
                setLoading(false);
            });
    }


    console.log(user?.profile?.videos);

    if (loading) {
        return (
            <h1 className='text-blue-500 text-center p-12'>
                LOADING ...
            </h1>
        )
    }

    return (
        <div className="mx-auto bg-white dark:bg-gray-900 rounded-lg">

            <div className="mx-autow-48 bg-white p-4 rounded shadow flex flex-col items-center">
                <img
                    className="w-24 h-24 rounded-full"
                    src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=740"
                    alt="Profile"
                />
                <h3 className="text-gray-800 mt-2 text-xl">
                    {
                        user.name
                    }
                </h3>
                <div className="inline-flex text-gray-700 dark:text-gray-300 items-center
                text-xs
                ">
                    <svg className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path className=""
                            d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                    {
                        user.profile?.address
                    }
                </div>

                {/* <button className="mt-2 text-blue-600">Edit Profile</button> */}

            </div>

            <Offers user={user} />
            <div className="border-b px-4 pb-6">



                <div className="flex gap-2 mt-4 px-2 align-center">
                    <Link
                        to={"/chats/" + id}
                        className="rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                        Message
                    </Link>
                    <button
                        className="rounded-full dark:bg-blue-800 text-black dark:text-white
                        antialiased font-bold border border-gray-300
                        px-4 py-2 relative">
                        Copy profiel URL

                        <ToolTip />
                    </button>

                    {/* <button type="button"
                     className="text-gray-900 bg-white border border-gray-300 focus:outline-none
                      hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg
                       text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white 
                       dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 
                       dark:focus:ring-gray-700"></button> */}


                </div>
            </div>
            <div className="px-4 py-4">
                <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                    <svg className="h-6 w-6 text-gray-600 dark:text-gray-400" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path className=""
                            d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
                    </svg>
                    <span><strong className="text-black dark:text-white">
                        {

                            user.profile?.completed_orders
                        }
                    </strong> Complted orders</span>
                </div>
                <div className="">
                    <div className="border p-4">
                        <h1 className='font-bold text-blue-400
                        py-2
                        '>About</h1>
                        <p>
                            {

                                user.profile?.about
                            }
                        </p>
                    </div>
                    <div className="border p-4 mt-4">
                        <h1 className='font-bold text-blue-400
                        py-2
                        '>Portfolio</h1>
                        <div className='flex gap-6 flex-wrap justify-center'>

                            <Videos user={user} />

                        </div>
                    </div>

                    <div>
                        <AddReview />
                        <Reviews />
                    </div>
                </div>
            </div>
        </div>

    )
}


const ToolTip = () => {
    return (
        <div role="tooltip"
            className="px-3 absolute
            py-2 text-sm font-medium text-white transition-opacity 
            duration-300 bg-gray-900 rounded-lg shadow-sm 
            tooltip dark:bg-gray-700 top-[30px] w-[200px] h-[30px] index-9">
            URL copied successfully
            {/* <p className="tooltip-arrow" data-popper-arrow></p> */}
        </div>
    )
}
export default Profile