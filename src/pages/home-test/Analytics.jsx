import React, { useEffect, useState } from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import Loading from '../../components/Loading';
import useAxiosFetch from '../../utils/useFetch';

function Analytics() {

    let { data: result, loading, error } = useAxiosFetch("/admin/anlytics/visitors");
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!loading) {
            setData(result.visitors)
        }
    }, [result])

    if (error) {
        return (
            <h1></h1>
        )
    }

    return (
        <div className="rounded-lg border bg-card bg-[#12121212]
         text-card-foreground shadow-sm w-full h-[600px]"
            data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
                <p className="text-sm text-muted-foreground">Visitors Last 15 Days</p>
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">

                    {
                        loading ?
                            <Loading display='block' text='' width={5} height={5} />
                            :
                            result?.users_count
                    }
                </h3>
            </div>

            <div className="pf-6">
                <div className="aspect-[4/3]">
                    <div className="recharts-responsive-container">
                        <div className="recharts-wrapper flex 
                                                align-center 
                                                justify-center">

                            {
                                loading ?
                                    <div className="flex 
                                                align-center 
                                                justify-center
                                                min-h-[400px]">
                                        <Loading />
                                    </div>
                                    :


                                        <AreaChart
                                            data={data}
                                            width={800} // Set width to 100%
                                            height={500} // Set height to 100%
                                            margin={{
                                                top: 0,
                                                right: 0,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                            syncId="sdddcxc"
                                            id='sdkGHlll'
                                        >


                                            <XAxis dataKey="created_date" />
                                            <YAxis
                                                allowDecimals={false}
                                                tickCount={1} // Adjust this number as needed
                                            />
                                            <Tooltip />

                                            <defs>
                                                <linearGradient strokeDasharray="3 3"
                                                id="csdfsdf" x1="0" y1="0" x2="1" y2="1">
                                                    <stop offset="0%" stopColor="#F6AE2D" stopOpacity={1} />
                                                    <stop offset="100%" stopColor="#33658A" stopOpacity={0.1} />
                                                </linearGradient>
                                            </defs>

                                            <Area type="monotone"
                                                name="visitors Count"
                                                dataKey="visitors_count" stroke="#0F4C5C"
                                                fill="url(#csdfsdf)" // Apply the gradient here
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

export default Analytics








