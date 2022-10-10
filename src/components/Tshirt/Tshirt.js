import React from 'react';
import './Tshirt.css';


const Tshirt = ({tshirt,handleAddToCart}) => {
    const {picture, name, gender, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt={name}></img>
            <p>Name: {name}</p>
            <p><small>Gender:{gender}</small></p>
            <p><small>Price : {price}</small></p>
            <button onClick={()=> handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;