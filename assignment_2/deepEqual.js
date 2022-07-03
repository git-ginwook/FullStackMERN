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
    if(val1 !== null && val2 === null){
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
                // object length check
                if(Object.keys(val1).length !== Object.keys(val2).length){
                    return false;
                }
                
                // call recursive as needed
                if(recurObj(val1, val2) === false){
                    return false;
                } else {
                    return true;
                }

            // case 5.2
            } else if(Array.isArray(val1) === true && Array.isArray(val2) === true){
                // array length check
                if(val1.length !== val2.length){
                    return false;
                }

                // call recursive as needed
                if(recurArr(val1, val2) === false){
                    return false;
                } else {
                    return true;
                }
            }
        }

        // case 5.3
        return false;
    }

}


// recursive for nested objects
function recurObj(val1, val2){
    // for in loop to compare each property value in an object
    for (const key in val1){
        // recurse
        if(typeof(val1[key]) === 'object'){
            // check for null as a property value
            if(val1[key] === null && val2[key] === null){
                return true;
            }
            else if(val1[key] !== null && val2[key] !== null){
                return recurObj(val1[key], val2[key]);
            }
            else{
                return false;
            }
        }
        // stop recurse
        else if(val1[key] !== val2[key]){
            return false;
        }       
    }
}

// recursive for nested arrays
function recurArr(val1, val2){
    // for loop to compare each element in an array
    for (let i = 0; i < val1.length; i++){
        // recurse
        if(Array.isArray(val1[i]) === true){
            // check for null as a property value
            if(val1[i] === null && val2[i] === null){
                return true;
            }
            else if(val1[i] !== null && val2[i] !== null){
                return recurArr(val1[i], val2[i]);
            }
            else{
                return false;
            }
        }
        // stop recurse
        else if(val1[i] !== val2[i]){
            return false;
        }       
    }

}

// test debug
const majors1 = ['CS', 'Math', [1,2,3], {name: 'ginwook', address: 'corvallis'}];
const majors2 = ['CS', 'Math', [1,2,3], {name: 'ginwook', address: 'beaverton'}];

// expect true
console.log(deepEqual(majors1, majors2))



// Don't add or change anything below this comment.
module.exports = deepEqual;