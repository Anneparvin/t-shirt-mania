import React from 'react';


const Cart = ({cart,handleRemoveItem}) => {

    let message;
    if (cart.length === 0){
        message = <p>PLease buy at least one Item</p>
    }
    else if (cart.length === 1){
        message = <div>
            <h2>Amar jonno ekta nao</h2>
            <h3>tomar jonno ekta nao</h3>
            <h4>amr jnno arekta nao</h4>
        </div>
    }
    else{
        message = <p>Thanks for buying!</p>
    }


    return (
        <div>
            <h3>this is order summary</h3>
            <h3>this is cart:{cart.length}</h3>
            {
                cart.map(tshirt =><p
                key={tshirt._id}>
                
                {tshirt.name}
                <button onClick={()=> handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length ===3 ? <p>tin jon ke gift dibe</p> : <p>kinte thako</p>
            }
            <p>and opratore</p>
            {
                cart.length === 2 && <h2>Double Items</h2>
            }
            <p>or opratore</p>
            {
                cart.length === 4 || <p>charta item nao</p>
            }
        </div>
    );
};

export default Cart;