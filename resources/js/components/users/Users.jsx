import React, { useEffect, useState } from 'react'
import UserItem, { UserItemLoading } from './UserItem'

function Users() {

  const [loading, setLoading] = useState(false);
  const [users, setsetUsers] = useState([]);



  useEffect(() => {
    getUsers();
  }, [])


  const getUsers = async () => {


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
    await axios.get(`api/users`, axiosConfig)
      .then(result => {
        console.log('====================================');
        console.log(result.data);
        console.log('====================================');
        setsetUsers(result.data.users.data);
      }

      ).catch(errors => {//something went worng
        console.log('====================================');
        console.log(errors);
        console.log('====================================');
      }).finally(() => {
        setLoading(false);
      });
  }


  return (
    <div className='container flex justify-center mt-20 gap-20 flex-wrap pb-5'>

      {
        loading ?
          <>
            <UserItemLoading />
            <UserItemLoading />
            <UserItemLoading />
            <UserItemLoading />
          </>

          :
          users.map((user) => <UserItem key={user.id} user={user} />)


      }
    </div>
  )
}

export default Users