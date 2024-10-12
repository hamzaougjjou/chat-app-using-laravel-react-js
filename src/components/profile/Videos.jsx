import React from 'react';

const Videos = ({ user }) => {
    const renderContent = () => {
        try {
            // Your code that might throw an error
            return (<>
                {
                    JSON.parse(user?.profile?.videos).map((video_url, index) => {
                        return (
                            <iframe className='max-w-[400px] h-[260px] w-full'
                                key={index}
                                src={video_url}
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen={true}></iframe>
                        )
                    })
                }
            </>)

        } catch (error) {
            return <div className='text-center
            text-red-600 py-4
            '>No Videos Found</div>;
        }
    };

    return (
        <>
            {renderContent()}
        </>
    );
};

export default Videos;
