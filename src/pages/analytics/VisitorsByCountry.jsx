import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis , Tooltip } from 'recharts';
import Loading from '../../components/Loading';
import useAxiosFetch from '../../utils/useFetch';

function VisitorsByCountry() {

    const [data, setData] = useState([]);
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    let { data: result, loading, error } = useAxiosFetch("/anlytics/visitors-by-country");


    useEffect(() => {
        if (!loading && !error) {
            const updatedVisitors = result.visitors.map(visitor => ({
                ...visitor,
                country: visitor.country === null ? "others" : visitor.country
            }));
            setData(updatedVisitors);
        }
    }, [result])



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
        <div className='h-full' ref={ref}>

            <p className="text-sm text-muted-foreground p-2 text-center">اجمالي الزيارات
            <span> { !loading ? result.visitors.reduce((sum, visitor) => sum + visitor.visitors_count, 0) : <Loading /> } </span>
            </p>
            <div className="w-full h-full" >
                {
                    loading ?
                        <div className="flex h-full w-full items-center justify-center" >
                            <Loading />
                        </div>
                        :
                        <BarChart
                            width={width - 20}
                            height={480}
                            data={data}
                            margin={{
                                top: 20,
                                right: 20,
                                left: 0,
                                bottom: 20,
                            }}
                            barSize={20}
                        >
                            <XAxis dataKey="country" scale="point"
                                padding={{ left: 20, right: 20 }} />
                            <YAxis />
                            <Tooltip />
                            {/* <CartesianGrid  /> */}
                            <Bar dataKey="visitors_count" fill="#E84855"
                                background={{ fill: '#EDF2F4' }} />
                        </BarChart>
                }
            </div>
        </div>
    )
}

export default VisitorsByCountry