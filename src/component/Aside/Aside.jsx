import React, { useEffect, useState } from 'react';
import BookMarkCard from './BookMarkCard';

const Aside = ({ watchTime,bookMark }) => {

    const [readTime, setReadTime] = useState("");
    console.log(bookMark);

 
      



    useEffect(() => {
        const getWatchTime = localStorage.getItem('watchTime')
        setReadTime(getWatchTime);

    }, [watchTime])

    return (
        <>
            <div>
                <h1 className='text-2xl text-center'>Spent time on read :{readTime}</h1>
            </div>
            <div className='bg-slate-100 mt-6'>
                <h2 className='text-2xl'>Bookmarked Blogs: {bookMark.length}</h2>
                {
                    bookMark.map(result=> <BookMarkCard
                    key={result.id}
                        result={result}
                        ></BookMarkCard>  )
                }
                
            </div>

        </>
    );
};

export default Aside;