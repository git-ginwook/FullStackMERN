// import dependencies and useState function
import React, {useState} from 'react';

function ZipSearch() {
    // set initial useState and assign a variable and its set function
    const [zipCode, setZipCode] = useState('');

    return (
        // create a form for user to submit a zip code
        <form action="" method="" >
            <fieldset>
                <legend>Enter your zip code:</legend>
                <label for="zip">Zip Code 
                    {/* user input field */}
                    <input 
                        type="text"
                        value={zipCode}
                        id="zip"
                        name="zipCode"
                        placeholder="#####"
                        size="5"
                        maxLength="5"
                        onChange={e => setZipCode(e.target.value)}
                    />
                </label>

                <label for="alert">
                    {/* button click event to display a response message as an alert */}
                    <button 
                        name="alert" 
                        onClick={e => 
                            {
                            alert(`Your zip code is ${zipCode}`);
                            e.preventDefault();
                            }
                        }>Submit
                    </button>
                </label>
            </fieldset>
        </form>
    );
}

export default ZipSearch;