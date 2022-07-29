'use strict';
// Don't add or change anything above this comment.

// ONID: leeginw

/*
* Don't change the declaration of this function.
*/
function deepEqual(val1, val2) {
    // both are primitives
    if(typeof(val1) !== 'object' && typeof(val2) !== 'object'){
        // check whether the two values are strictly equal
        if(val1 === val2){
            return true;
        } else{
            return false;
        }

    // both are non-primitives (objects, arrays, null)
    } else if(typeof(val1) === 'object' && typeof(val2) === 'object'){
        // both are nulls
        if(val1 === null && val2 === null){
            return true;

        // neither is null
        } else if(val1 !== null && val2 !== null){
            // initiate a result variable
            let res = undefined;
            
            // both are arrays
            if(Array.isArray(val1) === true && Array.isArray(val2) === true){
                // length check
                if(val1.length !== val2.length){
                    return false;
                }
                // recurse each element to compare as primitive
                for (let i = 0; i < val1.length; i++){
                    res = deepEqual(val1[i], val2[i]);
                } return res;

            // both are objects
            } else if(Array.isArray(val1) === false && Array.isArray(val2) === false){
                // length check
                if(Object.keys(val1).length !== Object.keys(val2).length){
                    return false;
                }
                // recurse each property to compare as primitive
                for (const key in val1){
                    res = deepEqual(val1[key], val2[key]);
                } return res;
            

            // different object types
            } else{
                return false;
            }

        // different value types
        } else{
            return false;
        }

    // one is a non-primitive
    } else{
        return false;
    }
}

// Don't add or change anything below this comment.
module.exports = deepEqual;