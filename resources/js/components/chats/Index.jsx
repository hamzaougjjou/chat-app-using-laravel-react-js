import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Chat from './Chat'
import NoChat from './NoChat'
import Users from './Users'

function Index() {

    const { id } = useParams();

    const [refreshConversations, setRefreshConversations] = useState(true);


    return (
        <div className='flex justify-between  w-full h-screen p-2 bg-sky-50
        main-chat-container
        '
        >
            <Users refreshConversations={refreshConversations}/>

            {
                id ?
                    <Chat reciever_id={id} setRefreshConversations={setRefreshConversations}  refreshConversations={refreshConversations}/>
                    :
                    <NoChat />

            }
        </div>
    )
}

export default Index