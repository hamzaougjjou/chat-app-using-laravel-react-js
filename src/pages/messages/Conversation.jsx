import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import useAxiosFetch from '../../utils/useFetch';
import AdminMessageItem from './AdminMessageItem';
import UserMessageItem from './UserMessageItem';

function Conversation({ id, messages, setMessages }) {
    const [refresh, setRefresh] = useState(false); // To trigger re-fetch

    let { data, loading, error } = useAxiosFetch("/messages/" + id, refresh); // Use refresh to re-fetch data

    useEffect(() => {
        if (!loading && !error) {
            setMessages([...data.messages]);
        }
    }, [data]);

    // Set up interval to refresh data every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setRefresh(prev => !prev); // Toggle refresh state to trigger new fetch
        }, 15000); // 10 seconds

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
        <div className="flex-1 overflow-hidden flex flex-col p-4">
            <div className="flex-1 overflow-y-scroll pr-4 max-h-[calc(100vh-300px)]
            px-2
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            ">
                {
                    loading && messages.length === 0 ?
                        <div className='flex justify-center items-center min-h-[200px]'>
                            <Loading />
                        </div>
                        :
                        <>
                            {
                                messages.length === 0 ?
                                    <p className='p-4 text-center text-blue-600'>لا يوجد اي راسائل في هده المحادثة</p>
                                    :
                                    messages.map((message) => {
                                        if (message.admin_id) return <AdminMessageItem key={message.id} message={message} />
                                        else return <UserMessageItem key={message.id} message={message} />
                                    })
                            }
                        </>
                }
            </div>
        </div>
    );
}

export default Conversation;
