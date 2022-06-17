import React, { useState } from 'react';
import './App.css';

const App = () => {
    // Declare state and initialize it to 0
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <div className='title'>
                <h1>Counter App</h1>
            </div>
            <button onClick={handleDecrease}>Decrease</button>
            <span>{count}</span>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default App;
