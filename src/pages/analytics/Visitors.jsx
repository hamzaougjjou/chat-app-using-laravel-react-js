import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import Loading from '../../components/Loading';
import useAxiosFetch from '../../utils/useFetch';

function Visitors({ w = 600 }) {

    let { data: result, loading, error } = useAxiosFetch("/anlytics/visitors");
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

    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // when the component gets mounted
        setWidth(ref.current.offsetWidth);
        // to handle page resize
        const getwidth = () => {
            setWidth(ref.current.offsetWidth);
        };
        window.addEventListener("resize", getwidth);
        // remove the event listener before the component gets unmounted
        return () => window.removeEventListener("resize", getwidth);
    }, []);

    return (
        <div ref={ref}>
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                اجمالي الزيارات
                {
                    loading ?
                        <Loading />
                        :
                        " " + result.visitors.reduce((sum, visitor) => sum + visitor.visitors_count, 0)
                }
            </h3>

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
                        width={width - 20}
                        height={450}
                        data={data}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                        syncId="sdddcxcHkhn"
                        id='sdklljJKjkAl'
                    >


                        <XAxis dataKey="created_date" />
                        <YAxis
                            allowDecimals={false}
                            tickCount={1} // Adjust this number as needed
                        />
                        <Tooltip />

                        <defs>
                            <linearGradient id="gsdlkfgmspo" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#F6AE2D" stopOpacity={1} />
                                <stop offset="100%" stopColor="#33658A" stopOpacity={0.4} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone"
                            name="عدد الزيارات"
                            dataKey="visitors_count" stroke="#0F4C5C"
                            fill="url(#gsdlkfgmspo)" // Apply the gradient here
                        // fill="#9A031E"
                        >

                        </Area>
                    </AreaChart>
            }

        </div>
    )
}

export default Visitors