import React from 'react'
import { Link } from 'react-router-dom'
import VisitorsByCountry from '../analytics/VisitorsByCountry'
import BestSelling from './BestSelling'
import NewUsers from './NewUser'
import Orders from './Orders'
import Statistics from './Statistics'

function Home() {
  return (

    <div className="flex-1 flex flex-col overflow-hidden">
      {/* <!-- Header --> */}
      {/* <!-- Dashboard Content --> */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">

        <Statistics />

        <Orders />

        <div className='h-full max-h-[500px] mt-[50px] bg-white p-2 rounded'>
          <VisitorsByCountry />
        </div>

        <NewUsers />

        <BestSelling />
        
      </main>
    </div>
  )
}

export default Home