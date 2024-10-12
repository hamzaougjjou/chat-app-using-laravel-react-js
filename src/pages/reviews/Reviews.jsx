import React, { useEffect, useState } from 'react'
import useAxiosFetch from "./../../utils/useFetch";
import Loading from "./../../components/Loading";
import { api_url } from '../../utils/Vars';
import axios from 'axios';
import TextTruncator from "./../../utils/TextTruncator";
import NoResult from '../../components/NoResult';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

function Reviews() {

    const [reviews, setReviews] = useState([]);
    const [page, setPage] = useState([]);
    const [rating, setRating] = useState(null);

    console.log("=> rating ", rating);
    console.log("=> reviews ", reviews.length);

    let { data, loading, error } = useAxiosFetch("/admin/reviews?page=" + page + "&rating=" + rating);

    useEffect(() => {
        setReviews([]);
        setPage(1);
    }, [rating]);

    useEffect(() => {
        if (!loading)
            setReviews([...reviews, ...data.reviews.data]);
    }, [data]);




    const goNextPage = () => {
        setPage(prev => prev + 1);
    }

    return (
        <div className="mx-auto px-4 md:px-6 py-8 w-full max-w-[1500px]">
            <div className="grid gap-8">
                <div className="grid gap-4">
                    <h2 className="text-2xl font-bold">Reviews</h2>

                    <div className="flex items-center gap-4">
                        <span>Filter by rating:</span>

                        <button
                            onClick={() => setRating(null)}
                            className=
                            {((rating === null) && 'bg-green-600')
                                + ` inline-flex items-center
                        justify-center whitespace-nowrap rounded-md text-sm font-medium
                         ring-offset-background transition-colors focus-visible:outline-none 
                         focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                          disabled:pointer-events-none disabled:opacity-50 border border-input
                           bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2`} >
                            All
                        </button>

                        <button
                            onClick={() => setRating(5)}
                            className=
                            {((rating === 5) && 'bg-green-600')
                                + ` inline-flex items-center
                        justify-center whitespace-nowrap rounded-md text-sm font-medium
                         ring-offset-background transition-colors focus-visible:outline-none 
                         focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                          disabled:pointer-events-none disabled:opacity-50 border border-input
                           bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2`} >
                            5 stars
                        </button>
                        <button
                            onClick={() => setRating(4)}
                            className=
                            {((rating === 4) && 'bg-green-600')
                                + ` inline-flex items-center
                        justify-center whitespace-nowrap rounded-md text-sm font-medium
                         ring-offset-background transition-colors focus-visible:outline-none 
                         focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                          disabled:pointer-events-none disabled:opacity-50 border border-input
                           bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2`} >
                            4 stars
                        </button>
                        <button
                            onClick={() => setRating(3)}
                            className=
                            {((rating === 3) && 'bg-green-600')
                                + ` inline-flex items-center
                        justify-center whitespace-nowrap rounded-md text-sm font-medium
                         ring-offset-background transition-colors focus-visible:outline-none 
                         focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                          disabled:pointer-events-none disabled:opacity-50 border border-input
                           bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2`} >
                            3 stars
                        </button>
                        <button
                            onClick={() => setRating(2)}
                            className=
                            {((rating === 2) && 'bg-green-600')
                                + ` inline-flex items-center
                        justify-center whitespace-nowrap rounded-md text-sm font-medium
                         ring-offset-background transition-colors focus-visible:outline-none 
                         focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                          disabled:pointer-events-none disabled:opacity-50 border border-input
                           bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2`} >
                            2 stars
                        </button>
                        <button
                            onClick={() => setRating(1)}
                            className=
                            {((rating === 1) && 'bg-green-600')
                                + ` inline-flex items-center
                        justify-center whitespace-nowrap rounded-md text-sm font-medium
                         ring-offset-background transition-colors focus-visible:outline-none 
                         focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                          disabled:pointer-events-none disabled:opacity-50 border border-input
                           bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2`} >
                            1 stars
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">

                            <thead className='bg-gray-300'>
                                <tr className="bg-muted text-muted-foreground">
                                    <th className="px-4 py-2 text-left">Customer</th>
                                    <th className="px-4 py-2 text-left">Rating</th>
                                    <th className="px-4 py-2 text-left">Review</th>
                                    <th className="px-4 py-2 text-left">Visibility</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    //whene loading is completed for first time 
                                    !(loading && reviews.length === 0) &&
                                    reviews.map((review, i) => {
                                        return (<ReviewItem key={i} review={review} />);
                                    })

                                }

                            </tbody>
                        </table>

                        {
                            (loading && reviews.length === 0) &&
                            <div className='p-4'>
                                <section className='mb-4 flex justify-center'>
                                    <Loading display='block' width={12} height={12} text="" />
                                </section>
                                <section className='mb-4 flex justify-center'>
                                    <Loading display='block' width={12} height={12} text="" />
                                </section>
                                <section className='mb-4 flex justify-center'>
                                    <Loading display='block' width={12} height={12} text="" />
                                </section>
                            </div>
                        }
                        {
                            (loading && reviews.length > 0) &&
                            <>
                                <br />
                                <Loading width={16} height={16} text="" />
                                <br />
                            </>
                        }
                        {
                            (reviews.length === 0 && !loading) &&
                            <NoResult />
                        }
                    </div>
                </div>
            </div>

            {

                !(loading || error || data?.reviews?.next_page_url === null) &&
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

        </div>
    )
}

