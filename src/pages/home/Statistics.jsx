import React from 'react'
import Loading from '../../components/Loading'
import useAxiosFetch from '../../utils/useFetch'

function Statistics() {

    let { loading, data, error } = useAxiosFetch("/home/info");

    if ( error ) {
        return null ;
    }
    return (
        <>
            <h1 className='font-bold text-blue-600'>احصائيات هدا الشهر</h1>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-semibold mb-2">إجمالي المبيعات</h5>
                    <section className=" text-2xl font-bold text-green-600">
                        {
                            loading ?
                                <Loading />
                                :
                                data.data.total_sales.usd_sales + "دولار"
                        }
                        <section className='absolute w-full left-0 text-sm text-end p-1'>
                            {
                                loading ?
                                    null
                                    :
                                    data.data.total_sales.sar_sales + "ريال"
                            }
                        </section>
                    </section>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-semibold mb-2">عدد المنتجات</h5>
                    <section className="text-2xl font-bold text-green-600">
                        {
                            loading ?
                                <Loading />
                                :
                                data.data.products_count
                        }
                    </section>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-semibold mb-2">
                        عدد العملاء
                    </h5>
                    <section className="text-2xl font-bold text-green-600">
                        {
                            loading ?
                                <Loading />
                                :
                                data.data.users_count
                        }

                    </section>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-semibold mb-2">عدد الزيارات</h5>
                    <section className="text-2xl font-bold text-green-600">
                        {
                            loading ?
                                <Loading />
                                :
                                data.data.visitors
                        }
                    </section>
                </div>
            </div>
        </>
    )
}

export default Statistics