import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT
const app = express();

app.use(express.static('public'));
// Note: Don't add or change anything above this line.


/* Add your code below this line. It will:
   Define variables for the middleware counting.
   Count the calls.
   Get the random person data.
   Respond using an error handler middleware function when it doesn't work.
*/

// create variables in the server
const interval = 10;
let countExpress = 0;

// middleware function to print statistics
app.get('/random-person', (req, res, next) => {
    // increment count
    countExpress += 1;

    if (countExpress % interval === 0) {
        // print the count on every 10th request through Express
        console.log(`Total requests for /random-person: ${countExpress}`);
    };
    
    next();
});

// get the random person data via Express server
app.get('/random-person', asyncHandler(async (req, res) => {
    // fetch API
    const random = await fetch('https://randomuser.me/api/');
    // convert to JSON format
    const randomJSON = await random.json();
    // send the JSON as a response
    res.send(randomJSON);
}));

// handle error
app.use((err, req, res, next) => {
    console.log(`
        Unhandled error ${err}. 
        URL = ${req.originalUrl},
        method = ${req.method}`);
    
    res.send("500 - Server Error");
})


// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});