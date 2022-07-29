'use strict';

const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file 'stocks.js'
const stocks = require('./stocks.js').stocks;

const express = require("express");
const { reset } = require('nodemon');
const app = express();


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
// Note: Don't add or change anything above this line.

// ONID: leeginw

// match the chosen stock from stocks.js 
function findStockBySymbol(choice){
    for(let aStock of stocks){
        if(aStock.symbol === choice){
            return aStock
        }
    }
}

// route handler for POST request
app.post("/review", (req, res) => {
    // call findStockBySymbol function 
    const match = findStockBySymbol(req.body.symbol);

    let quantity = parseInt(req.body.quantity);
    quantity = quantity.toLocaleString();
    
    const price = match.price.toLocaleString("en-US", 
                                            {style:"currency", currency:"USD"});
    
    let total = match.price * req.body.quantity;
    total = total.toLocaleString("en-US",
                                {style:"currency", currency:"USD"});
    
    // HTTP response 
    res.send(`You ordered ${quantity} stocks of ${match.company}. 
            The price of one ${match.symbol} is ${price}
            and, thus, the total price is ${total}.`);
});

// find stock data that matches the submitted criterion
function findStockByPrice(click){
    // initiate result variable
    let result = stocks[0];

    // loop through stocks array
    for(let i = 0; i < (stocks.length-1); i++){

        // search for the highest stock price
        if(click === "highest"){
            // change only if the next stock has a higher price
            if(result.price < stocks[i+1].price){
                result = stocks[i+1];
            }
        }

        // search for the lowest stock price
        if(click === "lowest"){
            // 
            if(result.price > stocks[i+1].price){
                result = stocks[i+1];
            }
        }
    } return result
};

// route handler for GET request
app.get("/review", (req, res) => {
    // call findStockByPrice function
    const search = findStockByPrice(req.query.criteria);
    
    // HTTP response
    res.send(search);
});

// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});