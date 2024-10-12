import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading';
import TextTruncator from '../../utils/TextTruncator';
import useAxiosFetch from '../../utils/useFetch';
import user_profile_avatar from "../../assets/user_profile_avatar.png";
import { Link, useNavigate } from 'react-router-dom';

function Users({ setSelectedUser }) {

    const [refresh, setRefresh] = useState(false); // To trigger re-fetch
    const [conversations, setConversations] = useState([]); // To trigger re-fetch
    let { data, loading, error } = useAxiosFetch("/conversations", refresh);

    // Set up interval to refresh data every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setRefresh(prev => !prev); // Toggle refresh state to trigger new fetch
        }, 15000); // 10 seconds
        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    useEffect(() => {
        if (!loading && !error)
            setConversations([...data.conversations]);
    }, [data]);

    if (error) {
        return <p className='font-bold p-4 text-center text-red-600'>
            حدث خطأ ما
        </p>
    }

    return (
        <div className="overflow-y-auto mt-6">

            {
                !loading && conversations.length === 0 &&
                <p className='font-extrabold p-4 text-center text-green-600'>
                    لا توجد اي محادثات
                </p>
            }

            {
                (loading && conversations.length == 0) ?

                    <div className="flex items-center w-full p-4 gap-2 justify-center">
                        <Loading />
                    </div>
                    :
                    <>
                        {
                            conversations.length === 0 ?
                                <p className='p-4 text-center text-blue-600'>لا يوجد اي راسائل في هده المحادثة</p>
                                :
                                conversations.map(conversation => (
                                    <UserItem conversation={conversation}
                                        setSelectedUser={setSelectedUser}
                                    />)
                                )
                        }
                    </>

            }


        </div>
    )
}

export default Users


const UserItem = ({ conversation, setSelectedUser }) => {

    const navigate = useNavigate("");

    const handleSelect = () => {
        navigate("/inbox/" + conversation.id);
        setSelectedUser(conversation);
    }

    return (
        <button
            onClick={() => handleSelect()}
            className={`flex items-center ${!conversation.seen ? "bg-gray-200 hover:bg-gray-100" : "bg-gray-200 hover:bg-gray-100"} w-full p-4 gap-2 xbg-gray-100`}>
            <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                {
                    conversation.user.profile_image ?
                        <img
                            src={conversation.user.profile_image}
                            alt={conversation.user.first_name[0] + " " + conversation.user.last_name[0]}

                        />
                        :
                        <img
                            src={user_profile_avatar}
                            alt={conversation.user.first_name + " " + conversation.user.last_name}

                        />
                }
            </div>
            <div>
                <b className="text-sm font-bold">
                    {
                        conversation.user.first_name
                        +
                        " "
                        +
                        conversation.user.last_name

                    }
                </b>
                <p>
                    {
                        <TextTruncator text={conversation.last_message} len={15} />

                    }
                </p>

            </div>

        </button>
    )
}