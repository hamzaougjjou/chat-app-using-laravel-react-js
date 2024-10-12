import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading';
import TextTruncator from '../../utils/TextTruncator';
import useAxiosFetch from '../../utils/useFetch';
import { currency, store_url } from '../../utils/Vars';

function Products() {

    let { data, loading, error } = useAxiosFetch("/home/best-selling");

    console.log('====================================');
    console.log(data);
    console.log('====================================');

    if (error) {
        return (
            <h1></h1>
        )
    }
    return (
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Top Selling Products
                </h3>
            </div>
            <div class="p-6">
                <div class="relative w-full overflow-auto">
                    <table class="w-full caption-bottom text-sm">
                        <thead class="[&amp;_tr]:border-b">
                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                    Product
                                </th>
                                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                    Sales
                                </th>
                                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                    Revenue
                                </th>
                                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody class="[&amp;_tr:last-child]:border-0">

                            {
                                !loading &&
                                data.products.map(item =>
                                    <ProductItem key={item.id} product={item} />
                                )
                            }
                        </tbody>

                    </table>

                    {
                        loading &&

                        <div className='p-5 flex justify-center'>
                            <Loading text='' width={12} height={12} />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Products


const ProductItem = ({ product }) => {
    return (
        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <td class="p-4 align-middle">
                <TextTruncator text={product.title}
                    len={20} />
            </td>
            <td class="p-4 align-middle">
                {
                    product.sales.totale_sales
                }
            </td>
            <td class="p-4 align-middle">
                {
                    product.sales.revenue
                }
                {currency}
            </td>
            <td class="p-4 align-middle">
                <div class="flex items-center gap-1">
                    <Link
                        to={`/products/${product.id}/edit`}
                        class="h-10 px-4 py-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="mr-2 h-4 w-4"
                        >
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                            <path d="m15 5 4 4"></path>
                        </svg>
                    </Link>

                    <Link
                        to={store_url + "/products/" + product.id}
                        className='h-10 pb-2 pt-1'
                        target="_blank"
                    >
                        <svg width="25px"
                            height="25px" viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path fill="#000000" fillٌule="evenodd"
                                d="M8 3.517a1 1 0 011.62-.784l5.348 4.233a1 1 0 010 1.568l-5.347 4.233A1 
                                1 0 018 11.983v-1.545c-.76-.043-1.484.003-2.254.218-.994.279-2.118.857-3.506
                                1.99a.993.993 0 01-1.129.096.962.962 0 01-.445-1.099c.415-1.5 1.425-3.141
                                2.808-4.412C4.69 6.114 6.244 5.241 8 5.042V3.517zm1.5 1.034v1.2a.75.75 0
                                01-.75.75c-1.586 0-3.066.738-4.261 1.835a8.996 8.996 0 00-1.635 2.014c.878-.552
                                1.695-.916 2.488-1.138 1.247-.35 2.377-.33 3.49-.207a.75.75 0 01.668.745v1.2l4.042-3.2L9.5 4.55z"
                                clipٌule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </td>
        </tr>
    )
}