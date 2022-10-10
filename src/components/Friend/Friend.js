import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>friend</h4>
            <p><small>house :{house}</small></p>
            <button onClick={()=> setHouse(house- 1)}>Increase</button>
        </div>
    );
};

export default Friend;