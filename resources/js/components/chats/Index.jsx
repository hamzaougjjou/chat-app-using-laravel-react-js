import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Chat from './Chat'
import NoChat from './NoChat'
import Users from './Users'

function Index() {

    const { id } = useParams();

    return (
        <div className='flex justify-between  w-full h-screen p-2 bg-sky-50'
            style={
                {
                    height: "calc(100vh - 73px )"
                }
            }
        >
            <Users />

            {
                id ?
                    <Chat reciever_id={id} />
                    :
                    <NoChat />

            }
        </div>
    )
}

export default Index