export default Reviews


const ReviewItem = ({ review }) => {
    const authHeader = useAuthHeader();
    const [isVisible, setIsVisible] = useState(review.hide_at == null ? true : false);

    const [loading, setLoading] = useState(false);


    const updateVisibility = async () => {
        const url = api_url + `/admin/reviews/${review.id}/update-visibility`;
        setLoading(true);
        await axios.put(url, null,
            {
                headers: {
                    Authorization: authHeader, // Pass token here
                }
            },
        )

            .then(response => {
                setIsVisible(!isVisible);
            })
            .catch(err => {
                alert(err);
            }).finally(() => {
                setLoading(false);
            });
    }

    return (
        <tr className="border-b ">
            <td className="px-4 py-2">
                {
                    review.name
                }
            </td>
            <td className="px-4 py-2">
                <div className="flex items-center gap-2">
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
                        className="w-5 h-5 fill-primary"
                    >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>
                        {
                            review.stars
                        }
                    </span>
                </div>
            </td>
            <td className="px-4 py-2">
                <TextTruncator len={100} text={review.message} />
            </td>
            <td className="px-4 py-2">
                <label className="inline-flex items-center cursor-pointer">

                    <input type="checkbox" value=""
                        checked={isVisible}
                        onClick={() => updateVisibility()}
                        className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200
                        peer-focus:outline-none peer-focus:ring-4 
                        peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
                        rounded-full peer dark:bg-gray-700
                        peer-checked:after:translate-x-full 
                        rtl:peer-checked:after:-translate-x-full 
                        peer-checked:after:border-white after:content-['']
                        after:absolute after:top-[2px] after:start-[2px] after:bg-white
                        after:border-gray-300 after:border after:rounded-full after:h-5
                        after:w-5 after:transition-all dark:border-gray-600 
                        peer-checked:bg-blue-600"></div>

                    <p className='w-4 h-4 ml-[14px]'>
                        {
                            loading &&
                            <Loading width={4} height={4} text="" />
                        }
                    </p>
                </label>
            </td>
        </tr>
    )
}

const LoadinReviewItem = () => {
    return (
        <tr className="border-b pt-4">
            <td className="px-4 py-2">
                <Loading display='block' width={10} height={10} text="" />
            </td>
            <td className="px-4 py-2">
                <Loading display='block' width={10} height={10} text="" />
            </td>
            <td className="px-4 py-2">
                <Loading display='block' width={10} height={10} text="" />
            </td>
            <td className="px-4 py-2">
                <Loading display='block' width={10} height={10} text="" />
            </td>
        </tr>
    )
}