import React, { useEffect, useState } from 'react';

const Aside = ({ watchTime }) => {
    
    const [readTime, setReadTime] = useState("");


    useEffect(() => {
        const getWatchTime = localStorage.getItem('watchTime')
        setReadTime(getWatchTime);

    }, [watchTime])

    return (
        <>
            <div>
                <h1 className='text-2xl'>Spent time on read :{readTime}</h1>
            </div>
            <div>
                <h2 className='text-2xl'>Bookmarked Blogs :</h2>
                <div>
                    <h2>Master Microsoft Power Platform and Become an In-Demand!</h2>
                </div>
            </div>

        </>
    );
};

export default Aside;