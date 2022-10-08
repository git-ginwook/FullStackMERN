// import dependencies
import React from 'react';

// import component
import GroceryRow from './GroceryRow';

function GroceryTable({items}) {
    return (
        // create a grocery tables importing all items
        <table id="grocerylist">
            <caption>Available items</caption>
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            
            <tbody>
                {/* map items objects to render data */}
                {items.map((item, i) => 
                <GroceryRow item={item} key={i} />)}
            </tbody>
            
        </table>
    );
    
}

export default GroceryTable;