import React from 'react'
import { Link } from 'react-router-dom'
import { currency } from '../../utils/Vars'

function OrderItem({ order }) {
    console.log('====================================');
    console.log( order);
    console.log('====================================');
    return (
        <tr className="border-b">
            <td className="px-4 py-3 font-medium">
                <Link
                    to={`/orders/${order.id}/details`}
                    className="hover:underline" href="#">
                    # {order.id}
                </Link>
            </td>
            <td className="px-4 py-3">
                {order.name}
            </td>
            <td className="px-4 py-3">
                {order.date}
            </td>
            <td className="px-4 py-3 text-right">
                {order.total} {currency}
            </td>
            <td className="px-4 py-3">
                <div
                    className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground border-green-600 bg-background"
                    data-v0-t="badge"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-3 w-3 -translate-x-1 animate-pulse fill-green-600 text-green-600"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    {order.order_status}
                </div>
            </td>
            <td className="px-4 py-3">
                <Link
                    to={`/orders/${order.id}/details`}
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    View Details
                </Link>
            </td>
        </tr>
    )
}

export default OrderItem