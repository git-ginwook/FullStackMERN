'use strict';
// Don't add or change anything above this comment.

// ONID: leeginw

/*
* Don't change the declaration of this function.
*/
function deepEqual(val1, val2) {
    // check whether each argument is a null 
    if(val1 === null && val2 !== null){
        return false;
    }
    if (val1 !== null && val2 === null){
        return false;
    }
    
    // case 3
    if(typeof(val1) === 'object' && typeof(val2) !== 'object'){
        return false;
    }
    if(typeof(val1) !== 'object' && typeof(val2) === 'object'){
        return false;
    }

    // case 1, case 2, & case 4
    if(val1 === val2){
        return true;

    } else{    
        // case 5
        if(typeof(val1) === 'object' && typeof(val2) === 'object'){
            // case 5.1
            if(Array.isArray(val1) === false && Array.isArray(val2) === false){
                // ? handle empty object ?
                
                // object length check
                if(Object.keys(val1).length !== Object.keys(val2).length){
                    return false;
                }

                // for loop to compare each property value
                for (const key in Object.keys(val1)){
                    if (val1.key !== val2.key){
                        return false;
                    }
                } return true;

            // case 5.2
            } else if(Array.isArray(val1) === true && Array.isArray(val2) === true){


            }
        }

        // case 5.3
        return false;
    }

}

// Don't add or change anything below this comment.
module.exports = deepEqual;