import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import useAxiosFetch from '../../utils/useFetch';
import Loading from '../../components/Loading';
import UserItem from '../customers/UserItem';

function NewUsers() {

    let { data, loading, error } = useAxiosFetch("/home/users");

    if (error) {
        return (
            <h1></h1>
        )
    }

    return (
        <div className='my-4 bg-gray-100 p-4'>
            <header className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    العملاء الجدد
                </h1>
                <Link
                    to="/customers"
                    className="inline-flex items-center justify-center 
                    rounded-md bg-green-600 px-4 py-2 text-sm font-bold 
                    shadow transition-colors hover:bg-primary/90
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                    disabled:pointer-events-none disabled:opacity-50 text-white"
                >
                    اضهار جميع العملاء
                </Link>




            </header>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {
                    loading ?

                        <>
                            <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-4 py-8">
                                <Loading width={5} height={5} />
                            </div>
                            <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-4 py-8">
                                <Loading width={5} height={5} />
                            </div>
                            <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-4 py-8">
                                <Loading width={5} height={5} />
                            </div>
                            <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-4 py-8">
                                <Loading width={5} height={5} />
                            </div>
                            <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-4 py-8">
                                <Loading width={5} height={5} />
                            </div>
                            <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-4 py-8">
                                <Loading width={5} height={5} />
                            </div>
                        </>
                        :
                        data.users.map((user) => {
                            return (
                                <UserItem key={user.id} user={user} />
                            )
                        })
                }



            </div>
            {
                (!loading && data.users.length === 0) &&
                <h2 className='p-4 text-red-600 shadow bg-white
                my-4 mx-6
                font-bold text-center w-fitt'>No user Found</h2>
            }
        </div>
    )
}

export default NewUsers



