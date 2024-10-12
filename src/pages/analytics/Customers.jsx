import React, { useEffect, useState } from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import Loading from '../../components/Loading';
import useAxiosFetch from '../../utils/useFetch';

function Customers() {

    let { data: result, loading, error } = useAxiosFetch("/anlytics/users?start_date=2024-10-01&end_date=2024-10-09");
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!loading) {
            setData(result.users_by_days)
        }
    }, [result])

    if (error) {
        return (
            <h1></h1>
        )
    }

    return (
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card">
            <div class="flex items-center gap-2 p-6">
                <p class="text-sm text-muted-foreground">العملاء</p>
                <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">

                    {
                        loading ?
                            <Loading display='block' text='' width={5} height={5} />
                            :

                            result.users_by_days.reduce((sum, user) => sum + user.user_count, 0)
                    }
                </h3>
            </div>

            <div class="p-6">
                <div class="aspect-[4/3]">
                    <div class="recharts-responsive-container">
                        <div class="recharts-wrapper">

                            {
                                loading ?
                                    <div class="flex 
                                                align-center 
                                                justify-center
                                                min-h-[400px]">
                                        <Loading />
                                    </div>
                                    :


                                    <AreaChart
                                        width={600}
                                        height={400}
                                        data={data}
                                        id="sdsdsdsd"
                                        syncId="sddd"
                                        margin={{
                                            top: 10,
                                            right: 10,
                                            left: 0,
                                            bottom: 0,
                                        }}
                                    >


                                        <XAxis dataKey="created_day" />
                                        <YAxis
                                            allowDecimals={false}
                                            tickCount={1} // Adjust this number as needed
                                        />
                                        <Tooltip />

                                        <defs>
                                            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#9A031E" stopOpacity={1} />
                                                <stop offset="100%" stopColor="#0F4C5C" stopOpacity={0.4} />
                                            </linearGradient>
                                        </defs>
                                        <Area type="monotone"
                                            name="Users Count"
                                            dataKey="user_count" stroke="#0F4C5C"
                                            fill="url(#colorUsers)" // Apply the gradient here
                                        // fill="#9A031E"
                                        >

                                        </Area>
                                    </AreaChart>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers