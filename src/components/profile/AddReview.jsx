import { Result } from 'postcss';
import React, { useState } from 'react';

function AddReview() {
    const [selectedRating, setSelectedRating] = useState(5);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

   
    const handleStarClick = (rating) => {
        setSelectedRating(rating);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const reviewData = {
            stars: selectedRating,
            message
        };

        await fetch('/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        }).then(response => response.json())
            .then(result => {
                // Handle successful submission
                setAddedReviews([result.data, ...addedReviews]);

                setSelectedRating(5);
                setMessage('');
                setName('');
                setEmail('');

            }).catch(error => {
                console.error('Error submitting review:', error);
            })
    }

    return (
        <form method="POST" className="p-4 bg-white rounded-md max-w-[1000px]" onSubmit={handleSubmit}>
            <div className="mb-4">
                <p className="text-lg mb-2
                font-bold text-blue-500
                ">Add new review</p>
            </div>

            <div className="mb-2">
                <p className="text-lg font-semibold text-gray-700 mb-2">Message :</p>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>

            <input type="hidden" id="stars_number" value={selectedRating} name="stars" />

            <p className="text-lg font-semibold text-gray-700 mb-2">Select you rating :</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="flex flex-row-reverse	 items-center">
                        <i
                            id="btn_reset_rating"
                            className="fa fa-trash cursor-pointer text-red-500 mr-2"
                            onClick={() => setSelectedRating(0)}
                        ></i>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <span
                                key={rating}
                                data-rating={rating}
                                className={`cursor-pointer text-6xl ${rating <= selectedRating ? 'text-yellow-400' : 'text-gray-300'}`}
                                onClick={() => handleStarClick(rating)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default AddReview;
