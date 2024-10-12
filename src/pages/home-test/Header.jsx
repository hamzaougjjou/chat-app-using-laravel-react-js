import React from 'react'
import useAxiosFetch from '../../utils/useFetch'
import { currency } from '../../utils/Vars';
import Loading from '../../components/Loading';

function Header() {

    let { data, loading, error } = useAxiosFetch("/admin/home/info");

    return (
        <>
            {
                !error &&
                <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">


                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                        <div className="flex-col space-y-1.5 p-6 flex items-center justify-between pb-4">
                            <h3 className="whitespace-nowrap tracking-tight text-lg font-medium">Total Sales</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-5 h-5 text-muted-foreground"
                            >
                                <line x1="12" x2="12" y1="2" y2="22"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </div>
                        <div className="p-6">
                            {
                                loading ?
                                    <>
                                        <div className="text-3xl font-bold mb-3">
                                            <Loading width={10} height={10} text="" display="block" />
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            <Loading width={4} height={4} text="" display="block" />
                                        </p>
                                    </>
                                    :
                                    <>
                                        <div className="text-3xl font-bold">
                                            {data.data.total_sales}
                                            {currency}
                                        </div>
                                        <p className="text-sm text-muted-foreground">current month</p>
                                    </>

                            }

                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                        <div className="flex-col space-y-1.5 p-6 flex items-center justify-between pb-4">
                            <h3 className="whitespace-nowrap tracking-tight text-lg font-medium">New Customers</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-5 h-5 text-muted-foreground"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <div className="p-6">

                            {
                                loading ?
                                    <>
                                        <div className="text-3xl font-bold mb-3">
                                            <Loading width={10} height={10} text="" display="block" />
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            <Loading width={4} height={4} text="" display="block" />
                                        </p>
                                    </>
                                    :
                                    <>
                                        <div className="text-3xl font-bold">
                                            {data.data.users}
                                        </div>
                                        <p className="text-sm text-muted-foreground">current month</p>
                                    </>

                            }


                        </div>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                        <div className="flex-col space-y-1.5 p-6 flex items-center justify-between pb-4">
                            <h3 className="whitespace-nowrap tracking-tight text-lg font-medium">Avg. Order Value</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-5 h-5 text-muted-foreground"
                            >
                                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                <line x1="2" x2="22" y1="10" y2="10"></line>
                            </svg>
                        </div>
                        <div className="p-6">
                            {
                                loading ?
                                    <>
                                        <div className="text-3xl font-bold mb-3">
                                            <Loading width={10} height={10} text="" display="block" />
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            <Loading width={4} height={4} text="" display="block" />
                                        </p>
                                    </>
                                    :
                                    <>
                                        <div className="text-3xl font-bold">
                                            {data.data.order_avg}
                                            {currency}
                                        </div>
                                        <p className="text-sm text-muted-foreground">current month</p>
                                    </>

                            }
                        </div>
                    </div>

                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                        <div className="flex-col space-y-1.5 p-6 flex items-center justify-between pb-2">
                            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Order Status</h3>


                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="w-4 h-4 text-muted-foreground"
                            >
                                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                            </svg>

                            <div className="flex items-center gap-2">
                                {
                                    loading
                                        ?
                                        <Loading width={4} height={4} text="" display="block" />
                                        :
                                        <b className="text-xs text-muted-foreground">
                                            {
                                                data.data.orders.all > 10
                                                    ?
                                                    data.data.orders.all
                                                    :
                                                    "0" + data.data.orders.all
                                            }

                                        </b>
                                }

                                <p className="text-xs text-muted-foreground">Total Orders</p>
                            </div>


                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-4 gap-4">

                                {
                                    loading ?
                                        <>
                                            <div className="flex flex-col items-center">
                                                <div className="text-2xl font-bold">
                                                    <Loading width={4} height={4} text="" display="block" />
                                                </div>
                                                <p className="text-xs text-muted-foreground">Pending</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="text-2xl font-bold">
                                                    <Loading width={4} height={4} text="" display="block" />
                                                </div>
                                                <p className="text-xs text-muted-foreground">Canceled</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="text-2xl font-bold">
                                                    <Loading width={4} height={4} text="" display="block" />
                                                </div>
                                                <p className="text-xs text-muted-foreground">Confirmed</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="text-2xl font-bold">
                                                    <Loading width={4} height={4} text="" display="block" />
                                                </div>
                                                <p className="text-xs text-muted-foreground">Delivered</p>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="flex flex-col items-center">
                                                <div className="text-2xl font-bold">

                                                    {
                                                        data.data.orders.pending
                                                    }
                                                </div>
                                                <p className="text-xs text-muted-foreground">Pending</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="text-2xl font-bold">

                                                    {
                                                        data.data.orders.canceled
                                                    }
                                                </div>
                                                <p className="text-xs text-muted-foreground">Canceled</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="text-2xl font-bold">

                                                    {
                                                        data.data.orders.confirmed
                                                    }

                                                </div>
                                                <p className="text-xs text-muted-foreground">Confirmed</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <div className="text-2xl font-bold">

                                                    {
                                                        data.data.orders.delivered
                                                    }
                                                </div>
                                                <p className="text-xs text-muted-foreground">Delivered</p>
                                            </div>
                                        </>
                                }

                            </div>
                        </div>
                    </div>

                </main>

            }

        </>
    )
}

export default Header