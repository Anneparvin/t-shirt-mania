import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = ({house}) => {
    const money = useContext(MoneyContext);

    return (
        <div>
            <h3>sister</h3>
            <p><small>House :{house}</small></p>
            <p><small>Money:{money}</small></p>
        </div>
    );
};

export default Sister;