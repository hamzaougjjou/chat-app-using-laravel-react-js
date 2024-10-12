import React from 'react'
import { Link } from 'react-router-dom'
import useAxiosFetch from '../../utils/useFetch';
import Loading from '../../components/Loading';
import { currency } from "../../utils/Vars";
import TextTruncator from '../../utils/TextTruncator';

function BestSelling() {

    let { data, loading, error } = useAxiosFetch("/home/best-selling");


    if (error) {
        return (
            <h1></h1>
        )
    }
    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gray-100">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex-col space-y-1.5 p-6 flex items-center justify-between pb-4">
                    <h3 className="whitespace-nowrap tracking-tight text-lg font-bold
                    text-green-600
                    ">
                        المنتجات الاكثر مبيعا
                    </h3>

                    <div className='flex flex-wrap gap-8 w-full justify-center pt-4'>
                        <Link
                            to="/products"
                            className="inline-flex items-center justify-center 
                    whitespace-nowrap text-white text-sm font-medium
                    transition-colors focus-visible:outline-none
                    outline-none disabled:opacity-50 bg-blue-600 hover:bg-blue-700 
                    h-9 rounded-md px-3">
                            عرض كل المنتجات
                        </Link>
                        <Link
                            to='/products/add'
                            className="
            rounded-md text-sm mb-16 inline-block text-center
            transition-colors max-w-[250px]  w-full font-bold
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
            focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
            hover:bg-green-500 h-10 px-4 py-2 bg-green-600 text-white">
                            اضافة منتج جديد
                        </Link>
                    </div>

                </div>
                <div className="p-6">
                    <div className="flex flex-wrap gap-6  justify-center">

                        {
                            loading ?
                                <>
                                    <div className="bg-white rounded-lg shadow-md
                                        overflow-hidden w-[300px]
                                        h-[400px] flex items-center justify-center
                                        ">
                                        <Loading width={16} height={16} text="" />
                                    </div>
                                    <div className="bg-white rounded-lg shadow-md
                                        overflow-hidden w-[300px]
                                        h-[400px] flex items-center justify-center
                                        ">
                                        <Loading width={16} height={16} text="" />
                                    </div>
                                    <div className="bg-white rounded-lg shadow-md
                                        overflow-hidden w-[300px]
                                        h-[400px] flex items-center justify-center
                                        ">
                                        <Loading width={16} height={16} text="" />
                                    </div>
                                    <div className="bg-white rounded-lg shadow-md
                                        overflow-hidden w-[300px]
                                        h-[400px] flex items-center justify-center
                                        ">
                                        <Loading width={16} height={16} text="" />
                                    </div>
                                    <div className="bg-white rounded-lg shadow-md
                                        overflow-hidden w-[300px]
                                        h-[400px] flex items-center justify-center
                                        ">
                                        <Loading width={16} height={16} text="" />
                                    </div>
                                    <div className="bg-white rounded-lg shadow-md
                                        overflow-hidden w-[300px]
                                        h-[400px] flex items-center justify-center
                                        ">
                                        <Loading width={16} height={16} text="" />
                                    </div>
                                </>
                                :
                                <>

                                    {
                                        data.products.map((product) => {
                                            return (<ProductItem key={product.id} product={product} />);
                                        }
                                        )
                                    }

                                </>
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSelling


const ProductItem = ({ product }) => {

    return (
        <div className="bg-white rounded-lg shadow-md
                            overflow-hidden w-[300px]
                            h-[420px]
                            ">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full object-cover
                                bg-[#EDF2F4] h-[200px] block
                                    " />
            </div>
            <div className="p-6 space-y-4">
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold">
                        <TextTruncator text={product.name}
                            len={60} />
                    </h3>
                    <div className="text-muted-foreground text-sm">

                        <TextTruncator text={product.description}
                            len={150} />

                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">
                        {
                            product.price
                        }
                        {currency}
                    </div>
                    <Link
                        to={`products/${product.id}/edit`}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        تعديل المنتج
                    </Link>
                </div>
            </div>
        </div>
    )
}