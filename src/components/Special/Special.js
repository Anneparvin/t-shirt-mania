import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h2>special</h2>
            <p>house:{house}</p>
            <button onClick={()=> setHouse(house+1)}>Increase</button>
        </div>
    );
};

export default Special;