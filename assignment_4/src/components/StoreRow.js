// import dependencies
import React from 'react';

function StoreRow({store}) {
    return(
        <tr>
            {/* fetch relevant store data fields */}
            <td>{store.city}</td>
            <td>{store.state}</td>
            <td>{store.zipCode}</td>
        </tr>
    );
}

export default StoreRow;