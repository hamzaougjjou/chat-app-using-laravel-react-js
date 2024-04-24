import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';




function Chat({ reciever_id }) {

    const [messageContent, setMessageContent] = useState("");

    const [loading, setLoading] = useState(false);
    const [sendMessageloading, setSendMessageLoading] = useState(false);

    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState({});

    const [userFound, setUserFound] = useState(true);

    let chat_container = useRef();

    useEffect(() => {
        getAllMessages()
    }, [reciever_id]);


    const getAllMessages = async () => {
        // Token to be sent with the request
        let auth = localStorage.getItem("auth");
        auth = JSON.parse(auth);

        // Configuring Axios to send the token with the request
        const axiosConfig = {
            headers: {
                'Authorization': `Bearer ${auth.token}` // Assuming Bearer token authentication
                // Adjust the header name and format according to your API requirements
            }
        };


        // Making a POST request using Axios with the token
        setLoading(true);
        await axios.get(`/api/messages/${reciever_id}`, axiosConfig)
            .then(result => {


                console.log(result.data);

                if (result.data.success == false && result.data.code == 404) {
                    setUserFound(false);
                    return 0;
                }

                setMessages(result.data.messages);
                setUser(result.data.user);





                setTimeout(() => {
                    const div = chat_container.current; // Replace 'yourDivId' with the actual ID of your div element
                    div.scrollTop = div.scrollHeight;
                }, 100);
            }

            ).catch(errors => {//something went worng

                console.log('====================================');
                console.log(errors);
                console.log('====================================');

            }).finally(() => {
                setLoading(false);
            });
    }

    const handleSendMessage = async () => {
        // Token to be sent with the request
        let auth = localStorage.getItem("auth");
        auth = JSON.parse(auth);

        // Configuring Axios to send the token with the request
        const axiosConfig = {
            headers: {
                'Authorization': `Bearer ${auth.token}` // Assuming Bearer token authentication
                // Adjust the header name and format according to your API requirements
            }
        };



        if (messageContent.trim().length == 0) {
            return false;
        }

        // Making a POST request using Axios with the token
        setSendMessageLoading(true);
        await axios.post(`/api/messages/${reciever_id}/send`, {
            "content": messageContent
        }, axiosConfig)
            .then(result => {
                setMessageContent('');
                setMessages([...messages, result.data.message]);
                setTimeout(() => {
                    const div = chat_container.current; // Replace 'yourDivId' with the actual ID of your div element
                    div.scrollTop = div.scrollHeight;
                }, 100);
            }

            ).catch(errors => {//something went worng

                console.log('====================================');
                console.log(errors);
                console.log('====================================');

            }).finally(() => {
                setSendMessageLoading(false);
            });
    }


    return (

        <>
            {
                userFound ?

                    <div className="flex flex-col items-center justify-center text-gray-800 w-[50%]"
                        style={
                            {
                                height: "calc(100vh - 150px )"
                            }
                        }
                    >

                        <div className="flex flex-col flex-grow w-full max-w-xl bg-white rounded-lg overflow-hidden p-1">


                            {
                                !loading &&

                                <header className="p-2 border-b border-gray-200">
                                    <div className="flex justify-between items-center mb-3">
                                        {/* <!-- Image + name --> */}
                                        <div className="flex items-center">
                                            <a className="inline-flex items-start mr-3 text-black no-underline font-bold" href="#0">
                                                <img className="rounded-full"
                                                    src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-48-01_nugblk.jpg"
                                                    width="48" height="48" alt={user.name} />
                                            </a>
                                            <div className="pr-1">
                                                <a className="inline-flex text-gray-800 hover:text-gray-900 text-black no-underline font-bold" href="#0">
                                                    <h2 className="text-xl leading-snug font-bold">{user.name}</h2>
                                                </a>
                                                <a className="block text-sm font-medium hover:text-indigo-500 text-black no-underline font-bold" href="#0">
                                                    @{user.id}</a>
                                            </div>
                                        </div>
                                    </div>
                                </header>
                            }
                            <div className="w-full grid grid-rows-2 h-100"
                                style={
                                    {
                                        gridTemplateRows: "1fr 170px",
                                        height: "fit-content"
                                    }
                                }
                            >

                                <section ref={chat_container} className='bg-gray-100 overflow-auto py-3 px-1 scroll-smooth'
                                    style={{
                                        maxHeight: "fit-content",
                                        height: "calc( 100% )"
                                    }}
                                >




                                    {

                                        !loading &&
                                        messages.map((message, index) => {

                                            if (message.emitter_id == user.id) {
                                                return (
                                                    <div className="grid p-2 -mt-3"
                                                        key={index}>
                                                        <div className="flex gap-2.5 mb-4">
                                                            <img src="https://pagedone.io/asset/uploads/1710412177.png" alt="Shanay image" className="w-10 h-11" />
                                                            <div className="grid">
                                                                <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">{user.name}</h5>
                                                                <div className="grid">
                                                                    <div className="px-3.5 py-2 bg-gray-100 rounded justify-start
                                                        items-center gap-3 inline-flex">
                                                                        <h5 className="text-gray-900 font-normal
                                                             leading-snug break-all max-w-[95%] bg-white p-2 -mt-3" style={{ minWidth: "200px" }}>{message.content}</h5>
                                                                    </div>
                                                                    <div className="justify-end items-center inline-flex mb-2.5">
                                                                        <h6 className="text-gray-500 text-xs font-normal leading-4 px-3 -mt-3">{message.time}</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>)
                                            }
                                            return (
                                                <div className="flex gap-2.5 justify-end" key={index}>
                                                    <div style={{ minWidth: "200px" }}>

                                                        <div className="justify-center ">
                                                            <div className="grid w-fit ml-auto max-w-[95%]">
                                                                <div className="px-3 py-2 bg-indigo-600 rounded " style={{ minWidth: "200px" }}>
                                                                    <h2 className="text-white text-sm font-normal leading-snug">{message.content}</h2>
                                                                </div>
                                                                <div className="justify-between items-center inline-flex px-2">
                                                                    <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">seen</h3>

                                                                    <h6 className="text-gray-500 text-xs font-normal">{message.time}</h6>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <img src="https://pagedone.io/asset/uploads/1704091591.png" alt="Hailey image" className="w-10 h-11" />
                                                </div>
                                            )
                                        })
                                    }





                                </section>


                                <div className="w-full pl-3 pr-1 py-1
                     rounded-3xl border border-gray-200 items-center
                     h-fit
                     bg-gray-100
                     mt-2
                      gap-2 inline-flex justify-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <g id="User Circle">
                                            <path id="icon" d="M6.05 17.6C6.05 15.3218 8.26619 13.475 11 13.475C13.7338 13.475 15.95 15.3218 15.95 17.6M13.475 8.525C13.475 9.89191 12.3669 11 11 11C9.6331 11 8.525 9.89191 8.525 8.525C8.525 7.1581 9.6331 6.05 11 6.05C12.3669 6.05 13.475 7.1581 13.475 8.525ZM19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11Z" stroke="#4F46E5" strokeWidth="1.6" />
                                        </g>
                                    </svg>
                                    <div className="flex items-center gap-2 w-full">

                                        <input

                                            value={messageContent}
                                            onChange={e => setMessageContent(e.target.value)}
                                            className="grow
                            appearance-none rounded w-full py-2 px-3
                             text-gray-700 leading-tight outline-none focus:shadow-outline
                            "
                                            placeholder="Type here..." />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="cursor-pointer"
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <g id="Attach 01">
                                                <g id="Vector">
                                                    <path d="M14.9332 7.79175L8.77551 14.323C8.23854 14.8925 7.36794 14.8926 6.83097 14.323C6.294 13.7535 6.294 12.83 6.83097 12.2605L12.9887 5.72925M12.3423 6.41676L13.6387 5.04176C14.7126 3.90267 16.4538 3.90267 17.5277 5.04176C18.6017 6.18085 18.6017 8.02767 17.5277 9.16676L16.2314 10.5418M16.8778 9.85425L10.72 16.3855C9.10912 18.0941 6.49732 18.0941 4.88641 16.3855C3.27549 14.6769 3.27549 11.9066 4.88641 10.198L11.0441 3.66675" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M14.9332 7.79175L8.77551 14.323C8.23854 14.8925 7.36794 14.8926 6.83097 14.323C6.294 13.7535 6.294 12.83 6.83097 12.2605L12.9887 5.72925M12.3423 6.41676L13.6387 5.04176C14.7126 3.90267 16.4538 3.90267 17.5277 5.04176C18.6017 6.18085 18.6017 8.02767 17.5277 9.16676L16.2314 10.5418M16.8778 9.85425L10.72 16.3855C9.10912 18.0941 6.49732 18.0941 4.88641 16.3855C3.27549 14.6769 3.27549 11.9066 4.88641 10.198L11.0441 3.66675" stroke="black" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M14.9332 7.79175L8.77551 14.323C8.23854 14.8925 7.36794 14.8926 6.83097 14.323C6.294 13.7535 6.294 12.83 6.83097 12.2605L12.9887 5.72925M12.3423 6.41676L13.6387 5.04176C14.7126 3.90267 16.4538 3.90267 17.5277 5.04176C18.6017 6.18085 18.6017 8.02767 17.5277 9.16676L16.2314 10.5418M16.8778 9.85425L10.72 16.3855C9.10912 18.0941 6.49732 18.0941 4.88641 16.3855C3.27549 14.6769 3.27549 11.9066 4.88641 10.198L11.0441 3.66675" stroke="black" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </g>
                                        </svg>
                                        <button className="items-center flex px-3 py-2 bg-indigo-600 rounded-full shadow gap-1"
                                            onClick={handleSendMessage}
                                        >
                                            <h3 className="text-white text-xs font-semibold leading-4 pt-2">Send</h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <g id="Send 01">
                                                    <path id="icon" d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- Component End  --> */}

                    </div>

                    :

                    <div className="px-16 md:px-0 flex items-center justify-center w-[50%]">
                        <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8
                         lg:px-24 py-8 rounded-lg">
                            <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
                            <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Page Not Found</p>
                            <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">Sorry, the page you are looking for could not be found.</p>
                            <Link to="/chats" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                                </svg>
                                <span>Return Home</span>
                            </Link>
                        </div>
                    </div>

            }

        </>
    )
}

export default Chat