import React from 'react'

function AdminMessageItem({message}) {
    return (
        <div className="mb-4 text-right">
            <div className="inline-block p-2 rounded-lg bg-blue-500 text-white">
                { message.message }
            </div>
        </div>
    )
}

export default AdminMessageItem