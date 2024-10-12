import React from 'react'

function Offers({ user }) {
    return (
        <div className="flex space-x-4 p-4 bg-gray-100" >
            <div className="flex-1 bg-white p-4 rounded shadow">
                <h2 className="text-gray-600">Completed orders</h2>
                <p className="text-2xl text-gray-800">
                    {
                        user.profile?.completed_orders ?
                            user.profile.completed_orders < 10 ?
                                "0" + user.profile?.completed_orders
                                :
                                user.profile?.completed_orders
                            :
                            "00"
                    }
                </p>

                <h2 className="text-gray-600 mt-8">Pending orders</h2>
                <p className="text-2xl text-gray-800">
                    {
                        user.profile?.pending_orders ?
                            user.profile.pending_orders < 10 ?
                                "0" + user.profile?.pending_orders
                                :
                                user.profile?.pending_orders
                            :
                            "00"
                    }

                </p>
            </div>

            <div className="flex-1 bg-white p-4 rounded shadow">
                <h2 className="text-green-600">Total Balance</h2>
                <p className="text-2xl text-green-600">$0.00</p>
                <p className="text-gray-600">$0.00 Available Balance</p>
            </div>

        </div>
    )
}

export default Offers