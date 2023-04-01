import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    console.log(props)
    const { id, name, cover_img, profile_img, published_date, read_time, title } = props.blog
    return (
        <div className=' p-4 mr-10' >
            <div className=" w-full bg-base-100 shadow-xl rounded">
                <figure><img src={cover_img} alt="Shoes" /></figure>
                <div className="">
                    <div className='flex justify-between mt-6'>
                        <div className='flex justify-between align-center'>
                            <div className='mr-2'>
                                <img className='w-10 rounded-full' src={profile_img} alt="" />
                            </div>
                            <div>
                                <h4>{name}</h4>
                                <p>{published_date}</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <h3 >{read_time} min read</h3>
                            <a className='mx-4' href="#"><FontAwesomeIcon icon={faBookmark} />
                            </a>
                        </div>
                    </div>
                    <h2 className="card-title">{title}</h2>

                   
                </div>
                <div className="card-actions justify-start my-4">
                        <a href="#">Mark as read</a>
                    </div>
            </div>

        </div>
    );
};

export default Blog;