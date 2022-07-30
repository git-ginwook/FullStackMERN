'use strict'
/* Write functions to: 
   Return the display of the string for a random person,
   Create a node and display the string that represents the person.
   Asynchronously handle the event.
   Add an event listener for the buttons.
*/


// create string for a random person
function createData(person) {
   // select data from API result
   return (`
      ${person.name.first}
      ${person.name.last}
      ${person.phone}
      ${person.email}
   `);
};

// append the string to index.html
function appendData(person) {
   // wrap each API data as a <li>
   const li = document.createElement('li');
   li.textContent = createData(person);
   li.setAttribute("class", "person");

   // append each <li> to the ordered list in "data" <div>
   const pl = document.getElementById("data");
   pl.appendChild(li);
};

// fetch a random user either from the browser or the server
async function fetchRandomUser(event) {
   event.preventDefault();

   // check whether a click event is on Direct or Express Link
   const targetId = event.target.getAttribute("id");
   const url = 
      targetId === "directLink" ? 
         "https://randomuser.me/api/" : "/random-person"
   
   try {
      // get all the data of random users
      const response = await fetch(url);
      const allData = await response.json();

      // if successful, get the first random user from allData
      if (response.status == 200) {
         appendData(allData.results[0])
      }

   // catch error, if any
   } catch(err) {
      console.error(err)
   };
};

// catch trigger event to initiate API request
document.addEventListener("DOMContentLoaded", () => {
   const clickDirectLink = document.getElementById("directLink");
   clickDirectLink.addEventListener("click", fetchRandomUser);

   const clickExpressLink = document.getElementById("expressLink");
   clickExpressLink.addEventListener("click", fetchRandomUser);
});