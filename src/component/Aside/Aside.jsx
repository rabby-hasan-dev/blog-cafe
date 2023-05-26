import React, { useEffect, useState } from 'react';
import BookMarkCard from './BookMarkCard';

const Aside = ({ watchTime, bookMark }) => {

    const [readTime, setReadTime] = useState("");

    useEffect(() => {
        const getWatchTime = localStorage.getItem('watchTime')
        setReadTime(getWatchTime);

    }, [watchTime])

    return (
        <>
            <div className='border-2 p-5 border-indigo-300 rounded-lg bg-indigo-100'>
                <h1 className='text-2xl text-center text-indigo-600'>Spent time on read : {readTime} min </h1>
            </div>
            <div className='bg-slate-100 p-4 my-4 rounded-lg'>
                <h2 className='text-2xl ms-6  '>Bookmarked Blogs: {bookMark.length}</h2>
                {
                    bookMark.map(result => <BookMarkCard
                        key={result.id}
                        result={result}
                    ></BookMarkCard>)
                }

            </div>

        </>
    );
};

export default Aside;