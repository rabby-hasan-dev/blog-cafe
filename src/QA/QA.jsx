import React from 'react';

const QA = (props) => {
    console.log(props);
    return (
        <div className='border-2 grid lg:grid-cols-2 gap-4 p-4'>
            <div>
                <h2 className='text-xl mb-2'>1.What is difference between props and state?</h2>
                <p>
                    State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.

                    on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.

                </p>
            </div>
            <div>
                <h2 className='text-xl mb-2' >2.How does useState work?</h2>
                <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            </div>
            <div>
                <h2 className='text-xl mb-2' >3.What can done other than data loading useEffect?</h2>
                <p className='text-lg'> 6 use cases of the useEffect ReactJS hook
                    <li> Running once on mount: fetch API data</li>
                    <li> Running on state change: validating input field</li>
                    <li>Running on state change: live filtering</li>
                    <li> Running on state change: trigger animation on new array value</li>
                    <li>Running on props change: update paragraph list on fetched API data update</li>
                    <li> Running on props change: updating fetched API data to get BTC updated price</li>
                </p>
            </div>
            <div>
                <h2 className='text-xl mb-2'>4.How does React work?</h2>
                <p>
                    React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed!
                </p>
            </div>
        </div>
    );
};

export default QA;