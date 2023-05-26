import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Aside from '../Aside/Aside';
import Blog from '../Blog/Blog';

const Main = () => {

    const [blogs, setBlogs] = useState([])
    const [watchTime,setWatchTime]=useState("");

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


    return (
        <div className='flex justify-between' >

            <div className='blog-container w-9/12  p-4 '>
                {blogs.map(blog => <Blog
                    blog={blog}
                    key={blog.id}
                    handleWatchTime={handleWatchTime}
                ></Blog>)}
            </div>

            <div className='Aside-container bg-black text-white w-1/4 p-4'>
                <Aside watchTime={watchTime}></Aside>
               
            </div>

        </div>
    );
};

export default Main;
