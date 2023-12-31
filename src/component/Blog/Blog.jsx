import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Blog = ({ blog, handleWatchTime, handleBookMark  }) => {

    const { id, name, cover_img, profile_img, published_date, read_time, title } = blog
    // console.log(handleWatchTime);
   

    return (
        <>  
         <ToastContainer></ToastContainer>
            <div className=" w-full bg-base-100 shadow-xl rounded">
                
                <figure><img src={cover_img} alt="Shoes" /></figure>
                <div className=" m-2 ">
                    <div className='flex justify-between mt-6'>
                        <div className='flex justify-between items-center'>
                            <div className='mr-2'>
                                <img className='w-10 rounded-full' src={profile_img} alt="" />
                            </div>
                            <div>
                                <h4>{name}</h4>
                                <p>{published_date}</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h3 >{read_time} min read</h3>
                            <button  onClick={() => { handleBookMark(blog) }} className='mx-4'><FontAwesomeIcon icon={faBookmark} /></button>
                        </div>
                    </div>
                    <h2 className="card-title">{title}</h2>
                </div>
                <div className="card-actions justify-start ms-2 my-4">

                    <button className='link' onClick={() => handleWatchTime(read_time)} >Mark as read</button>
                </div>
            </div>

        </>
    );
};

export default Blog;