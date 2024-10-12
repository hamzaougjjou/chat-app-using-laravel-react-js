import React, { useEffect } from 'react'
import Loading from '../../components/Loading';
import useAxiosFetch from '../../utils/useFetch';

function ConversationHeader({ selectedUser, setSelectedUser, id }) {

    let { data, loading, error } = useAxiosFetch("/conversations/" + id);


    useEffect(() => {
        if (!loading && !error) {
            setSelectedUser(data.conversation);
        }
    }, [data]);

    return (

        <section className="flex-1 flex flex-col">
            {
                selectedUser ?

                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">AJ</div>
                        <h2 className="text-xl font-bold">
                            {
                                selectedUser?.user?.first_name
                                +
                                " "
                                +
                                selectedUser?.user?.last_name
                            }
                        </h2>
                    </div>
                    :
                    <section>
                        <Loading />
                    </section>
            }
        </section>
    )
}

export default ConversationHeader