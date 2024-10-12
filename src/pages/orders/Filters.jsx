import React from 'react'
import { orders_status } from '../../utils/Vars'

function Filters({ setFilter, filter }) {


    return (
        <div class="flex gap-16 py-6 items-center mb-6">
            <h1 class="text-2xl font-bold">Orders</h1>


            <div class="flex gap-4 flex-wrap">
                <button
                    onClick={() => setFilter(null)}
                    class={`inline-flex items-center justify-center whitespace-nowrap
                rounded-md text-sm font-medium ring-offset-background transition-colors
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                border border-input bg-background hover:bg-accent hover:text-accent-foreground
                h-10 px-4 py-2 gap-2 ${ !filter && "bg-blue-500"}`}>
                    <span className='capitalize'> all</span> Orders
                </button>
                {
                    orders_status.map((item, index) =>
                        <button
                            onClick={() => setFilter(item)}
                            class={`inline-flex items-center justify-center whitespace-nowrap
                rounded-md text-sm font-medium ring-offset-background transition-colors
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                border border-input bg-background hover:bg-accent hover:text-accent-foreground
                h-10 px-4 py-2 gap-2 ${filter === item && "bg-blue-500"}`}>
                            <span className='capitalize'>{item}</span> Orders
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default Filters