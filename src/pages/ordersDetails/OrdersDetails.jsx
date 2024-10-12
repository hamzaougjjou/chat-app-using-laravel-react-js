import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Error404 from '../../components/errors/Error404';
import Loading from '../../components/Loading';
import useAxiosFetch from '../../utils/useFetch';
import { currency, shipping_price, store_url } from '../../utils/Vars';
import { pdf } from '@react-pdf/renderer';
import './style.css'
import Invoice from './invoice/Invoice';

function OrdersDeails() {

    const { id } = useParams();
    let navigate = useNavigate();

    let { data, loading, error } = useAxiosFetch("/orders/" + id);

    const [orderStatus, setOrderStatus] = useState(null);
    // const [order, setOrder] = useState(null);

    useEffect(() => {
        if (!loading && !error) {
            setOrderStatus(data.data.order_status)
        }
    })


    if (loading) {
        return (
            <div
                className='h-screen flex items-center justify-center
                
                '
            >
                <Loading className="-mt-16" />
            </div>
        )
    }

    if (error && !loading) {
        return (
            <Error404 />
        )
    }

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const generatePdf = async () => {
        const blob = await pdf(<Invoice data={data} />).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `N_${id}_invoice_${randomNumberInRange(1, 909220)}.pdf`;
        link.target = "_blink";
        link.click();
        URL.revokeObjectURL(url);
    }


    return (
        <>
            <div className="container_sub">

                <div className="order_item_header">
                    <button
                        onClick={() => navigate(-1)}
                        className="back-button"><span className="arrow"></span>
                        Back
                    </button>
                    <div>
                        Status : <span> {orderStatus} </span>

                    </div>
                </div>


                <div id='element-to-print'>
                    <h1>Order Details</h1>
                    <div className="order-info" data-html2canvas-ignore>
                        <h2>Order Information</h2>

                        <table>
                            <tr>
                                <th>Order ID</th>
                                <td>
                                    #{data?.data.id}
                                </td>
                            </tr>
                            <tr>
                                <th>Order Status</th>
                                <td>
                                    {orderStatus}
                                </td>
                            </tr>
                            <tr>
                                <th>Client</th>
                                <td> {data?.data.name} </td>
                            </tr>
                        </table>

                    </div>
                    <div className="product-info">
                        <h2>Products</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>P * Q </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data.data.order_items.map(item => (
                                        <tr key={item.id}>
                                            <td>
                                                <Link
                                                    target="_blank"
                                                    to={store_url + "/products/" + item.product_id}
                                                >
                                                    #{item.id}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link
                                                    target="_blank"
                                                    to={store_url + "/products/" + item.product_id}
                                                >
                                                    item title
                                                </Link>
                                            </td>
                                            <td>
                                                {item.quantity}
                                            </td>
                                            <td> {item.price}</td>

                                            <td> {item.price * item.quantity} </td>
                                        </tr>
                                    ))
                                }


                                {/* <!-- Add more rows for additional products --> */}
                            </tbody>

                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>

                                        {

                                            data.data.order_items.reduce((total, item) =>
                                                total + item.quantity,
                                                0)
                                        }
                                    </th>
                                    <th>
                                        {

                                            data.data.order_items.reduce((total, item) =>
                                                total + item.price,
                                                0)
                                        }
                                    </th>
                                    <th>

                                        sub total
                                        {

                                            " " + data.data.total + currency
                                        }
                                    </th>
                                </tr>
                            </thead>

                        </table>
                    </div>
                    <div className="client-info">
                        <h2>Client Information</h2>
                        <table>
                            <tr>
                                <th>Name</th>
                                <td>
                                    {data.data.name}
                                </td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>
                                    {data.data.phone}
                                </td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>
                                    {data.data.city}
                                </td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>
                                    {data.data.email}
                                </td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>
                                    {data.data.address}
                                </td>
                            </tr>
                        </table>
                    </div>

                    <section className='flex gap-[20px] items-end'>
                        <div className="card">
                            <h2>Order Summary :</h2>
                            <p>Sub Total:
                                {data.data.total} {currency}
                            </p>
                            <p>Shipping Price: {shipping_price}  {currency}</p>
                            <p>Total Price: {parseInt(data.data.total) + parseInt(shipping_price)} {currency}</p>
                        </div>

                        <button className="btn btn-confirm h-fit bg-blue-600 hover:bg-blue-700"
                            data-html2canvas-ignore
                            onClick={() => generatePdf()}
                        >
                            print Invoice
                        </button>
                    </section>
                </div>

                <div className="btn-container">

                    <form>
                        <button className="btn btn-confirm" data-action="confirm" data-order-id="1">
                            Confirm Order
                        </button>
                    </form>

                    <form method="POST">
                        <button className="btn btn-shipped" data-action="shipped" data-order-id="2">
                            Mark as Shipped
                        </button>
                    </form>

                    <form>
                        <button className="btn btn-delivered" data-action="delivered" data-order-id="3">
                            Mark as Delivered
                        </button>
                    </form>

                    <form>
                        <button type="submit" className="btn btn-cancel"
                            onClick="return confirm('Are you sure you want to cancel this order?')">
                            Cancel Order
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default OrdersDeails


