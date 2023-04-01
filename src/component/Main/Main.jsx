import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Aside from '../Aside/Aside';
import Blog from '../Blog/Blog';

const Main = () => {
    const [blogs,setBlogs] =useState([])
    useEffect(()=>{
        fetch(`blog.json`)
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className='flex justify-between' >
           <div className='blog-container w-9/12'>
           {blogs.map(blog=> <Blog 
           blog={blog} 
           key={blog.id}
           ></Blog>)}
           </div>
           <div className='Aside-container bg-black text-white w-1/4 p-4'>
           <Aside></Aside>
           </div>
           
        </div>
    );
};

export default Main;
