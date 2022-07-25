// import dependencies
import React from 'react';

// import component
import GroceryTable from '../components/GroceryTable'

function OrderPage({items}) {
    return (
        <>
            <h2>What do you need?</h2>
            <p>Select how many you want for each item</p>

            {/* pass items parameter to GroceryTable */}
            <GroceryTable items={items}/>
        </>
    );
}

export default OrderPage;