import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Conversation from './Conversation'
import ConversationHeader from './ConversationHeader'
import Search from './Search'
import SendMessage from './SendMessage'
import Users from './Users'

function Inbox() {

    const { id } = useParams();
    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);

    //  alert(selectedUser.user.id)
    useEffect(() => {
        setMessages([]);
    }, [id]);


    return (
        <>
            <div className='flex bg-green-100 p-4'>

                <section className="w-64 flex flex-col">
                    <h2 className="text-xl font-bold">
                        الرسائل
                    </h2>
                </section>

                {

                    id && <ConversationHeader setSelectedUser={setSelectedUser} selectedUser={selectedUser} id={id} />
                }


            </div>
            <div className="flex">
                {/* <!-- Sidebar --> */}
                <div className="w-64 bg-[#efefef] border-r h-[calc(100vh-200px)]">

                    <Search />

                    <Users setSelectedUser={setSelectedUser} />

                </div>

                {/* <!-- Main Chat Area --> */}
                <div className="flex-1 flex flex-col bg-white h-fill ">

                    {
                        id ?
                            <>
                                <Conversation id={id} messages={messages} setMessages={setMessages} />
                                <SendMessage selectedUser={selectedUser} id={id} messages={messages} setMessages={setMessages} />
                            </>
                            :
                            <div className="flex-1 flex flex-col items-center justify-center bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <h2 className="text-2xl font-bold text-gray-700 mb-2">لم يتم تحديد محادثة</h2>
                                <p className="text-gray-500 text-center max-w-md">
                                    يرجى اختيار عميل من القائمة على اليمين لبدء المحادثة. يمكنك الرد على استفسارات العملاء وتقديم المساعدة هنا.
                                </p>
                            </div>
                    }


                </div>
            </div>
        </>
    )
}

export default Inbox