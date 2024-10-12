import React, { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../../components/Loading'
import Filters from './Filters'
import OrderItem from './OrderItem'
import useAxiosFetch from '../../utils/useFetch';
import NoResult from '../../components/NoResult'
import Error500 from '../../components/errors/Error500'

function Orders() {

  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(null);
  const [orders, setOrders] = useState([]);

  let { data, loading, error } = useAxiosFetch(`/admin/orders?page=${page}${filter ? "&filter="+filter : '' }`);


  useEffect(() => {
    if (!loading && !error)
      setOrders([...orders, ...data.orders.data]);
  }, [data]);

  useEffect(() => {
    setOrders([]);
    setPage( 1);
  }, [ filter ]);

  if (error) {
    return <Error500 />
  }
  return (
    <div className='max-w-[1500px] mx-auto my-2'>

      <Filters setFilter={setFilter} filter={filter}/>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-green-400 text-muted-foreground">
              <th className="px-4 py-3 text-left">Order #</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-right">Total</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody className='bg-gray-200'>

            {
              !(loading && orders.length === 0) &&
              orders.map((item) => {
                return <OrderItem key={item.id} order={item} />
              })
            }
          </tbody>

          <tfoot className="w-full">
            <tr>
              <td colspan="100">
                {

                  (loading && orders.length === 0) &&
                  <div className='bg-gray-200 p-6'>
                    <LoadingItem />
                    <LoadingItem />
                    <LoadingItem />
                    <LoadingItem />
                    <LoadingItem />
                    <LoadingItem />
                    <LoadingItem />
                    <LoadingItem />
                    <LoadingItem />
                  </div>
                }


              </td>
            </tr>
          </tfoot>
        </table>

        {
          (loading && orders.length > 0) &&
          <>
            <br />
            <Loading width={16} height={16} text="" />
            <br />
          </>
        }

        {
          (orders.length === 0 && !loading) &&
          <NoResult />
        }

        {
          (!loading && data.orders.next_page_url) &&
          <nav aria-label="pagination" className="mx-auto flex w-full justify-center
            my-4 
            " role="navigation">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5 bg-green-500 text-white hover:bg-green-600"
              aria-label="Go to next page"
              onClick={() => setPage(prev => prev + 1)}
            >
              Next
            </button>
          </nav>
        }



      </div>
    </div>
  )
}

export default Orders



const LoadingItem = () => {
  return (
    <div className="border-b w-full animate-pulse h-[65px] bg-gray-300 mt-[2px]"></div>
  )
}