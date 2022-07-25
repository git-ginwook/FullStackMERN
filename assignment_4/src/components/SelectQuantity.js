// import dependencies and useState function
import React, {useState} from 'react';

// import icons
import {AiOutlinePlusSquare, AiOutlineMinusSquare} from 'react-icons/ai';

function SelectQuantity() {
    // set initial useState to zero and assign a variable and its set function
    const [quantity, setQuantity] = useState(0);

    // set conditional boundaries of the quantity variable
    const increment = () => 
        setQuantity(quantity === 10 ? quantity : quantity + 1);
    const decrement = () =>
        setQuantity(quantity === 0 ? 0 : quantity - 1);

    return (
        <div class="control">
            {/* create click events for increment and decrement */}
            <AiOutlineMinusSquare onClick={decrement} />
            &nbsp;<span class='quant'>{quantity}</span>&nbsp;
            <AiOutlinePlusSquare onClick={increment} />
        </div>
    );
}

export default SelectQuantity;