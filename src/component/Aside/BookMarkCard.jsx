import React from 'react';

const BookMarkCard = ({result}) => {
    const {name,title,published_date}=result;
    return (
        <>
            <div className="card my-4 w-96 mx-auto bg-white text-black">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{title}</p>
                    <p>{published_date}</p>
                    
                </div>
            </div>
        </>
    );
};

export default BookMarkCard;