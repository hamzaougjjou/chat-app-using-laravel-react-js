import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Users({refreshConversations}) {

    const [conversations, setConversations] = useState([]);

    
    const Auth = useSelector(state => state.Auth);

    const getAllConversations = async () => {

        // Configuring Axios to send the token with the request
        const axiosConfig = {
            headers: {
                'Authorization': `Bearer ${Auth.token}` // Assuming Bearer token authentication
                // Adjust the header name and format according to your API requirements
            }
        };


        // Making a POST request using Axios with the token
        await axios.get(`/api/conversations`, axiosConfig)
            .then(result => {
                // console.log('====================================');
                // console.log(result.data);
                setConversations(result.data.conversations);
                // console.log('====================================');
            }

            ).catch(errors => {//something went worng
                // console.log('====================================');
                // console.log(errors);
                // console.log('====================================');
            }).finally(() => {

            });
    }

    useEffect(() => {
        getAllConversations();
    }, [ refreshConversations ])


    return (
        <div className="w-screen p-4 bg-white border border-gray-200 rounded-lg shadow
           overflow-y-auto overflow-x-hidden
            chat-users-container
             sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Messages</h5>

            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {
                        conversations.map((conversation, index) => (
                            <UserItem conversation={conversation} key={index} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Users




function UserItem({ conversation }) {
    // console.log(conversation);
    return (
        <Link to={"/chats/" + conversation.user.id} className="p-3 cursor-pointer block mb-2">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <img className="w-14 h-14 rounded-full"
                        src="https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png" alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-black truncate dark:text-white -mb-1">
                        {conversation.user.name}
                    </p>

                    {
                        conversation.message.seen ?
                            <p className="text-bold truncate text-gray-900 mt-2 -mb-1">
                                {conversation.message.content}
                            </p>
                            :
                            <p className="text-bold truncate text-[#1da1f2] mt-2 -mb-1">
                                {conversation.message.content}
                            </p>
                    }

                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <span className='text-[#1da1f2]'>Online</span>
                </div>
            </div>
        </Link>
    )
}
