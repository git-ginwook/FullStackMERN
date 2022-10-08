// import dependencies
import React from 'react';

// import coomponents
import StoreTable from '../components/StoreTable';
import ZipSearch from '../components/ZipSearch';

function StoresPage({stores}) {
    return(
        <>
            {/* brief description */}
            <h2>Which store?</h2>
            <p>Find your store</p>

            {/* pass stores parameter to StoreTable */}
            <StoreTable stores={stores}/>

            <ZipSearch />
        </>
    );
}

export default StoresPage;