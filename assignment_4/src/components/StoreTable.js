// import dependencies
import React from 'react';

// import component
import StoreRow from './StoreRow';

function StoreTable({stores}) {
    return(
        // create a grocery tables importing all stores data
        <table id="storelist">
            <caption>Available stores in the U.S.</caption>
            
            <thead>
                <tr>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                </tr>
            </thead>
            
            <tbody>
                {/* map stores objects to render data */}
                {stores.map((store, i) => 
                <StoreRow store={store} key={i} />)}
            </tbody>
            
        </table>
    );
}

export default StoreTable;