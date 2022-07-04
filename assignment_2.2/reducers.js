'use strict';
// Don't add or change anything above this comment.

// ONID: leeginw

/**
 * See assignment description for the requirements
 */
function reducer1(previousValue, currentValue) {
    // check whether previousValue is a number
    if(typeof(previousValue) !== 'number'){
        previousValue = 0
    }

    // check whether currentValue is a number
    if(typeof(currentValue) !== 'number'){
        currentValue = 0
    }

    return previousValue + currentValue;
};

/**
 * See assignment description for the requirements
 */
function reducer2(previousValue, currentValue){
    // throw TypeError if previousValue is not a number
    if(typeof(previousValue) !== 'number'){
        throw TypeError();
    }

    // throw TypeError if currentValue is not a number
    if(typeof(currentValue) !== 'number'){
        throw TypeError();
    }

    return previousValue + currentValue;
};

// Don't add or change anything below this comment.
module.exports = { reducer1, reducer2 };