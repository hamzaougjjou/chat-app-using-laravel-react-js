import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAxiosFetch from '../../utils/useFetch';
import { currency } from '../../utils/Vars';

function Orders() {

    const [orders, setOrders] = useState([]);

    let { data, loading, error } = useAxiosFetch("/home/orders");

    useEffect(() => {
        if (!loading && !error)
            setOrders(data.orders);
    }, [data])


    return (
        <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-6 bg-white mt-[40px] 
        rounded
        ">
            <header className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    الطلبات
                </h1>
                <Link
                    to="/orders"
                    className="inline-flex items-center justify-center 
                    rounded-md bg-green-600 px-4 py-2 text-sm 
                    text-primary-foreground shadow transition-colors hover:bg-primary/90
                     focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                      disabled:pointer-events-none disabled:opacity-50 text-white font-extrabold"
                >
                    عرض جميع الطلبات
                </Link>
            </header>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-muted text-center text-muted-foreground">
                            <th className="px-4 py-3 text-center">المعرف ID #</th>
                            <th className="px-4 py-3 text-center">الزبون</th>
                            <th className="px-4 py-3 text-center">التاريخ</th>
                            <th className="px-4 py-3 text-center">السعر</th>
                            <th className="px-4 py-3 text-center">حالة الطلب</th>
                            <th className="px-4 py-3 text-center">--</th>
                        </tr>
                    </thead>


                    <tbody>

                        {
                            (!loading && !error) &&
                            orders.map(item => (
                                <tr className="border-b text-center">
                                    <td className="px-4 py-3 font-medium"
                                        key={item.id}
                                    >
                                        <Link className="hover:underline"
                                            to={"orders/" + item.id}>
                                            # {item.id}
                                        </Link>
                                    </td>
                                    <td className="px-4 py-3">
                                        item.name
                                    </td>
                                    <td className="px-4 py-3">
                                        {
                                            !item.date ?
                                                "-"
                                                :
                                                item.date
                                        }
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        {item.sar_amount} ر.س
                                    </td>
                                    <td className="px-4 py-3">
                                        <div
                                            className={`inline-flex gap-2 w-fit items-center whitespace-nowrap
                                             rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors
                                              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground
                                              ${item.order_status === "completed" ? "fill-green-600 text-green-600" : "fill-yellow-600 text-yellow-600"}
                                               `}
                                        >
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
                                                className={`h-3 w-3 -translate-x-1 animate-pulse 
                                                ${item.order_status === "completed" ? "fill-green-600 text-green-600" : "fill-yellow-600 text-yellow-600"}`}
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                            </svg>
                                            {item.order_status}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <Link
                                            to={"/orders/" + item.id + "/details"}
                                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                            عرض التفاصيل
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }





                    </tbody>
                </table>
                {
                    error &&
                    <div className="text-sm text-red-800 px-4
                    rounded-lg bg-red-50 leading-[65px]
                    h-[65px]" role="alert">
                        Change a few things up and try submitting again.
                    </div>
                }

                {
                    loading &&
                    <>
                        <LoadingItem />
                        <LoadingItem />
                        <LoadingItem />
                        <LoadingItem />
                        <LoadingItem />
                        <LoadingItem />
                    </>
                }

            </div>
        </div>
    )
}

export default Orders


const LoadingItem = () => {
    return (
        <div className="border-b w-full animate-pulse h-[65px] bg-gray-300 mt-[2px]"></div>
    )
}