//enables client-side rendering

'use client';
//used to manage component state
import {useState} from 'react';
//Counter component receives a 'title' prop
export default function Counter({ title}) {

    //count is used to have initial value of 0, setCount is used to update the count
    const [count, setCount] = useState(0);

    return (
        //main contatiner for the counter component//
        <div className="counter">
        {/* Title as prop*/}
            <h2>{title}</h2>
            {/*Decrease count by 1 when clicked*/}
            <button onClick={() => setCount(count - 1)}>-</button>
            {/*Displays current value*/}
            <span className="count">{count}</span>
            {/*Increase count by 1 when clicked*/}
            <button onClick={() => setCount(count + 1)}>+</button>
            {/*Conditional rendering: Message only shows when count is greater than 5*/}
        {count > 5 && <p>Count is greater than 5!</p>}
        </div>

    );
}