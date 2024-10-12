import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Loading from '../../components/Loading';
import useAxiosFetch from '../../utils/useFetch';
import { currency } from '../../utils/Vars';

function Sales() {

    const [data, setData] = useState([]);
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

    let { data: result, loading, error } = useAxiosFetch("/anlytics/sales");
    
    useEffect(() => {
        if (!loading && !error) {
            setData(result.sales);
        }
    }, [result])

    if (error) {
        return (
            <h1></h1>
        )
    }

    console.log( data );


    return (
        <div
        ref={ref}
            className='h-full'>
            <h3 className="text-sm text-muted-foreground p-4 flex gap-2">
                <span>
                    المبيعات
                </span>
                {
                    loading ?
                        <Loading width={5} height={5} text="" />
                        :
                        null
                }

                <span>
                    ريال
                </span>
            </h3>

            {
                loading ?

                    <div className="flex 
                                    items-center 
                                    justify-center
                                    min-h-[400px]">
                        <Loading />
                    </div>

                    :


                    <div style={{ width: '100%' }}>
                        <LineChart
                            width={width+50}
                            height={430}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="order_date" />
                            <YAxis domain={[ 0, Math.max(...data.map(item => item.sar_sales)) + 20 ]}  />
                            <Tooltip />
                            <Line type="monotoneX" dataKey="usd_sales"
                                stroke="#8884d8"
                                name='المبيعات ب الدولار'                                    
                                />
                            <Line type="monotone" dataKey="sar_sales"
                            name='المبيعات ب الريال'
                                stroke="#82ca9d" />
                        </LineChart>
                    </div>

            }


        </div>
    )
}

export default Sales