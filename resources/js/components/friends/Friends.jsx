import React, { useEffect, useState } from 'react'
import FriendItem, { FriendItemLoading } from './FriendItem'

function Friends() {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);



  useEffect(() => {
    getFriend();
  }, [])


  const getFriend = async () => {

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

    // Making a GET request using Axios with the token
    setLoading(true);
    await axios.get(`api/friends`, axiosConfig)
      .then(result => {
        setUsers(result.data.users.data);
      }

      ).catch(errors => {//something went worng
      }).finally(() => {
        setLoading(false);
      });
  }


  return (
    <>

      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white p-3 mx-auto container">Friends
        <span className="text-blue-600 dark:text-blue-500"> #{users.length > 10 ? users.length : "0" + users.length}</span></h1>
      <div className='container flex justify-center mt-20 gap-20 flex-wrap pb-5'>

        {
          loading ?
            <>
              <FriendItemLoading />
              <FriendItemLoading />
              <FriendItemLoading />
              <FriendItemLoading />
            </>

            :
            users.map((user) => <FriendItem key={user.id} friend={user} />)


        }
      </div>
    </>
  )
}

export default Friends