import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import UserItem, { UserItemLoading } from './../users/UserItem'

function Friends() {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);

  const [hasNextPage, setHasNextPage] = useState(false);

  // Token to be sent with the request
  const Auth = useSelector(state => state.Auth);


  useEffect(() => {
    getUsers();
  }, [page])


  const getUsers = async () => {
    // Configuring Axios to send the token with the request
    const axiosConfig = {
      headers: {
        'Authorization': `Bearer ${Auth.token}` // Assuming Bearer token authentication
        // Adjust the header name and format according to your API requirements
      }
    };
    // Making a GET request using Axios with the token
    setLoading(true);
    await axios.get(`api/friends?page=${page}`, axiosConfig)
      .then(result => {
        // console.log('====================================');
        // console.log(result.data.users);
        // console.log('====================================');
        setUsers([...users, ...result.data.users.data]);
        setLoading(false);

        if (result.data.users.next_page_url == null) {
          setHasNextPage(false);
        } else {
          setHasNextPage(true);
        }

      }

      ).catch(errors => {//something went worng
        // console.log('====================================');
        // console.log(errors);
        // console.log('====================================');
      }).finally(() => {
        setLoading(false);
      });
  }


  console.log('===============uerse=====================');
  console.log(users);
  console.log(users.length);
  console.log('====================================');


  useEffect(() => {

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // console.log('====================================');
      if (windowHeight + scrollTop >= documentHeight) {
        // User has scrolled to the bottom of the page
        console.log('User has scrolled to the bottom of the page!');
        // You can perform any action you want here, like fetching more data

        if (hasNextPage && loading == false) {
          setPage(prev => prev + 1);
        }


      }
    };

    console.log('====================================');
    console.log("current page  => ", page);
    console.log('====================================');

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasNextPage, loading]);




  return (
    <>
      <div className='container flex justify-center mt-20 gap-20 flex-wrap pb-5'>

        {
          loading && users.length == 0 ?
            <>
              <UserItemLoading />
              <UserItemLoading />
            </>

            :
            users.map((user, i) => <UserItem key={i} user={{...user,"friend_status":1}} />)


        }
        {
          (hasNextPage || loading) &&
          <>
            <UserItemLoading />
            <UserItemLoading />
          </>
        }


      </div>
      {

        (hasNextPage == false && loading == false) &&
        <p className='text-center p-4 text-rose-900'>
          End of results
        </p>
      }
    </>
  )
}

export default Friends