import React, { useState } from 'react'
import GatewayItem from './GatewayItem'
import Loading from '../../components/Loading';
import useAxiosFetch from '../../utils/useFetch';



export default function Payments() {
    const [gateways, setGateways] = useState([])

    let { data: result, loading, error } = useAxiosFetch("/payment-gateways");

    const toggleEnabled = (id) => {
        setGateways((prevGateways) =>
            prevGateways.map((gateway) =>
                gateway.id === id ? { ...gateway, enabled: !gateway.enabled } : gateway
            )
        )
    }

    console.log(result);


    return (
        <>
            {loading && <div className='min-h-[40vh] flex items-center justify-center'>
                <Loading />
            </div>}
            {error && <p>Error</p>}


            {(!loading && !error) &&
                <div className="container mx-auto py-10 px-4 bg-white">
                    <h1 className="text-3xl font-bold mb-6 text-blue-500">إدارة بوابات الدفع</h1>
                    <div className="bg-white rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4 text-blue-500">قائمة بوابات الدفع</h2>
                        <ul className="space-y-6">

                            {result.data.map((gateway) => (
                                <GatewayItem key={gateway.id} gateway={gateway} />
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}