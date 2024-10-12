import React from 'react'

function Search() {
    return (
        <div className='mt-2 p-1'>
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" placeholder="Search ..."
                    className="w-full pl-8 pr-2 py-2 border rounded-md focus:outline-none
          focus:ring-1 focus:ring-blue-500"
                />
            </div>
        </div>
    )
}

export default Search