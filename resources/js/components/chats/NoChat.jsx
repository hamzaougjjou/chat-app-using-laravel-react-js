import React from 'react'
import { Link } from "react-router-dom";
function NoChat() {
    return (


        <section className="w-[50%]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 h-full flex justify-center items-center">

                <div className="bg-gray-50 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8
                bg-dart w-[100%]
                ">

                    <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                        You messages
                    </h1>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                        Send photos and private messages to a friend or a group
                    </p>
                    <Link to="/friends" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Send

                        <svg className="h-6 w-6 text-white mx-2" width="24" height="24" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg>
                    </Link>
                </div>

            </div>
        </section>

    )
}

export default NoChat