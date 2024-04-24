
import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function FriendItem({ friend }) {

    const [sendReqLoading, setSendReqLoading] = useState(false);
    const [friendStatus, setFriendStatus] = useState( 1 ); // 1=>friend /0=>request send /
    const [error, setError] = useState(false);

    let auth = localStorage.getItem("auth");
    auth = JSON.parse(auth);


    // Configuring Axios to send the token with the request
    const axiosConfig = {
        headers: {
            'Authorization': `Bearer ${auth.token}` // Assuming Bearer token authentication
            // Adjust the header name and format according to your API requirements
        }
    };

    const removeFriend = () => {
        cancelRequest();
    }


    const addFriend = async () => {
        setSendReqLoading(true);

        await axios.post('/api/friends/request/send', { "id": friend.id }, axiosConfig)
            .then(result => {
                setFriendStatus(0)
            })
            .catch(err => {
                setError(true);
            }).finally(() => {
                setSendReqLoading(false);
            });
    }


    const cancelRequest = async () => {
        setSendReqLoading(true);
        await axios.delete(`/api/friends/${friend.id}/request/delete`, axiosConfig)
            .then(result => {
                setFriendStatus(-1)
            })
            .catch(err => {
                setError(true);
            }).finally(() => {
                setSendReqLoading(false);
            });
    }

    const acceptFriend = async () => {
        setSendReqLoading(true);
        axios.put(`/api/friends/${friend.id}/request/accept`, {}, axiosConfig)
            .then(result => {
                setFriendStatus(1)
            })
            .catch(err => {
                setError(true);
            }).finally(() => {
                setSendReqLoading(false);
            });
    }




    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://pagedone.io/asset/uploads/1704091591.png" alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {friend.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    @_{friend.id}
                </span>
                <div className="flex mt-4 md:mt-6">



                    {
                        friendStatus == -1 && <p onClick={addFriend}
                            className="inline-flex cursor-pointer
                     items-center px-4 py-2 text-sm font-medium 
                     text-center text-white bg-blue-700 rounded-lg
                      hover:bg-blue-800 focus:ring-4 focus:outline-none 
                      focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                      dark:focus:ring-blue-800">Add friend</p>
                    }

                    {
                        friendStatus == 0 &&
                        <p
                            onClick={cancelRequest}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium cursor-pointer
                             text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none
                             focus:ring-red-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                            </svg>

                            Cancel request</p>
                    }
                    {
                        friendStatus == 2 &&
                        <p onClick={acceptFriend}
                            className="inline-flex cursor-pointer
                                    items-center px-4 py-2 text-sm font-medium 
                                    text-center text-white bg-green-700 rounded-lg
                                    hover:bg-green-800 focus:ring-4 focus:outline-none 
                                    focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 
                                    dark:focus:ring-green-800">Accept friend</p>
                    }


                    {
                        friendStatus == 1 &&
                        <p
                            onClick={removeFriend}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium cursor-pointer
                    text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none
                     focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                            </svg>

                            Remove friend</p>
                    }


                    <Link to={"/chats/" + friend.id}
                        className="py-2 px-4 h-fit ms-2 text-sm font-medium
                     text-gray-900 focus:outline-none bg-white rounded-lg 
                     border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
                     focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700
                      dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white
                       dark:hover:bg-gray-700">Message</Link>

                </div>
            </div>
        </div>
    )
}

function FriendItemLoading() {
    return (
        <div role="status" className="w-full max-w-sm  animate-pulse  bg-white border border-gray-200 
            rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className="flex flex-col items-center pb-10">

                <div className="flex items-center mt-4">
                    <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                </div>


                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2 mt-4"></div>
                <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-3"></div>

                <div className="flex mt-4 md:mt-6 gap-3">
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 w-40"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 w-40"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default FriendItem;
export { FriendItemLoading }