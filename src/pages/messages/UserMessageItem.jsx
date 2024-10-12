import React from 'react'

function UserMessageItem({ message }) {
    return (
        <div className="mb-4 text-left">
            <div className="inline-block p-2 rounded-lg bg-gray-200">
                {message.message}
            </div>
        </div>
    )
}

export default UserMessageItem