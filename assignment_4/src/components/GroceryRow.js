// import dependencies
import React from 'react';

// import component
import SelectQuantity from './SelectQuantity';

function GroceryRow({item}) {
    return (
        <tr>
            {/* fetch relevant item data fields */}
            <td>{item.name}</td>
            <td>${item.price}</td>
            {/* call SelectQuantity component */}
            <td><SelectQuantity /></td>
        </tr>
    );
}

export default GroceryRow;