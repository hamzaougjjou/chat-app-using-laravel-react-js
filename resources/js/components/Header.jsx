import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Header() {

    const Auth = useSelector(state => state.Auth);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    function logout() {
        localStorage.removeItem('authInfo');
        window.location.href = '/login';
    }


    return (
        <header className="bg-sky-100 sticky">
            <nav className="flex items-center justify-between p-6" aria-label="Global">

                <div className="flex flex-1">
                    <img className="h-8 mr-2" src="./images/logo.png" alt="Chatify" />
                </div>

                <div className="flex gap-x-12 hidden sm:flex">
                    <Link to="/" className="text-sm leading-6 text-black no-underline font-bold">Home</Link>
                    <Link to="/chats" className="text-sm leading-6 text-black no-underline font-bold">Chats</Link>
                    <Link to="/friends" className="text-sm leading-6 text-black no-underline font-bold">Friends</Link>
                    <Link to="/users" className="text-sm leading-6 text-black no-underline font-bold">Users</Link>
                </div>

                <div className="flex flex-1 justify-end">
                    {
                        Auth.user ?


                            <div
                                className="menu relative min-w-28"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className='px-4 font-bold font-lg'>
                                    {Auth.user.name}
                                </button>





                                {isDropdownVisible &&

                                    <div className="dropdown-menuj absolute w-full">
                                        <ul>
                                            <Link to="/profile" className="text-sm leading-6 text-black no-underline font-bold">
                                                <li>
                                                    Profile
                                                </li>
                                            </Link>
                                            <li onClick={logout}>
                                                <span
                                                    className="text-sm leading-6 text-black no-underline font-bold">Log Out</span>
                                            </li>
                                        </ul>
                                    </div>

                                }


                            </div>

                            :
                            <Link to="/login" className="text-sm leading-6 text-black no-underline font-bold">Log in <span
                                aria-hidden="true">&rarr;</span></Link>

                    }

                </div>
            </nav>



            <div className="fixed bottom-0 left-0 w-full h-16 bg-white 
            z-50 block sm:hidden 
            border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <Link to="/" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:text-blue-600 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
                    </Link>
                    <Link to="/chats" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:text-blue-600 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>

                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Wallet</span>
                    </Link>
                    <Link to="/friends" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:text-blue-600 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>


                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Settings</span>
                    </Link>
                    <Link to="/users" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="group-hover:text-blue-600 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>

                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header