import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

function SendMessage({ selectedUser, id , messages , setMessages }) {


    const messageInput = useRef();
    const Auth = useSelector(state => state.Auth);
    const [sending, setSending] = useState(false);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (messageInput.current.value.trim().length === 0)
            return 0;

        setSending(true);

        await axios({
            url: import.meta.env.VITE_API_URL + "/conversations/send-message",
            method: "POST",

            headers: {
                Authorization: "Bearer " + Auth.token, // Pass token here
                "Content-Type": "application/json"
            },
            data: JSON.stringify(
                {
                    user_id: selectedUser.user.id,
                    message: messageInput.current.value.trim()
                }
            ) // Send form data in request body

        })
            .then(res => {
                messageInput.current.value = '';
                setMessages([...messages , res.data.message_data]);
            })
            .catch(err => {
                alert('error to send messag')
                // Handle error
            })
            .finally(() => {
                setSending(false);
            });
    }

    useEffect(() => {
        messageInput.current.value = '';
    }, [id])

    return (
        <form className="mt-4 flex p-4 gap-4"
            onSubmit={e => handleSendMessage(e)}
        >
            <input type="text"
                ref={messageInput}
                placeholder="Type your message..." className="flex-1 mr-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                disabled={sending}
                type="submit" className="bg-blue-500 flex gap-2 items-center
                                     text-white px-4 py-2 rounded-md hover:bg-blue-600
                                      focus:outline-none focus:ring-2 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline-block mr-2 transform rotate-45"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                ارسال
            </button>
        </form>
    )
}

export default SendMessage