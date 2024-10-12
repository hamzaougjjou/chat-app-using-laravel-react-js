import React, { useEffect , useRef, useState } from 'react'
import useAxiosFetch from '../../utils/useFetch';
import Loading from '../../components/Loading';
import UserItem from './UserItem';

function Customers() {

  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  let searchInput = useRef();

  let { data, loading, error } = useAxiosFetch("/users?page=" + page + "&search_query=" + searchQuery);

  useEffect(() => {
    if (!loading) {
      setUsers([...users, ...data.users.data]);
    }
  }, [data])

  useEffect(() => {
    setUsers([]);
  }, [searchQuery])

  const handleEarch = () => {
    setSearchQuery(searchInput.current.value);
  }



  const goNextPage = () => {
    setPage(prev => prev + 1);
  }



  if (error) {
    return (
      <h1></h1>
    )
  }

  return (
    <div className='my-4 bg-gray-100 p-2 min-h-screen'>
      <header className="mb-6">

        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center space-x-4">
            <h1 class="text-2xl font-bold text-blue-500">
              المستخدمين
            </h1>
          </div>
        </div>
        <div class="flex items-center mb-4 gap-4 max-w-[1000px]">
          <input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
            placeholder="اسم المستخدم ..."
            type="search"
            ref={searchInput}
            onChange={(e) => { e.target.value.length === 0 && setSearchQuery("") }}
          />
          <button
            onClick={() => handleEarch()}
            class="inline-flex items-center 
            justify-center whitespace-nowrap rounded-md text-sm 
            font-medium ring-offset-background transition-colors 
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
            focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
            hover:bg-green-500 h-10 px-4 py-2 bg-green-600 text-white">
            بحث
          </button>
        </div>


      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

        {
          loading && users.length === 0 ?

            <>
              <div class="rounded-lg border bg-white text-card-foreground shadow-sm p-4 py-8">
                <Loading width={5} height={5} />
              </div>
              <div class="rounded-lg border bg-white text-card-foreground shadow-sm p-4 py-8">
                <Loading width={5} height={5} />
              </div>
              <div class="rounded-lg border bg-white text-card-foreground shadow-sm p-4 py-8">
                <Loading width={5} height={5} />
              </div>
              <div class="rounded-lg border bg-white text-card-foreground shadow-sm p-4 py-8">
                <Loading width={5} height={5} />
              </div>
              <div class="rounded-lg border bg-white text-card-foreground shadow-sm p-4 py-8">
                <Loading width={5} height={5} />
              </div>
              <div class="rounded-lg border bg-white text-card-foreground shadow-sm p-4 py-8">
                <Loading width={5} height={5} />
              </div>
            </>
            :
            users.map((user) => {
              return (
                <UserItem key={user.id} user={user} />
              )
            })
        }




      </div>

      {
        (loading && users.length > 0) &&
        <div className='mt-4'>
          <Loading width={12} height={12} text="" />
        </div>
      }

      {

        !(loading || error || data?.users?.next_page_url === null) &&
        <nav aria-label="pagination" className="mx-auto flex w-full justify-center
                    my-4 
                    " role="navigation">
          <ul className="flex flex-row items-center gap-1">

            <li>
              <button
                onClick={() => goNextPage()}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5 bg-green-500 text-white hover:bg-green-600"
                aria-label="Go to next page"
              >
                <span>Next</span>
              </button>
            </li>
          </ul>
        </nav>
      }

      {
        (!loading && users.length === 0) &&
        <h2 className='p-4 text-red-600 shadow bg-white
                my-4 mx-6
                font-bold text-center w-fitt'>
          لم يتم العثور عل اي مستخدم
        </h2>
      }

    </div>
  )
}

export default Customers
