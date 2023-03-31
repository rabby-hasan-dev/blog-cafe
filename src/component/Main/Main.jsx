import React from 'react';
import Aside from '../Aside/Aside';
import Blog from '../Blog/Blog';

const Main = () => {

    return (
        <div className='grid grid-cols-2 g-4'>
            <Blog></Blog>
            <Aside></Aside>
        </div>
    );
};

export default Main;