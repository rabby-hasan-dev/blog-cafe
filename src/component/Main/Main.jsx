import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Aside from '../Aside/Aside';
import Blog from '../Blog/Blog';
import { toast } from 'react-toastify';
import QA from '../../QA/QA';

const Main = () => {

    const [blogs, setBlogs] = useState([])
    const [watchTime, setWatchTime] = useState("");
    const [bookMark, setBookMark] = useState([]);

   


    useEffect(() => {
        fetch(`blog.json`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])



    const handleWatchTime = (time) => {

        const timeValue = parseInt(time);
        const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
        if (previousWatchTime) {
            const sum = previousWatchTime + timeValue;
            localStorage.setItem('watchTime', sum);

            setWatchTime(sum);
        }
        else {
            localStorage.setItem('watchTime', timeValue);
            setWatchTime(timeValue);
        }
    }

    const handleBookMark = (blog) => {
       
        const newBookMark = [...bookMark, blog];
        setBookMark(newBookMark);
        toast('Successfully Bookmark ')

      
        
        
        
    }


    return (
        <div  >


            <div className='grid lg:grid-cols-2  gap-4'>
                <div className='blog-container  w-full   '>
                    {blogs.map(blog => <Blog
                    
                        blog={blog}
                        key={blog.id}
                        handleWatchTime={handleWatchTime}
                        handleBookMark={handleBookMark}
                    ></Blog>)}
                </div>

                <div className='Aside-container  '>
                  
                    <Aside watchTime={watchTime}
                        bookMark={bookMark}
                    ></Aside>

                </div>
            </div>

            <QA ></QA>

        </div>
    );
};

export default Main;
